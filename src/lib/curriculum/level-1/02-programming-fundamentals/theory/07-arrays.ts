import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "pf-t7",
  title: "Arrays e Listas: Organizando Dados em Massa",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
          <span class="text-3xl">📚</span> O que é um Array?
        </h2>
        <p class="text-lg leading-relaxed">
          Imagine que você tem 100 nomes de alunos. Em vez de criar 100 variáveis diferentes, você usa um <strong>Array</strong>: uma única "caixa" dividida em compartimentos numerados.
        </p>
      </div>

      <div class="prose prose-neutral dark:prose-invert max-w-none">
        <h3>1. Índices: A Regra do Zero</h3>
        <p>Na maioria das linguagens (JS, Python, C++, Java), a contagem começa sempre no <strong>0</strong>.</p>
        <div class="bg-card p-4 rounded-xl border font-code text-center text-primary">
          Indice: [0] [1] [2] [3]<br/>
          Valor: ["A", "B", "C", "D"]
        </div>

        <h3>2. Operações Comuns</h3>
        <ul class="list-disc ml-6 space-y-2">
          <li><strong>Acesso:</strong> Ler um valor numa posição específica.</li>
          <li><strong>Adição:</strong> Inserir novos itens no fim ou no início.</li>
          <li><strong>Remoção:</strong> Retirar itens da coleção.</li>
          <li><strong>Iteração:</strong> Percorrer todos os itens usando um loop.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "pf-t7-quiz"
};