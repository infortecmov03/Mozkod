import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-eco-t14",
  title: "Fase 3: PHP 8.4+: Property Hooks e Asymmetric Visibility",
  enableInteractive: true,
  quizId: "php-eco-mq14",
  content: `
    <div class="space-y-12">
      <div class="bg-green-500/5 p-8 rounded-[2.5rem] border border-green-500/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-green-400">🆕 O Futuro do PHP</h2>
        <p class="text-lg">O <button>PHP 8.4</button> introduziu <button>Property Hooks</button>, eliminando a necessidade de getters e setters manuais. Agora, a lógica de acesso vive na própria propriedade.</p>
      </div>
      <pre><code class="language-php">
public string $email {
  set(string $value) {
    if (!str_contains($value, '@')) throw new Error();
    $this->email = strtolower($value);
  }
  get => strtoupper($this->email);
}
      </code></pre>
      <section class="space-y-6">
        <h3 class="text-xl font-bold text-accent">Visibilidade Assimétrica</h3>
        <p class="text-sm">Permite que uma propriedade seja <button>public</button> para leitura mas <button>private</button> para escrita, um padrão master de imutabilidade controlada.</p>
      </section>
    </div>
  `
};