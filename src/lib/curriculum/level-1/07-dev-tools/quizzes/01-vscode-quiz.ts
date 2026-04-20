
import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "dt-t1-quiz",
  title: "Quiz: Domínio do VS Code",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual atalho abre a 'Command Palette' no VS Code?",
      options: ["Ctrl+S", "Ctrl+Shift+P", "Ctrl+F", "Ctrl+N"],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "Para que servem as 'Extensions' no VS Code?",
      options: ["Para aumentar o brilho", "Para adicionar novas funcionalidades e suporte a linguagens", "Para apagar código", "Para ligar o Wi-Fi"],
      correctAnswer: 1
    }
  ]
};
