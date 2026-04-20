
import type { PracticeExercise } from '../../types';

export const practice = {
  rust: [
    {
      id: "rs-p1",
      language: "rust",
      title: "Lab: Ownership Move",
      description: "Transferindo posse de dados.",
      statement: "Tente mover uma string s1 para s2.",
      template: "let s1 = String::from(\"hello\");\nlet s2 = s1;",
      detailedExplanation: "<p>Ao atribuir s1 a s2, s1 deixa de ser válido.</p>",
      objectives: [{ id: "obj1", description: "Usar String::from", test: "String::from" }]
    }
  ]
};
