import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "pf-p6-js",
  language: "javascript",
  title: "Missão: A Fábrica de Cálculos",
  description: "Aprenda a modularizar lógica para reutilização infinita.",
  statement: "Crie uma função que converta Meticais para Dólares.",
  isProjectPart: true,
  template: ``,
  youtubeVideoId: "mNst8vX-u8E",
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🛠️ Construindo Módulos</h3>
      <p>Uma função é como uma máquina: tu dás um valor, ela processa e devolve o resultado. Vamos criar um conversor de moeda.</p>
      
      <div class="bg-muted p-4 rounded-xl border border-white/10 space-y-2">
        <p class="text-xs font-bold text-yellow-500">A Ferramenta do Dia:</p>
        <p class="text-[11px] font-mono leading-relaxed">
          <span class="text-primary">function</span> converter(valor) { <br/>
          &nbsp;&nbsp;<span class="text-primary">return</span> valor / 64; <br/>
          }<br/>
          <span class="text-primary">const</span> resultado = converter(1280);<br/>
          <span class="text-primary">console.log</span>(resultado);
        </p>
      </div>

      <p class="text-xs">
        <strong>Instruções de Construção:</strong>
        <br/>1. Cria uma função chamada <code>converter</code> que recebe <code>valorMZN</code>.
        <br/>2. Dentro dela, retorna o valor dividido por 64 (taxa fictícia).
        <br/>3. Fora da função, chama <code>converter(1280)</code> e guarda numa variável.
        <br/>4. Exibe o resultado no terminal.
      </p>
    </div>
  `,
  objectives: [
    { id: "obj1", description: "Definir function converter(valorMZN)", test: "function converter" },
    { id: "obj2", description: "Usar a palavra-chave return", test: "return" },
    { id: "obj3", description: "Exibir o valor 20 no terminal", test: "console.log" }
  ]
};
