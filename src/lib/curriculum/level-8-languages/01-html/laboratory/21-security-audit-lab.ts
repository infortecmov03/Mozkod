import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p21",
  language: "html",
  title: "Projeto Master Final: Auditoria e Blindagem",
  description: "Conclua o projeto com padrões bancários de segurança.",
  statement: "Defina a política de cookies segura do seu portal.",
  isProjectPart: true,
  template: `<!-- Protocolo Final de Segurança -->
<!-- Ação 1: Descreva a política de cookies aqui -->`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔨 Passo a Passo: Blindagem Final</h3>
      <p class="text-sm">Finalize o projeto com as flags de segurança obrigatórias:</p>
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Ação 1:</strong> Escreva a string: <code>HttpOnly; Secure; SameSite=Strict</code>.</p>
      </div>
    </div>
  `,
  objectives: [
    { id: "secure_flags", description: "Uso de HttpOnly e SameSite", test: "HttpOnly; Secure; SameSite=Strict" }
  ]
};