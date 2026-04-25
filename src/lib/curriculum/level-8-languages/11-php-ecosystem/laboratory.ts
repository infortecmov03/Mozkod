import type { PracticeExercise } from '../../types';
import { exercise as p1 } from './laboratory/01-composer-lab';
import { exercise as p2 } from './laboratory/02-phpunit-mocks-lab';
import { exercise as p4 } from './laboratory/04-mutation-testing-lab';
import { exercise as p5 } from './laboratory/05-ddd-strategic-lab';
import { exercise as p6 } from './laboratory/06-ddd-tactical-lab';
import { exercise as p7 } from './laboratory/07-event-store-lab';
import { exercise as p8 } from './laboratory/08-factory-method-lab';
import { exercise as p9 } from './laboratory/09-strategy-pattern-lab';
import { exercise as p10 } from './laboratory/10-psr-compliance-lab';
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
    const sourceMap: Record<number, any> = {
      1: p1, 2: p2, 4: p4, 5: p5, 6: p6, 7: p7, 8: p8, 9: p9, 10: p10, 14: p14
    };
    
    if (sourceMap[id]) return sourceMap[id];
    return generateEcoLab(id);
  })
};
