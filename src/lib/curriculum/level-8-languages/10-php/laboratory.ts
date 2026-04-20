
import type { PracticeExercise } from '../../types';

export const practice = {
  php: [
    {
      id: "php-p1",
      language: "php",
      title: "Lab: Constructor Promotion",
      description: "Código limpo em PHP 8.",
      statement: "Use promoção no construtor.",
      template: "public function __construct(public string $name) { }",
      detailedExplanation: "<p>Reduz o boilerplate massivamente.</p>",
      objectives: [{ id: "obj1", description: "Usar promotion", test: "__construct" }]
    }
  ]
};
