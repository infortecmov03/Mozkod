
import { Module } from '../types';

export const level2: Module = {
  id: '2',
  title: 'Nível 2: Algoritmos e Estruturas de Dados',
  level: 'Intermediate',
  description: 'Organização eficiente de dados e algoritmos complexos.',
  image: 'web-dev',
  knowledgeAreas: [
    { id: 'ka-algorithms', title: '01. Algorithms', description: 'Busca e ordenação.', supportedLanguages: ['javascript', 'python', 'java', 'cpp'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-data-structures', title: '02. Data Structures', description: 'Arrays, Listas, Pilhas.', supportedLanguages: ['javascript', 'python', 'java', 'cpp'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-discrete-math', title: '03. Discrete Math', description: 'Lógica Proposicional.', supportedLanguages: [], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-mathematics', title: '04. Mathematics', description: 'Álgebra e Cálculo.', supportedLanguages: [], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-pl-advanced', title: '05. PL Advanced', description: 'Paradigmas de Programação.', supportedLanguages: [], theoryLessons: [], practiceExercises: [] }
  ]
};
