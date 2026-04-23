import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "hci-t17",
  title: "Interação Multi-modal: Além do Mouse",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🖐️ Voz, Toque e Visão</h2>
        <p class="text-lg">Interação multi-modal ocorre quando o utilizador usa mais de um canal de entrada (ex: falar enquanto aponta no ecrã). Isto aumenta a inclusão e a eficiência em contextos complexos (como conduzir).</p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>Canais de Interação:</h3>
        <ul>
          <li><strong>Auditivo:</strong> Comandos de voz e alertas sonoros.</li>
          <li><strong>Visual:</strong> Gráficos, texto e luzes.</li>
          <li><strong>Háptico:</strong> Vibrações e texturas digitais.</li>
          <li><strong>Gestual:</strong> Movimentos de mãos capturados por câmaras.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "hci-q17"
};
