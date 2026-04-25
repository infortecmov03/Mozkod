import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-eco-t2",
  title: "Fase 1: PHPUnit Avançado: Mocks, Stubs e Data Providers",
  enableInteractive: true,
  quizId: "php-eco-mq2",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🧪 Testes de Alta Fidelidade</h2>
        <p class="text-lg">Garantir a integridade de sistemas complexos exige isolar a lógica de negócio da infraestrutura. Dominar <button>Mocks</button> e <button>Stubs</button> é o que permite testar transações sem uma base de dados real.</p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Test Doubles e Injeção</h3>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl">
            <strong><button>Stub</button>:</strong> Fornece respostas fixas para chamadas externas. "Sempre que pedirem o saldo, retorne 1000".
          </li>
          <li class="p-4 bg-muted/20 rounded-xl">
            <strong><button>Mock</button>:</strong> Além de responder, ele verifica se o método foi chamado corretamente (verificação de comportamento).
          </li>
        </ul>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Data Providers</h3>
        <p class="text-sm">Utilize a anotação <button>#[DataProvider]</button> para testar centenas de variações de dados com um único método de teste, garantindo que algoritmos de validação sejam à prova de falhas.</p>
      </section>
    </div>
  `
};