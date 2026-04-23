import { quiz as q1 } from './quizzes/01-intro-hci-quiz';
import { quiz as q2 } from './quizzes/02-usability-heuristics-quiz';

// Fallback para quizzes ainda não detalhados (serão detalhados conforme solicitado)
const placeholders = Array.from({ length: 19 }, (_, i) => ({
  id: `hci-q${i + 3}`,
  title: `HCI Quiz ${i + 3}`,
  questions: [
    {
      id: "q_auto",
      question: "Pergunta de validação para o tópico " + (i + 3),
      options: ["Opção Correta", "Incorreta", "Errada"],
      correctAnswer: 0
    }
  ],
  passingScore: 70
}));

export const quizzes = [ q1, q2, ...placeholders ];
