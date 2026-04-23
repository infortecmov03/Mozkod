import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "se-t3",
  title: "Scrum Framework: Papéis, Artefactos e a Engenharia do Incremento",
  youtubeVideoId: "9TycLR0TqFA",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🔄 O Motor do Scrum
        </h2>
        <p class="text-lg leading-relaxed">
          O Scrum é um framework empírico. Ele baseia-se na ideia de que não conseguimos prever tudo, por isso trabalhamos em ciclos curtos chamados <strong>Sprints</strong> para inspecionar e adaptar o produto e o processo constantemente.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Os 3 Papéis de Liderança</h3>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-accent mb-2">Product Owner</h4>
            <p class="text-[10px] text-muted-foreground">O guardião do valor. Gere o Backlog e decide O QUE deve ser feito para maximizar o retorno do investimento.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-accent mb-2">Scrum Master</h4>
            <p class="text-[10px] text-muted-foreground">O líder servidor. Remove impedimentos e garante que a equipa compreende e aplica a teoria do Scrum.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-accent mb-2">Developers</h4>
            <p class="text-[10px] text-muted-foreground">O motor técnico. Engenheiros responsáveis por transformar itens do backlog em Incrementos de software funcional.</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-primary">2. Os Artefactos: Transparência Total</h3>
        <ul class="space-y-4">
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 font-bold">1</div>
            <div>
              <p class="font-bold text-sm">Product Backlog:</p>
              <p class="text-xs text-muted-foreground">A lista única e ordenada de tudo o que pode ser necessário no produto.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 font-bold">2</div>
            <div>
              <p class="font-bold text-sm">Sprint Backlog:</p>
              <p class="text-xs text-muted-foreground">O plano da equipa para a Sprint atual, incluindo o <i>Sprint Goal</i>.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 font-bold">3</div>
            <div>
              <p class="font-bold text-sm">Incremento (Done):</p>
              <p class="text-xs text-muted-foreground">A soma de todos os itens completados. Deve cumprir a <strong>Definition of Done (DoD)</strong> para ser considerado pronto para produção.</p>
            </div>
          </li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🏆 A Sprint de Elite</h3>
          <p class="text-sm mb-4">Um ciclo de feedback de 1 a 4 semanas que contém:</p>
          <ul class="list-disc ml-6 space-y-1 text-xs text-muted-foreground">
            <li><strong>Planning:</strong> O que faremos e como faremos?</li>
            <li><strong>Daily:</strong> Inspeção rápida de 15 min do progresso diário.</li>
            <li><strong>Review:</strong> Demonstração do incremento aos stakeholders.</li>
            <li><strong>Retrospective:</strong> Como podemos melhorar o nosso processo técnico?</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  quizId: "se-q3-master"
};