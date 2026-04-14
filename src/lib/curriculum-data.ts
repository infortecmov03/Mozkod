import 'server-only';
import { createClient } from '@/lib/supabase/server';
import type { Level, KnowledgeArea, TheoryLesson, PracticeExercise, Quiz } from './curriculum/types';

// Cache for curriculum data to avoid multiple DB calls in one request
let cachedCurriculumData: Level[] | null = null;

export * from './curriculum/types';

/**
 * Fetches and assembles the entire curriculum data from Supabase.
 * Caches the result for the duration of a single server request.
 */
export async function getCurriculumData(): Promise<Level[]> {
  if (cachedCurriculumData) {
    return cachedCurriculumData;
  }

  const supabase = createClient();

  const [
    { data: kas, error: kasError },
    { data: lessons, error: lessonsError },
    { data: exercises, error: exercisesError },
    { data: quizzes, error: quizzesError }
  ] = await Promise.all([
    supabase.from('acm_curriculum').select('*').order('level').order('order_index'),
    supabase.from('lessons').select('*').order('order_index'),
    supabase.from('exercises').select('*').order('order_index'),
    supabase.from('quizzes').select('*')
  ]);

  if (kasError || lessonsError || exercisesError || quizzesError) {
    console.error('Error fetching curriculum data:', kasError || lessonsError || exercisesError || quizzesError);
    return [];
  }

  const levelsMap: Map<number, Level> = new Map();

  // Populate knowledge areas and levels
  for (const ka of kas) {
    if (!levelsMap.has(ka.level)) {
      levelsMap.set(ka.level, {
        id: ka.level,
        title: `Nível ${ka.level}`, // This should be improved later
        description: `Descrição para o Nível ${ka.level}`,
        knowledgeAreas: []
      });
    }
    
    const knowledgeArea: KnowledgeArea = {
      id: ka.id,
      title: ka.ka_name,
      description: ka.description || '',
      load: ka.required_hours ? `${ka.required_hours}h` : 'N/A',
      iconName: ka.iconName || 'Code',
      theory: [],
      practice: {},
      quizzes: []
    };
    
    levelsMap.get(ka.level)!.knowledgeAreas.push(knowledgeArea);
  }

  // Group items by ka_id
  const lessonsByKaId = groupBy(lessons, 'ka_id');
  const exercisesByKaId = groupBy(exercises, 'ka_id');
  const quizzesByKaId = groupBy(quizzes, 'ka_id');

  // Populate lessons, exercises, and quizzes into knowledge areas
  for (const level of levelsMap.values()) {
    for (const ka of level.knowledgeAreas) {
      ka.theory = (lessonsByKaId[ka.id] || []).map(lesson => ({
          id: lesson.id,
          title: lesson.title,
          content: lesson.content_mdx || '',
          youtubeVideoId: lesson.video_url || undefined,
          detailedExplanation: '', // Needs to be added to db schema if required
      }));
      
      ka.quizzes = (quizzesByKaId[ka.id] || []).map(quiz => ({
          id: quiz.id,
          title: quiz.title,
          questions: (quiz.questions as any[] || []),
      }));
      
      const exercisesForKa = exercisesByKaId[ka.id] || [];
      ka.practice = {};
      for (const exercise of exercisesForKa) {
        if (!ka.practice[exercise.language]) {
          ka.practice[exercise.language] = [];
        }
        ka.practice[exercise.language].push({
            id: exercise.id,
            title: exercise.title,
            statement: exercise.description || '',
            template: exercise.template_code || '',
            detailedExplanation: '', // Needs to be added to db schema if required
            youtubeVideoId: '', // Needs to be added to db schema if required
            tests: (exercise.test_cases as any[] || []),
        });
      }
    }
  }

  const curriculumData = Array.from(levelsMap.values());
  cachedCurriculumData = curriculumData;
  return curriculumData;
}

export async function getKnowledgeAreaById(id: string): Promise<KnowledgeArea | null> {
  const curriculum = await getCurriculumData();
  for (const level of curriculum) {
    const found = level.knowledgeAreas.find(ka => ka.id === id);
    if (found) {
      return found;
    }
  }
  return null;
}

// Helper function to group an array of objects by a key
function groupBy<T extends Record<string, any>>(array: T[], key: keyof T): Record<string, T[]> {
  return array.reduce((result, currentValue) => {
    (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
    return result;
  }, {} as Record<string, T[]>);
}
