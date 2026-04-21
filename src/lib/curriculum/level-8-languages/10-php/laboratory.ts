import { exercise as p1 } from './laboratory/01-event-server-init-lab';

export const practice = {
  php: [
    p1,
    ...Array.from({ length: 20 }, (_, i) => ({
      id: `php-p${i + 2}`,
      language: "php",
      title: `Lab PHP Master #${i + 2}`,
      description: "Evolução do Servidor de Eventos.",
      statement: "Implemente a lógica de backend solicitada.",
      isProjectPart: true,
      template: `<?php\n// Continue o servidor\n`,
      detailedExplanation: `<p>Expanda o seu sistema de eventos para produção.</p>`,
      objectives: [{ id: `obj_p${i + 2}`, description: "Implemente a funcionalidade PHP.", test: "{" }]
    }))
  ]
};
