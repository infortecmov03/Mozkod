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
             <div class="bg-black/40 p-4 rounded-xl font-code text-[11px] mb-4 text-green-400">
               &lt;meta charset="UTF-8"&gt;<br/>
               &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
             </div>
             <p class="text-xs leading-relaxed mb-4">
               <strong>Erro por omissão:</strong> Sem o <code>charset</code>, caracteres especiais (como o 'ç' ou 'ã') aparecem como símbolos estranhos (encoding mismatch). Sem a <code>viewport</code>, o site no telemóvel aparece "esmagado", como se fosse um desktop minúsculo.
             </p>
             <div class="p-3 bg-red-500/10 rounded-xl border border-red-500/20 text-[10px] text-red-400">
               ⚠️ <strong>Quando NÃO usar:</strong> Nunca omita. São obrigatórias em 100% dos projetos modernos.
             </div>
          </div>

          <div class="bg-card p-6 rounded-3xl border border-white/5 shadow-xl">
             <h4 class="font-bold text-primary mb-3">Social & SEO (Open Graph)</h4>
             <div class="bg-black/40 p-4 rounded-xl font-code text-[11px] mb-4 text-green-400">
               &lt;meta name="description" content="Curso de Engenharia em Moçambique"&gt;<br/>
               &lt;meta property="og:image" content="cover.jpg"&gt;
             </div>
             <p class="text-xs leading-relaxed mb-4">
               <strong>Erro por omissão:</strong> O seu link no WhatsApp ou LinkedIn aparece sem imagem e sem descrição atraente, reduzindo a taxa de cliques (CTR) em até 80%.
             </p>
             <div class="p-3 bg-yellow-500/10 rounded-xl border border-yellow-500/20 text-[10px] text-yellow-500">
               💡 <strong>Quando NÃO usar:</strong> Em sistemas internos (Dashboards privados) onde a indexação do Google e a partilha social não são permitidas ou necessárias.
             </div>
          </div>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. O Esqueleto Semântico: &lt;body&gt;</h3>
        
        <div class="space-y-6">
          <div class="bg-card p-6 rounded-3xl border border-white/5">
            <h4 class="font-bold text-orange-400 mb-3 uppercase tracking-widest text-xs">A Identidade: header & nav</h4>
            <div class="bg-black/40 p-4 rounded-xl font-code text-[11px] mb-4 text-blue-300 leading-relaxed">
              &lt;header&gt;<br/>
              &nbsp;&nbsp;&lt;img src="logo.svg" alt="Codworks"&gt;<br/>
              &nbsp;&nbsp;&lt;nav&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt;&lt;li&gt;&lt;a href="/"&gt;Home&lt;/a&gt;&lt;/li&gt;&lt;/ul&gt;<br/>
              &nbsp;&nbsp;&lt;/nav&gt;<br/>
              &lt;/header&gt;
            </div>
            <p class="text-xs opacity-80">
              <strong>Uso Prático:</strong> Contém o que é persistente no topo. O <code>&lt;nav&gt;</code> deve envolver apenas os blocos de navegação <strong>principais</strong>.
            </p>
            <div class="mt-4 p-3 bg-red-500/10 rounded-xl border border-red-500/20 text-[10px] text-red-400 italic">
              ❌ <strong>Erro Comum:</strong> Usar &lt;nav&gt; para links de rodapé ou botões soltos.
            </div>
          </div>

          <div class="bg-card p-6 rounded-3xl border border-white/5">
            <h4 class="font-bold text-orange-400 mb-3 uppercase tracking-widest text-xs">O Coração: main & article</h4>
            <div class="bg-black/40 p-4 rounded-xl font-code text-[11px] mb-4 text-blue-300 leading-relaxed">
              &lt;main role="main"&gt;<br/>
              &nbsp;&nbsp;&lt;article&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;Fase 1: HTML&lt;/h2&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;section&gt;...&lt;/section&gt;<br/>
              &nbsp;&nbsp;&lt;/article&gt;<br/>
              &lt;/main&gt;
            </div>
            <p class="text-xs opacity-80">
              <strong>Uso Prático:</strong> <code>&lt;main&gt;</code> é o alvo principal do foco do leitor de ecrã. <code>&lt;article&gt;</code> é usado para conteúdo que pode ser distribuído independentemente (como um post ou card de produto).
            </p>
            <div class="mt-4 p-3 bg-green-500/10 rounded-xl border border-green-500/20 text-[10px] text-green-400 italic">
              ✅ <strong>Diretriz Master:</strong> Só deve existir UM &lt;main&gt; por página.
            </div>
          </div>

          <div class="bg-card p-6 rounded-3xl border border-white/5">
            <h4 class="font-bold text-orange-400 mb-3 uppercase tracking-widest text-xs">O Suporte: section & aside</h4>
            <p class="text-xs opacity-80 mb-4">
              Use <code>&lt;section&gt;</code> para agrupar conteúdos relacionados que tenham um título (h2-h6). Use <code>&lt;aside&gt;</code> para barras laterais, banners ou citações que são secundários ao texto principal.
            </p>
            <div class="p-3 bg-yellow-500/10 rounded-xl border border-yellow-500/20 text-[10px] text-yellow-500">
               ⚠️ <strong>Quando NÃO usar:</strong> Não use &lt;section&gt; apenas como um container de estilo (use &lt;div&gt; para isso).
            </div>
          </div>

          <div class="bg-card p-6 rounded-3xl border border-white/5">
            <h4 class="font-bold text-orange-400 mb-3 uppercase tracking-widest text-xs">A Autoridade: footer</h4>
            <div class="bg-black/40 p-4 rounded-xl font-code text-[11px] mb-4 text-blue-300">
              &lt;footer&gt;<br/>
              &nbsp;&nbsp;&lt;p&gt;&copy; 2024 Codworks Moz&lt;/p&gt;<br/>
              &nbsp;&nbsp;&lt;address&gt;Maputo, Moçambique&lt;/address&gt;<br/>
              &lt;/footer&gt;
            </div>
            <p class="text-xs opacity-80">
              <strong>Uso Prático:</strong> Metadados legais, links de política, e informações de contacto (usando <code>&lt;address&gt;</code>).
            </p>
          </div>
        </div>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Resumo da Decisão</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Se o elemento tem um significado lógico para o utilizador, use uma tag semântica. Se o elemento existe apenas para que o CSS o pinte ou o posicione, use uma &lt;div&gt;."
        </p>
      </section>
    </div>
  `,
  quizId: "web-t1-quiz"
};
