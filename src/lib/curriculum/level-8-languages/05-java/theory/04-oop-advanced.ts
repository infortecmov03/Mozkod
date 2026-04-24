import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "jv-m4",
  title: "Java Moderno: OOP Avançada, Records e Sealed Classes",
  quizId: "jv-mq4",
  enableInteractive: true,
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          📦 O Fim do Boilerplate
        </h2>
        <p class="text-lg leading-relaxed">
          O Java moderno (17 e 21) introduziu mudanças profundas na forma como modelamos dados. O foco mudou de classes mutáveis e complexas para a <strong>Programação Orientada a Dados</strong>, utilizando imutabilidade e hierarquias fechadas.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Java Records (JEP 395)</h3>
        <p class="text-sm">Records são classes que servem apenas para transportar dados imutáveis. O compilador gera automaticamente: construtor, acessores (não getters), equals, hashCode e toString.</p>
        <div class="bg-black/40 p-5 rounded-xl border font-code text-sm text-accent shadow-inner">
          public record Transaction(String id, double amount) { }
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-primary">2. Sealed Classes (JEP 409)</h3>
        <p class="text-sm leading-relaxed">
          Permitem restringir quais classes podem estender uma classe pai. Isto cria uma hierarquia fechada, permitindo que o compilador valide se todos os casos de um <code>switch</code> foram tratados (Pattern Matching).
        </p>
        <pre><code class="language-java">
public sealed interface Account permits Savings, Checking { }
public final class Savings implements Account { }
public final class Checking implements Account { }
        </code></pre>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">💎 ADTs (Algebraic Data Types)</h4>
          <p class="text-sm leading-relaxed">A combinação de Records e Sealed Classes permite criar ADTs em Java, o que é fundamental para modelar domínios de negócio complexos (como estados de transações bancárias) com segurança absoluta.</p>
        </div>
      </div>
    </div>
  `
};