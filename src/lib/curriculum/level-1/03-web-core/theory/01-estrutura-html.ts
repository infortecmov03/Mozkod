
import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "web-t1",
  title: "Estrutura HTML5: Arquitetura de Documentos e Metadados de Elite",
  youtubeVideoId: "8ME9u065vD4",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🏗️ A Fundação do Software Web
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O HTML não é apenas "marcação"; é a <strong>camada de dados</strong> da interface. Uma estrutura mal desenhada resulta em falhas de acessibilidade, baixo ranking no Google (SEO) e instabilidade visual (CLS).
        </p>
      </div>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. O Cérebro: Metadados do &lt;head&gt;</h3>
        <p class="text-sm">O <code>&lt;head&gt;</code> contém as instruções de processamento. Sem o <code>charset</code>, caracteres especiais falham. Sem a <code>viewport</code>, o site no telemóvel aparece "esmagado" como num computador antigo.</p>
        
        <div class="grid gap-6">
          <div class="space-y-4">
             <h4 class="font-bold text-primary mb-3">Escala Mobile First (Viewport)</h4>
             <p class="text-xs">Veja no preview abaixo como o browser simula o ecrã do telemóvel ao aplicar a meta viewport:</p>
             <pre><code class="language-html">
&lt;meta charset="UTF-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
&lt;h1&gt;Site Mobile-Ready&lt;/h1&gt;
&lt;p&gt;Este texto é legível sem zoom.&lt;/p&gt;
             </code></pre>
          </div>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. O Esqueleto Semântico: &lt;body&gt;</h3>
        <p class="text-sm">No preview, observe como as tags <strong>Header, Main e Footer</strong> criam blocos lógicos que o browser entende como a arquitetura do site.</p>
        
        <div class="space-y-6">
          <pre><code class="language-html">
&lt;header&gt;
  &lt;h1&gt;Codworks Moz&lt;/h1&gt;
  &lt;nav&gt;
    &lt;ul&gt;
      &lt;li&gt;Dashboard&lt;/li&gt;
      &lt;li&gt;Módulos&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/nav&gt;
&lt;/header&gt;

&lt;main role="main"&gt;
  &lt;article&gt;
    &lt;h2&gt;Fase 1: HTML Master&lt;/h2&gt;
    &lt;p&gt;Conteúdo educativo denso...&lt;/p&gt;
  &lt;/article&gt;
&lt;/main&gt;

&lt;footer&gt;
  &lt;p&gt;&copy; 2024 Codworks Moz&lt;/p&gt;
&lt;/footer&gt;
          </code></pre>
        </div>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Resumo da Decisão</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Se o elemento tem um significado lógico para o utilizador, use uma tag semântica. Se o elemento existe apenas para que o CSS o pinte, use uma &lt;div&gt;."
        </p>
      </section>
    </div>
  `,
  quizId: "web-t1-quiz"
};
