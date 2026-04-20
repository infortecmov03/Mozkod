import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "pf-t6",
  title: "Funções e Escopos: Blocos Reutilizáveis",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4">🛠️ O que é uma Função?</h2>
        <p class="text-lg">É um bloco de código que executa uma tarefa específica. Em vez de escreveres o mesmo código 10 vezes, crias uma função e chamas-a 10 vezes.</p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>Parâmetros e Retorno</h3>
        <p>Funções podem receber dados (parâmetros) e devolver resultados (return).</p>
        <pre class="bg-card p-4 rounded-xl border">function saudar(nome) {
  return "Olá, " + nome;
}</pre>
      </div>
    </div>
  `,
  quizId: "pf-t6-quiz"
};