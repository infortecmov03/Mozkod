import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';

export const programmingFundamentals: KnowledgeArea = {
  id: 'ka-programming-fundamentals',
  title: '02. Programming Fundamentals',
  description: 'Lógica universal expandida: de variáveis a padrões de tratamento de erros e memória. 21 tópicos fundamentais.',
  load: '50h',
  iconName: 'Code2',
  theory: lessons,
  quizzes: quizzes,
  practice: {
    javascript: [
      {
        id: "pf-p1",
        language: "javascript",
        title: "Laboratório: Gestão de Exceções",
        description: "Capture erros de forma elegante.",
        statement: "Use try/catch para evitar que a app pare ao dividir por zero.",
        template: "try { \n  // código \n} catch (e) { \n  // erro \n}",
        detailedExplanation: "<p>Sistemas robustos não crasham. Eles tratam os erros de forma previsível.</p>",
        objectives: [{ id: "obj1", description: "Usar bloco try", test: "try" }]
      }
    ]
  }
};