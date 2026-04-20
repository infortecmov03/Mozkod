import type { KnowledgeArea, TheoryLesson } from '../../types';

const cssLessons: TheoryLesson[] = [
  { id: "css-m1", title: "Seletores Avançados e Especificidade", content: "<p>Domínio de seletores complexos e gestão de cascata em larga escala.</p>", quizId: "css-mq1" },
  { id: "css-m2", title: "Layouts de Elite: CSS Grid Avançado", content: "<p>Grelhas dinâmicas, subgrids e alinhamento de precisão.</p>", quizId: "css-mq2" },
  { id: "css-m3", title: "Animações e Transições de Alta Performance", content: "<p>Usando transformações de hardware para 60fps.</p>", quizId: "css-mq3" },
  { id: "css-m4", title: "CSS Variables e Tematização Dinâmica", content: "<p>Arquitetura de temas Dark/Light sem duplicação de código.</p>", quizId: "css-mq4" },
  { id: "css-m5", title: "CSS-in-JS e Frameworks Utilitários", content: "<p>Tailwind, Styled Components e a evolução da estilização.</p>", quizId: "css-mq5" },
  { id: "css-m6", title: "Design Systems e Design Tokens", content: "<p>Escalando a identidade visual através de código.</p>", quizId: "css-mq6" },
  { id: "css-m7", title: "Acessibilidade Visual e Contraste", content: "<p>Garantindo legibilidade em todos os dispositivos.</p>", quizId: "css-mq7" },
  { id: "css-m8", title: "Filtros, Mix-Blend-Mode e Efeitos", content: "<p>Manipulação de imagem diretamente via CSS.</p>", quizId: "css-mq8" },
  { id: "css-m9", title: "Container Queries e Modern Responsive", content: "<p>Design que se adapta ao pai, não ao ecrã.</p>", quizId: "css-mq9" },
  { id: "css-m10", title: "Otimização de Renderização (Critical CSS)", content: "<p>Como evitar o Flash of Unstyled Content (FOUC).</p>", quizId: "css-mq10" }
];

export const cssKA: KnowledgeArea = {
  id: 'lang-css',
  title: '02. CSS Master',
  description: 'Arquitetura de estilos e layouts de alta performance.',
  load: '40h',
  iconName: 'Palette',
  theory: cssLessons,
  practice: {
    css: [
      {
        id: 'css-p1',
        language: 'css',
        title: 'Laboratório: Grid Master',
        description: 'Criação de um layout dashboard complexo.',
        statement: 'Defina um grid com 12 colunas e áreas nomeadas.',
        template: 'display: grid; grid-template-columns: repeat(12, 1fr);',
        detailedExplanation: '<p>Grid áreas nomeadas facilitam a manutenção de layouts complexos.</p>',
        objectives: [{ id: 'obj1', description: 'Usar repeat(12)', test: 'repeat(12' }]
      }
    ]
  },
  quizzes: cssLessons.map(l => ({ id: l.quizId, title: `Quiz: ${l.title}`, questions: [], passingScore: 80 }))
};
