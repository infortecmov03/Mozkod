import type { KnowledgeArea, TheoryLesson, Quiz } from '../../types';

const cssLessons: TheoryLesson[] = [
  { id: "css-m1", title: "Seletores Avançados e Especificidade", content: "<p>Cálculo de pesos, pseudo-classes complexas (:is, :where, :has) e gestão de cascata.</p>", quizId: "css-mq1" },
  { id: "css-m2", title: "Layouts de Elite: CSS Grid Avançado", content: "<p>Subgrids, áreas nomeadas e funções minmax para flexibilidade total.</p>", quizId: "css-mq2" },
  { id: "css-m3", title: "Animações e Transições de Alta Performance", content: "<p>Propriedades will-change, transform e opacity para evitar repaints caros.</p>", quizId: "css-mq3" },
  { id: "css-m4", title: "CSS Variables e Tematização", content: "<p>Arquitetura de tokens para sistemas escaláveis e mudança dinâmica de estados.</p>", quizId: "css-mq4" },
  { id: "css-m5", title: "CSS-in-JS e Utility First", content: "<p>Prós e contras de Tailwind vs Styled Components em larga escala.</p>", quizId: "css-mq5" },
  { id: "css-m6", title: "Design Systems e Tokens", content: "<p>Como converter designs de Figma em código CSS reutilizável e consistente.</p>", quizId: "css-mq6" },
  { id: "css-m7", title: "Acessibilidade Visual", content: "<p>Esquemas de cores adaptáveis (prefers-color-scheme) e contraste WCAG.</p>", quizId: "css-mq7" },
  { id: "css-m8", title: "Filtros e Efeitos Modernos", content: "<p>Backdrop-filter, clip-path e máscaras para UIs cinematográficas.</p>", quizId: "css-mq8" },
  { id: "css-m9", title: "Container Queries", content: "<p>O fim da dependência absoluta das Media Queries para componentes modulares.</p>", quizId: "css-mq9" },
  { id: "css-m10", title: "Otimização e Rendering Path", content: "<p>Entendendo como o browser desenha a página para otimizar o LCP.</p>", quizId: "css-mq10" }
];

const cssQuizzes: Quiz[] = [
  {
    id: "css-mq1",
    title: "Quiz: Seletores e Especificidade",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Qual a principal diferença entre os seletores :is() e :where()?",
        options: [
          ":is() aceita apenas IDs",
          ":where() não adiciona peso à especificidade (especificidade zero)",
          ":is() não funciona em navegadores modernos",
          ":where() é usado apenas para animações"
        ],
        correctAnswer: 1
      },
      {
        id: "q2",
        question: "O que faz a pseudo-classe :has()?",
        options: [
          "Seleciona um elemento se ele contiver um descendente que satisfaça a condição",
          "Verifica se o usuário tem permissão de administrador",
          "Adiciona uma sombra a um elemento",
          "Seleciona apenas o último elemento de uma lista"
        ],
        correctAnswer: 0
      }
    ]
  }
];

export const cssKA: KnowledgeArea = {
  id: 'lang-css',
  title: '02. CSS Master',
  description: 'Arquitetura de estilos e layouts de alta performance para produtos globais.',
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
        statement: 'Use subgrid para alinhar o conteúdo interno de um card com o grid do pai.',
        template: 'display: grid; grid-template-rows: subgrid;',
        detailedExplanation: '<p>Subgrid permite que filhos herdem as definições de linhas/colunas do pai.</p>',
        objectives: [{ id: 'obj1', description: 'Usar subgrid', test: 'subgrid' }]
      }
    ]
  },
  quizzes: cssQuizzes
};
