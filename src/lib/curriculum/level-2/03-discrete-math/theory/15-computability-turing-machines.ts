import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "math-t15",
  title: "Computabilidade e Máquinas de Turing",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">⚙️ Os Limites da Computação</h2>
        <p class="text-lg leading-relaxed">
          A Máquina de Turing (TM) é o modelo supremo de computação. Se um problema não pode ser resolvido por uma TM, ele não pode ser resolvido por nenhum computador, atual ou futuro.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. O Conceito da Máquina</h3>
        <p class="text-sm">Composta por uma fita infinita, uma cabeça de leitura/escrita e uma tabela de estados. Ela define o que é um <strong>Algoritmo</strong> de forma matemática rigorosa.</p>

        <h3 class="text-xl font-bold font-headline text-red-400">2. O Problema da Paragem (Halting Problem)</h3>
        <p class="text-sm">Provado por Alan Turing: é impossível criar um programa que decida se qualquer outro programa irá parar ou correr para sempre. Este é um exemplo de problema <strong>Indecidível</strong>.</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">Tese de Church-Turing</h4>
          <p class="text-sm leading-relaxed">Tudo o que é "calculável" por um ser humano seguindo regras finitas pode ser calculado por uma Máquina de Turing.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "math-q15"
};