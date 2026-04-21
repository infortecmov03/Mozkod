import type { PracticeExercise } from '../../types';

export const practice = {
  css: [
    {
      id: "css-p1",
      language: "css",
      title: "Lab Master: Seletores e Especificidade",
      description: "Resolva conflitos de estilo usando lógica de elite.",
      statement: "Use o seletor :is() para aplicar a cor 'red' a h1, h2 e h3 sem aumentar excessivamente a especificidade.",
      template: `/* Otimize estes seletores */
:is(h1, h2, h3) {
  
}`,
      detailedExplanation: "<h3>🎯 Seletor :is()</h3><p>O :is() agrupa seletores e assume a especificidade do seletor mais forte do grupo, permitindo um código muito mais limpo e manutenível.</p>",
      objectives: [{ id: "obj1", description: "Usar seletor :is", test: ":is(" }, { id: "obj2", description: "Definir cor vermelha", test: "color: red" }]
    },
    {
      id: "css-p2",
      language: "css",
      title: "Lab Master: Cascade Layers",
      description: "Organize a precedência de estilos.",
      statement: "Crie uma layer chamada 'framework' e outra 'theme'. Defina o fundo como 'black' na layer theme.",
      template: `@layer framework, theme;

@layer theme {
  body {
    
  }
}`,
      detailedExplanation: "<h3>🛡️ @layer</h3><p>As layers permitem que definas a ordem de precedência independentemente da especificidade dos seletores, resolvendo o problema das especificidades 'sujas'.</p>",
      objectives: [{ id: "obj1", description: "Definir layers", test: "@layer" }, { id: "obj2", description: "Definir background black", test: "background: black" }]
    },
    {
      id: "css-p3",
      language: "css",
      title: "Lab Master: Subgrid",
      description: "Alinhamento perfeito em grids aninhados.",
      statement: "Configure o 'grid-template-columns' para herdar as colunas do pai usando subgrid.",
      template: `.item-interno {
  display: grid;
  grid-template-columns: ;
}`,
      detailedExplanation: "<h3>📐 Subgrid</h3><p>O subgrid permite que um elemento filho herde a definição de trilhas (tracks) do elemento pai, garantindo alinhamento perfeito entre componentes diferentes.</p>",
      objectives: [{ id: "obj1", description: "Usar valor subgrid", test: "subgrid" }]
    }
  ]
};
