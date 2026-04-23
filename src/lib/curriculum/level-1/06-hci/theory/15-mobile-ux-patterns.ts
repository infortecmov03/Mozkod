import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "hci-t15",
  title: "Padrões Mobile UX e a Zona do Polegar",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📱 Design com uma mão</h2>
        <p class="text-lg leading-relaxed">Em dispositivos móveis, a ergonomia é tudo. A "Thumb Zone" (Zona do Polegar) dita que os botões mais importantes devem estar na parte inferior e central do ecrã.</p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>Regras de Ouro Mobile:</h3>
        <ul>
          <li><strong>Alvos de Toque:</strong> Mínimo de 44x44 pixels para evitar erros de toque.</li>
          <li><strong>Gestos:</strong> Swipe, Pinch e Long Press devem ser intuitivos e complementares, nunca a única via.</li>
          <li><strong>Navegação de Polegar:</strong> Coloque menus e ações críticas ao alcance fácil do polegar.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "hci-q15"
};
