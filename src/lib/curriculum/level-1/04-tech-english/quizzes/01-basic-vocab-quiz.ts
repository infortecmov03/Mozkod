
import type { Quiz } from '../../types';

export const quiz1: Quiz = {
  id: "eng-t1-quiz",
  title: "Quiz: Basic Computer Vocab",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "What does 'Run' mean in a software context?",
      options: [
        "Correr uma maratona",
        "Executar um programa",
        "Apagar um ficheiro",
        "Reiniciar o computador"
      ],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "What is a 'Bug' in programming?",
      options: ["Um inseto real", "Uma funcionalidade nova", "Um erro no código", "Uma ferramenta de design"],
      correctAnswer: 2
    }
  ]
};
