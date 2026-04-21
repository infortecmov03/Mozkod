
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m5",
  title: "Flexbox Mastery: Intrinsic Sizing e Gap",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📏 Dimensionamento Intrínseco</h2>
        <p class="text-lg leading-relaxed">
          Um erro comum de amadores é forçar larguras fixas (ex: 300px). O Engenheiro Master utiliza o <strong>Dimensionamento Intrínseco</strong> (min-content, max-content, fit-content) para que o browser calcule o tamanho ideal baseado no conteúdo real.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">O Segredo do Flex-Basis</h3>
        <p><code>flex-basis</code> define o tamanho ideal antes da distribuição do espaço. Usar <code>content</code> faz com que o browser olhe para o tamanho do texto/imagem para decidir o ponto de partida.</p>
        
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs space-y-2 border border-white/5">
          <p>.item { <span class="text-primary">flex</span>: 1 1 <span class="text-accent">fit-content(400px)</span>; }</p>
          <p class="text-muted-foreground">// "Cresce, diminui, e tenta ter o tamanho do conteúdo até 400px"</p>
        </div>

        <h3 class="text-xl font-bold font-headline text-accent">Gap vs Margins</h3>
        <p>Nunca mais uses <code>margin</code> para separar itens num Flexbox. A propriedade <code>gap</code> lida com o espaçamento sem criar margens indesejadas nas bordas do container, mantendo a grelha matemática pura.</p>
      </div>
    </div>
  `,
  quizId: "css-mq5"
};
