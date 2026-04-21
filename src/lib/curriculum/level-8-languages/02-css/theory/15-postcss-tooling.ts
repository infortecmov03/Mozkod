import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m15",
  title: "PostCSS & Build Tooling: O Compilador do CSS",
  content: `
    <div class="space-y-8">
      <div class="bg-red-500/5 p-6 rounded-2xl border border-red-500/10">
        <h2 class="text-2xl font-bold mb-4 font-headline text-red-400">⚙️ Transformando o Futuro</h2>
        <p class="text-lg">PostCSS não é uma linguagem, é uma ferramenta que transforma o teu CSS através de plugins JavaScript. É o "Babel do CSS".</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline text-primary border-b border-white/5 pb-2">Plugins de Elite</h3>
        <ul class="space-y-4">
          <li class="bg-card p-4 rounded-xl border border-white/5">
            <strong>Autoprefixer:</strong> Adiciona <code>-webkit-</code> e <code>-moz-</code> automaticamente baseado na base de utilizadores (CanIUse).
          </li>
          <li class="bg-card p-4 rounded-xl border border-white/5">
            <strong>CSSNano:</strong> O minificador definitivo que remove comentários e espaços de forma segura.
          </li>
          <li class="bg-card p-4 rounded-xl border border-white/5">
            <strong>PostCSS Preset Env:</strong> Permite usar sintaxes do futuro (CSS Nesting, Media Query Ranges) que o browser ainda não entende.
          </li>
        </ul>
      </div>
    </div>
  `,
  quizId: "css-mq15"
};
