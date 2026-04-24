import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p18",
  language: "html",
  title: "Projeto Master: Persistência de Nível Industrial",
  description: "Guarde o estado da aplicação localmente.",
  statement: "Implemente a gravação de um token no LocalStorage.",
  isProjectPart: true,
  template: `<script>
  function saveSession(token) {
    // Ação 1: Guarde o token aqui
  }
</script>`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔨 Passo a Passo: Web Storage</h3>
      <p class="text-sm">Use o armazém de chaves do browser:</p>
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> Use <code>localStorage.setItem('cwm_token', token);</code>.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "ls_set", description: "Usar localStorage.setItem", test: "localStorage.setItem" }
  ]
};