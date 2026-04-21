import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m1",
  title: "Arquitetura de Documentos: A Estrutura Master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 text-primary text-headline">
          🏗️ A Anatomia de um Documento de Elite
        </h2>
        <p class="text-lg leading-relaxed">
          Para um Engenheiro Master, o HTML não é apenas uma lista de tags. É um <strong>grafo de nós</strong> processado pelo Browser Engine. A ausência de elementos fundamentais degrada a performance e quebra a experiência do utilizador.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">O Gatilho de Standards (DOCTYPE)</h3>
        <p>Sem o DOCTYPE, o browser entra em <em>Quirks Mode</em>, emulando bugs de browsers dos anos 90 para não quebrar sites antigos. No nível Master, garantimos o modo padrão.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-sm border border-white/5">
          <span class="text-muted-foreground">&lt;!-- Força o modo de standards moderno --&gt;</span><br/>
          <span class="text-primary">&lt;!DOCTYPE html&gt;</span>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">Metadados de Controlo de Viewport</h3>
        <p>Essencial para o design responsivo. Sem esta tag, o browser assume um ecrã desktop de 980px e "encolhe" o site no telemóvel.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-sm border border-white/5">
          <span class="text-primary">&lt;meta</span> <span class="text-accent">name</span>=<span class="text-green-400">"viewport"</span> <span class="text-accent">content</span>=<span class="text-green-400">"width=device-width, initial-scale=1.0"</span><span class="text-primary">&gt;</span>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">Prevenção de FOUC (Flash of Unstyled Content)</h3>
        <p>Um erro comum é carregar scripts pesados antes do CSS, fazendo com que o utilizador veja o site sem estilos por um breve momento. A ordem no <code>&lt;head&gt;</code> é uma decisão de performance:</p>
        <ol class="list-decimal ml-6 space-y-4">
          <li><strong>Preconnect:</strong> Estabelece conexões com fontes ou APIs precocemente.</li>
          <li><strong>Meta Charset:</strong> Deve ser a primeira tag para evitar re-parsing.</li>
          <li><strong>CSS Crítico:</strong> In-line ou links prioritários.</li>
          <li><strong>Scripts:</strong> Sempre com <code>defer</code> ou <code>async</code>.</li>
        </ol>
      </div>
    </div>
  `,
  quizId: "html-mq1"
};
