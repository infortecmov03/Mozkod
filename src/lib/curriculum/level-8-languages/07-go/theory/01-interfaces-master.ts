import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "go-m1",
  title: "Interfaces Implícitas e o Desacoplamento de Elite",
  content: `
    <div class="space-y-6">
      <div class="bg-cyan-500/10 p-6 rounded-2xl border border-cyan-500/20">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
          🐹 O Segredo da Flexibilidade em Go
        </h2>
        <p class="text-lg leading-relaxed">
          Em Go, as interfaces são satisfeitas <strong>implicitamente</strong>. Não existe a palavra-chave <code>implements</code>. Se o teu tipo possui os métodos necessários, ele JÁ É aquela interface.
        </p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>1. Duck Typing Estático</h3>
        <p>Isto permite que cries interfaces para tipos que nem sabiam que iam ser usados por ti, facilitando o desacoplamento total entre pacotes.</p>
        
        <h3>2. Composição de Interfaces</h3>
        <p>Como criar interfaces poderosas combinando interfaces pequenas e focadas (ex: <code>ReadWriter</code> combinando <code>Reader</code> e <code>Writer</code>).</p>
      </div>
    </div>
  `,
  quizId: "go-mq1"
};
