
import { Module } from '../types';

export const level1: Module = {
  id: '1',
  title: 'Nível 1: Fundamentos (Core Foundations)',
  level: 'Beginner',
  description: 'A base essencial de CS e Programação para a nova geração de devs.',
  image: 'cs-core',
  knowledgeAreas: [
    {
      id: 'ka-cs',
      title: '01. CS Core',
      description: 'Sistemas numéricos, lógica booleana e arquitetura.',
      supportedLanguages: [],
      theoryLessons: [
        { id: 'cs-t1', title: 'Sistemas Numéricos', content: 'Binário, Hexadecimal...', quiz: [] },
        { id: 'cs-t2', title: 'Lógica Booleana', content: 'Portas lógicas e tabelas verdade.', quiz: [] }
      ],
      practiceExercises: []
    },
    {
      id: 'ka-programming',
      title: '02. Programming Fundamentals',
      description: 'Lógica, variáveis e estruturas básicas.',
      supportedLanguages: ['javascript', 'python', 'java', 'cpp'],
      theoryLessons: [
        { id: 'pf-t1', title: 'Variáveis e Tipos', content: 'Espaços de memória...', quiz: [] },
        { id: 'pf-t2', title: 'Operadores', content: 'Aritmética e Lógica.', quiz: [] }
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
    { id: 'ka-web', title: '03. Web Core', description: 'HTML5 e CSS3.', supportedLanguages: ['html', 'css'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-tech-english', title: '04. Tech English', description: 'Inglês para programadores.', supportedLanguages: [], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-git', title: '05. Git & VC', description: 'Controlo de versão.', supportedLanguages: ['bash'], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-hci', title: '06. HCI', description: 'Interação Humano-Computador.', supportedLanguages: [], theoryLessons: [], practiceExercises: [] },
    { id: 'ka-dev-tools', title: '07. Dev Tools', description: 'VS Code e Terminal.', supportedLanguages: ['bash'], theoryLessons: [], practiceExercises: [] }
  ]
};
