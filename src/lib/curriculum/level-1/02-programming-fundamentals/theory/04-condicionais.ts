import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "pf-t4",
  title: "Estruturas Condicionais: Tomada de Decisão",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
          🚦 O Fluxo de Decisão
        </h2>
        <p class="text-lg leading-relaxed">
          As condicionais permitem que o programa execute blocos de código diferentes baseados em perguntas de "Sim" ou "Não" (Verdadeiro ou Falso).
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <div class="bg-card p-5 rounded-xl border">
          <h4 class="font-bold text-primary mb-2">IF (Se)</h4>
          <p class="text-sm">Executa um bloco se a condição for verdadeira.</p>
          <pre class="bg-muted p-2 rounded mt-2 text-[10px]">if (idade >= 18) {
  // Pode entrar
}</pre>
        </div>
        <div class="bg-card p-5 rounded-xl border">
          <h4 class="font-bold text-accent mb-2">ELSE (Senão)</h4>
          <p class="text-sm">O que fazer quando a condição do IF for falsa.</p>
          <pre class="bg-muted p-2 rounded mt-2 text-[10px]">if (chuva) {
  levar_guarda_chuva();
} else {
  levar_oculos_sol();
}</pre>
        </div>
      </div>
    </div>
  `,
  quizId: "pf-t4-quiz"
};