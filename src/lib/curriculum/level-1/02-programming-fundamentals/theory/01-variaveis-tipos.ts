
import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "pf-t1",
  title: "Variáveis e Tipos: As Caixas da Memória",
  youtubeVideoId: "", 
  content: `
    <div class="space-y-6">
      <div class="bg-primary/10 p-6 rounded-xl border border-primary/20">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
          📦 O que é uma Variável?
        </h2>
        <p class="text-lg leading-relaxed">
          Imagina que o teu computador tem milhões de caixas vazias. Uma <strong>variável</strong> é apenas uma dessas caixas à qual tu dás um <strong>nome</strong> (etiqueta) para guardares uma <strong>informação</strong> (valor).
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-4">
        <div class="bg-card p-4 rounded-lg border">
          <h4 class="font-bold text-primary mb-2">String (Texto)</h4>
          <p class="text-sm">Nomes, frases ou qualquer caractere. Devem estar entre aspas.</p>
          <code class="text-[10px] mt-2 block opacity-60">"João", "Maputo"</code>
        </div>
        <div class="bg-card p-4 rounded-lg border">
          <h4 class="font-bold text-green-500 mb-2">Number (Número)</h4>
          <p class="text-sm">Valores matemáticos, inteiros ou decimais. Sem aspas.</p>
          <code class="text-[10px] mt-2 block opacity-60">25, 1.75, -10</code>
        </div>
        <div class="bg-card p-4 rounded-lg border">
          <h4 class="font-bold text-accent mb-2">Boolean (Lógica)</h4>
          <p class="text-sm">Apenas dois estados: Verdadeiro ou Falso.</p>
          <code class="text-[10px] mt-2 block opacity-60">true, false</code>
        </div>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>Porquê os tipos importam?</h3>
        <p>
          O computador precisa de saber o tipo para saber o que pode fazer. Podes somar dois números (2 + 2 = 4), mas se tentares somar textos ("2" + "2"), ele pode apenas juntá-los ("22").
        </p>
      </div>
    </div>
  `,
  quizId: "pf-t1-quiz"
};
