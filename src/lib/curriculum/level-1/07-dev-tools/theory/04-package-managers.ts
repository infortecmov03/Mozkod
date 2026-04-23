
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "dt-t4",
  title: "Gestores de Pacotes: NPM, Yarn e PNPM",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📦 O Ecossistema de Dependências</h2>
        <p class="text-lg">Gerir bibliotecas de terceiros é um desafio de segurança e performance. No nível Master, escolhemos a ferramenta que oferece a melhor gestão de cache e resolução de conflitos.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">1. PNPM: A Escolha de Performance</h3>
        <p class="text-sm">Ao contrário do NPM que duplica ficheiros em cada projeto, o <strong>PNPM</strong> usa links simbólicos (Hard Links). Se tens 10 projetos que usam o React, ele só existe uma vez no seu disco.</p>
        
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">2. Auditoria de Segurança</h3>
        <p class="text-sm">Use <code>npm audit</code> ou <code>pnpm audit</code> regularmente. Milhares de sites são hackeados por causa de vulnerabilidades em dependências profundas.</p>

        <div class="bg-black/40 p-5 rounded-xl border font-code text-xs text-accent">
          # Fix automático de vulnerabilidades<br/>
          pnpm audit fix --force
        </div>
      </div>
    </div>
  `,
  quizId: "dt-q4"
};
