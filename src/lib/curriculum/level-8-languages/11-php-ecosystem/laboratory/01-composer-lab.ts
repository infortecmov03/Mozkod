import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "php-eco-p1",
  language: "php",
  title: "Projeto Master: Otimização Industrial de Autoload",
  description: "Configure o carregamento de classes para performance de elite.",
  statement: "Utilize a configuração de otimização de autoloader no composer.json simulado.",
  isProjectPart: true,
  template: `{
  "name": "cwm/event-server",
  "config": {
    "optimize-autoloader": true,
    "classmap-authoritative": true
  }
}`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">⚙️ Tuning de Produção</h3>
      <p class="text-sm">O objetivo é garantir que o PHP nunca mais faça um <code>file_exists</code> para encontrar uma classe. Isto reduz a latência de arranque da aplicação drasticamente.</p>
    </div>
  `,
  objectives: [
    { id: "opt", description: "Ativar optimize-autoloader.", test: "optimize-autoloader" }
  ]
};