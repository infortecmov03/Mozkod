import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m2",
  title: "Fase 1: Union Types e Tipagem Forte no PHP 8",
  enableInteractive: true,
  quizId: "php-mq2",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          💪 Tipagem como Contrato de Engenharia
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O PHP 8 elevou o rigor da linguagem para níveis de Java ou C#. Com <strong>Union Types</strong> e o modo estrito, os tipos deixaram de ser sugestões para se tornarem garantias de integridade de dados.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Union e Intersection Types</h3>
        <p class="text-sm">Lide com múltiplos tipos sem sacrificar a segurança. <code>string|int</code> garante que apenas estes dois tipos entrem na sua função.</p>
        <pre><code class="language-php">
// Union Type: Aceita um ou outro
function process(string|int $id): void { ... }

// Intersection Type: Deve implementar AMBOS (PHP 8.1+)
function export(Iterator&Countable $data): void { ... }
        </code></pre>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. O Tipo 'never' e Controle de Fluxo</h3>
        <p class="text-sm">O tipo <code>never</code> indica ao analisador estático que a função nunca retorna um valor (ou lança erro ou encerra o script), permitindo otimizações de código inalcançável.</p>
      </section>

      <div class="bg-red-500/5 p-6 rounded-2xl border border-red-500/20">
        <h4 class="font-bold text-red-400 mb-2">🚀 declare(strict_types=1)</h4>
        <p class="text-sm">Obriga o motor a recusar coerções automáticas (ex: converter "10" em 10). Em sistemas financeiros, o modo estrito é obrigatório por design.</p>
      </div>
    </div>
  `
};
