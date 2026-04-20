
import { Module } from './types';

export const level2: Module = {
  id: '2',
  title: 'Nível 2: Algoritmos e Estruturas de Dados',
  level: 'Intermediate',
  description: 'Organização de dados e lógica complexa.',
  image: 'web-dev',
  knowledgeAreas: [
    { id: 'ka-algorithms', title: 'Algorithms', description: 'Busca e ordenação.', supportedLanguages: ['javascript', 'python'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-data-structures', title: 'Data Structures', description: 'Arrays, Listas, Pilhas.', supportedLanguages: ['javascript', 'python'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-discrete-math', title: 'Discrete Math', description: 'Lógica Proposicional.', supportedLanguages: [], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-mathematics', title: 'Mathematics', description: 'Álgebra e Cálculo.', supportedLanguages: [], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-pl-advanced', title: 'PL Advanced', description: 'Paradigmas Avançados.', supportedLanguages: [], theoryLessons: [], practiceExercises: [] }
  ]
};
