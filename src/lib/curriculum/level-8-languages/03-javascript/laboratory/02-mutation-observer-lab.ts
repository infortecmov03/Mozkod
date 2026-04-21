import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "js-p2",
  language: "html",
  title: "Projeto Master: DOM Mutation Observer",
  description: "Monitorize mudanças na estrutura do seu site programaticamente.",
  statement: "Implemente um MutationObserver que detete quando novos elementos são adicionados ao container principal do seu projeto.",
  isProjectPart: true,
  template: `// No seu script master
const targetNode = document.querySelector('main');
const config = { childList: true, subtree: true };

const callback = (mutationsList) => {
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('DOM alterado!');
        }
    }
};

// Inicialize o observador aqui`,
  detailedExplanation: `
    <h3>👁️ Vigilância do DOM</h3>
    <p>O <code>MutationObserver</code> é a ferramenta de elite para criar extensões de browser ou frameworks reativos. Ele permite reagir a mudanças no HTML sem poluir o código com milhares de disparos de eventos manuais.</p>
  `,
  objectives: [
    {
      id: "observer_init",
      description: "Instancie o MutationObserver passando o callback.",
      hint: "const observer = new MutationObserver(callback);",
      test: "new MutationObserver"
    },
    {
      id: "observer_observe",
      description: "Chame o método observe() no alvo configurado.",
      hint: "observer.observe(targetNode, config);",
      test: "observe(targetNode"
    }
  ]
};
