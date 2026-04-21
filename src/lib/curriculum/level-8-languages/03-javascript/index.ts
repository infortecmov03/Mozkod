import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';
import { exercise as p1 } from './laboratory/01-interactivity-lab';
import { exercise as p2 } from './laboratory/02-mutation-observer-lab';
import { exercise as p3 } from './laboratory/03-custom-events-lab';
import { exercise as p4 } from './laboratory/04-web-workers-lab';
import { exercise as p5 } from './laboratory/05-abort-controller-lab';
import { exercise as p6 } from './laboratory/06-proxy-validation-lab';
import { exercise as p7 } from './laboratory/07-intl-api-lab';
import { exercise as p8 } from './laboratory/08-intersection-observer-lab';
import { exercise as p9 } from './laboratory/09-sanitizer-api-lab';
import { exercise as p10 } from './laboratory/10-streams-api-lab';

export const javascriptKA: KnowledgeArea = {
  id: 'lang-javascript',
  title: '03. JavaScript Master',
  description: 'Profundidade técnica na linguagem da web: de motores a metaprogramação.',
  load: '50h',
  iconName: 'Zap',
  theory: lessons,
  practice: {
    html: [
      p1, p2, p3, p4, p5, p6, p7, p8, p9, p10,
      ...Array.from({ length: 11 }, (_, i) => ({
        id: `js-p${i + 11}`,
        language: "html",
        title: `Lab JS Master #${i + 11}`,
        description: "Evolução da lógica do projeto com padrões avançados.",
        statement: "Implemente a solução técnica validando as regras de JavaScript discutidas na teoria.",
        isProjectPart: true,
        template: ``,
        detailedExplanation: `<p>Continue a desenvolver a inteligência do seu Projeto Master.</p>`,
        objectives: [{ id: `obj_p${i + 11}`, description: "Adicione a lógica JavaScript solicitada.", test: "(" }]
      }))
    ]
  },
  quizzes: quizzes
};
