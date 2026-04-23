import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "hci-t18",
  title: "VUI: Interfaces de Voz e Design Conversacional",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🗣️ Falando com o Sistema</h2>
        <p class="text-lg leading-relaxed">VUI (Voice User Interface) foca na interação falada. Como não há visual, o design deve ser focado na memória de curto prazo e na clareza absoluta das opções.</p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>Princípios VUI:</h3>
        <ul>
          <li><strong>Cooperatividade:</strong> O sistema deve dar respostas úteis e diretas.</li>
          <li><strong>Confirmação:</strong> Sempre confirme se entendeu o comando (ex: "Ok, a ligar a luz").</li>
          <li><strong>Curta Duração:</strong> Evite listas longas de opções faladas.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "hci-q18"
};
