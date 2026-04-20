
import { KnowledgeArea } from '../../types';

export const programmingFundamentals: KnowledgeArea = {
  id: 'ka-prog-fund',
  title: '02. Programming Fundamentals',
  description: 'Aprende a dar ordens ao computador usando lógica universal.',
  supportedLanguages: ['javascript', 'python', 'java', 'cpp'],
  theoryLessons: [
    {
      id: 'pf-t1',
      title: 'Variáveis e Tipos de Dados',
      content: 'Uma variável é um contentor nomeado que guarda um valor na memória do computador.\n\nExistem diferentes tipos de dados como String (texto), Number (número) e Boolean (verdadeiro/falso).',
      beginnerExplanation: 'Pensa numa variável como uma caixa com uma etiqueta. A etiqueta é o "nome" e o que está dentro é o "valor".',
      quiz: [
        {
          id: 'q1',
          question: 'Para que serve uma variável?',
          options: ['Para apagar dados', 'Para guardar informação na memória', 'Para ligar o monitor'],
          correctAnswer: 1
        }
      ]
    }
  ],
  practiceExercises: [
    {
      id: 'pf-p1',
      title: 'Prática 1: Variáveis e Tipos de Dados',
      description: 'Declare as suas primeiras variáveis no laboratório.',
      beginnerGuide: 'Neste exercício, vais criar variáveis para guardar informações básicas.',
      objectives: [
        {
          id: 'obj-1',
          title: 'Nome do Aluno',
          description: 'Crie uma variável chamada "nome" com o valor "João".',
          explanation: 'Strings em programação devem estar entre aspas.',
          hint: 'let nome = "João";',
          validationRegex: 'nome\\s*=\\s*["\']João["\']'
        }
      ],
      starterCode: {
        javascript: '// Escreva o seu código abaixo\nlet nome = "";',
        python: '# Escreva o seu código abaixo\nnome = ""'
      }
    }
  ]
};
