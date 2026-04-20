
import { Module } from './types';

export const level1: Module = {
  id: '1',
  title: 'Nível 1: Fundamentos (Core Foundations)',
  level: 'Beginner',
  description: 'A base essencial de CS e Programação.',
  image: 'cs-core',
  knowledgeAreas: [
    {
      id: 'ka-programming',
      title: 'Programming Fundamentals',
      description: 'Lógica, variáveis e estruturas básicas.',
      supportedLanguages: ['javascript', 'python', 'java', 'cpp'],
      theoryLessons: [
        {
          id: 'pf-t1',
          title: 'Variáveis e Tipos de Dados',
          content: 'Variáveis são espaços na memória para guardar informação...',
          quiz: [{ id: 'q1', question: 'O que é uma variável?', options: ['Um motor', 'Espaço na memória', 'Um erro'], correctAnswer: 1 }]
        },
        { id: 'pf-t2', title: 'Operadores Aritméticos', content: 'Cálculos básicos...', quiz: [] },
        { id: 'pf-t3', title: 'Strings e I/O', content: 'Manipulação de texto e entrada/saída.', quiz: [] }
      ],
      practiceExercises: [
        {
          id: 'pf-p1',
          title: 'Prática 1: Variáveis',
          description: 'Declare as suas primeiras variáveis.',
          objectives: [
            { id: 'obj1', description: 'Declare "nome" como "João"', hint: 'let nome = "João";', validationRegex: 'nome.*=.*"João"' }
          ],
          starterCode: { javascript: 'let nome = "";', python: 'nome = ""' }
        }
      ]
    },
    { id: 'ka-cs', title: 'CS Core', description: 'Ciência da Computação.', supportedLanguages: [], theoryLessons: [{ id: 'cs-t1', title: 'Sistemas Numéricos', content: 'Binário, Hex...', quiz: [] }], practiceExercises: [] },
    { id: 'ka-web', title: 'Web Core (HTML/CSS)', description: 'Estrutura e Estilo.', supportedLanguages: ['html', 'css'], theoryLessons: [{ id: 'web-t1', title: 'Estrutura HTML5', content: 'Tags semânticas...', quiz: [] }], practiceExercises: [] },
    { id: 'ka-tech-english', title: 'Tech English', description: 'Inglês Técnico.', supportedLanguages: [], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-git', title: 'Git & VC', description: 'Controlo de Versão.', supportedLanguages: ['bash'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-hci', title: 'HCI', description: 'Interação Humano-Computador.', supportedLanguages: [], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-dev-tools', title: 'Dev Tools', description: 'Ferramentas de Desenvolvimento.', supportedLanguages: ['bash'], theoryLessons: [], practiceExercises: [] }
  ]
};
