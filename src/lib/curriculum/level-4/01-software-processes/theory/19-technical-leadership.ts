import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "se-t19",
  title: "Liderança Técnica e Mentoria: O Papel do Staff Engineer",
  quizId: "se-q19-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          👑 Além do Individual Contributor
        </h2>
        <p class="text-lg leading-relaxed">
          Chegar ao nível Master significa que a tua produtividade já não é medida apenas pelo código que escreves, mas pelo <strong>impacto multiplicador</strong> que tens sobre a equipa. Liderança técnica é sobre guiar a visão, orquestrar trade-offs e elevar o nível de todos ao teu redor.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Liderança Técnica vs Gestão</h3>
        <p class="text-sm">Enquanto um gestor foca em pessoas e prazos, o <strong>Tech Lead</strong> foca na integridade do sistema:</p>
        <ul class="grid md:grid-cols-2 gap-4">
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block">Guardião da Arquitetura:</strong> Garante que as decisões de hoje (ADRs) não se tornem o pesadelo de amanhã.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block">Remoção de Bloqueios:</strong> Antecipa gargalos técnicos antes que eles parem o desenvolvimento da Sprint.
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-primary">2. Mentoria: A Multiplicação de Talentos</h3>
        <p class="text-sm leading-relaxed">
          Um engenheiro sénior gasta 30% do seu tempo ensinando. A mentoria de elite não é dar respostas; é ensinar o júnior a pensar. 
          <br/><br/>
          <strong>Técnicas Master:</strong>
          <br/>- <b>Socratic Mentoring:</b> Fazer as perguntas certas para que o mentorado descubra o bug ou a solução.
          <br/>- <b>Shadowing:</b> Deixar o júnior observar uma investigação de incidente (debugging em tempo real).
        </p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🚀 Decisão sob Pressão</h3>
          <p class="text-sm leading-relaxed">
            Em crises, a equipa olha para o Tech Lead. A liderança exige clareza técnica para decidir entre a solução ideal (demorada) e a solução pragmática (rápida) para restaurar o serviço, assumindo o débito técnico de forma consciente.
          </p>
        </div>
      </div>
    </div>
  `
};
