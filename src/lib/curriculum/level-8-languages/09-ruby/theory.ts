
import type { TheoryLesson } from '../../types';

export const lessons: TheoryLesson[] = [
  { id: "rb-m1", title: "Ruby Philosophy", content: "<p>Felicidade do programador e elegância.</p>", quizId: "rb-mq1" },
  { id: "rb-m2", title: "Everything is an Object", content: "<p>A pureza de objetos em Ruby.</p>", quizId: "rb-mq2" },
  { id: "rb-m3", title: "Blocks & Lambdas", content: "<p>Closures poderosos e callbacks.</p>", quizId: "rb-mq3" },
  { id: "rb-m4", title: "Mixins & Modules", content: "<p>Composição de comportamento.</p>", quizId: "rb-mq4" },
  { id: "rb-m5", title: "Metaprogramação", content: "<p>Abertura de classes e modificação dinâmica.</p>", quizId: "rb-mq5" },
  { id: "rb-m6", title: "Rails Architecture", content: "<p>MVC perfeito e convenções.</p>", quizId: "rb-mq6" },
  { id: "rb-m7", title: "BDD com RSpec", content: "<p>Testes guiados por comportamento.</p>", quizId: "rb-mq7" },
  { id: "rb-m8", title: "Bundler & Gems", content: "<p>Gestão rigorosa de dependências.</p>", quizId: "rb-mq8" },
  { id: "rb-m9", title: "Ruby 3 Performance (YJIT)", content: "<p>A evolução da velocidade.</p>", quizId: "rb-mq9" },
  { 
    id: "rb-m10", 
    title: "Projeto Final: Rails API no Fly.io", 
    youtubeVideoId: "8hly31xKli0",
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">💎 Ruby Master Project</h2>
        <p>Cria um motor de blog com Rails e publica-o.</p>
        <div class="bg-card p-6 rounded-2xl border space-y-4">
          <h3 class="font-bold text-red-500">1. Rails New</h3>
          <p class="text-sm">Inicia a app e versiona no GitHub.</p>
          <h3 class="font-bold text-red-500">2. Fly.io Config</h3>
          <p class="text-sm">Configura o banco de dados via CLI.</p>
          <h3 class="font-bold text-red-500">3. Live</h3>
          <p class="text-sm">Executa as migrations e vê a app online.</p>
        </div>
      </div>
    `, 
    quizId: "rb-mq10" 
  }
];
