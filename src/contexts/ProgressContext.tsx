
'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useAuth } from './AuthContext';
import { toast } from 'sonner';
import { syncProgressToDb, fetchUserProgress } from '@/services/progressService';

type ProgressContextType = {
  isCompleted: (id: string) => boolean;
  markAsCompleted: (id: string, levelId: number, kaId: string, type: 'theory' | 'exercise', score?: number, code?: string) => Promise<void>;
  syncPoints: () => Promise<void>;
  progress: any[];
  loading: boolean;
  refreshProgress: () => Promise<void>;
};

const ProgressContext = createContext<ProgressContextType>({} as ProgressContextType);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const { user, refreshProfile } = useAuth();
  const [progress, setProgress] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const refreshProgress = useCallback(async () => {
    if (!user) {
      setProgress([]);
      setLoading(false);
      return;
    }
    
    setLoading(true);
    try {
      const data = await fetchUserProgress(user.id);
      setProgress(data.map(p => ({
        ...p,
        completed: p.completed === true || p.completed === 1 || String(p.completed) === "true"
      })));
    } catch (err: any) {
      console.error('Erro ao carregar progresso:', err.message);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    refreshProgress();
  }, [refreshProgress]);

  const isCompleted = useCallback((id: string) => {
    return progress.some(p => p.lesson_id === id && p.completed);
  }, [progress]);

  const syncPoints = async () => {
    if (!user) return;
    try {
      await refreshProfile();
    } catch (err) {
      console.error('Erro ao sincronizar pontos:', err);
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

    // UI Otimista para resposta imediata
    const oldProgress = [...progress];
    setProgress(prev => {
      const idx = prev.findIndex(p => p.lesson_id === id);
      const updated = [...prev];
      if (idx > -1) updated[idx] = { ...updated[idx], ...newItem };
      else updated.push(newItem);
      return updated;
    });

    try {
      // Grava no DB
      await syncProgressToDb(newItem);
      
      // FORÇA a atualização do perfil para ver os pontos novos IMEDIATAMENTE
      // Aguardamos um pequeno delay para o DB processar o trigger/RPC
      setTimeout(async () => {
        await refreshProfile();
        toast.success("Pontos atualizados!");
      }, 500);

    } catch (err: any) {
      console.error('Falha na sincronização:', err);
      setProgress(oldProgress); // Reverte se falhar
      toast.error('Erro de conexão ao salvar progresso.');
    }
  };

  return (
    <ProgressContext.Provider value={{ isCompleted, markAsCompleted, syncPoints, progress, loading, refreshProgress }}>
      {children}
    </ProgressContext.Provider>
  );
}

export const useProgress = () => useContext(ProgressContext);
