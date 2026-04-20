import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "pf-t8",
  title: "Objetos e Mapas: Estruturas Complexas",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4">🏷️ Pares de Chave-Valor</h2>
        <p>Objetos permitem guardar dados relacionados usando etiquetas. É ideal para representar entidades do mundo real.</p>
      </div>
      <pre class="bg-card p-4 rounded-xl border">let utilizador = {
  nome: "João",
  idade: 25,
  ativo: true
};</pre>
    </div>
  `,
  quizId: "pf-t8-quiz"
};