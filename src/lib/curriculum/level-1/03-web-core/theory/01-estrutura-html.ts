
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
          O HTML não é apenas "marcação"; é a <strong>camada de dados</strong> da interface. Uma estrutura mal desenhada resulta em falhas de acessibilidade, baixo ranking no Google (SEO) e instabilidade visual.
        </p>
      </div>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. O Cérebro: Charset e Codificação</h3>
        <p class="text-sm">Sem o <code>charset="UTF-8"</code>, o browser pode falhar ao renderizar caracteres especiais e acentos comuns em Moçambique.</p>
        
        <div class="space-y-4">
           <h4 class="font-bold text-primary text-sm">❌ Sem Charset (Pode gerar erros de símbolos)</h4>
           <pre><code class="language-html">
&lt;!-- Omissão de charset --&gt;
&lt;h1&gt;Configuracao de Acentuacao&lt;/h1&gt;
&lt;p&gt;Sem o UTF-8, o til e acentos podem falhar.&lt;/p&gt;
           </code></pre>

           <h4 class="font-bold text-green-500 text-sm">✅ Com Charset UTF-8 (Suporte Universal)</h4>
           <pre><code class="language-html">
&lt;meta charset="UTF-8"&gt;
&lt;h1&gt;Configuração de Acentuação&lt;/h1&gt;
&lt;p&gt;Com UTF-8, o til (ã) e acentos (ê) funcionam sempre.&lt;/p&gt;
           </code></pre>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Escala Mobile First (Viewport)</h3>
        <p class="text-sm">A tag <code>viewport</code> impede que o telemóvel tente emular um ecrã gigante, o que tornaria o seu site minúsculo e difícil de ler.</p>
        
        <div class="space-y-4">
           <h4 class="font-bold text-primary text-sm">❌ Sem Viewport (Ecrã Esmagado no Mobile)</h4>
           <pre><code class="language-html">
&lt;!-- Sem viewport --&gt;
&lt;h1&gt;Site Ilegível&lt;/h1&gt;
&lt;p&gt;Este texto aparece muito pequeno no telemóvel.&lt;/p&gt;
           </code></pre>

           <h4 class="font-bold text-green-500 text-sm">✅ Com Viewport (Escala Real 1:1)</h4>
           <pre><code class="language-html">
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
&lt;h1&gt;Site Mobile-Ready&lt;/h1&gt;
&lt;p&gt;Este texto é perfeitamente legível sem zoom.&lt;/p&gt;
           </code></pre>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. O Esqueleto Semântico Completo</h3>
        <p class="text-sm">Observe como as tags de abertura e fecho delimitam as regiões do sistema. No modo <strong>Preview</strong>, podes ver o mapeamento arquitetural do documento.</p>
        
        <div class="space-y-6">
          <pre><code class="language-html">
&lt;header&gt;
  &lt;h1&gt;Codworks Moz&lt;/h1&gt;
  &lt;nav&gt;
    &lt;ul&gt;
      &lt;li&gt;Início&lt;/li&gt;
      &lt;li&gt;Módulos&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/nav&gt;
&lt;/header&gt;

&lt;main role="main"&gt;
  &lt;article&gt;
    &lt;h2&gt;Fase 1: Engenharia HTML&lt;/h2&gt;
    &lt;p&gt;O HTML define a estrutura lógica dos dados.&lt;/p&gt;
  &lt;/article&gt;
&lt;/main&gt;

&lt;footer&gt;
  &lt;p&gt;&copy; 2024 Codworks Moçambique&lt;/p&gt;
&lt;/footer&gt;
          </code></pre>
        </div>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Regra do Arquiteto</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Omitir metadados é como construir um prédio sem planta de fundação. O site pode parecer 'ok' no teu ecrã, mas falhará para 50% dos teus utilizadores no mundo real."
        </p>
      </section>
    </div>
  `,
  quizId: "web-t1-quiz"
};
