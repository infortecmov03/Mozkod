
import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';
import { exercise as p1 } from './laboratory/01-accessibility-lab';
import { exercise as p2 } from './laboratory/02-seo-lab';
import { exercise as p4 } from './laboratory/04-web-components-lab';

export const htmlKA: KnowledgeArea = {
  id: 'lang-html',
  title: '01. HTML Master',
  description: 'Arquitetura de documentos de alta complexidade e padrões de acessibilidade global.',
  load: '30h',
  iconName: 'Code',
  theory: lessons,
  practice: {
    html: [
      p1, 
      p2,
      {
        id: "html-p3",
        language: "html",
        title: "Lab: SSR & Hydration analysis",
        description: "Análise de performance de renderização.",
        statement: "Identifique o atributo de script que permite carregamento assíncrono.",
        template: "<script src='app.js' ></script>",
        detailedExplanation: "<p>O atributo async permite carregar o JS sem bloquear o parse do HTML.</p>",
        objectives: [{ id: "obj1", description: "Usar async", test: "async" }]
      },
      p4
    ]
  },
  quizzes: quizzes
};
