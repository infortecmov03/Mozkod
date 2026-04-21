import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "js-p3",
  language: "html",
  title: "Projeto Master: Comunicação por Custom Events",
  description: "Crie um sistema de eventos personalizado para desacoplar a sua lógica.",
  statement: "Dispare um evento chamado 'cwm:update' com um payload de dados quando o seu formulário for submetido.",
  isProjectPart: true,
  template: `// No seu script master
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Crie e dispare o evento customizado aqui
});`,
  detailedExplanation: `
    <h3>📡 Arquitetura Desacoplada</h3>
    <p>O uso de <strong>Custom Events</strong> permite que diferentes partes do seu código comuniquem sem conhecerem os detalhes uma da outra. É o segredo para manter grandes bases de código JavaScript organizadas.</p>
  `,
  objectives: [
    {
      id: "custom_event",
      description: "Crie um novo CustomEvent('cwm:update', { detail: { ... } }).",
      hint: "new CustomEvent('cwm:update', { detail: { id: 1 } })",
      test: "new CustomEvent"
    },
    {
      id: "dispatch",
      description: "Use dispatchEvent() para propagar o evento a partir do formulário.",
      hint: "form.dispatchEvent(event)",
      test: "dispatchEvent"
    }
  ]
};
