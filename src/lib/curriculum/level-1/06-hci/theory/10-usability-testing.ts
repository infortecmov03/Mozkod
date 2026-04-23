import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "hci-t10",
  title: "Avaliação de Interfaces e Testes de Usabilidade",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🧪 Ciência, não Opinião</h2>
        <p class="text-lg">Testar a usabilidade é observar pessoas reais a tentar usar o teu produto. O objetivo é identificar onde elas ficam confusas e corrigir a interface.</p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>Métodos de Avaliação:</h3>
        <ul>
          <li><strong>Avaliação Heurística:</strong> Especialistas verificam se o site cumpre as 10 regras de Nielsen.</li>
          <li><strong>Think Aloud:</strong> O utilizador diz em voz alta o que está a pensar enquanto usa o sistema.</li>
          <li><strong>A/B Testing:</strong> Duas versões do design são testadas para ver qual converte melhor.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "hci-q10"
};
