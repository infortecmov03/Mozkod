
import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "web-t1",
  title: "Estrutura HTML5: O Esqueleto da Web",
  youtubeVideoId: "",
  content: `
    <div class="space-y-6">
      <div class="bg-orange-50 dark:bg-orange-950 p-6 rounded-xl border border-orange-200 dark:border-orange-900">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
          🏗️ O que é o HTML?
        </h2>
        <p class="text-lg leading-relaxed">
          O HTML (HyperText Markup Language) não é uma linguagem de programação, mas sim uma <strong>linguagem de marcação</strong>. Ele serve para dizer ao navegador o que é cada parte do site: um título, um parágrafo, ou uma imagem.
        </p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>A Anatomia de uma Tag</h3>
        <p>Tudo no HTML é feito de "tags". Uma tag geralmente tem uma abertura e um fecho:</p>
        <div class="bg-card p-4 rounded-lg border font-code text-center text-orange-400">
          &lt;tag&gt; Conteúdo &lt;/tag&gt;
        </div>
        <p class="mt-4">Exemplo de um parágrafo:</p>
        <div class="bg-card p-4 rounded-lg border font-code text-center">
          &lt;p&gt; Olá, mundo! &lt;/p&gt;
        </div>
      </div>
    </div>
  `,
  quizId: "web-t1-quiz"
};
