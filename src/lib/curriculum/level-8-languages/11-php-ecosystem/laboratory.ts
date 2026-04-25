import { exercise as p1 } from './laboratory/01-composer-lab';

const generateEcoLab = (idNum: number) => ({
  id: `php-eco-p${idNum}`,
  language: "php",
  title: `Projeto Master: Milestone ${idNum}`,
  description: "Evolução do High-Scale Event Server.",
  statement: "Implemente o requisito técnico deste marco.",
  isProjectPart: true,
  template: "<?php\n\n// Checkpoint anterior carregado.\n",
  detailedExplanation: "<h3>🏗️ Engenharia de Ecossistema</h3>",
  objectives: [{ id: "obj", description: "Concluir etapa", test: "php" }]
});

export const practice = {
  php: Array.from({ length: 21 }, (_, i) => {
    const id = i + 1;
    if (id === 1) return p1;
    return generateEcoLab(id);
  })
};