import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "hci-t7",
  title: "UX Research: Métodos e Personas",
  content: `
    <div class="space-y-8">
      <div class="bg-accent/5 p-6 rounded-2xl border border-accent/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline">🔬 Entendendo o Utilizador</h2>
        <p class="text-lg">Não desenhes para ti próprio. Desenha para o teu utilizador. UX Research é o processo de recolha de dados qualitativos e quantitativos sobre quem vai usar o sistema.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-4 text-sm">
        <div class="p-4 bg-muted/20 rounded-xl">
          <strong class="text-primary">Personas:</strong> Personagens fictícias que representam os diferentes tipos de utilizadores do teu produto.
        </div>
        <div class="p-4 bg-muted/20 rounded-xl">
          <strong class="text-primary">User Journeys:</strong> O mapa do caminho que o utilizador percorre para completar uma tarefa.
        </div>
      </div>
    </div>
  `,
  quizId: "hci-q7"
};
