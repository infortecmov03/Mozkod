import type { TheoryLesson } from '../../types';

export const lessons: TheoryLesson[] = [
  {
    id: "js-m1",
    title: "Motores JS e o Event Loop",
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">⚙️ A Engenharia do V8</h2>
        <p>Entenda como o JavaScript, sendo single-threaded, consegue lidar com milhares de conexões através da Call Stack, Task Queue e Microtask Queue.</p>
      </div>
    `,
    quizId: "js-mq1"
  },
  {
    id: "js-m2",
    title: "Proxy & Reflect: Metaprogramação",
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">🎭 Redefinindo o Comportamento</h2>
        <p>A API Proxy permite criar objetos virtuais e intercetar operações fundamentais do motor, abrindo portas para sistemas reativos e validações de elite.</p>
      </div>
    `,
    quizId: "js-mq2"
  }
];
