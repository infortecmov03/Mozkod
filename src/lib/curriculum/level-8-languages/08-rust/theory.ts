
import type { TheoryLesson } from '../../types';

export const lessons: TheoryLesson[] = [
  { id: "rs-m1", title: "Rust Safety Philosophy", content: "<p>Segurança total sem custo de performance.</p>", quizId: "rs-mq1" },
  { id: "rs-m2", title: "The Ownership Model", content: "<p>A regra de ouro: apenas um dono por dado.</p>", quizId: "rs-mq2" },
  { id: "rs-m3", title: "Borrowing & References", content: "<p>Borrow Checker e referências mutáveis.</p>", quizId: "rs-mq3" },
  { id: "rs-m4", title: "Lifetimes", content: "<p>Garantindo validade de referências no tempo.</p>", quizId: "rs-mq4" },
  { id: "rs-m5", title: "Traits & Polimorfismo", content: "<p>Abstraindo comportamento em Rust.</p>", quizId: "rs-mq5" },
  { id: "rs-m6", title: "Error Handling (Result/Option)", content: "<p>Robustez sem exceções.</p>", quizId: "rs-mq6" },
  { id: "rs-m7", title: "Smart Pointers (Box, Arc)", content: "<p>Gestão avançada de memória.</p>", quizId: "rs-mq7" },
  { id: "rs-m8", title: "Fearless Concurrency", content: "<p>Tipos Send/Sync para threads seguras.</p>", quizId: "rs-mq8" },
  { id: "rs-m9", title: "Macros & Metaprogramação", content: "<p>Geração de código poderosa.</p>", quizId: "rs-mq9" },
  { 
    id: "rs-m10", 
    title: "Projeto Final: CLI Tool e GitHub Release", 
    youtubeVideoId: "v4cd1O4zkGw",
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">🛡️ Rust Systems Master</h2>
        <p>Cria um otimizador de imagens CLI e publica os binários.</p>
        <div class="bg-card p-6 rounded-2xl border space-y-4">
          <h3 class="font-bold text-red-400">1. Cargo & Workspace</h3>
          <p class="text-sm">Inicia com cargo init.</p>
          <h3 class="font-bold text-red-400">2. Cross-Compilation</h3>
          <p class="text-sm">Compila para Linux e Windows via GitHub Actions.</p>
          <h3 class="font-bold text-red-400">3. Release</h3>
          <p class="text-sm">Anexa binários às releases do GitHub.</p>
        </div>
      </div>
    `, 
    quizId: "rs-mq10" 
  }
];
