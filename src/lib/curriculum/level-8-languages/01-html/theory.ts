import { lesson as l1 } from './theory/01-structure';
import { lesson as l2 } from './theory/01-semantics';
import { lesson as l3 } from './theory/02-seo-metadata';
import { lesson as l4 } from './theory/03-ssr-hydration';
import { lesson as l5 } from './theory/04-web-components';
import { lesson as l6 } from './theory/05-forms-master';
import { lesson as l7 } from './theory/07-multimedia';
import { lesson as l8 } from './theory/08-performance-master';

export const lessons = [
  l1, l2, l3, l4, l5, l6, l7, l8,
  {
    id: "html-m9",
    title: "Shadow DOM Internals e Encapsulamento de Elite",
    content: `
      <div class="space-y-6">
        <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
          <h2 class="text-2xl font-bold mb-4">🌑 O Escudo do Componente</h2>
          <p class="text-lg">O Shadow DOM não é apenas "esconder" HTML. É sobre criar uma fronteira de renderização que impede o vazamento de estilos e eventos.</p>
        </div>
        <div class="prose prose-invert max-w-none">
          <h3>Mode Open vs Closed</h3>
          <p>No modo <strong>open</strong>, a árvore é acessível via <code>element.shadowRoot</code>. No modo <strong>closed</strong>, ela é totalmente privada. Engenheiros de Design Systems usam o modo open para permitir ferramentas de automação e testes.</p>
          <h3>CSS Custom Properties (Theming)</h3>
          <p>A única forma recomendada de estilizar dentro de um Shadow DOM por fora é através de variáveis CSS (Custom Properties), que atravessam a fronteira do shadow.</p>
        </div>
      </div>
    `,
    quizId: "html-mq9"
  },
  {
    id: "html-m10",
    title: "Gestão de Foco e Acessibilidade em SPAs",
    content: `
      <div class="space-y-6">
        <div class="bg-accent/5 p-6 rounded-2xl border border-accent/10">
          <h2 class="text-2xl font-bold mb-4">⌨️ Navegação Master</h2>
          <p>Em aplicações de página única (SPA), o browser não gere o foco automaticamente após uma transição de rota. O engenheiro deve fazer isso manualmente.</p>
        </div>
        <div class="prose prose-invert max-w-none">
          <h3>Atributo Inert</h3>
          <p>O atributo <code>inert</code> é uma ferramenta poderosa que desativa a interação e o foco de toda uma árvore DOM, ideal para modais e menus laterais abertos.</p>
          <h3>Focus Trapping</h3>
          <p>Garantir que o utilizador de teclado não "escape" de um diálogo para o fundo da página é um requisito de conformidade legal de acessibilidade.</p>
        </div>
      </div>
    `,
    quizId: "html-mq10"
  },
  {
    id: "html-m11",
    title: "SVG Acessível e Otimização de Performance",
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">📐 Vetores como Código</h2>
        <p>SVGs não são imagens, são documentos XML. Tratá-los como tal permite animações e acessibilidade superior.</p>
        <div class="bg-card p-4 rounded-xl border font-code text-sm">
          &lt;svg role="img" aria-labelledby="title-id"&gt;<br/>
          &nbsp;&nbsp;&lt;title id="title-id"&gt;Logo da Empresa&lt;/title&gt;<br/>
          &nbsp;&nbsp;...<br/>
          &lt;/svg&gt;
        </div>
        <p>Remover metadados inúteis de editores (como o do Illustrator) reduz o tamanho do HTML final e acelera o parsing do DOM.</p>
      </div>
    `,
    quizId: "html-mq11"
  },
  {
    id: "html-m12",
    title: "Constraint Validation API: Lógica Nativa",
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">🛡️ Validando na Fonte</h2>
        <p>Antes de usar bibliotecas pesadas de validação, aprenda a usar a API nativa do browser que é muito mais performática.</p>
        <ul class="list-disc ml-6 space-y-2">
          <li><strong>checkValidity():</strong> Retorna se o input é válido.</li>
          <li><strong>setCustomValidity():</strong> Permite definir mensagens de erro personalizadas que o browser exibe nativamente.</li>
          <li><strong>ValidityState:</strong> Objeto detalhado com o motivo da falha (badInput, patternMismatch, valueMissing).</li>
        </ul>
      </div>
    `,
    quizId: "html-mq12"
  },
  {
    id: "html-m13",
    title: "Multimedia: WebVTT e Captions Master",
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">🎬 Legendagem e Transcrições</h2>
        <p>WebVTT (Web Video Text Tracks) é o padrão para sincronizar texto com media. Permite não só legendas, mas também capítulos e descrições para cegos.</p>
        <div class="bg-muted p-4 rounded-xl font-code text-xs">
          WEBVTT<br/><br/>
          00:00:01.000 --> 00:00:04.000<br/>
          Olá, bem-vindos à Codworks Moz!
        </div>
      </div>
    `,
    quizId: "html-mq13"
  },
  {
    id: "html-m14",
    title: "Canvas 2D: Rendering Pipeline e Buffers",
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">🖌️ Engenharia Gráfica</h2>
        <p>Desenhar no Canvas exige entender o ciclo de atualização do ecrã. Usar <code>requestAnimationFrame</code> em vez de <code>setInterval</code> é a diferença entre uma animação fluida e uma "engasgada".</p>
        <h3>OffscreenCanvas</h3>
        <p>Permite renderizar gráficos numa Web Worker, libertando a thread principal para manter a interface interativa enquanto processas gráficos pesados.</p>
      </div>
    `,
    quizId: "html-mq14"
  },
  {
    id: "html-m15",
    title: "WebAssembly: O Binário no seu HTML",
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">⚙️ Velocidade Próxima do Nativo</h2>
        <p>WebAssembly (Wasm) permite correr código escrito em C++, Rust ou Go no browser. O HTML serve como o contentor que instancia o módulo binário e o liga ao JavaScript.</p>
        <p>Ideal para editores de vídeo, processamento de imagem e cálculos matemáticos intensivos que o JavaScript não consegue processar em tempo útil.</p>
      </div>
    `,
    quizId: "html-mq15"
  },
  {
    id: "html-m16",
    title: "Fetch Priority e Gestão de LCP",
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">⚡ Priorizando o que Importa</h2>
        <p>O atributo <code>fetchpriority="high"</code> em imagens hero garante que o browser as descarregue antes de scripts ou estilos secundários, melhorando drasticamente a métrica LCP.</p>
        <p>Aprender a diferença entre <strong>Preload</strong> (carregamento obrigatório imediato) e <strong>Prefetch</strong> (carregamento para a próxima página) é vital.</p>
      </div>
    `,
    quizId: "html-mq16"
  },
  {
    id: "html-m17",
    title: "Content Security Policy (CSP) Profundo",
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold text-red-400">🛡️ Blindagem contra Injeção</h2>
        <p>O CSP é a ferramenta mais forte contra ataques XSS. No nível Master, configuramos políticas restritivas através de meta tags ou cabeçalhos HTTP.</p>
        <p>Entender como usar <strong>Nonces</strong> (números usados uma única vez) permite executar scripts internos com segurança sem abrir brechas para scripts maliciosos de terceiros.</p>
      </div>
    `,
    quizId: "html-mq17"
  },
  {
    id: "html-m18",
    title: "Service Workers e App Shell Architecture",
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">📶 Conectividade Resiliente</h2>
        <p>O Service Worker é um proxy entre o browser e a rede. Ele permite que o teu esqueleto HTML (App Shell) carregue instantaneamente, mesmo offline.</p>
        <p>Este módulo ensina a desenhar a arquitetura "Offline First", onde a interface é carregada do cache e os dados são sincronizados em background.</p>
      </div>
    `,
    quizId: "html-mq18"
  },
  {
    id: "html-m19",
    title: "WebGPU: O Futuro do Gráfico no Browser",
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">🎮 Computação em GPU</h2>
        <p>O sucessor do WebGL. O WebGPU dá acesso de baixo nível ao hardware gráfico, permitindo não só gráficos 3D incríveis, mas também treino de modelos de IA diretamente no browser.</p>
      </div>
    `,
    quizId: "html-mq19"
  },
  {
    id: "html-m20",
    title: "Microdata, JSON-LD e SEO de Dados",
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">🏷️ Web Semântica de Dados</h2>
        <p>Aprenda a estruturar dados para que o Google exiba "Rich Snippets" (estrelas, preços, stock) diretamente nos resultados de busca usando JSON-LD e Schema.org.</p>
      </div>
    `,
    quizId: "html-mq20"
  },
  {
    id: "html-m21",
    title: "Security Master: Cookies e Persistência Segura",
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold text-red-500">🔒 Blindagem Final</h2>
        <p>Configuração de cookies com <strong>SameSite=Strict</strong>, <strong>HttpOnly</strong> e <strong>Secure</strong>. Entenda o impacto da Privacy Sandbox no armazenamento local.</p>
      </div>
    `,
    quizId: "html-mq21"
  }
];
