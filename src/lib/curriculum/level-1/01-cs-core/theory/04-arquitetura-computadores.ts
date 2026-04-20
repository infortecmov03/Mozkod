import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t4",
  title: "Arquitetura de Computadores: O Cérebro da Máquina",
  youtubeVideoId: "Z5JC9Ve1sfI",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
          🏗️ Modelo de Von Neumann
        </h2>
        <p class="text-lg leading-relaxed">
          A maioria dos computadores modernos segue a arquitetura de Von Neumann, composta por:
        </p>
        <ul class="list-disc ml-6 mt-4 space-y-2 text-muted-foreground">
          <li><strong>CPU (UCP):</strong> Onde o processamento acontece.</li>
          <li><strong>Memória:</strong> Onde dados e instruções são guardados.</li>
          <li><strong>Entrada/Saída:</strong> Como o computador comunica com o mundo.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "cs-t4-quiz"
};