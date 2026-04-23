import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "hci-t20",
  title: "Design Systems: UI Escalável e Consistente",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🏭 A Fábrica de Interfaces</h2>
        <p class="text-lg leading-relaxed">Um Design System é a fonte da verdade para uma empresa. Contém tokens de design (cores, fontes), componentes (botões, inputs) e documentação de como usá-los.</p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>Vantagens de um DS:</h3>
        <ul>
          <li><strong>Consistência:</strong> O botão é igual em todos os apps da empresa.</li>
          <li><strong>Velocidade:</strong> Engenheiros montam interfaces como Lego.</li>
          <li><strong>Manutenibilidade:</strong> Muda a cor num sítio, muda em todo o sistema.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "hci-q20"
};
