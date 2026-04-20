
import type { PracticeExercise } from '../../types';

export const practice = {
  kotlin: [
    {
      id: "kt-p1",
      language: "kotlin",
      title: "Lab: Coroutines Basics",
      description: "Lançando tarefas assíncronas.",
      statement: "Use a função launch para iniciar uma coroutine.",
      template: "runBlocking {\n  launch { }\n}",
      detailedExplanation: "<p>Coroutines são threads leves que não bloqueiam o sistema.</p>",
      objectives: [{ id: "obj1", description: "Usar launch", test: "launch" }]
    }
  ]
};
