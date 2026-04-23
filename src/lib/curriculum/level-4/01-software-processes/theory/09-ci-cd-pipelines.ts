import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "se-t9",
  title: "Pipelines CI/CD: A Fábrica de Software Automática",
  youtubeVideoId: "8aGhZQkoFbQ",
  quizId: "se-q9-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">🚀 Da IDE para a Produção</h2>
        <p class="text-lg leading-relaxed">
          Um pipeline de CI/CD é uma série de passos automatizados que garantem que cada mudança de código é segura, testada e pronta para o utilizador final.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Continuous Integration (CI)</h3>
        <p class="text-sm">Integração frequente (várias vezes ao dia). Cada <i>push</i> dispara um build e testes unitários. O objetivo é detetar bugs de integração no minuto em que ocorrem.</p>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Continuous Delivery vs Deployment</h3>
        <div class="grid md:grid-cols-2 gap-4 text-xs">
          <div class="p-4 bg-card border rounded-xl border-accent/30">
            <h4 class="font-bold text-accent mb-2">Continuous Delivery</h4>
            <p>O código está sempre pronto para produção, mas o lançamento real exige um clique manual.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-green-400/30">
            <h4 class="font-bold text-green-400 mb-2">Continuous Deployment</h4>
            <p>100% Automático. Se os testes passam, o código vai para o utilizador final sem intervenção humana.</p>
          </div>
        </div>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🧱 Anatomia do Pipeline</h3>
          <ol class="space-y-2 font-mono text-[10px] uppercase">
            <li class="flex gap-4"><span class="text-accent">1. STAGE: LINT</span> -> Valida estilo e erros estáticos.</li>
            <li class="flex gap-4"><span class="text-accent">2. STAGE: TEST</span> -> Corre a suite de testes automatizados.</li>
            <li class="flex gap-4"><span class="text-accent">3. STAGE: BUILD</span> -> Gera o artefacto (binário, container).</li>
            <li class="flex gap-4"><span class="text-accent">4. STAGE: DEPLOY</span> -> Publica na infraestrutura Cloud.</li>
          </ol>
        </div>
      </div>
    </div>
  `
};