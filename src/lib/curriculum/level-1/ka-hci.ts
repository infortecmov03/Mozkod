import type { KnowledgeArea } from '../types';

export const kaHCI: KnowledgeArea = {
    id: "ka-hci",
    title: "Human-Computer Interaction",
    description: "Usabilidade, acessibilidade, design centrado no usuário.",
    load: "20h",
    iconName: "MousePointerClick",
    theory: [
      { 
        id: 'hci-t1', 
        title: 'Princípios de Usabilidade', 
        content: `
          <h2>O que é Usabilidade?</h2>
          <p>Usabilidade é a medida da facilidade com que as pessoas podem usar um produto (como um site ou aplicativo) para atingir seus objetivos de forma eficaz, eficiente e satisfatória.</p>
          <h3>As 10 Heurísticas de Usabilidade de Nielsen:</h3>
          <p>Jakob Nielsen, um pioneiro da usabilidade, definiu 10 princípios gerais para o design de interfaces. Alguns dos mais importantes são:</p>
          <ul>
            <li><strong>Visibilidade do estado do sistema:</strong> O sistema deve sempre manter os usuários informados sobre o que está acontecendo (ex: barras de carregamento).</li>
            <li><strong>Consistência e padrões:</strong> Os usuários não devem ter que se perguntar se palavras, situações ou ações diferentes significam a mesma coisa.</li>
            <li><strong>Prevenção de erros:</strong> Um design cuidadoso que previne a ocorrência de problemas é melhor do que boas mensagens de erro.</li>
            <li><strong>Design minimalista e estético:</strong> As interfaces não devem conter informações irrelevantes ou raramente necessárias.</li>
          </ul>
        `
      },
      {
        id: 'hci-t2',
        title: 'Acessibilidade na Web (a11y)',
        content: `
          <h2>Construindo uma Web para Todos</h2>
          <p>Acessibilidade (muitas vezes abreviada como <strong>a11y</strong>) é a prática de garantir que seus sites e aplicativos possam ser usados por todas as pessoas, independentemente de suas deficiências.</p>
          <h3>Quem se beneficia da acessibilidade?</h3>
          <p>Todos! Isso inclui pessoas com:</p>
          <ul>
            <li>Deficiências visuais (cegueira, baixa visão, daltonismo)</li>
            <li>Deficiências auditivas</li>
            <li>Deficiências motoras (que podem usar apenas teclado ou tecnologias assistivas)</li>
            <li>Deficiências cognitivas</li>
          </ul>
          <h3>Práticas Básicas de Acessibilidade:</h3>
          <ul>
            <li>Usar <strong>HTML semântico</strong> corretamente.</li>
            <li>Fornecer <strong>texto alternativo (alt text)</strong> para todas as imagens.</li>
            <li>Garantir <strong>bom contraste</strong> entre o texto e o fundo.</li>
            <li>Garantir que tudo possa ser navegado e operado <strong>apenas com o teclado</strong>.</li>
          </ul>
        `
      }
    ],
    practice: {},
    quizzes: []
};
