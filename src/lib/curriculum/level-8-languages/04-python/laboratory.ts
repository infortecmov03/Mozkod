import { exercise as p1 } from './laboratory/01-gil-profiling-lab';

export const practice = {
  python: [
    p1,
    ...Array.from({ length: 20 }, (_, i) => ({
      id: `py-p${i + 2}`,
      language: "python",
      title: `Lab Python Master #${i + 2}`,
      description: "Evolução do projeto de monitorização com técnicas de elite.",
      statement: "Implemente a camada técnica correspondente à lição de teoria.",
      isProjectPart: true,
      template: `# Continue o seu Projeto Master aqui\n`,
      detailedExplanation: `<p>Expanda as capacidades do seu motor de análise com novos módulos de performance.</p>`,
      objectives: [{ id: `obj_p${i + 2}`, description: "Implemente a funcionalidade solicitada.", test: "(" }]
    }))
  ]
};