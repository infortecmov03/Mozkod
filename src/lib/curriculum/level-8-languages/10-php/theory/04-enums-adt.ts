import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m4",
  title: "Fase 1: Enums e Algebraic Data Types no PHP 8",
  enableInteractive: true,
  quizId: "php-mq4",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          💎 Tipagem de Próxima Geração
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Enums trazem segurança de tipo para conjuntos fixos de valores. No PHP 8, eles são objetos poderosos que podem conter métodos, implementar interfaces e agir como <strong>Algebraic Data Types</strong>.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Backed Enums e Semântica</h3>
        <p class="text-sm">Enums podem ter valores escalares (string ou int) para persistência simplificada em base de dados.</p>
        <pre><code class="language-php">
enum TransactionStatus: string {
    case Pending = 'P';
    case Completed = 'C';
    case Failed = 'F';

    public function label(): string {
        return match($this) {
            self::Pending => 'Aguardando',
            self::Completed => 'Sucesso',
            self::Failed => 'Erro'
        };
    }
}
        </code></pre>
      </section>
    </div>
  `
};
