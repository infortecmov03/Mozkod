import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "se-t8",
  title: "Cultura DevOps e o Modelo CAMS",
  youtubeVideoId: "mNst8vX-u8E",
  quizId: "se-q8-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">♾️ Quebrando os Silos</h2>
        <p class="text-lg leading-relaxed">
          DevOps não é um cargo ou uma ferramenta; é uma cultura de colaboração entre Desenvolvimento (Dev) e Operações (Ops). O objetivo é acelerar o ciclo de vida do software mantendo a estabilidade.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">O Modelo CAMS (The 4 Pillars)</h3>
        <ul class="space-y-4">
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5">
            <span class="font-bold text-2xl text-accent">C</span>
            <div>
              <p class="font-bold">Culture (Cultura):</p>
              <p class="text-xs">Responsabilidade partilhada. Se o código falha em produção, o problema é de todos, não apenas do "Ops".</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5">
            <span class="font-bold text-2xl text-accent">A</span>
            <div>
              <p class="font-bold">Automation (Automação):</p>
              <p class="text-xs">Remover o erro humano. Tudo o que pode ser automatizado (testes, infraestrutura, deploy) deve ser automatizado.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5">
            <span class="font-bold text-2xl text-accent">M</span>
            <div>
              <p class="font-bold">Measurement (Medição):</p>
              <p class="text-xs">Monitorização proativa. Saber que o sistema está lento antes do utilizador reclamar.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl border border-white/5">
            <span class="font-bold text-2xl text-accent">S</span>
            <div>
              <p class="font-bold">Sharing (Partilha):</p>
              <p class="text-xs">Documentação aberta e troca de ferramentas entre equipas.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  `
};