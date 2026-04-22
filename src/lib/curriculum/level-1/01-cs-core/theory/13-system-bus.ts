import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t13",
  title: "Barramento do Sistema: As Autoestradas de Dados",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 font-headline">🛣️ Fluxo de Informação</h2>
        <p class="text-lg">Como é que a CPU sabe que carregaste numa tecla? Como é que o dado vai da RAM para o ecrã? Através do <strong>Sistema de Barramentos (System Bus)</strong>.</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">Os 3 Barramentos Críticos</h3>
        <ul class="space-y-4">
          <li class="p-4 bg-card border rounded-xl">
            <strong class="text-accent">Barramento de Endereço:</strong> Transporta o local (o índice) da memória onde o dado vive. Quanto mais fios, mais memória a CPU pode gerir.
          </li>
          <li class="p-4 bg-card border rounded-xl">
            <strong class="text-accent">Barramento de Dados:</strong> Transporta o dado real (os bits de uma imagem ou número).
          </li>
          <li class="p-4 bg-card border rounded-xl">
            <strong class="text-accent">Barramento de Controlo:</strong> Transporta ordens (ex: "Agora é para Ler!", "Agora é para Escrever!").
          </li>
        </ul>
      </div>
    </div>
  `,
  quizId: "cs-t13-quiz"
};