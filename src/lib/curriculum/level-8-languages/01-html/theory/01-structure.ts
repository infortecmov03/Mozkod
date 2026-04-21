
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m1",
  title: "Arquitetura de Documentos: A Estrutura Master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 text-primary font-headline">
          🏗️ A Anatomia de um Documento de Elite
        </h2>
        <p class="text-lg leading-relaxed">
          Para um Engenheiro Master, o HTML não é apenas uma lista de tags. É um <strong>grafo de nós (DOM)</strong> processado pelo Browser Engine. A ausência de elementos fundamentais ou a sua má colocação degrada a performance (LCP) e quebra a experiência do utilizador.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">O Gatilho de Standards (DOCTYPE)</h3>
        <p>Sem o DOCTYPE, o browser entra em <em>Quirks Mode</em>, emulando bugs de browsers dos anos 90 para não quebrar sites antigos. No nível Master, garantimos o modo padrão.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-sm border border-white/5 shadow-inner">
          <span class="text-muted-foreground">&lt;!-- Força o modo de standards moderno --&gt;</span><br/>
          <span class="text-primary">&lt;!DOCTYPE html&gt;</span>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">Configuração Crítica do Head</h3>
        <p>O <code>&lt;head&gt;</code> é o cérebro do documento. A ordem das tags aqui decide a velocidade com que o site aparece.</p>
        <div class="bg-black/40 p-5 rounded-xl font-code text-xs space-y-2 border border-white/5">
          <p><span class="text-primary">&lt;meta</span> <span class="text-accent">charset</span>=<span class="text-green-400">"UTF-8"</span><span class="text-primary">&gt;</span> <span class="text-muted-foreground">// Deve ser a primeira para evitar re-parsing de texto</span></p>
          <p><span class="text-primary">&lt;meta</span> <span class="text-accent">name</span>=<span class="text-green-400">"viewport"</span> <span class="text-accent">content</span>=<span class="text-green-400">"width=device-width, initial-scale=1"</span><span class="text-primary">&gt;</span> <span class="text-muted-foreground">// Vital para mobile</span></p>
          <p><span class="text-primary">&lt;title&gt;</span>Codworks Elite<span class="text-primary">&lt;/title&gt;</span></p>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">Prevenção de FOUC</h3>
        <p>O <em>Flash of Unstyled Content</em> ocorre quando o conteúdo aparece antes do CSS. No nível Master, colocamos o CSS crítico no topo e scripts pesados com <code>defer</code> no fim ou no head.</p>
        <div class="bg-blue-500/5 p-4 rounded-xl border border-blue-500/20">
          <h4 class="font-bold text-blue-400 mb-2">Exemplo de Carregamento Master:</h4>
          <pre class="text-[11px] font-code">
&lt;link rel="stylesheet" href="main.css"&gt;
&lt;script src="app.js" defer&gt;&lt;/script&gt; <span class="text-muted-foreground">// Carrega em paralelo, executa após o DOM</span>
          </pre>
        </div>
      </div>
    </div>
  `,
  quizId: "html-mq1"
};
