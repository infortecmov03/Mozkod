
export const quizzes = Array.from({ length: 21 }, (_, i) => ({
  id: `git-q${i + 1}`,
  title: `Git Quiz ${i + 1}`,
  questions: [
    {
      id: "q_auto",
      question: "Pergunta de validação para o tópico " + (i + 1),
      options: ["Opção Correta", "Incorreta", "Errada"],
      correctAnswer: 0
    }
  ],
  passingScore: 70
}));
