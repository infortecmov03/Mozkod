
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
        <p class="text-sm">O <code>&lt;head&gt;</code> contém as instruções de processamento para o browser e para robôs externos. Omitir estas tags causa falhas invisíveis, mas catastróficas.</p>
        
        <div class="grid gap-6">
          <div class="bg-card p-6 rounded-3xl border border-white/5 shadow-xl">
             <h4 class="font-bold text-primary mb-3">Charset & Viewport</h4>
             <pre><code class="language-html">
&lt;!-- Codificação Universal --&gt;
&lt;meta charset="UTF-8"&gt;

&lt;!-- Escala Mobile First --&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
             </code></pre>
             <p class="text-xs leading-relaxed mb-4">
               <strong>Erro por omissão:</strong> Sem o <code>charset</code>, caracteres especiais (como o 'ç' ou 'ã') aparecem como símbolos estranhos. Sem a <code>viewport</code>, o site no telemóvel aparece "esmagado".
             </p>
          </div>

          <div class="bg-card p-6 rounded-3xl border border-white/5 shadow-xl">
             <h4 class="font-bold text-primary mb-3">Social & SEO (Open Graph)</h4>
             <pre><code class="language-html">
&lt;meta name="description" content="Engenharia de Elite"&gt;
&lt;meta property="og:image" content="cover.jpg"&gt;
             </code></pre>
             <p class="text-xs leading-relaxed mb-4">
               <strong>Erro por omissão:</strong> O seu link no WhatsApp ou LinkedIn aparece sem imagem e sem descrição atraente, reduzindo a taxa de cliques (CTR) em até 80%.
             </p>
          </div>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. O Esqueleto Semântico: &lt;body&gt;</h3>
        
        <div class="space-y-6">
          <div class="bg-card p-6 rounded-3xl border border-white/5">
            <h4 class="font-bold text-orange-400 mb-3 uppercase tracking-widest text-xs">A Identidade: header & nav</h4>
            <pre><code class="language-html">
&lt;header&gt;
  &lt;h1&gt;Codworks Moz&lt;/h1&gt;
  &lt;nav&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;a href="#"&gt;Dashboard&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="#"&gt;Módulos&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/nav&gt;
&lt;/header&gt;
            </code></pre>
            <p class="text-xs opacity-80">
              <strong>Uso Prático:</strong> Contém o que é persistente no topo. O <code>&lt;nav&gt;</code> deve envolver apenas os blocos de navegação <strong>principais</strong>.
            </p>
          </div>

          <div class="bg-card p-6 rounded-3xl border border-white/5">
            <h4 class="font-bold text-orange-400 mb-3 uppercase tracking-widest text-xs">O Coração: main & article</h4>
            <pre><code class="language-html">
&lt;main role="main"&gt;
  &lt;article&gt;
    &lt;h2&gt;Fase 1: HTML Master&lt;/h2&gt;
    &lt;p&gt;Conteúdo educativo denso...&lt;/p&gt;
  &lt;/article&gt;
&lt;/main&gt;
            </code></pre>
            <p class="text-xs opacity-80">
              <strong>Uso Prático:</strong> <code>&lt;main&gt;</code> é o alvo principal do foco. <code>&lt;article&gt;</code> é usado para conteúdo que pode ser distribuído independentemente.
            </p>
          </div>

          <div class="bg-card p-6 rounded-3xl border border-white/5">
            <h4 class="font-bold text-orange-400 mb-3 uppercase tracking-widest text-xs">A Autoridade: footer</h4>
            <pre><code class="language-html">
&lt;footer&gt;
  &lt;p&gt;&copy; 2024 Codworks Moz&lt;/p&gt;
  &lt;address&gt;Maputo, Moçambique&lt;/address&gt;
&lt;/footer&gt;
            </code></pre>
            <p class="text-xs opacity-80">
              <strong>Uso Prático:</strong> Metadados legais, links de política, e informações de contacto (usando <code>&lt;address&gt;</code>).
            </p>
          </div>
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
