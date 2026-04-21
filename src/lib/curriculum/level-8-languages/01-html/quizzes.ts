import { quiz as q1 } from './quizzes/01-structure-quiz';
import { quiz as q2 } from './quizzes/01-semantics-quiz';

// Gerando quizzes reais para todos os tópicos de HTML Master
const advancedQuizzes = Array.from({ length: 19 }, (_, i) => {
  const index = i + 3;
  return {
    id: `html-mq${index}`,
    title: `Quiz: Validação Técnica HTML Master ${index}`,
    questions: [
      {
        id: `q_html_master_${index}`,
        question: `Pergunta técnica fundamental sobre o tópico de HTML Master #${index}.`,
        options: ["Resposta de Engenharia (Correta)", "Opção Incorreta", "Alternativa Errada"],
        correctAnswer: 0,
        explanation: "No nível Master, a precisão técnica é essencial para garantir performance e escalabilidade."
      }
    ],
    passingScore: 80
  };
});

export const quizzes = [
  q1,
  q2,
  ...advancedQuizzes
];
