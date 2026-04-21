import { exercise as p1 } from './laboratory/01-banking-init-lab';

export const practice = {
  java: [
    p1,
    ...Array.from({ length: 20 }, (_, i) => ({
      id: `jv-p${i + 2}`,
      language: "java",
      title: `Lab Java Master #${i + 2}`,
      description: "Evolução do sistema bancário com padrões de elite.",
      statement: "Implemente a lógica solicitada seguindo os princípios de design de alta escala.",
      isProjectPart: true,
      template: `// Continue o desenvolvimento do Core Banking\n`,
      detailedExplanation: `<p>Expanda o seu sistema financeiro com novas camadas de persistência e concorrência.</p>`,
      objectives: [{ id: `obj_p${i + 2}`, description: "Implemente a funcionalidade técnica.", test: "{" }]
    }))
  ]
};