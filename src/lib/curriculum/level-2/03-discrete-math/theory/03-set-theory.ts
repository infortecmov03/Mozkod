import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "math-t3",
  title: "Teoria dos Conjuntos: Agrupando Informação",
  content: `
    <div class="space-y-6">
      <div class="bg-accent/5 p-6 rounded-2xl border border-accent/10">
        <h2 class="text-2xl font-bold mb-4">📦 Coleções de Objetos</h2>
        <p>Um conjunto é uma coleção desordenada de objetos distintos, chamados elementos.</p>
      </div>
      
      <div class="prose prose-invert max-w-none">
        <h3>Operações Fundamentais</h3>
        <ul>
          <li><strong>União (A ∪ B):</strong> Elementos que estão em A OU B.</li>
          <li><strong>Intersecção (A ∩ B):</strong> Elementos que estão em A E B.</li>
          <li><strong>Diferença (A - B):</strong> Elementos em A que não estão em B.</li>
          <li><strong>Complemento (A'):</strong> Elementos no Universo que não estão em A.</li>
        </ul>
        <p class="mt-4 bg-muted p-3 rounded">
          <strong>Uso em CS:</strong> Bases de dados relacionais (JOINs) e gestão de tipos de dados.
        </p>
      </div>
    </div>
  `,
  quizId: "math-q3"
};
