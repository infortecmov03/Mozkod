import { exercise as p1 } from './laboratory/01-dsl-init-lab';

export const practice = {
  ruby: [
    p1,
    ...Array.from({ length: 20 }, (_, i) => ({
      id: `rb-p${i + 2}`,
      language: "ruby",
      title: `Lab Ruby Master #${i + 2}`,
      description: "Evolução da DSL expressiva.",
      statement: "Implemente a camada técnica solicitada.",
      isProjectPart: true,
      template: `# Continue a sua DSL aqui\n`,
      detailedExplanation: `<p>Expanda a inteligência da sua engine.</p>`,
      objectives: [{ id: `obj_p${i + 2}`, description: "Adicione a funcionalidade Ruby.", test: "{" }]
    }))
  ]
};
