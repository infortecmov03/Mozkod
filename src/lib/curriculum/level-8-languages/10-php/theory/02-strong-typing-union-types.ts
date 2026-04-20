import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m2",
  title: "Tipagem Forte e Union Types",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">💪 Robustez com Tipos</h2>
      <p>O PHP moderno evoluiu para permitir uma tipagem rigorosa, aproximando-se de linguagens como Java ou C#.</p>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>Union Types:</strong> <code>int|float</code> permite múltiplos tipos.</li>
        <li><strong>Intersection Types:</strong> <code>Countable&Iterator</code> exige ambos.</li>
        <li><strong>Never Type:</strong> Indica que uma função sempre lança exceção ou termina o script.</li>
      </ul>
    </div>
  `,
  quizId: "php-mq2"
};