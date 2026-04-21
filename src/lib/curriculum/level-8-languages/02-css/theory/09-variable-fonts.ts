import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m9",
  title: "Variable Fonts & Typography Performance",
  content: `
    <div class="space-y-8">
      <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20">
        <h2 class="text-2xl font-bold mb-4 font-headline text-indigo-400">🖋️ Tipografia Infinita</h2>
        <p class="text-lg leading-relaxed">
          <strong>Variable Fonts</strong> (OpenType Font Variations) permitem carregar um único ficheiro de fonte que contém todos os pesos, larguras e estilos possíveis, em vez de descarregar múltiplos ficheiros separados.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">Os Eixos de Variação</h3>
        <p>Podes manipular a fonte através de eixos padrão ou personalizados definidos pelo designer da fonte.</p>
        <ul class="grid md:grid-cols-3 gap-4 text-xs font-code">
          <li class="bg-card p-3 rounded border border-white/5">"wght" (Weight): 1 a 1000</li>
          <li class="bg-card p-3 rounded border border-white/5">"wdth" (Width): Largura</li>
          <li class="bg-card p-3 rounded border border-white/5">"ital" (Italic): Inclinação</li>
        </ul>

        <div class="bg-black/40 p-5 rounded-xl border font-code text-sm">
          h1 { <br/>
          &nbsp;&nbsp;<span class="text-primary">font-variation-settings</span>: <span class="text-green-400">"wght" 650, "wdth" 85</span>; <br/>
          }
        </div>

        <h3 class="text-xl font-bold font-headline text-primary">Performance de Elite</h3>
        <p>Um ficheiro de Variable Font costuma ter 100KB. Dez ficheiros de pesos diferentes teriam 500KB+. Além de poupar dados, eliminas o <strong>FOIT</strong> (Flash of Invisible Text) de múltiplas conexões de rede.</p>
      </div>
    </div>
  `,
  quizId: "css-mq9"
};
