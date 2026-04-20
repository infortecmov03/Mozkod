import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "pf-t1",
  title: "Variáveis e Tipos: As Caixas da Memória",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
          📦 O que é uma Variável?
        </h2>
        <p class="text-lg leading-relaxed">
          Uma variável é um espaço nomeado na memória do computador onde guardamos dados que podem mudar durante a execução do programa.
        </p>
      </div>

      <div class="prose prose-neutral dark:prose-invert max-w-none">
        <h3>Tipos Primitivos Comuns</h3>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
          <li class="bg-card p-4 rounded-xl border">
            <strong class="text-primary">String:</strong> Texto (ex: "Codeworks").
          </li>
          <li class="bg-card p-4 rounded-xl border">
            <strong class="text-green-500">Number/Int:</strong> Números (ex: 10, 3.14).
          </li>
          <li class="bg-card p-4 rounded-xl border">
            <strong class="text-accent">Boolean:</strong> Lógica (true ou false).
          </li>
          <li class="bg-card p-4 rounded-xl border">
            <strong class="text-yellow-500">Null/Undefined:</strong> Ausência de valor.
          </li>
        </ul>
      </div>
    </div>
  `,
  quizId: "pf-t1-quiz"
};
