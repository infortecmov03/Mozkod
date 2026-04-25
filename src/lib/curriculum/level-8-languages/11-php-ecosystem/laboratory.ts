import type { PracticeExercise } from '../../types';
import { exercise as p1 } from './laboratory/01-composer-lab';
import { exercise as p2 } from './laboratory/02-phpunit-mocks-lab';
import { exercise as p4 } from './laboratory/04-mutation-testing-lab';
import { exercise as p5 } from './laboratory/05-ddd-strategic-lab';
import { exercise as p6 } from './laboratory/06-ddd-tactical-lab';
import { exercise as p7 } from './laboratory/07-event-store-lab';
import { exercise as p8 } from './laboratory/08-factory-method-lab';
import { exercise as p9 } from './laboratory/09-strategy-pattern-lab';
import { exercise as p14 } from './laboratory/14-property-hooks-lab';

const generateEcoLab = (idNum: number) => ({
  id: `php-eco-p${idNum}`,
  language: "process",
  title: `Projeto Master: Milestone ${idNum}`,
  description: "Evolução do High-Scale Event Server.",
  statement: "Implemente o requisito técnico deste marco.",
  isProjectPart: true,
  template: "<?php\n\n// Checkpoint anterior carregado.\n",
  detailedExplanation: "<h3>🏗️ Engenharia de Ecossistema</h3><p>Aplicação de padrões avançados no servidor de eventos.</p>",
  objectives: [{ id: "obj", description: "Concluir etapa", test: "php" }]
});

export const practice = {
  php: Array.from({ length: 21 }, (_, i) => {
    const id = i + 1;
    if (id === 1) return p1;
    if (id === 2) return p2;
    if (id === 4) return p4;
    if (id === 5) return p5;
    if (id === 6) return p6;
    if (id === 7) return p7;
    if (id === 8) return p8;
    if (id === 9) return p9;
    if (id === 14) return p14;
    return generateEcoLab(id);
  })
};
