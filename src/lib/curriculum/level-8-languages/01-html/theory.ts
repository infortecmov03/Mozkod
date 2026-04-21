import { lesson as l1 } from './theory/01-structure';
import { lesson as l2 } from './theory/01-semantics';
import { lesson as l3 } from './theory/02-seo-metadata';
import { lesson as l4 } from './theory/03-ssr-hydration';
import { lesson as l5 } from './theory/04-web-components';
import { lesson as l6 } from './theory/05-forms-master';
import { lesson as l7 } from './theory/07-multimedia';
import { lesson as l8 } from './theory/08-performance-master';

// Adicionando definições reais para os tópicos restantes de HTML Master
const advancedTheory = [
  {
    id: "html-m9",
    title: "Shadow DOM Internals e Encapsulamento",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🌑 Isolamento de Árvores DOM</h2><p>Estudo profundo sobre o modo 'open' vs 'closed', 'slots', e como o browser isola estilos e eventos dentro de componentes personalizados para evitar vazamentos de CSS.</p></div>`,
    quizId: "html-mq9"
  },
  {
    id: "html-m10",
    title: "Gestão de Foco e Tab Index em SPAs",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>⌨️ Navegação por Teclado</h2><p>Como gerir o foco programaticamente em aplicações de página única para garantir que usuários de teclado e leitores de ecrã não se percam após navegações.</p></div>`,
    quizId: "html-mq10"
  },
  {
    id: "html-m11",
    title: "SVG Acessível e Otimização Vetorial",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>📐 Gráficos Semânticos</h2><p>Transformando SVGs em cidadãos de primeira classe na acessibilidade através de tags <title>, <desc> e o uso correto de roles ARIA em elementos internos do vetor.</p></div>`,
    quizId: "html-mq11"
  },
  {
    id: "html-m12",
    title: "Validação Complexa de Formulários (Constraint API)",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🛡️ Integridade de Input</h2><p>Uso da API checkValidity() e setCustomValidity() para criar regras de negócio complexas que correm nativamente no browser antes mesmo do JavaScript do utilizador.</p></div>`,
    quizId: "html-mq12"
  },
  {
    id: "html-m13",
    title: "Multimedia Captions e WebVTT Master",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🎬 Acessibilidade em Vídeo</h2><p>Padrões WebVTT para legendagem dinâmica, capítulos de vídeo e descrições áudio para conformidade total com as normas internacionais.</p></div>`,
    quizId: "html-mq13"
  },
  {
    id: "html-m14",
    title: "Canvas 2D Rendering Engine Internals",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🖌️ Desenho por Código</h2><p>Manipulação de buffers de imagem, transformações de matriz e otimização de desenho para atingir 60 FPS em animações complexas.</p></div>`,
    quizId: "html-mq14"
  },
  {
    id: "html-m15",
    title: "WebAssembly e Manipulação Direta do DOM",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>⚙️ O Futuro do Binário</h2><p>Como o WebAssembly interage com o HTML e por que a proposta de acesso direto ao DOM mudará a performance de aplicações web intensivas.</p></div>`,
    quizId: "html-mq15"
  },
  {
    id: "html-m16",
    title: "Resource Hints Avançados e Prioridades",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>⚡ Fetch Priority e Preload</h2><p>Domine o atributo fetchpriority e entenda as diferenças cruciais entre preload, prefetch e prerender para otimizar o tempo de interação do usuário.</p></div>`,
    quizId: "html-mq16"
  },
  {
    id: "html-m17",
    title: "Content Security Policy (CSP) no HTML",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🛡️ Blindagem contra XSS</h2><p>Como configurar meta tags CSP para impedir injeção de scripts e garantir que apenas recursos de fontes confiáveis sejam carregados no navegador.</p></div>`,
    quizId: "html-mq17"
  },
  {
    id: "html-m18",
    title: "Service Workers e Offline HTML Architecture",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>📶 Web Sem Conexão</h2><p>Estratégias de cache (Cache-first, Stale-while-revalidate) para garantir que o esqueleto HTML esteja disponível instantaneamente mesmo em redes precárias.</p></div>`,
    quizId: "html-mq18"
  },
  {
    id: "html-m19",
    title: "WebGPU e o Futuro do Gráfico no Canvas",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🎮 Computação em GPU</h2><p>Introdução ao WebGPU como sucessor do WebGL para acesso de baixo nível à placa gráfica diretamente do seu documento HTML.</p></div>`,
    quizId: "html-mq19"
  },
  {
    id: "html-m20",
    title: "Microdata, RDFa e Schemas Estruturados",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🏷️ A Web de Dados</h2><p>Implementação de Schema.org via Microdata para que motores de busca extraiam preços, ratings e eventos diretamente do seu HTML.</p></div>`,
    quizId: "html-mq20"
  },
  {
    id: "html-m21",
    title: "Segurança de Cookies e Local Storage no HTML5",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🔒 Persistência Segura</h2><p>Políticas SameSite, Secure, HttpOnly e as melhores práticas para guardar estados sensíveis do lado do cliente sem comprometer a segurança.</p></div>`,
    quizId: "html-mq21"
  }
];

export const lessons = [
  l1, l2, l3, l4, l5, l6, l7, l8,
  ...advancedTheory
];
