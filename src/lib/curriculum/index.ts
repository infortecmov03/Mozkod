
import { level1 } from './level-1/index';
import { level2 } from './level-2/index';
import { level3 } from './level-3/index';
import { level4 } from './level-4/index';
import { level5 } from './level-5/index';
import { level6 } from './level-6/index';
import { level7 } from './level-7/index';
import { level8 } from './level-8-languages/index';
import type { Level, KnowledgeArea, TheoryLesson, PracticeExercise, Quiz } from './types';

export * from './types';

export const modules: Level[] = [
  level1,
  level2,
  level3,
  level4,
  level5,
  level6,
  level7,
  level8
];

export function findKnowledgeAreaByLessonId(lessonId: string) {
  for (const level of modules) {
    for (const ka of level.knowledgeAreas) {
      if (ka.theory.some(l => l.id === lessonId)) {
        return { ka, level };
      }
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

export function findQuizById(quizId: string): Quiz | null {
  for (const level of modules) {
    for (const ka of level.knowledgeAreas) {
      const quiz = ka.quizzes.find(q => q.id === quizId);
      if (quiz) return quiz;
    }
  }
  return null;
}
