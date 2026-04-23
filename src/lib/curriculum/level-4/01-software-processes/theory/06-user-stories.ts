import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "se-t6",
  title: "User Stories & Critério INVEST: A Decomposição de Valor",
  youtubeVideoId: "v4cd1O4zkGw",
  quizId: "se-q6-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📖 Narrativas de Valor</h2>
        <p class="text-lg leading-relaxed">
          Uma <strong>User Story</strong> não é um requisito técnico; é uma promessa de conversa sobre uma necessidade do utilizador. Ela foca no "Quem", "O quê" e "Porquê".
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. O Formato Padrão</h3>
        <div class="bg-black/40 p-6 rounded-xl border border-white/5 font-mono text-sm shadow-inner text-accent">
          Como um <b>[Papel]</b>,<br/>
          Eu quero <b>[Funcionalidade]</b>,<br/>
          Para que eu possa <b>[Valor de Negócio]</b>.
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-primary">2. O Critério INVEST: O Selo de Qualidade</h3>
        <p class="text-sm">Para uma história ser considerada pronta para o Sprint, ela deve cumprir:</p>
        <ul class="grid md:grid-cols-2 gap-4">
          <li class="p-3 bg-card border rounded-xl"><strong>I - Independent:</strong> Não deve depender de outra história.</li>
          <li class="p-3 bg-card border rounded-xl"><strong>N - Negotiable:</strong> Permite discussão entre PO e equipa.</li>
          <li class="p-3 bg-card border rounded-xl"><strong>V - Valuable:</strong> Deve entregar valor real ao utilizador.</li>
          <li class="p-3 bg-card border rounded-xl"><strong>E - Estimable:</strong> A equipa consegue prever o esforço.</li>
          <li class="p-3 bg-card border rounded-xl"><strong>S - Small:</strong> Deve caber dentro de um único Sprint.</li>
          <li class="p-3 bg-card border rounded-xl"><strong>T - Testable:</strong> Deve ter critérios de aceitação claros.</li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">✅ Critérios de Aceitação</h3>
          <p class="text-sm leading-relaxed mb-2">
            São as condições que o incremento deve satisfazer para ser aceite pelo Product Owner. Geralmente usamos o formato <strong>Given-When-Then</strong>:
          </p>
          <div class="p-4 bg-black/20 rounded-lg text-xs italic">
            "DADO que o saldo é suficiente, QUANDO eu solicito o saque, ENTÃO o dinheiro é emitido E o saldo é atualizado."
          </div>
        </div>
      </div>
    </div>
  `
};