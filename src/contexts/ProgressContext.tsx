'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabase/client';
import { useAuth } from './AuthContext';
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
      
      if (!error && data) {
        setProgress(data.map(p => ({
          ...p,
          completed: p.completed === true || p.completed === 1 || p.completed === "true"
        })));
      }
    } catch (err: any) {
      console.error('Erro ao carregar progresso real:', err.message);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchProgress();
  }, [fetchProgress]);

  const isCompleted = useCallback((id: string) => {
    return progress.some(p => p.lesson_id === id && p.completed);
  }, [progress]);

  const markAsCompleted = async (
    id: string, 
    levelId: number, 
    kaId: string, 
    type: 'theory' | 'exercise', 
    score: number = 100, 
    code?: string
  ) => {
    if (!user) {
      toast.error("Precisas de estar logado para guardar o progresso.");
      return;
    }

    const newItem = { 
      user_id: user.id, 
      lesson_id: id, 
      completed: true, 
      level_id: levelId,
      ka_id: kaId, 
      lesson_type: type, 
      last_code: code || '', 
      completed_at: new Date().toISOString(),
      quiz_score: score, 
      quiz_passed: score >= 70
    };

    // UI Optimista
    const oldProgress = [...progress];
    const idx = oldProgress.findIndex(p => p.lesson_id === id);
    const newProgress = [...oldProgress];
    if (idx > -1) newProgress[idx] = { ...newProgress[idx], ...newItem };
    else newProgress.push(newItem);
    setProgress(newProgress);

    try {
      const { error } = await supabase
        .from('user_lesson_progress')
        .upsert(newItem, { onConflict: 'user_id,lesson_id' });

      if (error) throw error;

      // Chama função RPC para recalcular pontos
      await supabase.rpc('calculate_total_points', { p_user_id: user.id });
      await refreshProfile();
      
      toast.success("Progresso sincronizado!");
    } catch (err: any) {
      console.error('Falha na sincronização real:', err);
      setProgress(oldProgress); // Reverte se falhar
      toast.error('Erro ao sincronizar dados com o Supabase.');
    }
  };

  return (
    <ProgressContext.Provider value={{ isCompleted, markAsCompleted, progress, loading, refreshProgress: fetchProgress }}>
      {children}
    </ProgressContext.Provider>
  );
}

export const useProgress = () => useContext(ProgressContext);
