import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p14",
  language: "html",
  title: "Projeto Master: Pipeline de Renderização 60FPS",
  description: "Crie animações fluidas integradas ao ciclo de atualização do ecrã.",
  statement: "Implemente um loop de desenho no Canvas utilizando requestAnimationFrame.",
  isProjectPart: true,
  template: `const canvas = document.getElementById('dashboard-chart');
const ctx = canvas.getContext('2d');

function render() {
    // Desenhe aqui
    // Peça o próximo frame
}`,
  detailedExplanation: `
    <h3>🖌️ Engenharia de Frames</h3>
    <p>Para um site profissional, nunca uses <code>setInterval</code> para animações. O <code>requestAnimationFrame</code> sincroniza o teu código com a taxa de atualização do monitor (V-Sync), poupando bateria e garantindo fluidez.</p>
  `,
  objectives: [
    {
      id: "raf",
      description: "Chame a função requestAnimationFrame dentro do seu loop de render.",
      hint: "requestAnimationFrame(render)",
      test: "requestAnimationFrame"
    }
  ]
};
