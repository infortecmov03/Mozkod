import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "hci-t13",
  title: "Tipografia e Legibilidade: A Voz do Texto",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🖋️ O Conforto da Leitura</h2>
        <p class="text-lg">Tipografia é 90% do design web. Escolher o tipo de letra correto dita se o utilizador vai ler o teu conteúdo ou abandonar o site por cansaço visual.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <div class="p-4 bg-card border rounded-xl">
          <h4 class="font-bold text-accent">Serifadas</h4>
          <p class="text-xs opacity-70">Com pequenos traços (serifas). Passam tradição e confiança. Melhores para impressão.</p>
        </div>
        <div class="p-4 bg-card border rounded-xl">
          <h4 class="font-bold text-accent">Sans Serif</h4>
          <p class="text-xs opacity-70">Sem serifas. Modernas e limpas. São o padrão ouro para leitura em ecrãs digitais.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "hci-q13"
};
