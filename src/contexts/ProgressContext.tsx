'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabase/client';
import { useAuth } from './AuthContext';

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
    const { data, error } = await supabase
      .from('user_lesson_progress')
      .select('*')
      .eq('user_id', user.id);
    
    if (!error && data) {
      setProgress(data);
    }
    setLoading(false);
  }, [user]);

  useEffect(() => {
    fetchProgress();
  }, [fetchProgress]);

  const isCompleted = (id: string) => {
    return progress.some(p => p.lesson_id === id && p.completed === true);
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

    if (!error) {
      // Chamar a RPC para recalcular pontos (opcional, pode ser via trigger no banco)
      await supabase.rpc('calculate_total_points', { p_user_id: user.id });
      await fetchProgress();
      await refreshProfile();
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
