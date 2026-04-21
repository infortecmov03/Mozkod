
'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabase/client';
import { useAuth } from './AuthContext';
import { modules } from '@/lib/curriculum';
import { toast } from 'sonner';

type ProgressContextType = {
  isCompleted: (id: string) => boolean;
  markAsCompleted: (id: string, levelId: number, kaId: string, type: 'theory' | 'exercise', score?: number, code?: string) => Promise<void>;
  progress: any[];
  loading: boolean;
  refreshProgress: () => Promise<void>;
};

const ProgressContext = createContext<ProgressContextType>({} as ProgressContextType);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const { user, refreshProfile } = useAuth();
  const [progress, setProgress] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProgress = useCallback(async () => {
    if (!user) {
      setProgress([]);
      setLoading(false);
      return;
    }
    
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('user_lesson_progress')
        .select('*')
        .eq('user_id', user.id);
      
      if (error) throw error;
      if (data) {
        // Normalizamos os dados para garantir que booleanos sejam booleanos
        const normalizedData = data.map(p => ({
          ...p,
          completed: p.completed === true || p.completed === 1 || p.completed === "true"
        }));
        setProgress(normalizedData);
      }
    } catch (err: any) {
      console.error('Erro ao carregar progresso:', err.message);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchProgress();
  }, [fetchProgress]);

  const isCompleted = useCallback((id: string) => {
    return progress.some(p => p.lesson_id === id && p.completed === true);
  }, [progress]);

  const checkAndIssueCertificate = async (userId: string, levelId: number) => {
    const level = modules.find(m => m.id === levelId);
    if (!level) return;

    let totalItems = 0;
    level.knowledgeAreas.forEach(ka => {
      totalItems += (ka.theory?.length || 0);
      Object.values(ka.practice || {}).forEach(exercises => {
        totalItems += exercises.length;
      });
    });

    const completedInLevel = progress.filter(p => p.level_id === levelId && p.completed === true).length;
    
    if (totalItems > 0 && completedInLevel >= totalItems) {
      const { data: existing } = await supabase
        .from('certificates')
        .select('id')
        .eq('user_id', userId)
        .eq('level_id', levelId)
        .maybeSingle();

      if (!existing) {
        const { error } = await supabase.from('certificates').insert({
          user_id: userId,
          level_id: levelId,
          level_title: level.title,
          certificate_url: '#',
          issued_at: new Date().toISOString()
        });
        if (!error) toast.success(`🏆 Parabéns! Certificado de Nível ${levelId} desbloqueado!`);
      }
    }
  };

  const markAsCompleted = async (
    id: string, 
    levelId: number, 
    kaId: string, 
    type: 'theory' | 'exercise',
    score: number = 100,
    code?: string
  ) => {
    if (!user) return;

    // Atualiza o estado local imediatamente para feedback visual instantâneo
    const newItem = { 
      lesson_id: id, 
      completed: true, 
      level_id: levelId,
      ka_id: kaId,
      lesson_type: type,
      last_code: code,
      completed_at: new Date().toISOString()
    };

    setProgress(prev => {
      const existingIndex = prev.findIndex(p => p.lesson_id === id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = { ...updated[existingIndex], ...newItem };
        return updated;
      }
      return [...prev, newItem];
    });

    try {
      const { error } = await supabase
        .from('user_lesson_progress')
        .upsert({
          user_id: user.id,
          level_id: levelId,
          ka_id: kaId,
          lesson_id: id,
          lesson_type: type,
          completed: true,
          completed_at: new Date().toISOString(),
          quiz_score: score,
          quiz_passed: score >= 70,
          last_code: code
        }, { onConflict: 'user_id,lesson_id' });

      if (error) throw error;

      // Operações de fundo
      supabase.rpc('calculate_total_points', { p_user_id: user.id }).then(() => refreshProfile());
      checkAndIssueCertificate(user.id, levelId);
      
    } catch (err: any) {
      toast.error('Erro ao salvar progresso: ' + err.message);
      console.error(err);
      // Reverte o estado se falhar no servidor
      fetchProgress();
    }
  };

  return (
    <ProgressContext.Provider value={{ 
      isCompleted, 
      markAsCompleted, 
      progress, 
      loading,
      refreshProgress: fetchProgress 
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) throw new Error('useProgress must be used within ProgressProvider');
  return context;
};
