import type { PracticeExercise } from '../../types';
import { exercise as p1 } from './laboratory/01-composer-lab';
import { exercise as p2 } from './laboratory/02-phpunit-mocks-lab';
import { exercise as p14 } from './laboratory/13-ffi-binary-parser-lab';
import { exercise as p21 } from './laboratory/21-capstone-event-server-lab';

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
    if (id === 2) return p2;
    // O item 14 na lista de títulos (index 13) é o FFI Binary Parser
    if (id === 14) return p14;
    if (id === 21) return p21;
    return generateEcoLab(id);
  })
};
