
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "jv-mq8",
  title: "Quiz: Project Loom",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Qual o benefício principal das Virtual Threads?",
      options: [
        "Acelerar cálculos matemáticos puros",
        "Permitir milhões de tarefas I/O-bound simultâneas com baixo custo",
        "Eliminar a necessidade de garbage collection",
        "Substituir o compilador JIT"
      ],
      correctAnswer: 1
    }
  ]
};
