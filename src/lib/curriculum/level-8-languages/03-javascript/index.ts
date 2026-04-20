import type { KnowledgeArea, TheoryLesson, Quiz } from '../../types';

const jsLessons: TheoryLesson[] = [
  { id: "js-m1", title: "Motores JS e Event Loop", content: `<div class="space-y-4">
    <h2 class="text-2xl font-bold">⚙️ Por baixo do capô do V8</h2>
    <p>O JavaScript é single-threaded mas consegue lidar com milhares de conexões. O segredo está no Event Loop.</p>
    <ul class="list-disc ml-6">
      <li><strong>Stack:</strong> Onde as funções síncronas esperam execução.</li>
      <li><strong>Callback Queue:</strong> Onde as tarefas assíncronas aguardam.</li>
      <li><strong>Microtasks:</strong> Promises que têm prioridade sobre o próximo ciclo de renderização.</li>
    </ul>
  </div>`, quizId: "js-mq1" },
  { id: "js-m2", title: "Protótipos e Herança", content: "<p>Compreensão profunda da cadeia de protótipos e comportamento do 'this'.</p>", quizId: "js-mq2" },
  { id: "js-m3", title: "Closures e FP", content: "<p>Escopos léxicos, currying e funções puras para um código previsível.</p>", quizId: "js-mq3" },
  { id: "js-m4", title: "Assincronismo Master", content: "<p>Gestão de erros em fluxos complexos com AbortController e sinais.</p>", quizId: "js-mq4" },
  { id: "js-m5", title: "Módulos e Bundlers", content: "<p>Tree-shaking, code-splitting e a evolução do ESM nativo.</p>", quizId: "js-mq5" },
  { id: "js-m6", title: "Proxy e Reflect", content: "<p>Metaprogramação para criar frameworks reativos e interceptores.</p>", quizId: "js-mq6" },
  { id: "js-m7", title: "DOM Performance", content: "<p>Batching de updates e uso de DocumentFragment para evitar Reflows.</p>", quizId: "js-mq7" },
  { id: "js-m8", title: "Web APIs Avançadas", content: "<p>Intersection Observer, Resize Observer e File System API.</p>", quizId: "js-mq8" },
  { id: "js-m9", title: "TypeScript Master", content: "<p>Tipagem condicional, genéricos avançados e inferência rigorosa.</p>", quizId: "js-mq9" },
  { id: "js-m10", title: "Segurança Client-Side", content: "<p>Prevenção de Prototype Pollution e gestão segura de tokens JWT.</p>", quizId: "js-mq10" }
];

const jsQuizzes: Quiz[] = [
  {
    id: "js-mq1",
    title: "Quiz: Event Loop e Motores",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Qual a ordem de execução entre Microtasks e Macrotasks no Event Loop?",
        options: [
          "Macrotasks executam primeiro sempre",
          "Todas as Microtasks de uma fila executam antes da próxima Macrotask",
          "Elas executam de forma alternada 1 a 1",
          "O navegador escolhe aleatoriamente para balancear carga"
        ],
        correctAnswer: 1
      },
      {
        id: "q2",
        question: "Onde o motor V8 armazena objetos criados dinamicamente?",
        options: ["Call Stack", "Heap Memory", "Global Registry", "System Kernel"],
        correctAnswer: 1
      }
    ]
  }
];

export const javascriptKA: KnowledgeArea = {
  id: 'lang-javascript',
  title: '03. JavaScript Master',
  description: 'A linguagem da web levada ao limite da performance e engenharia.',
  load: '50h',
  iconName: 'Zap',
  theory: jsLessons,
  practice: {
    javascript: [
      {
        id: 'js-p1',
        language: 'javascript',
        title: 'Laboratório: Concorrência Master',
        description: 'Gestão de falhas parciais em requisições.',
        statement: 'Use Promise.allSettled para buscar dados sem que uma falha cancele todas as outras.',
        template: 'const results = await Promise.allSettled([]);',
        detailedExplanation: '<p>Diferente de Promise.all, o allSettled aguarda todas as conclusões mesmo com erros.</p>',
        objectives: [{ id: 'obj1', description: 'Usar allSettled', test: 'Promise.allSettled' }]
      }
    ]
  },
  quizzes: jsQuizzes
};
