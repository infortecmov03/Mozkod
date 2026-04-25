import type { TheoryLesson } from '../../types';

export const lessons: TheoryLesson[] = [
  {
    id: "php-eco-t1",
    title: "Fase 1: Composer Master: Autoloaders, Scripts e Plugins",
    enableInteractive: true,
    youtubeVideoId: "R8dYLbJiTUE",
    quizId: "php-eco-mq1",
    content: `
      <div class="space-y-12">
        <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">📦 Gestão de Dependências de Elite</h2>
          <p class="text-lg leading-relaxed opacity-90">O <button>Composer</button> não é apenas um instalador de pacotes; é o orquestrador do ecossistema. No nível Master, otimizamos o <button>Autoloading</button> para produção e criamos <button>Scripts</button> que automatizam o pipeline de qualidade.</p>
        </div>

        <section class="space-y-6">
          <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Otimização de Autoload (PSR-4)</h3>
          <p class="text-sm">Em produção, o custo de procurar ficheiros no disco é proibitivo. O comando <button>composer dump-autoload -o</button> gera um mapa de classes estático, eliminando o overhead de I/O em cada request. Em sistemas de larga escala, utilizamos o <button>--classmap-authoritative</button> para impedir que o PHP procure ficheiros que não estão no mapa.</p>
        </section>

        <section class="space-y-6">
          <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Composer Scripts e Auditoria</h3>
          <p class="text-sm">Automatize tarefas complexas diretamente no <button>composer.json</button>. Scripts permitem rodar análises de segurança e formatação de código com um único comando.</p>
          <pre><code class="language-json">
"scripts": {
  "audit": ["phpstan analyze", "phpunit", "composer audit"],
  "post-install-cmd": "App\\\\Core\\\\Installer::warmup"
}
          </code></pre>
        </div>
    `
  },
  {
    id: "php-eco-t2",
    title: "Fase 1: PHPUnit Avançado: Mocks, Stubs e Data Providers",
    enableInteractive: true,
    youtubeVideoId: "dQw4w9WgXcQ",
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
  },
  {
    id: "php-eco-t3",
    title: "Fase 1: Pest PHP: O Futuro dos Testes Funcionais",
    enableInteractive: true,
    youtubeVideoId: "8ME9u065vD4",
    quizId: "php-eco-mq3",
    content: `
      <div class="space-y-12">
        <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🐝 Elegância com Pest</h2>
          <p class="text-lg">O <button>Pest PHP</button> simplifica a escrita de testes funcionais através de uma <button>DSL</button> focada em expectativas humanas. Ele reduz a verbosidade e permite criar suítes de teste extremamente legíveis.</p>
        </div>
        <pre><code class="language-php">
it('deve validar o tópico do evento', function() {
    $handler = new WelcomeHandler('user.signup');
    expect($handler->getTopic())->toBe('user.signup');
});
        </code></pre>
      </div>
    `
  },
  {
    id: "php-eco-t4",
    title: "Fase 1: Mutation Testing: Auditoria com Infection",
    enableInteractive: true,
    youtubeVideoId: "u044iM9xsTM",
    quizId: "php-eco-mq4",
    content: `
      <div class="space-y-12">
        <div class="bg-red-500/5 p-8 rounded-[2.5rem] border border-red-500/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-red-400">🦠 Quem Testa os Testadores?</h2>
          <p class="text-lg">Ter 100% de cobertura de código (<button>Code Coverage</button>) não garante qualidade. O <button>Infection</button> realiza <button>Mutation Testing</button>, alterando o teu código e verificando se os teus testes detetam a mudança.</p>
        </div>
        <p class="text-sm leading-relaxed">Se o código mudou e os testes continuam a passar, tens um <strong>Mutante Sobrevivente</strong>. Isso indica que os teus testes são frágeis ou incompletos.</p>
      </div>
    `
  },
  {
    id: "php-eco-t5",
    title: "Fase 2: DDD Estratégico: Bounded Contexts e Linguagem Ubíqua",
    enableInteractive: true,
    youtubeVideoId: "Z5JC9Ve1sfI",
    quizId: "php-eco-mq5",
    content: `
      <div class="space-y-12">
        <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">⬢ Modelagem de Complexidade</h2>
          <p class="text-lg">O <button>Domain Driven Design (DDD)</button> é a estratégia para domar sistemas gigantes. O foco muda da tecnologia para o <strong>Domínio de Negócio</strong>.</p>
        </div>
        <section class="space-y-6">
          <h3 class="text-xl font-bold text-accent">1. Bounded Contexts</h3>
          <p class="text-sm">Divida a aplicação em contextos delimitados onde os termos têm um significado único. O objeto 'User' no contexto de 'Faturação' é diferente do 'User' no contexto de 'Marketing'.</p>
        </section>
      </div>
    `
  },
  {
    id: "php-eco-t6",
    title: "Fase 2: DDD Tático: Entities, Value Objects e Aggregates",
    enableInteractive: true,
    youtubeVideoId: "mNst8vX-u8E",
    quizId: "php-eco-mq6",
    content: `
      <div class="space-y-12">
        <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🧱 Blocos de Construção</h2>
          <p class="text-lg">Identifique objetos com identidade persistente (<button>Entities</button>) e objetos definidos apenas pelos seus dados (<button>Value Objects</button>).</p>
        </div>
        <p class="text-sm leading-relaxed">O uso de <button>Aggregate Roots</button> garante que a consistência dos dados seja mantida, permitindo que alterações em grupos de objetos (ex: Ordem e Itens) sejam atómicas e seguras.</p>
      </div>
    `
  },
  {
    id: "php-eco-t7",
    title: "Fase 2: CQRS e Event Sourcing: O Estado como História",
    enableInteractive: true,
    youtubeVideoId: "8aGhZQkoFbQ",
    quizId: "php-eco-mq7",
    content: `
      <div class="space-y-12">
        <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">📖 Reconstruindo o Passado</h2>
          <p class="text-lg">No <button>Event Sourcing</button>, o estado atual é a soma de todos os eventos passados. Isto permite auditoria total e a capacidade de voltar atrás no tempo para diagnosticar erros.</p>
        </div>
        <section class="space-y-6">
          <h3 class="text-xl font-bold text-accent">CQRS (Command Query Responsibility Segregation)</h3>
          <p class="text-sm">Separe as operações de escrita (Comandos) das operações de leitura (Consultas). Isto permite otimizar a performance de leitura de forma independente da complexidade da escrita.</p>
        </section>
      </div>
    `
  },
  {
    id: "php-eco-t8",
    title: "Fase 2: Design Patterns I: Padrões de Criação",
    enableInteractive: true,
    youtubeVideoId: "dQw4w9WgXcQ",
    quizId: "php-eco-mq8",
    content: `
      <div class="space-y-12">
        <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🏭 Fábricas de Software</h2>
          <p class="text-lg">Abstraia a criação de objetos complexos. Use o <button>Abstract Factory</button> para famílias de produtos e o <button>Builder</button> para objetos com dezenas de configurações opcionais.</p>
        </div>
      </div>
    `
  },
  {
    id: "php-eco-t9",
    title: "Fase 2: Design Patterns II: Padrões Comportamentais",
    enableInteractive: true,
    youtubeVideoId: "raf_id_patterns",
    quizId: "php-eco-mq9",
    content: `
      <div class="space-y-12">
        <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🤝 Orquestrando o Comportamento</h2>
          <p class="text-lg">Padrões como <button>Strategy</button> permitem trocar algoritmos em runtime, enquanto o <button>Observer</button> é a base para sistemas reativos e disparos de eventos.</p>
        </div>
      </div>
    `
  },
  {
    id: "php-eco-t10",
    title: "Fase 2: PSR Standards: A Constituição do PHP Moderno",
    enableInteractive: true,
    youtubeVideoId: "v4cd1O4zkGw",
    quizId: "php-eco-mq10",
    content: `
      <div class="space-y-12">
        <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">⚖️ Interoperabilidade Industrial</h2>
          <p class="text-lg">As <button>PSR</button> (PHP Standard Recommendations) garantem que bibliotecas de diferentes autores funcionem juntas. Dominamos a <button>PSR-7</button> (HTTP) e a <button>PSR-11</button> (Containers).</p>
        </div>
      </div>
    `
  },
  {
    id: "php-eco-t11",
    title: "Fase 3: Dependency Injection e Contentores de Elite",
    enableInteractive: true,
    youtubeVideoId: "raf_id_di",
    quizId: "php-eco-mq11",
    content: `
      <div class="space-y-12">
        <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">💉 Injeção de Dependência Profunda</h2>
          <p class="text-lg">Aprenda a configurar <button>Autowiring</button> e a usar <button>Compiled Containers</button> do Symfony para performance máxima, onde as dependências são resolvidas durante o build, não no request.</p>
        </div>
      </div>
    `
  },
  {
    id: "php-eco-t12",
    title: "Fase 3: Framework Internals I: O Kernel do Laravel",
    enableInteractive: true,
    youtubeVideoId: "9TycLR0TqFA",
    quizId: "php-eco-mq12",
    content: `
      <div class="space-y-12">
        <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🎩 Desmontando a Mágica</h2>
          <p class="text-lg">Entenda o ciclo de vida do pedido no Laravel: do <button>Service Provider</button> ao <button>Pipeline</button> de middlewares. Descubra como as <button>Facades</button> funcionam via proxies dinâmicos.</p>
        </div>
      </div>
    `
  },
  {
    id: "php-eco-t13",
    title: "Fase 3: Framework Internals II: Symfony HttpKernel",
    enableInteractive: true,
    youtubeVideoId: "dQw4w9WgXcQ",
    quizId: "php-eco-mq13",
    content: `
      <div class="space-y-12">
        <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🏗️ A Engenharia do Symfony</h2>
          <p class="text-lg">Explore o <button>HttpKernel</button> e o <button>EventDispatcher</button>. Veja como o Symfony transforma um Request numa Response seguindo um fluxo rigoroso e extensível de eventos.</p>
        </div>
      </div>
    `
  },
  {
    id: "php-eco-t14",
    title: "Fase 3: PHP 8.4+: Property Hooks e Asymmetric Visibility",
    enableInteractive: true,
    youtubeVideoId: "raf_id_84",
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
}
        </code></pre>
      </div>
    `
  },
  {
    id: "php-eco-t15",
    title: "Fase 3: Profiling Industrial: Xdebug, Blackfire e Tideways",
    enableInteractive: true,
    youtubeVideoId: "v4cd1O4zkGw",
    quizId: "php-eco-mq15",
    content: `
      <div class="space-y-12">
        <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
          <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🔬 Diagnosticando a Performance</h2>
          <p class="text-lg">Use o <button>Xdebug</button> para encontrar bugs complexos e o <button>Blackfire</button> para identificar gargalos de CPU e RAM em produção sem degradar o motor <button>JIT</button>.</p>
        </div>
      </div>
    `
  },
  {
    id: "php-eco-t16",
    title: "Fase 3: Caching Estratégico: Redis, Memcached e L2",
    enableInteractive: true,
    youtubeVideoId: "u044iM9xsTM",
    quizId: "php-eco-mq16",
    content: `
      <div class="space-y-12">
        <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🏎️ Acelerando o Acesso</h2>
          <p class="text-lg">Implemente o cache de segundo nível (<button>L2 Cache</button>) e use o <button>Redis</button> como um store de dados atómico para gerir bloqueios e contadores em tempo real.</p>
        </div>
      </div>
    `
  },
  {
    id: "php-eco-t17",
    title: "Fase 4: Varnish e Proxies Reversos de Alta Escala",
    enableInteractive: true,
    youtubeVideoId: "8aGhZQkoFbQ",
    quizId: "php-eco-mq17",
    content: `
      <div class="space-y-12">
        <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🛡️ Protegendo o Backend</h2>
          <p class="text-lg">Domine a linguagem <button>VCL</button> para configurar o <button>Varnish</button>. Utilize <button>ESI (Edge Side Includes)</button> para cachear partes estáticas de páginas dinâmicas.</p>
        </div>
      </div>
    `
  },
  {
    id: "php-eco-t18",
    title: "Fase 4: Database Sharding e Read/Write Splitting",
    enableInteractive: true,
    youtubeVideoId: "9TycLR0TqFA",
    quizId: "php-eco-mq18",
    content: `
      <div class="space-y-12">
        <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">📊 Escalando a Persistência</h2>
          <p class="text-lg">Aprenda a dividir bases de dados gigantescas através de <button>Sharding</button> e a distribuir a carga de leitura entre múltiplas réplicas para garantir disponibilidade total.</p>
        </div>
      </div>
    `
  },
  {
    id: "php-eco-t19",
    title: "Fase 4: Message Queues: RabbitMQ, Kafka e Resiliência",
    enableInteractive: true,
    youtubeVideoId: "dQw4w9WgXcQ",
    quizId: "php-eco-mq19",
    content: `
      <div class="space-y-12">
        <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">📦 Garantia de Entrega</h2>
          <p class="text-lg">Desacople o processamento lento usando <button>RabbitMQ</button> ou <button>Kafka</button>. Garanta que o seu sistema tenha <button>Backpressure</button> e não colapse em picos de tráfego.</p>
        </div>
      </div>
    `
  },
  {
    id: "php-eco-t20",
    title: "Fase 4: PHP 8.4+: Novidades e Otimizações de Linguagem",
    enableInteractive: true,
    youtubeVideoId: "raf_id_84_final",
    quizId: "php-eco-mq20",
    content: `
      <div class="space-y-12">
        <div class="bg-green-500/5 p-8 rounded-[2.5rem] border border-green-500/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-green-400">✨ O Topo da Montanha</h2>
          <p class="text-lg">Consolidação final das novidades do <button>PHP 8.4</button>: suporte nativo a <button>bcmath</button> como objeto e novos métodos de manipulação de coleções.</p>
        </div>
      </div>
    `
  },
  {
    id: "php-eco-t21",
    title: "Fase 4: Capstone II: Deploy Cloud-Native em Larga Escala",
    enableInteractive: true,
    youtubeVideoId: "9TycLR0TqFA",
    quizId: "php-eco-mq21",
    content: `
      <div class="space-y-12">
        <div class="bg-yellow-500/5 p-8 rounded-[2.5rem] border border-yellow-500/20 shadow-2xl text-center">
          <h2 class="text-4xl font-bold mb-4 font-headline text-primary">🏆 Certificação Master</h2>
          <p class="text-xl">Conclua o deploy industrial do seu ecossistema num cluster <button>Kubernetes</button>, utilizando <button>Helm Charts</button> e automação total.</p>
        </div>
      </div>
    `
  }
];