
import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';
import { exercise as p1 } from './laboratory/01-selectors-lab';

export const cssKA: KnowledgeArea = {
  id: 'lang-css',
  title: '02. CSS Master',
  description: 'Engenharia de estilos, Design Systems e animações de alta performance.',
  load: '40h',
  iconName: 'Palette',
  theory: lessons,
  practice: {
    html: [
      p1,
      ...Array.from({ length: 20 }, (_, i) => ({
        id: `css-p${i + 2}`,
        language: "html",
        title: `Lab CSS Master #${i + 2}`,
        description: "Evolução do projeto com estilos avançados.",
        statement: "Implemente a solução técnica validando as regras de CSS discutidas na teoria.",
        isProjectPart: true,
        template: ``,
        detailedExplanation: `<p>Continue a estilizar o seu Projeto Master com conceitos de elite.</p>`,
        objectives: [{ id: `obj_p${i + 2}`, description: "Adicione as regras CSS solicitadas.", test: "{" }]
      }))
    ]
  },
  quizzes: quizzes
};
