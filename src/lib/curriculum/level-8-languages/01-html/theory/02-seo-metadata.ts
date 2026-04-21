import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m3",
  title: "SEO Técnico: Metadados e Open Graph",
  content: `
    <div class="space-y-8">
      <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 text-indigo-100">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 text-headline">🚀 Indexação e Viralização</h2>
        <p class="text-lg">Como o seu site aparece no Google e nas redes sociais depende de metadados invisíveis para o utilizador comum, mas vitais para os bots.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Canonicalismo e Robots</h3>
        <p>Evite penalizações por conteúdo duplicado informando ao Google qual é a URL original da página.</p>
        <div class="bg-black/40 p-4 rounded-xl border font-code text-sm">
          <span class="text-primary">&lt;link</span> <span class="text-accent">rel</span>=<span class="text-green-400">"canonical"</span> <span class="text-accent">href</span>=<span class="text-green-400">"https://codworks.mz/html-master"</span><span class="text-primary">&gt;</span><br/>
          <span class="text-primary">&lt;meta</span> <span class="text-accent">name</span>=<span class="text-green-400">"robots"</span> <span class="text-accent">content</span>=<span class="text-green-400">"index, follow"</span><span class="text-primary">&gt;</span>
        </div>

        <h3 class="text-xl font-bold font-headline">Social Cards (Open Graph & Twitter)</h3>
        <p>Controle como o seu link aparece no WhatsApp ou Facebook. Sem isto, as redes sociais tentam "adivinhar" uma imagem, muitas vezes falhando.</p>
        <div class="bg-black/40 p-4 rounded-xl border font-code text-xs space-y-1">
          <span class="text-primary">&lt;meta</span> <span class="text-accent">property</span>=<span class="text-green-400">"og:title"</span> <span class="text-accent">content</span>=<span class="text-green-400">"Engenharia de Elite em Moçambique"</span><span class="text-primary">&gt;</span><br/>
          <span class="text-primary">&lt;meta</span> <span class="text-accent">property</span>=<span class="text-green-400">"og:image"</span> <span class="text-accent">content</span>=<span class="text-green-400">"https://codworks.mz/banner.jpg"</span><span class="text-primary">&gt;</span><br/>
          <span class="text-primary">&lt;meta</span> <span class="text-accent">name</span>=<span class="text-green-400">"twitter:card"</span> <span class="text-accent">content</span>=<span class="text-green-400">"summary_large_image"</span><span class="text-primary">&gt;</span>
        </div>
      </div>
    </div>
  `,
  quizId: "html-mq3"
};
