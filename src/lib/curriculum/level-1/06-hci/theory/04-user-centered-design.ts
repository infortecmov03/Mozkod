import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "hci-t4",
  title: "Design Centrado no Utilizador (UCD)",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline">🎯 O Foco é o Humano</h2>
        <p class="text-lg leading-relaxed">UCD é um processo de design iterativo onde o foco principal são as necessidades, desejos e limitações dos utilizadores finais em cada fase do ciclo de desenvolvimento.</p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>Fases do UCD:</h3>
        <ol class="space-y-3">
          <li><strong>Entender o Contexto:</strong> Quem vai usar o sistema e em que ambiente?</li>
          <li><strong>Especificar Requisitos:</strong> Quais são os problemas que o utilizador quer resolver?</li>
          <li><strong>Desenhar Soluções:</strong> Criar wireframes e protótipos.</li>
          <li><strong>Avaliar:</strong> Testar as soluções com utilizadores REAIS.</li>
        </ol>
      </div>
    </div>
  `,
  quizId: "hci-q4"
};
