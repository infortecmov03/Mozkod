import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m3",
  title: "SEO Técnico: Metadados e Open Graph",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4">🚀 Visibilidade na Rede</h2>
        <p class="text-lg">O HTML Master deve saber como os robots dos motores de busca e as redes sociais interpretam a página.</p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>Meta Tags Essenciais</h3>
        <ul>
          <li><strong>canonical:</strong> Evita conteúdo duplicado indicando a URL preferida.</li>
          <li><strong>robots:</strong> Controla a indexação e o seguimento de links.</li>
          <li><strong>Open Graph (og:):</strong> Define como o link aparece no Facebook/WhatsApp.</li>
          <li><strong>Twitter Cards:</strong> Otimização específica para o X (Twitter).</li>
        </ul>
        <div class="bg-card p-4 rounded-xl border font-code text-sm">
          &lt;meta property="og:title" content="Engenharia de Elite" /&gt;<br/>
          &lt;link rel="canonical" href="https://codworks.mz/curso" /&gt;
        </div>
      </div>
    </div>
  `,
  quizId: "html-mq3"
};
