
import type { TheoryLesson } from '../../types';

const phpTitles = [
  "Fase 1: Variáveis, Superglobals e Arrays",
  "Fase 1: Funções e Tratamento de Formulários",
  "Fase 2: POO: Visibilidade, Herança e Interfaces",
  "Fase 2: Traits e Magic Methods",
  "Fase 2: PDO e Prepared Statements (Segurança)",
  "Fase 2: Gestão de Sessões e Cookies",
  "Fase 2: Advanced Array Functions",
  "Fase 3: Modern PHP: Type Declarations e JIT",
  "Fase 3: PHP 8: Match, Promotion e Attributes",
  "Fase 3: Enums (8.1) e Readonly (8.2)",
  "Fase 3: Fibers e Concorrência Reativa",
  "Fase 3: Generators e Iteradores de Memória",
  "Fase 3: Composer: Autoloading e PSRs",
  "Fase 4: Laravel: Eloquent, Blade e Artisan",
  "Fase 4: Laravel: Queues, Events e Livewire",
  "Fase 4: Symfony: Componentes e Service Container",
  "Fase 4: Testing: PHPUnit e Pest",
  "Fase 4: Static Analysis com PHPStan (Level 9)",
  "Fase 4: Performance: OpCache e Swoole",
  "Fase 4: Arquitetura Hexagonal em PHP",
  "Fase 4: Capstone: Deploy de Framework MVC Custom"
];

export const lessons: TheoryLesson[] = phpTitles.map((title, i) => ({
  id: `php-m${i + 1}`,
  title: title,
  content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🐘 PHP Master: ${title}</h2><p>A força motriz da web, escalada para o nível de elite corporativa.</p></div>`,
  quizId: `php-mq${i + 1}`
}));
