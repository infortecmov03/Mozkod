import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';
import { exercise as p1 } from './laboratory/01-interactivity-lab';

export const javascriptKA: KnowledgeArea = {
  id: 'lang-javascript',
  title: '03. JavaScript Master',
  description: 'Profundidade técnica na linguagem da web: de motores a metaprogramação.',
  load: '50h',
  iconName: 'Zap',
  theory: lessons,
  practice: {
    html: [
      p1,
      ...Array.from({ length: 20 }, (_, i) => ({
        id: `js-p${i + 2}`,
        language: "html",
        title: `Lab JS Master #${i + 2}`,
        description: "Evolução da lógica do projeto com padrões avançados.",
        statement: "Implemente a solução técnica validando as regras de JavaScript discutidas na teoria.",
        isProjectPart: true,
        template: ``,
        detailedExplanation: `<p>Continue a desenvolver a inteligência do seu Projeto Master.</p>`,
        objectives: [{ id: `obj_p${i + 2}`, description: "Adicione a lógica JavaScript solicitada.", test: "(" }]
      }))
    ]
  },
  quizzes: quizzes
};
