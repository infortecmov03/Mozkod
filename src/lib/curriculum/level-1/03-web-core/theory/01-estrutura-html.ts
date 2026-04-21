
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
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-bold text-primary">🏷️ Atributos de Identidade: Class e ID</h3>
        <p>Para podermos personalizar os elementos mais tarde, usamos dois atributos fundamentais:</p>
        
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-card p-4 rounded-xl border border-white/10">
            <h4 class="font-bold text-accent mb-2">Class (Classe)</h4>
            <p class="text-sm">Usada para identificar um <strong>grupo</strong> de elementos que terão o mesmo estilo.</p>
            <code class="text-[10px] block mt-2 bg-black/20 p-2 rounded">&lt;p class="texto-azul"&gt;...&lt;/p&gt;</code>
          </div>
          <div class="bg-card p-4 rounded-xl border border-white/10">
            <h4 class="font-bold text-accent mb-2">ID (Identificador)</h4>
            <p class="text-sm">Usado para identificar um elemento <strong>único</strong> na página.</p>
            <code class="text-[10px] block mt-2 bg-black/20 p-2 rounded">&lt;h1 id="titulo-principal"&gt;...&lt;/h1&gt;</code>
          </div>
        </div>

        <div class="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20 mt-4">
          <p class="text-sm font-medium">
            <strong>🚀 Nota Importante:</strong> Nas próximas lições, aprenderás a usar estas <strong>classes</strong> e <strong>IDs</strong> para dar cor e estilo ao teu site no módulo de <strong>CSS</strong>, e como usar o <strong>ID</strong> para criar comportamentos inteligentes no módulo de <strong>JavaScript</strong>.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "web-t1-quiz"
};
