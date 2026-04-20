import type { KnowledgeArea, TheoryLesson } from '../../types';

const jsLessons: TheoryLesson[] = [
  { id: "js-m1", title: "Motores JS e Event Loop", content: "<p>Como o V8 funciona por baixo do capô: Heap e Stack.</p>", quizId: "js-mq1" },
  { id: "js-m2", title: "Protótipos e Herança Avançada", content: "<p>Entendendo a cadeia de protótipos original da linguagem.</p>", quizId: "js-mq2" },
  { id: "js-m3", title: "Closures e Programação Funcional", content: "<p>Escopos léxicos e o poder das funções de alta ordem.</p>", quizId: "js-mq3" },
  { id: "js-m4", title: "Assincronismo: Promises e Async/Await", content: "<p>Gestão de fluxo assíncrono sem callback hell.</p>", quizId: "js-mq4" },
  { id: "js-m5", title: "Módulos (ESM vs CJS) e Bundlers", content: "<p>Como o código é organizado e empacotado para produção.</p>", quizId: "js-mq5" },
  { id: "js-m6", title: "Proxy, Reflect e Metaprogramação", content: "<p>Interceptando operações básicas da linguagem.</p>", quizId: "js-mq6" },
  { id: "js-m7", title: "Manipulação de DOM de Alta Performance", content: "<p>Evitando Layout Thrashing e otimizando reflows.</p>", quizId: "js-mq7" },
  { id: "js-m8", title: "Web APIs: Workers, Storage e Fetch", content: "<p>Explorando os limites do browser moderno.</p>", quizId: "js-mq8" },
  { id: "js-m9", title: "TypeScript Avançado e Genéricos", content: "<p>Adicionando segurança de tipos a sistemas complexos.</p>", quizId: "js-mq9" },
  { id: "js-m10", title: "Segurança no JS (CORS, CSP, JWT)", content: "<p>Protegendo o cliente contra ataques maliciosos.</p>", quizId: "js-mq10" }
];

export const javascriptKA: KnowledgeArea = {
  id: 'lang-javascript',
  title: '03. JavaScript Master',
  description: 'A linguagem da web levada ao limite da performance.',
  load: '50h',
  iconName: 'Zap',
  theory: jsLessons,
  practice: {
    javascript: [
      {
        id: 'js-p1',
        language: 'javascript',
        title: 'Laboratório: Promessa de Dados',
        description: 'Gestão de concorrência com Promise.all.',
        statement: 'Use Promise.all para buscar dados de dois endpoints simultaneamente.',
        template: 'const data = await Promise.all([]);',
        detailedExplanation: '<p>Promise.all aumenta a performance ao disparar requisições em paralelo.</p>',
        objectives: [{ id: 'obj1', description: 'Usar Promise.all', test: 'Promise.all' }]
      }
    ]
  },
  quizzes: jsLessons.map(l => ({ id: l.quizId, title: `Quiz: ${l.title}`, questions: [], passingScore: 80 }))
};
