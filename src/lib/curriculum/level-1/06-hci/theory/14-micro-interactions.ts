import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "hci-t14",
  title: "Micro-interações: O Segredo do Delight",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">✨ Detalhes que Encantam</h2>
        <p class="text-lg">Micro-interações são pequenos momentos funcionais que cumprem uma única tarefa. Ex: uma animação ao curtir um post ou o som de mensagem enviada.</p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>Os 4 Passos da Micro-interação:</h3>
        <ol>
          <li><strong>Trigger:</strong> O que inicia a ação (ex: clicar no botão).</li>
          <li><strong>Rules:</strong> O que acontece internamente.</li>
          <li><strong>Feedback:</strong> A resposta visual/sonora ao utilizador.</li>
          <li><strong>Loops & Modes:</strong> O que acontece se a ação se repetir.</li>
        </ol>
      </div>
    </div>
  `,
  quizId: "hci-q14"
};
