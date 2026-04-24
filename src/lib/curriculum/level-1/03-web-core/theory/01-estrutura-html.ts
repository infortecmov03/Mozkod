
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

      <!-- 1. ESTRUTURA DO DOCUMENTO -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Estrutura Base e DOCTYPE</h3>
        <p class="text-sm">Todo o documento master deve começar com o <code>&lt;!DOCTYPE html&gt;</code>. Sem ele, o browser entra em "Quirks Mode", emulando comportamentos de navegadores antigos dos anos 90.</p>
        
        <div class="space-y-4">
           <h4 class="font-bold text-primary text-xs uppercase tracking-widest">Anatomia do Documento</h4>
           <pre><code class="language-html">
&lt;!DOCTYPE html&gt;
&lt;html lang="pt-MZ"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Título da Aba&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;!-- O conteúdo visível vive aqui --&gt;
  &lt;/body&gt;
&lt;/html&gt;
           </code></pre>
        </div>
      </section>

      <!-- 2. METADADOS E SIMULAÇÃO -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Metadados Críticos: Charset e Viewport</h3>
        
        <div class="space-y-4">
           <h4 class="font-bold text-sm">❌ Sem Charset (Erro de Encoding)</h4>
           <p class="text-xs text-muted-foreground">Repare nos caracteres corrompidos no preview.</p>
           <pre><code class="language-html">
&lt;h1&gt;ConfiguraÃ§Ã£o de AcentuaÃ§Ã£o&lt;/h1&gt;
&lt;p&gt;Sem o UTF-8, o sistema falha ao ler o til e o cedilha.&lt;/p&gt;
           </code></pre>

           <h4 class="font-bold text-green-500 text-sm">✅ Com Charset UTF-8 (Suporte Universal)</h4>
           <pre><code class="language-html">
&lt;meta charset="UTF-8"&gt;
&lt;h1&gt;Configuração de Acentuação&lt;/h1&gt;
&lt;p&gt;Com UTF-8, o texto é processado com perfeição.&lt;/p&gt;
           </code></pre>
        </div>

        <div class="space-y-4">
           <h4 class="font-bold text-sm">❌ Sem Viewport (Simulação de Desktop)</h4>
           <p class="text-xs text-muted-foreground">No modo mobile, o texto fica minúsculo (browser assume 980px).</p>
           <pre><code class="language-html">
&lt;h1&gt;Ecrã Esmagado&lt;/h1&gt;
&lt;p&gt;O utilizador é forçado a fazer zoom para conseguir ler este parágrafo no telemóvel.&lt;/p&gt;
           </code></pre>

           <h4 class="font-bold text-green-500 text-sm">✅ Com Viewport (Escala 1:1)</h4>
           <pre><code class="language-html">
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
&lt;h1&gt;Site Mobile-Ready&lt;/h1&gt;
&lt;p&gt;Este texto é legível instantaneamente em qualquer dispositivo.&lt;/p&gt;
           </code></pre>
        </div>
      </section>

      <!-- 3. TEXTOS E SEMÂNTICA -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Conteúdo, Texto e Semântica</h3>
        <p class="text-sm">Um engenheiro master distingue estilo visual de significado semântico.</p>
        
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-primary mb-2">Hierarquia</h4>
            <p class="text-[10px] opacity-70">Use h1 para o título principal, h2 para secções, etc. Nunca salte níveis.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-primary mb-2">Ênfase</h4>
            <p class="text-[10px] opacity-70"><strong>strong</strong> e <em>em</em> dão importância para leitores de ecrã; <b>b</b> e <i>i</i> são apenas visuais.</p>
          </div>
        </div>

        <pre><code class="language-html">
&lt;h1&gt;O meu Projeto Master&lt;/h1&gt;
&lt;p&gt;Esta é uma frase com uma &lt;strong&gt;ênfase importante&lt;/strong&gt;.&lt;/p&gt;
&lt;p&gt;Podemos usar &lt;span style="color:red"&gt;span&lt;/span&gt; para partes específicas.&lt;/p&gt;
&lt;br&gt;
&lt;p&gt;Aqui usamos o &lt;em&gt;itálico semântico&lt;/em&gt;.&lt;/p&gt;
        </code></pre>
      </section>

      <!-- 4. LISTAS, LINKS E IMAGENS -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">4. Listas, Navegação e Ativos</h3>
        <pre><code class="language-html">
&lt;!-- Links e Imagens --&gt;
&lt;a href="https://codworks.mz"&gt;Visitar Codworks&lt;/a&gt;
&lt;img src="https://picsum.photos/seed/1/200" alt="Descrição da imagem para acessibilidade"&gt;

&lt;!-- Listas --&gt;
&lt;h2&gt;O que vais aprender:&lt;/h2&gt;
&lt;ul&gt;
  &lt;li&gt;Lógica Pura&lt;/li&gt;
  &lt;li&gt;Arquitetura&lt;/li&gt;
&lt;/ul&gt;

&lt;ol&gt;
  &lt;li&gt;Passo 1: HTML&lt;/li&gt;
  &lt;li&gt;Passo 2: CSS&lt;/li&gt;
&lt;/ol&gt;
        </code></pre>
      </section>

      <!-- 5. AGRUPAMENTO E FORMULÁRIOS -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">5. Agrupamento e Interação</h3>
        <p class="text-sm">As tags de layout definem a arquitectura da página. O formulário é a porta de entrada de dados.</p>
        
        <pre><code class="language-html">
&lt;header&gt;
  &lt;nav&gt;Menu Principal&lt;/nav&gt;
&lt;/header&gt;

&lt;main&gt;
  &lt;section&gt;
    &lt;article&gt;Conteúdo de Notícia&lt;/article&gt;
    &lt;aside&gt;Barra Lateral Complementar&lt;/aside&gt;
  &lt;/section&gt;

  &lt;form&gt;
    &lt;label for="user"&gt;Usuário:&lt;/label&gt;
    &lt;input id="user" type="text"&gt;
    &lt;button type="submit"&gt;Entrar&lt;/button&gt;
  &lt;/form&gt;
&lt;/main&gt;

&lt;footer&gt;Rodapé Legal&lt;/footer&gt;
        </code></pre>
      </section>

      <!-- 6. MULTIMÉDIA E EXTERNOSS -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">6. Multimédia e Conexões Externas</h3>
        <pre><code class="language-html">
&lt;!-- Multimédia --&gt;
&lt;video src="movie.mp4" controls&gt;&lt;/video&gt;
&lt;audio src="music.mp3" controls&gt;&lt;/audio&gt;

&lt;!-- Conexões --&gt;
&lt;link rel="stylesheet" href="style.css"&gt;
&lt;script src="app.js"&gt;&lt;/script&gt;
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Regra do Arquiteto</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Escrever HTML sem as tags de cabeçalho e viewport é como construir uma casa sem janelas. O sistema funciona, mas ninguém consegue habitá-lo confortavelmente."
        </p>
      </section>
    </div>
  `,
  quizId: "web-t1-quiz"
};
