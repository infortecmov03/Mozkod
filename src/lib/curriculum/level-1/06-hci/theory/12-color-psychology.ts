import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "hci-t12",
  title: "Teoria das Cores e Psicologia Visual",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🎨 Comunicando com Emoções</h2>
        <p class="text-lg leading-relaxed">Cores não são apenas decorativas. Elas evocam emoções e têm significados culturais. Na engenharia de UI, usamos cores para indicar sucesso, erro ou alerta.</p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>Significados Universais em Tech:</h3>
        <ul class="space-y-2">
          <li><span class="text-green-500 font-bold">Verde:</span> Sucesso, confirmação, segurança.</li>
          <li><span class="text-red-500 font-bold">Vermelho:</span> Erro, perigo, interrupção.</li>
          <li><span class="text-yellow-500 font-bold">Amarelo:</span> Atenção, aviso, temporário.</li>
          <li><span class="text-blue-500 font-bold">Azul:</span> Informação, neutralidade, confiança.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "hci-q12"
};
