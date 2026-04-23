import { exerciseHTML1 } from './laboratory/html/01-estrutura-basica';
import { exercise as exerciseCSS1 } from './laboratory/css/01-seletores';
import { exercise as exerciseCSS2 } from './laboratory/css/02-box-model-lab';
import { exercise as exerciseFlex } from './laboratory/css/04-flexbox-lab';
import { exercise as exerciseGrid } from './laboratory/css/05-grid-lab';
import { exercise as exerciseResp } from './laboratory/css/06-media-queries-lab';
import { exercise as exerciseForms } from './laboratory/html/02-formularios-lab';
import { exercise as exerciseDeploy } from './laboratory/03-deployment-lab';
import { exercise as exerciseSem } from './laboratory/04-semantica-lab';
import { exercise as exerciseSVG } from './laboratory/05-svg-lab';
import { exercise as exerciseARIA } from './laboratory/11-aria-lab';
import { exercise as exerciseAnim } from './laboratory/06-animacoes-lab';
import { exercise as exerciseBEM } from './laboratory/13-bem-refactoring-lab';
import { exercise as exerciseHTTP } from './laboratory/14-http-analysis-lab';
import { exercise as exercisePerf } from './laboratory/15-perf-optimization-lab';

export const practice = {
  html: [
    exerciseHTML1, 
    exerciseForms, 
    exerciseDeploy, 
    exerciseSem, 
    exerciseSVG, 
    exerciseARIA, 
    exerciseAnim, 
    exerciseHTTP, 
    exercisePerf,
    {
      id: "web-p16-csp",
      language: "html",
      title: "Laboratório: Implementação de CSP",
      description: "Proteja o site contra injeção de scripts.",
      statement: "Adicione uma meta tag CSP que permita scripts apenas do próprio domínio ('self').",
      template: "<!-- Adicione a meta CSP aqui -->",
      detailedExplanation: "<p>Utilize o atributo http-equiv='Content-Security-Policy'.</p>",
      objectives: [{ id: "obj1", description: "Configurar CSP self", test: "default-src 'self'" }]
    },
    {
      id: "web-p17-pwa",
      language: "html",
      title: "Laboratório: Configuração de PWA",
      description: "Torne o seu site instalável.",
      statement: "Crie um link para o ficheiro 'manifest.json' na seção head.",
      template: "<head>\n  <!-- Vincule o manifesto aqui -->\n</head>",
      detailedExplanation: "<p>PWAs exigem um link rel='manifest'.</p>",
      objectives: [{ id: "obj1", description: "Vincular manifest.json", test: "rel=\"manifest\"" }]
    },
    {
      id: "web-p18-devtools",
      language: "html",
      title: "Laboratório: Auditoria DevTools",
      description: "Identifique falhas visuais via inspeção.",
      statement: "Encontre a propriedade que define a cor do fundo no editor abaixo e mude para 'black'.",
      template: "<style>\n  body { background-color: white; }\n</style>",
      detailedExplanation: "<p>Este exercício simula a inspeção de elementos e alteração de propriedades no painel Elements.</p>",
      objectives: [{ id: "obj1", description: "Mudar fundo para preto", test: "background-color: black" }]
    }
  ],
  css: [exerciseCSS1, exerciseCSS2, exerciseFlex, exerciseGrid, exerciseResp, exerciseBEM]
};
