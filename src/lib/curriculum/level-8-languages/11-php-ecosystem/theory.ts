import type { TheoryLesson } from '../../types';

export const lessons: TheoryLesson[] = [
  {
    id: "php-eco-t1",
    title: "Fase 1: Composer Master: Autoloaders, Scripts e Plugins",
    enableInteractive: true,
    quizId: "php-eco-mq1",
    content: `
      <div class="space-y-8">
        <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">📦 Gestão de Dependências de Elite</h2>
          <p class="text-lg leading-relaxed opacity-90">O <button>Composer</button> não é apenas um instalador de pacotes; é o orquestrador do ecossistence. Dominar o <button>PSR-4 Autoloading</button> e os <button>Composer Scripts</button> é vital para automatizar auditorias e builds industriais.</p>
        </div>
        <section class="space-y-6">
          <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Autoloading e Performance</h3>
          <p class="text-sm">Em produção, o comando <button>composer dump-autoload -o</button> gera um mapa de classes estático, eliminando pesquisas no sistema de ficheiros e reduzindo o tempo de boot da aplicação.</p>
          <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Scripts de Automação</h3>
          <p class="text-sm">Automatize a qualidade: defina scripts para rodar <button>PHPStan</button> e <button>PHPUnit</button> antes de cada commit.</p>
          <pre><code class="language-json">"scripts": { "audit": ["phpstan analyze", "phpunit"], "post-install-cmd": "App\\\\Installer::setup" }</code></pre>
        </section>
      </div>
    `
  },
  {
    id: "php-eco-t2",
    title: "Fase 1: PHPUnit Avançado: Mocks, Stubs e Data Providers",
    enableInteractive: true,
    quizId: "php-eco-mq2",
    content: `
      <div class="space-y-8">
        <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🧪 Testes de Alta Fidelidade</h2>
          <p class="text-lg">Testar lógica complexa exige isolamento. Aprenda a usar <button>Test Doubles</button> para simular bases de dados e APIs externas sem latência.</p>
        </div>
        <section class="space-y-6">
          <h3 class="text-xl font-bold font-headline">Data Providers</h3>
          <p class="text-sm">Evite repetição: use <button>@dataProvider</button> para testar a mesma função com centenas de variações de dados num único método de teste.</p>
          <h3 class="text-xl font-bold font-headline">Mocking de Objetos</h3>
          <p class="text-sm">Crie objetos "dublês" usando <button>createMock()</button> e defina expectativas de chamadas para garantir que o seu domínio interage corretamente com a infraestrutura.</p>
        </section>
      </div>
    `
  },
  {
    id: "php-eco-t3",
    title: "Fase 1: Pest PHP: O Futuro dos Testes Funcionais",
    enableInteractive: true,
    quizId: "php-eco-mq3",
    content: `
      <div class="space-y-8">
        <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🐝 Elegância com Pest</h2>
          <p class="text-lg">O <button>Pest</button> é um framework de testes focado em legibilidade. Ele traz a fluidez do <button>Jest</button> para o PHP, permitindo testes baseados em expectativas naturais.</p>
        </div>
        <pre><code class="language-php">test('deve validar saldo positivo', function() { expect($account->balance)->toBeGreaterThan(0); });</code></pre>
      </div>
    `
  },
  {
    id: "php-eco-t4",
    title: "Fase 1: Mutation Testing: Auditoria com Infection",
    enableInteractive: true,
    quizId: "php-eco-mq4",
    content: `
      <div class="space-y-8">
        <div class="bg-red-500/5 p-8 rounded-[2.5rem] border border-red-500/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-red-400">🦠 Testando os teus Testes</h2>
          <p class="text-lg">Ter 100% de cobertura não significa que o teu código é seguro. O <button>Mutation Testing</button> (via <button>Infection</button>) altera o teu código-fonte original (insere bugs propositais) e verifica se os teus testes conseguem detetá-los.</p>
        </div>
        <p class="text-sm">Se um mutante sobrevive, o teu teste é fraco. É a métrica definitiva de qualidade de QA.</p>
      </div>
    `
  },
  {
    id: "php-eco-t5",
    title: "Fase 2: DDD Estratégico: Bounded Contexts e Linguagem Ubíqua",
    enableInteractive: true,
    quizId: "php-eco-mq5",
    content: `
      <div class="space-y-8">
        <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">⬢ Modelagem de Domínio Complexo</h2>
          <p class="text-lg">O <button>Domain Driven Design (DDD)</button> resolve a complexidade de negócio. O primeiro passo é alinhar o vocabulário através da <button>Ubiquitous Language</button>.</p>
        </div>
        <h3 class="text-xl font-bold text-accent">Bounded Contexts</h3>
        <p class="text-sm">Divida a aplicação em contextos delimitados. O objeto "User" no contexto de Vendas é diferente do "User" no contexto de Suporte. Isolamento de contexto evita o acoplamento de 'God Objects'.</p>
      </div>
    `
  },
  {
    id: "php-eco-t6",
    title: "Fase 2: DDD Tático: Entities, Value Objects e Aggregates",
    enableInteractive: true,
    quizId: "php-eco-mq6",
    content: `
      <div class="space-y-8">
        <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🧱 Blocos de Construção do Domínio</h2>
          <p class="text-lg">Aprenda a distinguir entre objetos com identidade e objetos definidos apenas pelo valor.</p>
        </div>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl"><strong>Entities:</strong> Têm ID único (ex: Cliente).</li>
          <li class="p-4 bg-muted/20 rounded-xl"><strong>Value Objects:</strong> Imutáveis, definidos pelos atributos (ex: Cor, Endereço, Dinheiro).</li>
          <li class="p-4 bg-muted/20 rounded-xl"><strong>Aggregates:</strong> Grupos de objetos tratados como uma unidade atómica via <button>Aggregate Root</button>.</li>
        </ul>
      </div>
    `
  },
  {
    id: "php-eco-t7",
    title: "Fase 2: CQRS e Event Sourcing: O Estado como História",
    enableInteractive: true,
    quizId: "php-eco-mq7",
    content: `
      <div class="space-y-8">
        <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">📖 Reconstruindo o Passado</h2>
          <p class="text-lg">No <button>Event Sourcing</button>, não guardamos o estado atual, mas sim a sequência de eventos que levaram a ele. <button>CQRS</button> separa a escrita (Command) da leitura (Query), permitindo escala horizontal massiva.</p>
        </div>
      </div>
    `
  },
  {
    id: "php-eco-t8",
    title: "Fase 2: Design Patterns I: Padrões de Criação",
    enableInteractive: true,
    quizId: "php-eco-mq8",
    content: `
      <div class="space-y-8">
        <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🏭 Fábricas de Objetos</h2>
          <p class="text-lg">Masterize <button>Abstract Factory</button>, <button>Builder</button> e <button>Singleton</button>. Aprenda quando o uso do Singleton é uma solução de elite e quando se torna um anti-padrão que dificulta testes.</p>
        </div>
      </div>
    `
  },
  {
    id: "php-eco-t9",
    title: "Fase 2: Design Patterns II: Padrões Comportamentais",
    enableInteractive: true,
    quizId: "php-eco-mq9",
    content: `
      <div class="space-y-8">
        <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🤝 Orquestrando o Comportamento</h2>
          <p class="text-lg">Aplique <button>Strategy</button> para algoritmos intercambiáveis e <button>Observer</button> para reatividade nativa no PHP, base para sistemas de notificações e webhooks.</p>
        </div>
      </div>
    `
  },
  {
    id: "php-eco-t10",
    title: "Fase 2: PSR Standards: A Constituição do PHP Moderno",
    enableInteractive: true,
    quizId: "php-eco-mq10",
    content: `
      <div class="space-y-8">
        <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">⚖️ Interoperabilidade Global</h2>
          <p class="text-lg">O <button>PHP-FIG</button> define as PSRs. Domine a <button>PSR-7</button> (HTTP Messages), <button>PSR-11</button> (Container) e <button>PSR-15</button> (Middlewares) para criar código que funciona em qualquer framework.</p>
        </div>
      </div>
    `
  },
  {
    id: "php-eco-t11",
    title: "Fase 3: Dependency Injection e Contentores de Elite",
    enableInteractive: true,
    quizId: "php-eco-mq11",
    content: `
      <div class="space-y-8">
        <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">💉 Inversão de Controlo</h2>
          <p class="text-lg">Vá além do básico: implemente um <button>Compiled Container</button> para performance máxima e utilize <button>Autowiring</button> via Reflection para eliminar configurações manuais de serviços.</p>
        </div>
      </div>
    `
  },
  {
    id: "php-eco-t12",
    title: "Fase 3: Framework Internals I: O Kernel do Laravel",
    enableInteractive: true,
    quizId: "php-eco-mq12",
    content: `
      <div class="space-y-8">
        <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🎩 Desvendando a Magia</h2>
          <p class="text-lg">Entenda o ciclo de vida do pedido no Laravel: do <button>index.php</button> passando pelos <button>Service Providers</button> até ao pipeline de Middlewares e o Router.</p>
        </div>
      </div>
    `
  },
  {
    id: "php-eco-t13",
    title: "Fase 3: Framework Internals II: Symfony HttpKernel",
    enableInteractive: true,
    quizId: "php-eco-mq13",
    content: `
      <div class="space-y-8">
        <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🏗️ A Engenharia do Symfony</h2>
          <p class="text-lg">Analise o <button>EventDispatcher</button> do Symfony e como o <button>HttpKernel</button> transforma um pedido numa resposta através de eventos atómicos e extensíveis.</p>
        </div>
      </div>
    `
  },
  {
    id: "php-eco-t14",
    title: "Fase 3: PHP 8.4+: Property Hooks e Asymmetric Visibility",
    enableInteractive: true,
    quizId: "php-eco-mq14",
    content: `
      <div class="space-y-8">
        <div class="bg-green-500/5 p-8 rounded-[2.5rem] border border-green-500/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-green-400">🆕 O Futuro é Agora</h2>
          <p class="text-lg">O <button>PHP 8.4</button> elimina o uso de getters e setters manuais com os <button>Property Hooks</button>. Defina lógica de validação diretamente na propriedade.</p>
        </div>
        <pre><code class="language-php">public string $name { set => strtolower($value); }</code></pre>
      </div>
    `
  },
  {
    id: "php-eco-t15",
    title: "Fase 3: Profiling Industrial: Xdebug, Blackfire e Tideways",
    enableInteractive: true,
    quizId: "php-eco-mq15",
    content: `
      <div class="space-y-8">
        <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🔬 Diagnóstico de Performance</h2>
          <p class="text-lg">Use o <button>Xdebug</button> para debugging profundo e ferramentas como <button>Blackfire</button> para identificar gargalos de CPU e memória em produção sem desativar o JIT.</p>
        </div>
      </div>
    `
  },
  {
    id: "php-eco-t16",
    title: "Fase 3: Caching Estratégico: Redis, Memcached e L2",
    enableInteractive: true,
    quizId: "php-eco-mq16",
    content: `
      <div class="space-y-8">
        <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🏎️ Acelerando o Acesso</h2>
          <p class="text-lg">Implemente cache de segundo nível (L2) para o <button>Doctrine</button> e utilize o <button>Redis</button> como um store de dados atómico para contadores e bloqueios distribuídos.</p>
        </div>
      </div>
    `
  },
  {
    id: "php-eco-t17",
    title: "Fase 4: Varnish e Proxies Reversos de Alta Escala",
    enableInteractive: true,
    quizId: "php-eco-mq17",
    content: `
      <div class="space-y-8">
        <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🛡️ Protegendo o Backend</h2>
          <p class="text-lg">Aprenda a usar o <button>Varnish</button> para servir milhões de páginas estáticas por segundo, utilizando <button>ESI (Edge Side Includes)</button> para componentes dinâmicos.</p>
        </div>
      </div>
    `
  },
  {
    id: "php-eco-t18",
    title: "Fase 4: Database Sharding e Read/Write Splitting",
    enableInteractive: true,
    quizId: "php-eco-mq18",
    content: `
      <div class="space-y-8">
        <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">📊 Escalando a Persistência</h2>
          <p class="text-lg">Implemente o particionamento horizontal de dados (<button>Sharding</button>) e configure o PHP para rotear queries pesadas de leitura para réplicas secundárias.</p>
        </div>
      </div>
    `
  },
  {
    id: "php-eco-t19",
    title: "Fase 4: Message Queues: RabbitMQ, Kafka e Resiliência",
    enableInteractive: true,
    quizId: "php-eco-mq19",
    content: `
      <div class="space-y-8">
        <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-primary">📦 Garantia de Entrega</h2>
          <p class="text-lg">Desacople o processamento lento (e-mails, relatórios) usando <button>RabbitMQ</button> ou <button>Kafka</button>, garantindo que o utilizador nunca espere pelo backend.</p>
        </div>
      </div>
    `
  },
  {
    id: "php-eco-t20",
    title: "Fase 4: PHP 8.4+: Novidades e Otimizações de Linguagem",
    enableInteractive: true,
    quizId: "php-eco-mq20",
    content: `
      <div class="space-y-8">
        <div class="bg-green-500/5 p-8 rounded-[2.5rem] border border-green-500/10 shadow-2xl">
          <h2 class="text-3xl font-bold mb-4 font-headline text-green-400">✨ O Topo da Montanha</h2>
          <p class="text-lg">Resumo final das novidades do <button>PHP 8.4</button>: <button>bcmath</button> como objeto, novos métodos de array e melhorias massivas no motor <button>JIT</button>.</p>
        </div>
      </div>
    `
  },
  {
    id: "php-eco-t21",
    title: "Fase 4: Capstone II: Deploy Cloud-Native em Larga Escala",
    enableInteractive: true,
    quizId: "php-eco-mq21",
    content: `
      <div class="space-y-8">
        <div class="bg-yellow-500/5 p-8 rounded-[2.5rem] border border-yellow-500/20 shadow-2xl text-center">
          <h2 class="text-4xl font-bold mb-4 font-headline text-primary">🏆 Certificação Master Pro</h2>
          <p class="text-xl">Conclua o deploy industrial do seu ecossistema. Integre o servidor <button>Swoole</button> com <button>Redis</button> e <button>Postgres</button> num cluster <button>Kubernetes</button>.</p>
        </div>
        <div class="text-center py-10">
          <p class="text-muted-foreground">Parabéns, Engenheiro. Você dominou o PHP por completo.</p>
        </div>
      </div>
    `
  }
];
