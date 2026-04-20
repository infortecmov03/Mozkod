
import type { KnowledgeArea, TheoryLesson } from '../../types';

const lessons: TheoryLesson[] = [
  { id: "rs-m1", title: "Rust Safety Philosophy", content: "<p>Segurança total de memória sem custo de performance.</p>", quizId: "rs-mq1" },
  { id: "rs-m2", title: "The Ownership Model", content: "<p>A regra de ouro: apenas um dono por vez para cada dado.</p>", quizId: "rs-mq2" },
  { id: "rs-m3", title: "Borrowing & References", content: "<p>Regras de empréstimo mutável e imutável do Borrow Checker.</p>", quizId: "rs-mq3" },
  { id: "rs-m4", title: "Lifetimes: O Terror dos Iniciantes", content: "<p>Garantindo em tempo de compilação que referências são válidas.</p>", quizId: "rs-mq4" },
  { id: "rs-m5", title: "Traits & Generics", content: "<p>Polimorfismo e abstração de comportamento em Rust.</p>", quizId: "rs-mq5" },
  { id: "rs-m6", title: "Error Handling (Result/Option)", content: "<p>Robustez absoluta sem o uso de exceções.</p>", quizId: "rs-mq6" },
  { id: "rs-m7", title: "Smart Pointers (Box, Rc, Arc)", content: "<p>Gestão avançada de memória e contagem de referências.</p>", quizId: "rs-mq7" },
  { id: "rs-m8", title: "Fearless Concurrency", content: "<p>Garantindo a ausência de Race Conditions via tipos Send/Sync.</p>", quizId: "rs-mq8" },
  { id: "rs-m9", title: "Macros e Metaprogramação", content: "<p>Geração de código poderosa com declarative e procedural macros.</p>", quizId: "rs-mq9" },
  { 
    id: "rs-m10", 
    title: "Projeto Final: CLI Tool & GitHub Release", 
    youtubeVideoId: "v4cd1O4zkGw",
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">🛡️ Rust Engineering Master</h2>
        <p>Cria um otimizador de imagens CLI e publica os binários compilados no <strong>GitHub Releases</strong>.</p>
        <div class="bg-card p-6 rounded-2xl border space-y-4">
          <h3 class="font-bold text-red-400">1. Cargo & Workspace</h3>
          <p class="text-sm text-muted-foreground">Inicia o projeto com <code>cargo init</code>. Versiona no GitHub.</p>
          <h3 class="font-bold text-red-400">2. Cross-Compilation</h3>
          <p class="text-sm text-muted-foreground">Compila binários para Linux, Windows e Mac usando GitHub Actions.</p>
          <h3 class="font-bold text-red-400">3. Release Automática</h3>
          <p class="text-sm text-muted-foreground">Configura o workflow para anexar binários à release quando criares uma tag.</p>
        </div>
      </div>
    `, 
    quizId: "rs-mq10" 
  }
];

export const rustMaster: KnowledgeArea = {
  id: 'lang-rust-master',
  title: '08. Rust Master',
  description: 'Segurança de memória sem garbage collector para sistemas críticos.',
  load: '50h',
  iconName: 'Shield',
  theory: lessons,
  practice: {
    rust: [
      {
        id: 'rs-p1',
        language: 'rust',
        title: 'Lab: Ownership',
        description: 'Entendendo a transferência de posse.',
        statement: 'Tente usar uma variável após movê-la (veja o erro).',
        template: 'let s1 = String::from("hello"); let s2 = s1;',
        detailedExplanation: '<p>Em Rust, ao atribuir s1 a s2, o valor é MOVIDO e s1 deixa de ser válido.</p>',
        objectives: [{ id: 'obj1', description: 'Entender o move', test: 'String::from' }]
      }
    ]
  },
  quizzes: []
};
