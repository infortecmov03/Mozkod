
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m11",
  title: "SVG Acessível e Otimização de Performance",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline">📐 Engenharia Vetorial</h2>
        <p class="text-lg">SVGs não são imagens convencionais; são documentos XML vivos. Tratá-los corretamente permite criar ícones nítidos em qualquer ecrã (Retina) com o menor peso possível.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">Semântica e ARIA no SVG</h3>
        <p>Para o browser, um SVG é apenas código. Sem metadados, o leitor de ecrã ignorará o ícone ou lerá as coordenadas dos caminhos (paths). Devemos dar-lhe um papel (role).</p>
        <div class="bg-black/40 p-5 rounded-xl border font-code text-sm shadow-inner space-y-1">
          <p><span class="text-primary">&lt;svg</span> <span class="text-accent">role</span>=<span class="text-green-400">"img"</span> <span class="text-accent">aria-labelledby</span>=<span class="text-green-400">"desc-1"</span><span class="text-primary">&gt;</span></p>
          <p>&nbsp;&nbsp;<span class="text-primary">&lt;title</span> <span class="text-accent">id</span>=<span class="text-green-400">"desc-1"</span><span class="text-primary">&gt;</span>Ícone de Definições<span class="text-primary">&lt;/title&gt;</span></p>
          <p>&nbsp;&nbsp;<span class="text-primary">&lt;path</span> ... <span class="text-primary">/&gt;</span></p>
          <p><span class="text-primary">&lt;/svg&gt;</span></p>
        </div>

        <h3 class="text-xl font-bold font-headline">SVG Inline vs Externo</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl">
            <h4 class="font-bold text-accent mb-2">Inline (Dentro do HTML)</h4>
            <p class="text-xs text-muted-foreground">Vantagem: Pode ser estilizado via CSS e animado via JS. Desvantagem: Não é guardado em cache individualmente.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl">
            <h4 class="font-bold text-accent mb-2">Externo (via &lt;img&gt;)</h4>
            <p class="text-xs text-muted-foreground">Vantagem: Cache eficiente. Desvantagem: Não podes mudar a cor dos traços via CSS do site principal.</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline text-primary">Auditoria de ViewBox</h3>
        <p>Um erro de amador é usar <code>width</code> e <code>height</code> fixos no código do SVG. O Engenheiro Master usa <code>viewBox</code> para definir o rácio de aspeto e deixa o CSS controlar o tamanho real, garantindo flexibilidade total.</p>
      </div>
    </div>
  `,
  quizId: "html-mq11"
};
