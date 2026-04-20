
export const quizzes = Array.from({ length: 21 }, (_, i) => ({
  id: `alg-q${i + 1}`,
  title: `Algorithm Quiz ${i + 1}`,
  questions: [
    {
      id: "q_auto",
      question: "Pergunta de validação técnica para o tópico " + (i + 1),
      options: ["Opção A (Correta)", "Opção B", "Opção C"],
      correctAnswer: 0
    }
  ],
  passingScore: 70
}));
