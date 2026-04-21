
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m1",
  title: "Arquitetura de Documentos: A Estrutura Master",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 text-primary">
          🏗️ A Anatomia de um Documento de Elite
        </h2>
        <p class="text-lg leading-relaxed">
          Para um Engenheiro Master, o HTML não é apenas uma lista de tags. É um <strong>grafo de nós</strong> processado pelo Browser Engine. A ausência de elementos fundamentais degrada a performance e quebra a experiência do utilizador.
        </p>
      </div>

      <div class="grid gap-6">
        <div class="prose prose-invert max-w-none space-y-4">
          <h3 class="text-xl font-bold border-b border-white/10 pb-2">1. <!DOCTYPE html> - O Gatilho de Standards</h3>
          <p>Esta não é uma tag HTML, mas uma instrução. Sem ela, o browser entra em <strong>Quirks Mode</strong> (Modo de Compatibilidade), usando motores de renderização da década de 90. 
          <br/><span class="text-red-400 text-sm">Impacto:</span> O CSS moderno (Grid, Flexbox) pode comportar-se de forma imprevisível.</p>

          <h3 class="text-xl font-bold border-b border-white/10 pb-2">2. <html lang="pt-MZ"> - O Contexto Global</h3>
          <p>O atributo <code>lang</code> é crítico para o algoritmo do Google e para motores de síntese de voz (Acessibilidade). 
          <br/><span class="text-red-400 text-sm">Impacto:</span> Sem isto, leitores de ecrã podem usar a pronúncia errada e o SEO local é prejudicado.</p>

          <h3 class="text-xl font-bold border-b border-white/10 pb-2">3. <meta charset="UTF-8"> - Integridade de Dados</h3>
          <p>Define a codificação de caracteres. UTF-8 cobre quase todos os símbolos do mundo.
          <br/><span class="text-red-400 text-sm">Impacto:</span> Sem isto, caracteres especiais (como acentos ou emojis) aparecem como símbolos estranhos ().</p>

          <h3 class="text-xl font-bold border-b border-white/10 pb-2">4. <meta name="viewport"> - Renderização Mobile</h3>
          <p>Instrui o browser sobre como ajustar as dimensões da página ao ecrã do dispositivo.
          <br/><span class="text-red-400 text-sm">Impacto:</span> Sem esta linha, o site aparecerá "encolhido" no telemóvel, forçando o utilizador a fazer zoom.</p>
        </div>
      </div>

      <div class="bg-card p-6 rounded-2xl border shadow-inner">
        <h4 class="font-bold text-accent mb-4">Hierarquia de Fecho</h4>
        <p class="text-sm leading-relaxed mb-4">
          Cada tag aberta deve ter o seu par de fecho (exceto as self-closing). O browser constrói o DOM (Document Object Model) em árvore; um erro de fecho pode "aninhar" elementos erradamente e destruir o layout.
        </p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs">
          &lt;html&gt;<br/>
          &nbsp;&nbsp;&lt;head&gt;...&lt;/head&gt;<br/>
          &nbsp;&nbsp;&lt;body&gt;...&lt;/body&gt;<br/>
          &lt;/html&gt;
        </div>
      </div>
    </div>
  `,
  quizId: "html-mq1"
};
