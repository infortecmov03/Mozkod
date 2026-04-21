import { lesson as l1 } from './theory/01-estrutura-html';
import { lesson as l2 } from './theory/02-css-seletores';
import { lesson as l3 } from './theory/03-css-box-model';
import { lesson as l4 } from './theory/04-css-flexbox';
import { lesson as l5 } from './theory/05-css-grid';
import { lesson as l6 } from './theory/06-responsividade';
import { lesson as l7 } from './theory/07-formularios';
import { lesson as l8 } from './theory/08-publicacao-web';
import { lesson as l9 } from './theory/09-semantica-seo';

export const lessons = [
  l1, l2, l3, l4, l5, l6, l7, l8, l9,
  {
    id: "web-t10",
    title: "SVG e Gráficos Vetoriais",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>📐 Imagens que nunca quebram</h2><p>Entenda como usar o formato SVG para ícones e ilustrações que mantêm a nitidez em qualquer nível de zoom e resolução.</p></div>`,
    quizId: "web-q10"
  },
  {
    id: "web-t11",
    title: "Acessibilidade e Padrões ARIA",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>♿ Web para Todos</h2><p>Como usar atributos ARIA e tags semânticas para garantir que pessoas com deficiência consigam navegar no teu site com leitores de ecrã.</p></div>`,
    quizId: "web-q11"
  },
  {
    id: "web-t12",
    title: "Animações e Transições CSS",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🎬 Movimento Fluido</h2><p>Aprenda a criar micro-interações e animações complexas usando apenas CSS, sem sobrecarregar o processador.</p></div>`,
    quizId: "web-q12"
  },
  {
    id: "web-t13",
    title: "Arquitetura BEM e CSS Limpo",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🏗️ Organizando Estilos em Larga Escala</h2><p>Metodologias profissionais para nomear classes e evitar que o teu CSS se torne um caos impossível de manter.</p></div>`,
    quizId: "web-q13"
  },
  {
    id: "web-t14",
    title: "Protocolo HTTP e Cabeçalhos",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>📡 A Conversa entre Browser e Servidor</h2><p>Entenda como os dados viajam pela rede, o papel dos status codes (200, 404, 500) e os cookies.</p></div>`,
    quizId: "web-q14"
  },
  {
    id: "web-t15",
    title: "Performance Web e Core Vitals",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>⚡ Velocidade é Dinheiro</h2><p>Como otimizar o tempo de carregamento e as métricas do Google (LCP, FID, CLS) para uma experiência de elite.</p></div>`,
    quizId: "web-q15"
  },
  {
    id: "web-t16",
    title: "Segurança Web: HTTPS e CSP",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🛡️ Blindando a Interface</h2><p>Introdução a certificados SSL e Content Security Policies para prevenir ataques de injeção de scripts (XSS).</p></div>`,
    quizId: "web-q16"
  },
  {
    id: "web-t17",
    title: "PWA: Progressive Web Apps",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>📱 Sites com Cara de App</h2><p>Como permitir que o teu site funcione offline e possa ser instalado no telemóvel do utilizador.</p></div>`,
    quizId: "web-q17"
  },
  {
    id: "web-t18",
    title: "DevTools: Inspeção e Debugging",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🔍 A Ferramenta do Detetive Web</h2><p>Domínio profundo da consola do browser para encontrar erros de layout, rede e performance.</p></div>`,
    quizId: "web-q18"
  },
  {
    id: "web-t19",
    title: "Tipografia e Web Fonts Otimizadas",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🖋️ A Arte da Leitura Digital</h2><p>Como carregar fontes personalizadas sem atrasar o render da página e garantir legibilidade máxima.</p></div>`,
    quizId: "web-q19"
  },
  {
    id: "web-t20",
    title: "Layouts Flexíveis com Container Queries",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>📦 O Futuro da Responsividade</h2><p>Aprenda a criar componentes que mudam de estilo baseados no espaço do pai, e não no tamanho do ecrã.</p></div>`,
    quizId: "web-q20"
  },
  {
    id: "web-t21",
    title: "Fronteira com JavaScript (DOM Intro)",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🧠 Ligando a Lógica à Interface</h2><p>Preparação para o Nível 2: Como o JavaScript encontra e manipula os elementos que criaste com HTML e CSS.</p></div>`,
    quizId: "web-q21"
  }
];
