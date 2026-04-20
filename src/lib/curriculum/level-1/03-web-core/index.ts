import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quiz1 as q1 } from './quizzes/01-estrutura-html-quiz';
import { quiz as q2 } from './theory/quizzes/02-css-seletores-quiz';

// Placeholder Quizzes para evitar erros de importação se referenciados
const qPlaceholder = (id: string) => ({
  id,
  title: "Quiz em Breve",
  passingScore: 70,
  questions: [{ id: "q1", question: "Carregando...", options: ["A", "B"], correctAnswer: 0 }]
});

export const webCore: KnowledgeArea = {
  id: 'ka-web-core',
  title: '03. Web Core (HTML/CSS)',
  description: 'A fundação da interface moderna.',
  load: '25h',
  iconName: 'Globe',
  theory: lessons,
  quizzes: [
    q1, q2, 
    qPlaceholder("web-t3-quiz"),
    qPlaceholder("web-t4-quiz"),
    qPlaceholder("web-t5-quiz"),
    qPlaceholder("web-t6-quiz"),
    qPlaceholder("web-t7-quiz"),
    qPlaceholder("web-t8-quiz")
  ],
  practice: {
    html: [],
    css: []
  }
};