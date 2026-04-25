import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m3",
  title: "Fase 1: Constructor Property Promotion e Redução de Boilerplate",
  enableInteractive: true,
  quizId: "php-mq3",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🚀 Eficiência Arquitetural
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O <strong>Constructor Property Promotion</strong> elimina o código repetitivo em DTOs e classes de serviço, permitindo declarar e inicializar propriedades diretamente na assinatura do construtor.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. O Fim das Atribuições Manuais</h3>
        <p class="text-sm">Em vez de declarar a propriedade, o parâmetro e a atribuição <code>$this->x = $x</code>, fazemos tudo numa só linha definindo a visibilidade.</p>
        <pre><code class="language-php">
// PHP 8+ Elite Way
readonly class User {
    public function __construct(
        public string $name,
        public int $age,
        private string $password
    ) {}
}
        </code></pre>
      </section>

      <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20">
        <h4 class="font-bold text-indigo-400 mb-2">💎 Readonly Classes</h4>
        <p class="text-sm">Combinar promoção com <code>readonly</code> garante que o objeto de dados seja imutável após a criação, um padrão essencial para sistemas resilientes.</p>
      </div>
    </div>
  `
};
