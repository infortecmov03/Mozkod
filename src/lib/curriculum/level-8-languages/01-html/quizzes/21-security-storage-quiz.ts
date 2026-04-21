
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "html-mq21",
  title: "Quiz: Segurança de Persistência",
  passingScore: 80,
  questions: [
    {
      id: "q21_1",
      question: "Qual flag de cookie garante que este não seja acessível via JavaScript (XSS)?",
      options: ["Secure", "HttpOnly", "SameSite", "Expires"],
      correctAnswer: 1
    }
  ]
};
