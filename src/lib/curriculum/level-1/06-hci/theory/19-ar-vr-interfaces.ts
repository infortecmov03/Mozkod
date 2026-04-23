import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "hci-t19",
  title: "Interfaces Espaciais: AR, VR e Realidade Mista",
  content: `
    <div class="space-y-8">
      <div class="bg-purple-500/10 p-6 rounded-2xl border border-purple-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-purple-400">🕶️ Design em 3D</h2>
        <p class="text-lg">Na Realidade Aumentada (AR) e Virtual (VR), a interface sai do ecrã e entra no espaço físico. O utilizador usa o corpo inteiro para interagir.</p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>Desafios do Design Espacial:</h3>
        <ul>
          <li><strong>Cansaço Físico (Gorilla Arm):</strong> Evite braços levantados por muito tempo.</li>
          <li><strong>Profundidade:</strong> Elementos muito próximos causam náusea e cansaço visual.</li>
          <li><strong>Campo de Visão:</strong> O conteúdo deve estar no centro da visão do utilizador.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "hci-q19"
};
