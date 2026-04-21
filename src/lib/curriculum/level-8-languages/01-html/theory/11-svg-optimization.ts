import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m11",
  title: "SVG Acessível e Otimização de Performance",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 text-headline">📐 Vetores como Código</h2>
        <p>SVGs não são imagens, são documentos XML. Tratá-los como tal permite animações, interatividade e acessibilidade superior.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Anatomia Acessível do SVG</h3>
        <p>Para o leitor de ecrã, um SVG sem metadados é apenas "imagem". Devemos ser explícitos.</p>
        <div class="bg-black/40 p-4 rounded-xl border font-code text-sm">
          <span class="text-primary">&lt;svg</span> <span class="text-accent">role</span>=<span class="text-green-400">"img"</span> <span class="text-accent">aria-labelledby</span>=<span class="text-green-400">"title-id"</span><span class="text-primary">&gt;</span><br/>
          &nbsp;&nbsp;<span class="text-primary">&lt;title</span> <span class="text-accent">id</span>=<span class="text-green-400">"title-id"</span><span class="text-primary">&gt;</span>Logo da Codworks<span class="text-primary">&lt;/title&gt;</span><br/>
          &nbsp;&nbsp;<span class="text-primary">&lt;path</span> ... <span class="text-primary">/&gt;</span><br/>
          <span class="text-primary">&lt;/svg&gt;</span>
        </div>

        <h3 class="text-xl font-bold font-headline">Otimização de ViewBox</h3>
        <p>Remover metadados desnecessários (do Illustrator ou Figma) pode reduzir o tamanho do SVG em 70%. Use ferramentas como SVGO ou o plugin do VS Code.</p>
        
        <h3 class="text-xl font-bold font-headline text-accent">Interatividade via CSS</h3>
        <p>Ao colocar o SVG direto no HTML (inline), podes mudar cores e formas usando apenas CSS, o que é impossível com a tag <code>&lt;img&gt;</code>.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs">
          svg:hover path { <span class="text-accent">fill</span>: #2e76ff; }
        </div>
      </div>
    </div>
  `,
  quizId: "html-mq11"
};
