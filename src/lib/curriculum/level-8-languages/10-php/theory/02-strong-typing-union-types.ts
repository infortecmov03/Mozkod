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
          💪 A Evolução para o Tipo Estrito
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O PHP 8 transformou-se numa linguagem de <strong>tipagem forte e expressiva</strong>. Como engenheiro de elite, você não usa tipos apenas para documentação; você os usa para criar contratos invioláveis que permitem ao motor JIT otimizar o código de máquina e ao analisador estático (PHPStan) provar a ausência de erros antes da execução.
        </p>
      </div>

      <!-- 1. UNION E INTERSECTION TYPES -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Union Types (A|B) e Intersection Types (A&B)</h3>
        <p class="text-sm">Union Types permitem que um argumento aceite múltiplos tipos de forma explícita, eliminando o uso do vago <code>mixed</code> ou verificações manuais de <code>is_numeric()</code>.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-4">
             <h4 class="font-bold text-primary text-xs uppercase tracking-widest">Union Types (PHP 8.0)</h4>
             <pre><code class="language-php">
// Aceita inteiros ou floats para cálculos precisos
function calculateTax(int|float $value): int|float {
    return $value * 0.15;
}
             </code></pre>
          </div>
          <div class="space-y-4">
             <h4 class="font-bold text-primary text-xs uppercase tracking-widest">Intersection Types (PHP 8.1)</h4>
             <pre><code class="language-php">
// O objeto DEVE implementar ambas as interfaces
function archive(Iterator&Countable $data): void {
    if (count($data) > 0) {
        foreach($data as $item) { /* ... */ }
    }
}
             </code></pre>
          </div>
        </div>
      </section>

      <!-- 2. O TIPO MIXED E NEVER -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Tipos Especiais: Mixed e Never</h3>
        <p class="text-sm leading-relaxed">O PHP 8 introduziu tipos que fecham as lacunas da lógica de execução.</p>

        <ul class="space-y-4">
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div>
              <p class="font-bold text-sm">mixed:</p>
              <p class="text-xs text-muted-foreground leading-relaxed">Equivale a <code>array|bool|callable|int|float|object|resource|string|null</code>. Use apenas quando o tipo é verdadeiramente dinâmico (ex: resposta de uma API externa genérica).</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div>
              <p class="font-bold text-sm">never:</p>
              <p class="text-xs text-muted-foreground leading-relaxed">Indica que a função <strong>nunca</strong> retorna um valor; ela ou lança uma exceção ou encerra o script (exit). Ajuda o analisador estático a entender que o código após a chamada é inalcançável.</p>
            </div>
          </li>
        </ul>
      </section>

      <!-- 3. COVARIANÇA E CONTRAVARIANÇA -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Variância de Tipos: Liskov em Prática</h3>
        <p class="text-sm">Um Engenheiro Master entende que as subclasses podem ser mais específicas no retorno, mas devem ser mais genéricas nos argumentos.</p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-4">Regra de Variância</h4>
          <ul class="text-xs space-y-3">
            <li><strong>Covariância (Retorno):</strong> Uma classe filha pode retornar um tipo mais específico (ex: <code>return User</code> em vez de <code>return object</code>).</li>
            <li><strong>Contravariância (Argumentos):</strong> Uma classe filha pode aceitar um tipo menos específico (ex: aceitar <code>object</code> em vez de apenas <code>User</code>).</li>
          </ul>
        </div>
      </section>

      <!-- 4. STRICT TYPES -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">4. declare(strict_types=1)</h3>
        <p class="text-sm leading-relaxed">Sem esta diretiva, o PHP tentará converter <code>"10"</code> (string) para <code>10</code> (int) automaticamente. No nível Master, desativamos a coerção para garantir que os dados processados pelo nosso servidor de eventos sejam exatamente o que esperamos.</p>
        
        <pre><code class="language-php">
declare(strict_types=1);

function add(int $a, int $b): int {
    return $a + $b;
}

add(5, "10"); // ❌ FATAL ERROR: Argumento 2 deve ser int, string fornecida.
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 A Visão do Arquiteto</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Tipagem forte não é sobre restrição, é sobre liberdade. Quando você garante os tipos na assinatura do método, você liberta o corpo da função de validações defensivas repetitivas, criando um código focado puramente na lógica de negócio."
        </p>
      </section>
    </div>
  `,
};
