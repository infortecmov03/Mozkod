
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "web-p1-css",
  language: "css",
  title: "Laboratório: Cores e Fontes",
  description: "Aplica estilos básicos a uma página HTML.",
  statement: "Muda a cor do texto de todos os parágrafos <p> para 'blue' e o tamanho da fonte para '18px'.",
  template: `/* Escreve o teu CSS abaixo */
p {
  
}`,
  detailedExplanation: `
    <h3>🎨 Estilizando Elementos</h3>
    <p>Para selecionar todos os parágrafos, usamos o seletor de tag <code>p</code>. As propriedades que precisas são <code>color</code> e <code>font-size</code>.</p>
  `,
  objectives: [
    {
      id: "obj1",
      description: "Cor do texto deve ser azul",
      test: "color: blue"
    },
    {
      id: "obj2",
      description: "Tamanho da fonte deve ser 18px",
      test: "font-size: 18px"
    }
  ]
};
