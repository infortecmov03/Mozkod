import type { KnowledgeArea } from '../../types';

export const practice: KnowledgeArea['practice'] = {
  projects: [
    { id: 'proj-portfolio', title: 'Projeto: Portfólio Pessoal', statement: 'Construa uma página de portfólio pessoal usando HTML e CSS.', template: '<!-- index.html -->\n\n<!-- styles.css -->' },
    { id: 'proj-landing', title: 'Projeto: Landing Page de Produto', statement: 'Crie uma landing page para um produto fictício.', template: '<!-- index.html -->\n\n<!-- styles.css -->' }
  ]
};
