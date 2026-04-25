import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m15",
  title: "Fase 4: PostCSS & Build Tooling: O Compilador do CSS",
  enableInteractive: true,
  quizId: "css-mq15",
  content: `<div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          ⚙️ Programando o Motor de Estilos
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O CSS moderno não é apenas o que escreves no ficheiro .css. É o resultado de uma transformação industrial. O <strong>PostCSS</strong> permite-te usar funcionalidades do futuro hoje, limpando e otimizando os teus ativos para produção.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Plugins de Missão Crítica</h3>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-primary block">Autoprefixer:</strong> Adiciona prefixos proprietários (-webkit, -moz) automaticamente baseando-se nos dados reais do mercado (CanIUse).
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-primary block">CSSNano:</strong> O minificador definitivo que remove comentários, espaços e reordena regras para o menor peso possível.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-primary block">Preset-Env:</strong> Converte sintaxes experimentais (como Nesting nativo) em CSS que os browsers atuais entendem.
          </li>
        </ul>
      </section>

      <section class="bg-indigo-500/10 p-8 rounded-[2.5rem] border border-indigo-500/20 shadow-inner">
        <h4 class="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
          🚀 PurgeCSS: Eliminando o Peso Morto
        </h4>
        <p class="text-sm leading-relaxed">
          Se usas Tailwind ou Bootstrap, 90% do CSS é inútil. O <strong>PurgeCSS</strong> analisa o teu HTML e JS, e remove do ficheiro final qualquer classe que não esteja a ser usada, reduzindo o bundle de 300KB para 15KB.
        </p>
      </section>
    </div>`
};