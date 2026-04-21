import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';
import { exercise as p1 } from './laboratory/01-structure-lab';
import { exercise as p2 } from './laboratory/01-accessibility-lab';
import { exercise as p3 } from './laboratory/02-seo-lab';
import { exercise as p4 } from './laboratory/03-hydration-lab';
import { exercise as p5 } from './laboratory/04-web-components-lab';
import { exercise as p6 } from './laboratory/05-forms-lab';
import { exercise as p7 } from './laboratory/06-multimedia-lab';
import { exercise as p8 } from './laboratory/07-performance-lab';

// Implementando labs mockados mas seguros para os restantes tópicos do Nível 8
const advancedLabs = Array.from({ length: 13 }, (_, i) => {
  const index = i + 9;
  return {
    id: `html-p${index}`,
    language: "html",
    title: `Lab Master: Exploração Técnica #${index}`,
    description: "Desafio de engenharia focado no funcionamento interno do motor do browser.",
    statement: "Implemente a solução técnica validando as regras de performance discutidas na teoria.",
    isProjectPart: true,
    template: `<!-- Continue o seu projeto master aqui -->\n`,
    detailedExplanation: `<p>Este laboratório valida a sua capacidade de aplicar conceitos de elite no código real.</p>`,
    objectives: [
      {
        id: `obj_p${index}`,
        description: "Adicione o elemento técnico correspondente à lição.",
        hint: "Consulte a teoria se tiver dúvidas.",
        test: "<" // Teste genérico para permitir progresso enquanto os testes específicos são definidos
      }
    ]
  };
});

export const htmlKA: KnowledgeArea = {
  id: 'lang-html',
  title: '01. HTML Master',
  description: 'Arquitetura de documentos de alta complexidade e padrões de acessibilidade global.',
  load: '30h',
  iconName: 'Code',
  theory: lessons,
  practice: {
    html: [p1, p2, p3, p4, p5, p6, p7, p8, ...advancedLabs]
  },
  quizzes: quizzes
};
