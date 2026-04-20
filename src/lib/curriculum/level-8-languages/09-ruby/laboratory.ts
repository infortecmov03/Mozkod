
import type { PracticeExercise } from '../../types';

export const practice = {
  ruby: [
    {
      id: "rb-p1",
      language: "ruby",
      title: "Lab: Blocks",
      description: "Iteração elegante.",
      statement: "Use cada para imprimir números.",
      template: "[1,2].each { |i| puts i }",
      detailedExplanation: "<p>Blocos são o coração da sintaxe Ruby.</p>",
      objectives: [{ id: "obj1", description: "Usar each", test: "each" }]
    }
  ]
};
