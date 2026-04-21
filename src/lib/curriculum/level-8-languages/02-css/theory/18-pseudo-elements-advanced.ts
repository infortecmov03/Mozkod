import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m18",
  title: "Pseudo-elements: ::slotted & ::part no Shadow DOM",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🌑 Estilizando além da Fronteira</h2>
        <p class="text-lg">Quando usamos Shadow DOM, o estilo do site não entra no componente. Estes pseudo-elementos são os "portais" que permitem a customização segura.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline text-accent">::part() - O Exportador de Estilo</h3>
        <p>Permite que um autor de componente exponha elementos específicos para estilização externa. Ideal para botões ou inputs dentro de componentes complexos.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs text-green-400">
          my-component<span class="text-primary">::part</span>(submit-button) { background: blue; }
        </div>

        <h3 class="text-xl font-bold font-headline text-accent">::slotted() - Estilizando o Injetado</h3>
        <p>Estiliza o conteúdo que foi passado via <code>&lt;slot&gt;</code> pelo utilizador do componente. Atenção: ele só pode selecionar elementos de primeiro nível do slot.</p>
        
        <h3 class="text-xl font-bold font-headline">::backdrop</h3>
        <p>Estiliza a camada escura que aparece atrás de um <code>&lt;dialog&gt;</code> ou elemento em Fullscreen. Vital para UX de modais.</p>
      </div>
    </div>
  `,
  quizId: "css-mq18"
};
