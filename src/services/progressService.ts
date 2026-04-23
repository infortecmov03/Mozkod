
'use server';

import { createClient } from '@/lib/supabase/server';

/**
 * @fileOverview Serviço responsável pela persistência de progresso no banco de dados.
 */

export interface ProgressItem {
  user_id: string;
  lesson_id: string;
  level_id: number;
  ka_id: string;
  lesson_type: 'theory' | 'exercise';
  completed: boolean;
  last_code?: string;
  quiz_score?: number;
  quiz_passed?: boolean;
  completed_at: string;
}

export async function syncProgressToDb(item: ProgressItem) {
  const supabase = createClient();
  
  const { error } = await supabase
    .from('user_lesson_progress')
    .upsert(item, { 
      onConflict: 'user_id,lesson_id' 
    });

  if (error) {
    console.error('ProgressService Error:', error.message);
    throw new Error(error.message);
  }

  // Aciona a procedure para recalcular pontos do perfil
  const { error: rpcError } = await supabase.rpc('calculate_total_points', { 
    p_user_id: item.user_id 
  });

  if (rpcError) {
    console.error('Points Calculation Error:', rpcError.message);
  }

  return { success: true };
}

export async function fetchUserProgress(userId: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('user_lesson_progress')
    .select('*')
    .eq('user_id', userId);

  if (error) throw error;
  return data || [];
}
