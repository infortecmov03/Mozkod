import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "hci-t9",
  title: "Feedback e Affordance: O Diálogo Silencioso",
  content: `
    <div class="space-y-8">
      <div class="bg-yellow-500/5 p-6 rounded-2xl border border-yellow-500/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-yellow-500">👂 O Sistema está a Ouvir?</h2>
        <p class="text-lg">Feedback é a resposta do sistema a uma ação. Affordance é a pista visual que diz como um objeto pode ser usado.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="p-5 bg-card border rounded-2xl border-white/5">
          <h4 class="font-bold text-accent mb-2">Affordance</h4>
          <p class="text-xs">Um botão que parece "clicável" (tem sombra ou relevo). Uma barra de scroll que indica movimento.</p>
        </div>
        <div class="p-5 bg-card border rounded-2xl border-white/5">
          <h4 class="font-bold text-accent mb-2">Feedback</h4>
          <p class="text-xs">O botão muda de cor ao ser clicado. Um spinner aparece enquanto os dados carregam.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "hci-q9"
};
