import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p17",
  language: "html",
  title: "Projeto Master: Interatividade de Arrastre",
  description: "Crie componentes que podem ser movidos pelo utilizador.",
  statement: "Prepare um elemento do portal para ser arrastável.",
  isProjectPart: true,
  template: `<!-- Ação 1: Adicione o atributo aqui -->
<div class="card">
  Mova-me!
</div>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔨 Passo a Passo: Draggable</h3>
      <p class="text-sm">Ative o motor de movimento nativo:</p>
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> Adicione <code>draggable="true"</code> à div.</p>
        <p><strong>Ação 2:</strong> No script, ouça o evento <code>dragstart</code>.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "draggable_attr", description: "Definir draggable='true'", test: "draggable=\"true\"" },
    { id: "dragstart_event", description: "Adicionar listener de dragstart", test: "addEventListener('dragstart'" }
  ]
};