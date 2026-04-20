
import { Module } from './types';
import { level1 } from './level-1';
import { level2 } from './level-2';

export * from './types';

export const modules: Module[] = [
  level1,
  level2,
  // Adicionar outros níveis aqui após criar as pastas correspondentes
];

export function findKnowledgeAreaByLessonId(id: string) {
  for (const m of modules) {
    for (const ka of m.knowledgeAreas) {
      if (ka.theoryLessons.some(l => l.id === id) || ka.practiceExercises.some(p => p.id === id)) {
        return { ka, module: m };
      }
    }
  }
  return null;
}

export function findTheoryLesson(id: string) {
  for (const m of modules) {
    for (const ka of m.knowledgeAreas) {
      const l = ka.theoryLessons.find(l => l.id === id);
      if (l) return l;
    }
  }
  return null;
}

export function findPracticeExercise(id: string) {
  for (const m of modules) {
    for (const ka of m.knowledgeAreas) {
      const p = ka.practiceExercises.find(p => p.id === id);
      if (p) return p;
    }
  }
  return null;
}
