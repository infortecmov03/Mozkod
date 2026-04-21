import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m20",
  title: "Anchor Positioning Future: Popovers e Tooltips Nativos",
  content: `
    <div class="space-y-8">
      <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20">
        <h2 class="text-2xl font-bold mb-4 font-headline text-indigo-400">⚓ Posicionamento Relacional</h2>
        <p class="text-lg">O <strong>Anchor Positioning</strong> (2024+) permite "ancorar" um elemento flutuante (como um menu dropdown) a outro elemento na página sem precisar de calcular coordenadas via JavaScript.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Como funciona a Âncora</h3>
        <p>Damos um nome à âncora no elemento base e usamos esse nome no elemento que deve flutuar por perto.</p>
        
        <div class="bg-black/40 p-5 rounded-xl border font-code text-xs text-accent space-y-3">
          <div class="space-y-1">
            <p class="text-muted-foreground">// No botão</p>
            <p>.btn { <span class="text-primary">anchor-name</span>: --my-btn; }</p>
          </div>
          <div class="space-y-1">
            <p class="text-muted-foreground">// No Tooltip</p>
            <p>.tooltip { <br/>
            &nbsp;&nbsp;<span class="text-primary">position-anchor</span>: --my-btn; <br/>
            &nbsp;&nbsp;<span class="text-primary">top</span>: anchor(bottom); <br/>
            }</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline">Auto-flip e Resiliência</h3>
        <p>O sistema master permite que o tooltip mude de posição automaticamente se não houver espaço em baixo, garantindo que a UI nunca sai fora do ecrã.</p>
      </div>
    </div>
  `,
  quizId: "css-mq20"
};
