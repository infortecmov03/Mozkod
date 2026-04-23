import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "hci-t11",
  title: "Princípios de Gestalt: Como o Cérebro Vê",
  content: `
    <div class="space-y-8">
      <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-indigo-400">🧠 A Psicologia da Percepção</h2>
        <p class="text-lg leading-relaxed">Gestalt é uma escola de psicologia que explica como o cérebro humano agrupa elementos visuais automaticamente. Entender isto permite criar interfaces organizadas por instinto.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-4 text-xs">
        <div class="p-4 bg-card border rounded-xl">
          <strong class="text-accent">Proximidade:</strong> Itens próximos são percebidos como um grupo único.
        </div>
        <div class="p-4 bg-card border rounded-xl">
          <strong class="text-accent">Semelhança:</strong> Itens com a mesma cor ou forma parecem ter a mesma função.
        </div>
        <div class="p-4 bg-card border rounded-xl">
          <strong class="text-accent">Continuidade:</strong> O olho segue caminhos e linhas suaves.
        </div>
        <div class="p-4 bg-card border rounded-xl">
          <strong class="text-accent">Fechamento:</strong> O cérebro completa formas incompletas.
        </div>
      </div>
    </div>
  `,
  quizId: "hci-q11"
};
