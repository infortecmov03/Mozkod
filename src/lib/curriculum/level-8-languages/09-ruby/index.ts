
import type { KnowledgeArea, TheoryLesson } from '../../types';

const lessons: TheoryLesson[] = [
  { id: "rb-m1", title: "Ruby Philosophy: Developer Happiness", content: "<p>A busca pela elegância e produtividade humana acima da máquina.</p>", quizId: "rb-mq1" },
  { id: "rb-m2", title: "Dynamic Typing & Everything is an Object", content: "<p>Pureza orientada a objetos: de números a classes.</p>", quizId: "rb-mq2" },
  { id: "rb-m3", title: "Blocks, Procs & Lambdas", content: "<p>O poder dos closures e callbacks em Ruby.</p>", quizId: "rb-mq3" },
  { id: "rb-m4", title: "Mixins & Modules", content: "<p>Composição de comportamento sem os problemas da herança múltipla.</p>", quizId: "rb-mq4" },
  { id: "rb-m5", title: "Metaprogramming (Eigenclasses)", content: "<p>Abertura de classes e modificação dinâmica de comportamento.</p>", quizId: "rb-mq5" },
  { id: "rb-m6", title: "Ruby on Rails Architecture", content: "<p>Convenção sobre Configuração e o padrão MVC perfeito.</p>", quizId: "rb-mq6" },
  { id: "rb-m7", title: "Testing with RSpec", content: "<p>Desenvolvimento guiado por comportamento (BDD) expressivo.</p>", quizId: "rb-mq7" },
  { id: "rb-m8", title: "Gem Management & Bundler", content: "<p>Gestão rigorosa de dependências no ecossistema Ruby.</p>", quizId: "rb-mq8" },
  { id: "rb-m9", title: "Ruby 3.x Performance & YJIT", content: "<p>A evolução da velocidade com o novo compilador JIT.</p>", quizId: "rb-mq9" },
  { 
    id: "rb-m10", 
    title: "Projeto Final: Rails API no Fly.io", 
    youtubeVideoId: "8hly31xKli0",
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">💎 Ruby on Rails Mastery</h2>
        <p>Desenvolve um motor de blog completo com Rails e publica-o no <strong>Fly.io</strong>.</p>
        <div class="bg-card p-6 rounded-2xl border space-y-4">
          <h3 class="font-bold text-red-500">1. Rails MVC & Git</h3>
          <p class="text-sm text-muted-foreground">Versiona a aplicação. Cria modelos, rotas e controladores.</p>
          <h3 class="font-bold text-red-500">2. Fly.io Config</h3>
          <p class="text-sm text-muted-foreground">Usa a CLI do Fly para configurar o banco de dados e segredos.</p>
          <h3 class="font-bold text-red-500">3. Live</h3>
          <p class="text-sm text-muted-foreground">Executa as migrations no servidor remoto e vê a app a escalar.</p>
        </div>
      </div>
    `, 
    quizId: "rb-mq10" 
  }
];

export const rubyMaster: KnowledgeArea = {
  id: 'lang-ruby-master',
  title: '09. Ruby Master',
  description: 'Elegância, produtividade e a arte do desenvolvimento centrado no humano.',
  load: '35h',
  iconName: 'Gem',
  theory: lessons,
  practice: {
    ruby: [
      {
        id: 'rb-p1',
        language: 'ruby',
        title: 'Lab: Blocks',
        description: 'Iteração elegante com Ruby.',
        statement: 'Use .each com um bloco para imprimir itens.',
        template: '[1,2,3].each { |i| puts i }',
        detailedExplanation: '<p>Blocos são fundamentais em Ruby para iteradores e DSLs.</p>',
        objectives: [{ id: 'obj1', description: 'Usar cada/puts', test: 'each' }]
      }
    ]
  },
  quizzes: []
};
