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
          🚀 Adeus ao Código Repetitivo
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O <strong>Constructor Property Promotion</strong> (PHP 8.0) é uma das funcionalidades mais amadas pelos engenheiros. Ela permite declarar e inicializar propriedades de classe diretamente na assinatura do construtor, eliminando a necessidade de repetir o nome da variável quatro vezes (declaração, parâmetro, atribuição e docblock).
        </p>
      </div>

      <!-- 1. O PROBLEMA DO BOILERPLATE -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. A Anatomia da Redundância</h3>
        <p class="text-sm">Repare como o PHP 7.4 exigia código puramente mecânico para criar uma classe simples de dados (DTO):</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
             <h4 class="font-bold text-red-400 text-xs mb-2">Padrão Antigo (Verboso)</h4>
             <pre><code class="language-php">
class User {
    public string $name;
    public int $age;

    public function __construct(
        string $name,
        int $age
    ) {
        $this->name = $name;
        $this->age = $age;
    }
}
             </code></pre>
          </div>
          <div class="p-4 bg-green-500/5 border border-green-500/20 rounded-xl">
             <h4 class="font-bold text-green-400 text-xs mb-2">Padrão Master (PHP 8+)</h4>
             <pre><code class="language-php">
class User {
    public function __construct(
        public string $name,
        public int $age,
    ) {}
}
             </code></pre>
             <p class="text-[10px] mt-2 opacity-70">O compilador gera a declaração e a atribuição automaticamente.</p>
          </div>
        </div>
      </section>

      <!-- 2. REGRAS TÉCNICAS -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Regras de Ouro e Restrições</h3>
        <p class="text-sm leading-relaxed">Para que a promoção ocorra, o parâmetro <strong>deve</strong> ter um modificador de visibilidade (public, private ou protected).</p>

        <ul class="space-y-4">
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div>
              <p class="font-bold text-sm">Visibilidade Obrigatória:</p>
              <p class="text-xs text-muted-foreground leading-relaxed">Se removeres o <code>public</code>, o parâmetro torna-se um argumento de função normal e a propriedade não é criada na classe.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div>
              <p class="font-bold text-sm">Tipagem e Valores Padrão:</p>
              <p class="text-xs text-muted-foreground leading-relaxed">Podes usar Union Types e valores padrão normalmente. Ex: <code>public string|int $id = 0</code>.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div>
              <p class="font-bold text-sm">Corpo do Construtor:</p>
              <p class="text-xs text-muted-foreground leading-relaxed">Ainda podes ter código dentro das chavetas <code>{ }</code>. Ele será executado APÓS a promoção automática das propriedades.</p>
            </div>
          </li>
        </ul>
      </section>

      <!-- 3. INTERAÇÃO COM READONLY -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Imutabilidade: Readonly Classes</h3>
        <p class="text-sm">A combinação mais poderosa para DTOs é usar Property Promotion com o modificador <code>readonly</code>.</p>
        
        <pre><code class="language-php">
readonly class EventMetadata {
    public function __construct(
        public string $traceId,
        public DateTimeImmutable $createdAt,
    ) {}
}

// ✅ Imutabilidade garantida pelo motor
$meta = new EventMetadata("uuid-123", new DateTimeImmutable());
// $meta->traceId = "outro"; // ❌ Erro: Não pode modificar
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 A Visão do Engenheiro</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Property Promotion não é apenas atalho visual. É sobre reduzir a carga cognitiva e o erro humano. Quando o nome da variável aparece num único lugar, a manutenção e a refatoração tornam-se processos seguros e triviais."
        </p>
      </section>
    </div>
  `,
};
