import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "math-t14",
  title: "Linguagens Formais e Gramáticas",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📜 A Hierarquia de Chomsky</h2>
        <p class="text-lg leading-relaxed">
          Linguagens formais definem as regras sintáticas que um conjunto de strings deve seguir. A hierarquia de Chomsky classifica estas linguagens conforme a sua complexidade computacional.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">As 4 Categorias de Linguagens:</h3>
        <ul class="space-y-4">
          <li class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-accent">Tipo 3 - Regulares:</strong> Processadas por Autómatos Finitos. (RegEx).
          </li>
          <li class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-accent">Tipo 2 - Livres de Contexto:</strong> Processadas por Autómatos de Pilha (Pushdown). Base da maioria das linguagens de programação (C, Java, JS).
          </li>
          <li class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-accent">Tipo 1 - Sensíveis ao Contexto:</strong> Gramáticas mais complexas.
          </li>
          <li class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-accent">Tipo 0 - Irrestritas:</strong> Qualquer linguagem computável por uma Máquina de Turing.
          </li>
        </ul>
      </div>
    </div>
  `,
  quizId: "math-q14"
};