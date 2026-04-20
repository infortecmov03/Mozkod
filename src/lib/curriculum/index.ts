
import { level1 } from './level-1/index';
import type { Level, KnowledgeArea, TheoryLesson, PracticeExercise } from './types';

export * from './types';

export const modules: Level[] = [
  level1,
  // level2, ...
];

export function findKnowledgeAreaByLessonId(lessonId: string) {
  for (const level of modules) {
    for (const ka of level.knowledgeAreas) {
      if (ka.theory.some(l => l.id === lessonId)) {
        return { ka, level };
      }
      // Verificar também nas práticas
      for (const lang in ka.practice) {
        if (ka.practice[lang].some(p => p.id === lessonId)) {
          return { ka, level };
        }
      }
    }
  }
  return null;
}

export function findTheoryLesson(id: string): TheoryLesson | null {
  for (const level of modules) {
    for (const ka of level.knowledgeAreas) {
      const lesson = ka.theory.find(l => l.id === id);
      if (lesson) return lesson;
    }
  }
  return null;
}

export function findPracticeExercise(id: string): PracticeExercise | null {
  for (const level of modules) {
    for (const ka of level.knowledgeAreas) {
      for (const lang in ka.practice) {
        const ex = ka.practice[lang].find(p => p.id === id);
        if (ex) return ex;
      }
    }
  }
  return null;
}

export function findQuizById(quizId: string) {
  for (const level of modules) {
    for (const ka of level.knowledgeAreas) {
      const quiz = ka.quizzes.find(q => q.id === quizId);
      if (quiz) return quiz;
    }
  }
  return null;
}
