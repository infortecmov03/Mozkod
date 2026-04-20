
import type { PracticeExercise } from '../../types';

export const practice = {
  go: [
    {
      id: "go-p1",
      language: "go",
      title: "Lab: Channels",
      description: "Comunicação entre goroutines.",
      statement: "Crie um canal de strings.",
      template: "ch := make(chan string)",
      detailedExplanation: "<p>Canais são as 'pontes' seguras para dados em Go.</p>",
      objectives: [{ id: "obj1", description: "Usar make chan", test: "make(chan string)" }]
    }
  ]
};
