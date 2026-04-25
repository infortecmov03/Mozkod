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
          <p class="text-lg leading-relaxed opacity-90">O <button>Composer</button> é o orquestrador do ecossistema. No nível Master, não apenas instalamos pacotes; otimizamos o <button>Autoloading</button> para produção e criamos <button>Scripts</button> que automatizam o pipeline de qualidade.</p>
        </div>

        <section class="space-y-6">
          <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Otimização de Autoload (PSR-4)</h3>
          <p class="text-sm">Em produção, o custo de procurar ficheiros no disco é proibitivo. O comando <button>composer dump-autoload -o</button> gera um mapa de classes estático em PHP, eliminando o overhead de I/O em cada request.</p>
          <pre><code class="language-bash"># Otimização para Produção
composer dump-autoload --optimize --classmap-authoritative</code></pre>
        </section>

        <section class="space-y-6">
          <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Composer Scripts e Automação</h3>
          <p class="text-sm">Transforme o seu <button>composer.json</button> na central de comandos do projeto. Defina fluxos para análise estática, testes e limpeza de cache.</p>
          <pre><code class="language-json">"scripts": {
  "post-install-cmd": "App\\\\Core\\\\Installer::setup",
  "audit": ["phpstan analyze", "phpunit"],
  "dev": "php -S localhost:8000 -t public"
}</code></pre>
        </section>
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
          <p class="text-lg">Garantir a integridade do <button>Core Banking</button> exige testes que isolem a lógica de negócio da infraestrutura. Dominar <button>Mocks</button> e <button>Stubs</button> é o que permite testar transações sem uma base de dados real.</p>
        </div>

        <section class="space-y-6">
          <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Test Doubles: Mock vs Stub</h3>
          <ul class="space-y-4">
            <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
              <strong><button>Stub</button>:</strong> Fornece respostas enlatadas para chamadas feitas durante o teste. "Se pedirem o saldo, responda 100".
            </li>
            <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
              <strong><button>Mock</button>:</strong> Além de responder, ele <b>verifica</b> se foi chamado corretamente. "Verifique se o método 'sendEmail' foi chamado exatamente uma vez com o parâmetro X".
            </li>
          </ul>
        </section>

        <section class="space-y-6">
          <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Data Providers</h3>
          <p class="text-sm">Teste centenas de cenários de borda (edge cases) com um único método de teste usando a anotação <button>#[DataProvider]</button>. É a forma mais eficiente de validar algoritmos matemáticos e regras de validação.</p>
        </section>
      </div>
    `
  },
  {
    id: "php-eco-t3",
    title: "Fase 1: Pest PHP: O Futuro dos Testes Funcionais",
    enableInteractive: true,
    youtubeVideoId: "raf_id_pest",
    quizId: "php-eco-mq3",
    content: `
      <div class="space-y-12">
        <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🐝 Elegância com Pest</h2>
          <p class="text-lg">O <button>Pest PHP</button> traz a fluidez dos frameworks modernos (como o Jest) para o ecossistema PHP. Ele simplifica a escrita de testes funcionais através de uma <button>DSL</button> focada em expectativas.</p>
        </div>
        <section class="space-y-6">
          <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Expectation API</h3>
          <p class="text-sm">Substitua asserções verbosas por frases que parecem inglês natural. Isto melhora a legibilidade para toda a equipa, incluindo os especialistas de negócio.</p>
          <pre><code class="language-php">it('deve depositar com sucesso', function() {
    $account = new Account();
    $account->deposit(100);
    
    expect($account->balance)->toBe(100);
});</code></pre>
        </section>
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
          <h2 class="text-3xl font-bold mb-4 font-headline text-red-400">🦠 Testando a Qualidade dos Testes</h2>
          <p class="text-lg">Ter 100% de cobertura de código (Coverage) é uma métrica de vaidade. O <button>Infection</button> realiza <button>Mutation Testing</button>: ele altera o teu código (troca + por -, true por false) e verifica se os teus testes falham.</p>
        </div>
        <p class="text-sm leading-relaxed">Se o código mudou e os teus testes continuam a passar, significa que tens um <strong>Mutante Sobrevivente</strong> e o teu teste é inútil para aquele cenário. O objetivo de elite é um <button>Mutation Score Indicator (MSI)</button> acima de 80%.</p>
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
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">⬢ Modelagem de Domínio Complexo</h2>
          <p class="text-lg">O <button>Domain Driven Design (DDD)</button> é a estratégia para domar a complexidade de grandes sistemas. No nível Master, o código deve falar a língua do negócio.</p>
        </div>
        <section class="space-y-6">
          <h3 class="text-xl font-bold text-accent">1. Bounded Contexts</h3>
          <p class="text-sm">Divida a aplicação em contextos delimitados. O objeto "User" no contexto de Vendas é diferente do "User" no contexto de Suporte. Isolamento de contexto evita o acoplamento de objetos gigantes.</p>
          <h3 class="text-xl font-bold text-accent">2. Ubiquitous Language</h3>
          <p class="text-sm">O vocabulário usado pelo <button>Product Owner</button> deve ser idêntico ao usado nas classes, métodos e bases de dados. Se o negócio diz "Estorno", o método deve ser <button>void refund()</button> e não <button>void cancelTransaction()</button>.</p>
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
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🧱 Blocos de Construção do Domínio</h2>
          <p class="text-lg">Aprenda a distinguir entre objetos com identidade persistente e objetos definidos apenas pelo valor que carregam.</p>
        </div>
        <ul class="space-y-6">
          <li class="p-6 bg-muted/20 rounded-2xl border border-white/5">
            <strong class="text-accent block text-xl mb-2">Value Objects:</strong> Imutáveis. Se mudas um centavo, tens um novo valor de Dinheiro. <br/><span class="text-xs">Ex: <code>Money</code>, <code>Address</code>, <code>Color</code>.</span>
          </li>
          <li class="p-6 bg-muted/20 rounded-2xl border border-white/5">
            <strong class="text-accent block text-xl mb-2">Aggregate Roots:</strong> O guardião da integridade. Um grupo de objetos (ex: Ordem e Itens) que só pode ser manipulado através de uma única classe raiz para garantir que as regras de negócio nunca sejam violadas.
          </li>
        </ul>
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
          <p class="text-lg">No <button>Event Sourcing</button>, não guardamos o saldo atual do banco; guardamos todos os depósitos e saques que já ocorreram. O saldo é apenas a soma (projeção) dessa história.</p>
        </div>
        <section class="space-y-6">
          <h3 class="text-2xl font-bold font-headline text-accent">CQRS (Command Query Responsibility Segregation)</h3>
          <p class="text-sm">Separe a escrita da leitura. Use uma base de dados otimizada para escrita (<button>PostgreSQL</button>) e replique os dados para uma base de dados ultra-rápida otimizada para leitura (<button>ElasticSearch</button> ou <button>Redis</button>).</p>
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
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🏭 Fábricas de Objetos</h2>
          <p class="text-lg">Padrões de criação abstraem o processo de instanciação. Eles tornam o sistema independente de como os seus objetos são criados e compostos.</p>
        </div>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl"><strong>Abstract Factory:</strong> Crie famílias de objetos relacionados sem especificar as classes concretas.</li>
          <li class="p-4 bg-muted/20 rounded-xl"><strong>Builder:</strong> Construa objetos complexos passo a passo. Vital para configurações de rede ou consultas SQL dinâmicas.</li>
          <li class="p-4 bg-muted/20 rounded-xl"><strong>Singleton:</strong> Garanta uma única instância (ex: o próprio DIC ou o gestor de Logs).</li>
        </ul>
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
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🤝 Orquestrando a Lógica</h2>
          <p class="text-lg">Foque na comunicação entre objetos e na atribuição de responsabilidades em runtime.</p>
        </div>
        <ul class="space-y-4">
          <li><strong><button>Strategy</button>:</strong> Troque algoritmos em tempo de execução. Ex: mude o cálculo de frete baseado no país do utilizador sem usar IFs.</li>
          <li><strong><button>Observer</button>:</strong> A base da reatividade. Um objeto notifica os outros sobre mudanças de estado automaticamente.</li>
          <li><strong><button>Command</button>:</strong> Encapsule pedidos como objetos, permitindo Undo/Redo e filas de execução.</li>
        </ul>
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
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">⚖️ Interoperabilidade Global</h2>
          <p class="text-lg">As <button>PSR</button> (PHP Standard Recommendations) garantem que o teu código PHP possa ser integrado em qualquer ecossistema profissional do mundo.</p>
        </div>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li class="p-4 bg-muted/20 rounded-xl"><strong>PSR-7:</strong> Interfaces comuns para Request e Response HTTP.</li>
          <li class="p-4 bg-muted/20 rounded-xl"><strong>PSR-11:</strong> Interface universal para Contentores de Injeção de Dependência.</li>
          <li class="p-4 bg-muted/20 rounded-xl"><strong>PSR-15:</strong> Padrão para Middlewares e Handlers de servidor.</li>
        </ul>
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
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">💉 Inversão de Controlo</h2>
          <p class="text-lg">O <button>IoC Container</button> é o armazém central da aplicação. Aprenda a usar <button>Autowiring</button> via Reflection para eliminar configurações manuais e injetar dependências automaticamente.</p>
        </div>
        <p class="text-sm">Um engenheiro master prefere <button>Compiled Containers</button> (como o do Symfony), que geram código PHP puro com todas as instâncias resolvidas para performance máxima em produção.</p>
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
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🎩 Desvendando o Laravel</h2>
          <p class="text-lg">Entenda como o <button>index.php</button> carrega o <button>Kernel HTTP</button>, o papel fundamental dos <button>Service Providers</button> no carregamento de pacotes e como o Facade Pattern é implementado via métodos mágicos e proxies de serviço.</p>
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
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🏗️ A Arquitetura do Symfony</h2>
          <p class="text-lg">Estude o <button>EventDispatcher</button> e como o <button>HttpKernel</button> orquestra o ciclo de vida do pedido: Request Event -> Controller Event -> Response Event -> Terminate Event. É o padrão de maior maturidade técnica no ecossistema PHP.</p>
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
          <h2 class="text-3xl font-bold mb-4 font-headline text-green-400">🆕 O Futuro é Agora</h2>
          <p class="text-lg">O <button>PHP 8.4</button> revolucionou como lidamos com dados. Com os <button>Property Hooks</button>, podemos definir lógica de validação e transformação diretamente na propriedade, eliminando milhares de getters/setters inúteis.</p>
        </div>
        <pre><code class="language-php">public string $email {
  set(string $value) {
    if (!str_contains($value, '@')) throw new Error();
    $this->email = strtolower($value);
  }
}</code></pre>
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
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🔬 Diagnóstico de Performance</h2>
          <p class="text-lg">Use o <button>Xdebug</button> para encontrar bugs complexos via <button>Step Debugging</button>. Em produção, utilize o <button>Blackfire</button> para identificar o consumo de CPU e RAM de cada função sem comprometer o motor <button>JIT</button>.</p>
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
          <p class="text-lg">Implemente o cache de segundo nível (<button>L2 Cache</button>) no <button>Doctrine</button> e use o <button>Redis</button> como um store de dados atómico para gerir bloqueios distribuídos e contadores em tempo real.</p>
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
          <p class="text-lg">Aprenda a configurar o <button>Varnish</button> para servir milhões de requests por segundo. Utilize o <button>ESI (Edge Side Includes)</button> para cachear partes estáticas da página (como o header) enquanto o conteúdo dinâmico (o seu perfil) é carregado ao vivo.</p>
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
          <p class="text-lg">Quando uma única base de dados não aguenta o tráfego, o Engenheiro Master aplica o <button>Sharding</button> (particionamento horizontal). Aprenda a configurar o PHP para enviar escritas para o Master e distribuir as leituras pesadas entre várias réplicas.</p>
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
          <p class="text-lg">Não deixe o seu utilizador à espera que o e-mail seja enviado. Desacople o processamento lento usando <button>RabbitMQ</button> ou <button>Kafka</button>, garantindo que o seu servidor de eventos tenha <button>Backpressure</button> e resiliência total.</p>
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
          <p class="text-lg">Resumo final das novidades do <button>PHP 8.4</button>: suporte nativo a <button>bcmath</button> como objeto, novos métodos de manipulação de arrays e melhorias críticas no motor <button>JIT</button> para servidores de IA.</p>
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
          <h2 class="text-4xl font-bold mb-4 font-headline text-primary">🏆 Certificação Master Pro</h2>
          <p class="text-xl">Conclua o deploy industrial do seu ecossistema. Integre o servidor <button>Swoole</button> com <button>Redis</button> e <button>Postgres</button> num cluster <button>Kubernetes</button>, utilizando <button>Helm Charts</button> para gestão de infraestrutura como código.</p>
        </div>
        <div class="text-center py-10">
          <p class="text-muted-foreground">Parabéns, Engenheiro. Você dominou o ecossistema PHP moderno por completo.</p>
        </div>
      </div>
    `
  }
];
