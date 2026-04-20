
import { Module } from '../types';

export const level8: Module = {
  id: '8',
  title: 'Nível 8: Linguagens de Programação',
  level: 'Master',
  description: 'Domínio profundo de múltiplas sintaxes.',
  image: 'web-dev',
  knowledgeAreas: [
    { id: 'lang-javascript', title: '01. JavaScript', description: 'JS Moderno.', supportedLanguages: ['javascript'], theoryLessons: [], practiceExercises: [] },
    { id: 'lang-python', title: '02. Python', description: 'Python Geral.', supportedLanguages: ['python'], theoryLessons: [], practiceExercises: [] },
    { id: 'lang-sql', title: '03. SQL', description: 'Dados Relacionais.', supportedLanguages: ['sql'], theoryLessons: [], practiceExercises: [] },
    { id: 'lang-typescript', title: '04. TypeScript', description: 'Tipagem forte.', supportedLanguages: ['typescript'], theoryLessons: [], practiceExercises: [] },
    { id: 'lang-rust', title: '05. Rust', description: 'Memória e Segurança.', supportedLanguages: ['rust'], theoryLessons: [], practiceExercises: [] },
    { id: 'lang-go', title: '06. Go', description: 'Simplicidade e Performance.', supportedLanguages: ['go'], theoryLessons: [], practiceExercises: [] }
  ]
};
