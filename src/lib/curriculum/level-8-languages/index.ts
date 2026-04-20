import type { Level, KnowledgeArea, TheoryLesson, Quiz } from '../types';
import { htmlKA } from './01-html/index';
import { cssKA } from './02-css/index';
import { javascriptKA } from './03-javascript/index';

// --- PYTHON MASTER ---
const pyMasterLessons: TheoryLesson[] = [
  { id: "py-m1", title: "Interpretador Python e GIL", content: "<p>Entendendo a execução interna e o Global Interpreter Lock.</p>", quizId: "py-mq1" },
  { id: "py-m2", title: "Metaprogramação e Decoradores", content: "<p>Escrevendo código que modifica código em runtime.</p>", quizId: "py-mq2" },
  { id: "py-m3", title: "AsyncIO e Concorrência Moderna", content: "<p>Sistemas de alta escala com programação assíncrona.</p>", quizId: "py-mq3" },
  { id: "py-m4", title: "Gestão de Memória e Garbage Collection", content: "<p>Como o Python lida com objetos e contagem de referências.</p>", quizId: "py-mq4" },
  { id: "py-m5", title: "Arquiteturas Escaláveis com FastAPI/Django", content: "<p>Padrões de design para backends robustos.</p>", quizId: "py-mq5" },
  { id: "py-m6", title: "Data Science Stack Internals", content: "<p>Performance numérica com extensões em C.</p>", quizId: "py-mq6" },
  { id: "py-m7", title: "Testes com Pytest e Mocks", content: "<p>Garantindo 100% de cobertura e qualidade.</p>", quizId: "py-mq7" },
  { id: "py-m8", title: "Segurança e Criptografia em Python", content: "<p>Implementando hashes e comunicações seguras.</p>", quizId: "py-mq8" },
  { id: "py-m9", title: "Micro-serviços e Dockerização", content: "<p>Isolando e escalando apps Python na nuvem.</p>", quizId: "py-mq9" },
  { 
    id: "py-m10", 
    title: "Projeto Final: API de Dados e Deploy", 
    youtubeVideoId: "mNst8vX-u8E",
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">🐍 Backend de Elite</h2>
        <p>Constrói uma API RESTful usando FastAPI que processa dados reais e faz o deploy no <strong>Render.com</strong>.</p>
        <div class="bg-card p-6 rounded-2xl border space-y-4">
          <h3 class="font-bold text-primary">1. Git & Requirements</h3>
          <p class="text-sm text-muted-foreground">Organiza o repositório com <code>main.py</code> e <code>requirements.txt</code>.</p>
          <h3 class="font-bold text-primary">2. Docker (Opcional mas Master)</h3>
          <p class="text-sm text-muted-foreground">Cria um <code>Dockerfile</code> para garantir que o teu backend corre em qualquer lugar.</p>
          <h3 class="font-bold text-primary">3. Deploy Cloud</h3>
          <p class="text-sm text-muted-foreground">Conecta o GitHub ao Render. O deploy será feito automaticamente a cada push.</p>
        </div>
      </div>
    `, 
    quizId: "py-mq10" 
  }
];

const pythonMaster: KnowledgeArea = {
  id: 'lang-python-master',
  title: '04. Python Master',
  description: 'Especialização em arquitetura, performance e sistemas de dados.',
  load: '50h',
  iconName: 'Code2',
  theory: pyMasterLessons,
  practice: {
    python: [{ id: 'py-master-p1', language: 'python', title: 'Lab: Decoradores', description: 'Metaprogramação.', statement: 'Crie um decorador.', template: 'def log(f):...', detailedExplanation: '', objectives: [] }]
  },
  quizzes: []
};

// --- JAVA MASTER ---
const javaMasterLessons: TheoryLesson[] = [
  { id: "jv-m1", title: "JVM Internals e Bytecode", content: "<p>Como a Máquina Virtual executa e otimiza o código Java.</p>", quizId: "jv-mq1" },
  { id: "jv-m2", title: "Garbage Collection Tuning", content: "<p>Otimizando G1, ZGC e Shenandoah.</p>", quizId: "jv-mq2" },
  { id: "jv-m3", title: "Multithreading JUC", content: "<p>Uso avançado do pacote java.util.concurrent.</p>", quizId: "jv-mq3" },
  { id: "jv-m4", title: "Spring Boot Internals", content: "<p>Proxy dinâmico e gestão de contextos.</p>", quizId: "jv-mq4" },
  { id: "jv-m5", title: "Micro-serviços com Spring Cloud", content: "<p>Gateway e Service Discovery.</p>", quizId: "jv-mq5" },
  { id: "jv-m6", title: "Streams API Avançado", content: "<p>Processamento paralelo.</p>", quizId: "jv-mq6" },
  { id: "jv-m7", title: "Persistence API Performance", content: "<p>Hibernate Cache L2.</p>", quizId: "jv-mq7" },
  { id: "jv-m8", title: "Spring Security e OAuth2", content: "<p>Fluxos de autenticação segura.</p>", quizId: "jv-mq8" },
  { id: "jv-m9", title: "GraalVM e Native Images", content: "<p>Compilação AOT.</p>", quizId: "jv-mq9" },
  { 
    id: "jv-m10", 
    title: "Projeto Final: Micro-serviço e Deploy Railway", 
    youtubeVideoId: "TQvD-Uq86oY",
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">☕ Sistemas Corporativos de Larga Escala</h2>
        <p>Cria um serviço de inventário com Spring Boot e PostgreSQL, publicando-o no <strong>Railway</strong>.</p>
        <div class="bg-card p-6 rounded-2xl border space-y-4">
          <h3 class="font-bold text-orange-500">1. Maven/Gradle Setup</h3>
          <p class="text-sm text-muted-foreground">Configura o repositório no GitHub com as dependências corretas.</p>
          <h3 class="font-bold text-orange-500">2. DB Integration</h3>
          <p class="text-sm text-muted-foreground">Usa o Railway para subir um banco PostgreSQL e conecta a tua aplicação Java.</p>
          <h3 class="font-bold text-orange-500">3. Cloud Launch</h3>
          <p class="text-sm text-muted-foreground">Faz o deploy do JAR final e valida as métricas de saúde da JVM na nuvem.</p>
        </div>
      </div>
    `, 
    quizId: "jv-mq10" 
  }
];

const javaMaster: KnowledgeArea = {
  id: 'lang-java-master',
  title: '05. Java Master',
  description: 'Arquitetura corporativa e sistemas críticos de alta escala.',
  load: '60h',
  iconName: 'Coffee',
  theory: javaMasterLessons,
  practice: { java: [] },
  quizzes: []
};

// --- KOTLIN MASTER ---
const kotlinMaster: KnowledgeArea = {
  id: 'lang-kotlin-master',
  title: '06. Kotlin Master',
  description: 'Desenvolvimento moderno para Android e Backend robusto.',
  load: '40h',
  iconName: 'Smartphone',
  theory: [
    { id: "kt-m1", title: "Kotlin Philosophy & Multiplatform", content: "<p>KMP e interoperabilidade.</p>", quizId: "kt-mq1" },
    { id: "kt-m2", title: "Null Safety & Type Inference", content: "<p>O fim do NullPointerException.</p>", quizId: "kt-mq2" },
    { id: "kt-m3", title: "Extension Functions & Properties", content: "<p>Expandindo classes sem herança.</p>", quizId: "kt-mq3" },
    { id: "kt-m4", title: "Coroutines: Fundamentos", content: "<p>Programação assíncrona não-bloqueante.</p>", quizId: "kt-mq4" },
    { id: "kt-m5", title: "Coroutines: Flows & Channels", content: "<p>Streams reactivos em Kotlin.</p>", quizId: "kt-mq5" },
    { id: "kt-m6", title: "Functional Programming (Arrow)", content: "<p>Conceitos funcionais puros.</p>", quizId: "kt-mq6" },
    { id: "kt-m7", title: "DSL Construction", content: "<p>Criando linguagens de domínio específico.</p>", quizId: "kt-mq7" },
    { id: "kt-m8", title: "Jetpack Compose Internals", content: "<p>UIs declarativas modernas.</p>", quizId: "kt-mq8" },
    { id: "kt-m9", title: "Backend com Ktor", content: "<p>Micro-serviços leves e rápidos.</p>", quizId: "kt-mq9" },
    { 
      id: "kt-m10", 
      title: "Projeto Final: Ktor API & GitHub Release", 
      youtubeVideoId: "gI-qXk7XojA",
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">📱 Modernidade e Performance</h2>
          <p>Cria um servidor de notificações com Ktor e publica-o usando <strong>Railway</strong> e GitHub Actions.</p>
          <div class="bg-card p-6 rounded-2xl border space-y-4">
            <h3 class="font-bold text-primary">1. Repo Config</h3>
            <p class="text-sm text-muted-foreground">Sobe o código para o GitHub. Configura o segredo do repositório para o deploy.</p>
            <h3 class="font-bold text-primary">2. CI/CD Pipeline</h3>
            <p class="text-sm text-muted-foreground">Cria uma Action que corre os testes do Kotlin a cada Pull Request.</p>
          </div>
        </div>
      `, 
      quizId: "kt-mq10" 
    }
  ],
  practice: { kotlin: [] },
  quizzes: []
};

// --- GO MASTER ---
const goMaster: KnowledgeArea = {
  id: 'lang-go-master',
  title: '07. Go Master',
  description: 'Simplicidade, concorrência nativa e sistemas de cloud de alta performance.',
  load: '40h',
  iconName: 'Cloud',
  theory: [
    { id: "go-m1", title: "Go Philosophy & Tooling", content: "<p>Simplicidade e pragmatismo.</p>", quizId: "go-mq1" },
    { id: "go-m2", title: "Pointers & Memory Efficiency", content: "<p>Gestão direta mas segura de memória.</p>", quizId: "go-mq2" },
    { id: "go-m3", title: "Interfaces e Tipagem Implícita", content: "<p>O poder do Duck Typing estático.</p>", quizId: "go-mq3" },
    { id: "go-m4", title: "Goroutines: O Segredo da Concorrência", content: "<p>Threads leves e escalonamento Go.</p>", quizId: "go-mq4" },
    { id: "go-m5", title: "Channels & Select", content: "<p>Comunicação segura entre processos.</p>", quizId: "go-mq5" },
    { id: "go-m6", title: "Standard Library: Net/HTTP", content: "<p>Construindo servidores sem dependências externas.</p>", quizId: "go-mq6" },
    { id: "go-m7", title: "Context Pattern", content: "<p>Gestão de cancelamento e timeouts.</p>", quizId: "go-mq7" },
    { id: "go-m8", title: "Generics em Go", content: "<p>Abstrações poderosas introduzidas no Go 1.18.</p>", quizId: "go-mq8" },
    { id: "go-m9", title: "Profiling & Performance Tuning", content: "<p>Pprof e análise de gargalos.</p>", quizId: "go-mq9" },
    { 
      id: "go-m10", 
      title: "Projeto Final: Micro-serviço Concorrente e Deploy", 
      youtubeVideoId: "rXc_A7G43m0",
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">☁️ Cloud Native Engineering</h2>
          <p>Cria um Web Scraper concorrente usando Goroutines e publica-o como um serviço no <strong>Google Cloud</strong> ou <strong>Fly.io</strong>.</p>
          <div class="bg-card p-6 rounded-2xl border space-y-4">
            <h3 class="font-bold text-blue-400">1. Go Modules</h3>
            <p class="text-sm text-muted-foreground">Inicializa o módulo e versiona no GitHub.</p>
            <h3 class="font-bold text-blue-400">2. Docker Multi-stage</h3>
            <p class="text-sm text-muted-foreground">Configura o build otimizado em Docker para reduzir o tamanho da imagem.</p>
            <h3 class="font-bold text-blue-400">3. Deploy via Fly.io</h3>
            <p class="text-sm text-muted-foreground">Usa a CLI do Fly para lançar a tua app Go em milissegundos.</p>
          </div>
        </div>
      `, 
      quizId: "go-mq10" 
    }
  ],
  practice: { go: [] },
  quizzes: []
};

// --- RUST MASTER ---
const rustMaster: KnowledgeArea = {
  id: 'lang-rust-master',
  title: '08. Rust Master',
  description: 'Segurança de memória sem garbage collector para sistemas críticos.',
  load: '50h',
  iconName: 'Shield',
  theory: [
    { id: "rs-m1", title: "Rust Safety Philosophy", content: "<p>Segurança total vs Performance.</p>", quizId: "rs-mq1" },
    { id: "rs-m2", title: "The Ownership Model", content: "<p>O conceito revolucionário de Rust.</p>", quizId: "rs-mq2" },
    { id: "rs-m3", title: "Borrowing & References", content: "<p>Empréstimo mutável e imutável.</p>", quizId: "rs-mq3" },
    { id: "rs-m4", title: "Lifetimes: O Terror dos Iniciantes", content: "<p>Garantindo que referências são válidas.</p>", quizId: "rs-mq4" },
    { id: "rs-m5", title: "Traits & Generics", content: "<p>Polimorfismo em Rust.</p>", quizId: "rs-mq5" },
    { id: "rs-m6", title: "Error Handling (Result/Option)", content: "<p>Robustez absoluta sem exceções.</p>", quizId: "rs-mq6" },
    { id: "rs-m7", title: "Smart Pointers (Box, Rc, Arc)", content: "<p>Gestão avançada de memória.</p>", quizId: "rs-mq7" },
    { id: "rs-m8", title: "Fearless Concurrency", content: "<p>Multithreading sem race conditions.</p>", quizId: "rs-mq8" },
    { id: "rs-m9", title: "Macros e Metaprogramação", content: "<p>Geração de código poderosa.</p>", quizId: "rs-mq9" },
    { 
      id: "rs-m10", 
      title: "Projeto Final: Ferramenta CLI e GitHub Release", 
      youtubeVideoId: "v4cd1O4zkGw",
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">🛡️ Sistemas Seguros e Robustos</h2>
          <p>Cria um otimizador de imagens em linha de comando (CLI) e publica o binário compilado no <strong>GitHub Releases</strong>.</p>
          <div class="bg-card p-6 rounded-2xl border space-y-4">
            <h3 class="font-bold text-red-400">1. Cargo Setup</h3>
            <p class="text-sm text-muted-foreground">Usa o Cargo para gerir o teu projeto e dependências.</p>
            <h3 class="font-bold text-red-400">2. Cross-Compilation</h3>
            <p class="text-sm text-muted-foreground">Aprende a compilar o binário para Linux, Windows e Mac.</p>
            <h3 class="font-bold text-red-400">3. Release Automática</h3>
            <p class="text-sm text-muted-foreground">Configura o GitHub Actions para criar um binário otimizado a cada nova Tag de versão.</p>
          </div>
        </div>
      `, 
      quizId: "rs-mq10" 
    }
  ],
  practice: { rust: [] },
  quizzes: []
};

// --- RUBY MASTER ---
const rubyMaster: KnowledgeArea = {
  id: 'lang-ruby-master',
  title: '09. Ruby Master',
  description: 'Elegância, produtividade e a arte do desenvolvimento centrado no humano.',
  load: '35h',
  iconName: 'Gem',
  theory: [
    { id: "rb-m1", title: "Ruby Philosophy: Developer Happiness", content: "<p>Porquê Ruby é a linguagem mais amada.</p>", quizId: "rb-mq1" },
    { id: "rb-m2", title: "Dynamic Typing & Everything is an Object", content: "<p>Pureza orientada a objetos.</p>", quizId: "rb-mq2" },
    { id: "rb-m3", title: "Blocks, Procs & Lambdas", content: "<p>O poder dos closures em Ruby.</p>", quizId: "rb-mq3" },
    { id: "rb-m4", title: "Mixins & Modules", content: "<p>Herança múltipla limpa.</p>", quizId: "rb-mq4" },
    { id: "rb-m5", title: "Metaprogramming (Eigenclasses)", content: "<p>Código que escreve código.</p>", quizId: "rb-mq5" },
    { id: "rb-m6", title: "Ruby on Rails Architecture", content: "<p>O padrão ouro do MVC.</p>", quizId: "rb-mq6" },
    { id: "rb-m7", title: "Testing with RSpec", content: "<p>Behavior-Driven Development (BDD).</p>", quizId: "rb-mq7" },
    { id: "rb-m8", title: "Gem Management & Bundler", content: "<p>Ecossistema de bibliotecas.</p>", quizId: "rb-mq8" },
    { id: "rb-m9", title: "Ruby 3.x Performance & YJIT", content: "<p>A nova era de velocidade do Ruby.</p>", quizId: "rb-mq9" },
    { 
      id: "rb-m10", 
      title: "Projeto Final: Mini-Blog Rails e Deploy no Fly.io", 
      youtubeVideoId: "8hly31xKli0",
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">💎 A Arte da Produtividade</h2>
          <p>Desenvolve um motor de blog completo com Rails e publica-o no <strong>Fly.io</strong> usando PostgreSQL.</p>
          <div class="bg-card p-6 rounded-2xl border space-y-4">
            <h3 class="font-bold text-red-500">1. MVC & GitHub</h3>
            <p class="text-sm text-muted-foreground">Versiona a aplicação Rails. Cria os modelos e controladores necessários.</p>
            <h3 class="font-bold text-red-500">2. Fly Setup</h3>
            <p class="text-sm text-muted-foreground">Usa a CLI do Fly para configurar a infraestrutura de banco de dados e aplicação.</p>
            <h3 class="font-bold text-red-500">3. Online</h3>
            <p class="text-sm text-muted-foreground">Executa as migrations no servidor remoto e vê a tua app Ruby a escalar globalmente.</p>
          </div>
        </div>
      `, 
      quizId: "rb-mq10" 
    }
  ],
  practice: { ruby: [] },
  quizzes: []
};

// --- PHP MASTER ---
const phpMaster: KnowledgeArea = {
  id: 'lang-php-master',
  title: '10. PHP Master',
  description: 'A força motriz da web: do PHP 8 moderno a arquiteturas de larga escala.',
  load: '35h',
  iconName: 'Globe',
  theory: [
    { id: "php-m1", title: "The Modern PHP Revolution (8.x)", content: "<p>PHP não é o que era antes. Performance e tipos.</p>", quizId: "php-mq1" },
    { id: "php-m2", title: "Strict Typing & Engine Internals", content: "<p>Segurança de tipos em ambiente dinâmico.</p>", quizId: "php-mq2" },
    { id: "php-m3", title: "Composer & Dependency Management", content: "<p>A espinha dorsal do ecossistema moderno.</p>", quizId: "php-mq3" },
    { id: "php-m4", title: "Object-Oriented PHP 8", content: "<p>Constructor promotion, attributes e mais.</p>", quizId: "php-mq4" },
    { id: "php-m5", title: "Modern Frameworks: Laravel Internals", content: "<p>Dependency Injection e Service Container.</p>", quizId: "php-mq5" },
    { id: "php-m6", title: "Async PHP (Swoole & RoadRunner)", content: "<p>Quebrando o ciclo Request-Response tradicional.</p>", quizId: "php-mq6" },
    { id: "php-m7", title: "Security Best Practices in PHP", content: "<p>Prevenindo SQLi, XSS e gestão de senhas.</p>", quizId: "php-mq7" },
    { id: "php-m8", title: "PHPUnit & Pest", content: "<p>Testes unitários e de integração de alta qualidade.</p>", quizId: "php-mq8" },
    { id: "php-m9", title: "Cashing & Optimization (Opcache/Redis)", content: "<p>Escalando aplicações para milhões de usuários.</p>", quizId: "php-mq9" },
    { 
      id: "php-m10", 
      title: "Projeto Final: Portal Master (Laravel) e Deploy", 
      youtubeVideoId: "95v88Oit0H8",
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">🐘 O Motor da Web</h2>
          <p>Constrói um sistema de gestão de membros com Laravel e faz o deploy gratuito no <strong>InfinityFree</strong> ou via <strong>Render.com</strong>.</p>
          <div class="bg-card p-6 rounded-2xl border space-y-4">
            <h3 class="font-bold text-indigo-500">1. Laravel Framework</h3>
            <p class="text-sm text-muted-foreground">Instala o Laravel via Composer. Versiona tudo no GitHub.</p>
            <h3 class="font-bold text-indigo-500">2. Database Config</h3>
            <p class="text-sm text-muted-foreground">Configura o MySQL remoto e executa as migrations via SSH ou painel de controle.</p>
            <h3 class="font-bold text-indigo-500">3. SSL & Live</h3>
            <p class="text-sm text-muted-foreground">Configura o certificado SSL gratuito e coloca a tua plataforma profissional no ar.</p>
          </div>
        </div>
      `, 
      quizId: "php-mq10" 
    }
  ],
  practice: { php: [] },
  quizzes: []
};

export const level8: Level = {
  id: 8,
  title: 'Nível 8: Domínio de Linguagens',
  description: 'Especialização profunda para se tornar um mestre em tecnologias específicas e arquiteturas avançadas.',
  knowledgeAreas: [
    htmlKA, cssKA, javascriptKA, pythonMaster, javaMaster,
    kotlinMaster, goMaster, rustMaster, rubyMaster, phpMaster
  ]
};