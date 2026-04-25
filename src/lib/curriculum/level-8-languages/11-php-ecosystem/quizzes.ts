import type { Quiz } from '../../types';

export const quizzes: Quiz[] = [
  {
    id: "php-eco-mq1",
    title: "Quiz: Composer & Autoloading Mastery",
    passingScore: 80,
    questions: [
      { id: "q1", question: "Qual comando gera o mapa de classes otimizado para produção?", options: ["composer update", "composer dump-autoload -o", "composer install", "composer clean"], correctAnswer: 1 },
      { id: "q2", question: "Para que serve a seção 'scripts' no package.json?", options: ["Para mudar a versão do PHP", "Para automatizar tarefas de build e qualidade", "Para instalar bibliotecas", "Para documentar o código"], correctAnswer: 1 }
    ]
  },
  {
    id: "php-eco-mq2",
    title: "Quiz: Testes Unitários de Alta Fidelidade",
    passingScore: 80,
    questions: [
      { id: "q1", question: "O que é um Mock no contexto do PHPUnit?", options: ["Uma cópia exata do objeto", "Um objeto falso que simula o comportamento de uma dependência e valida interações", "Um erro de rede", "Um tipo de base de dados"], correctAnswer: 1 },
      { id: "q2", question: "Qual a função do @dataProvider?", options: ["Ligar o teste ao banco de dados", "Fornecer múltiplos conjuntos de dados para o mesmo método de teste", "Gerar relatórios em PDF", "Aumentar a cobertura de código"], correctAnswer: 1 }
    ]
  },
  {
    id: "php-eco-mq3",
    title: "Quiz: Pest PHP e Expectativas",
    passingScore: 80,
    questions: [
      { id: "q1", question: "Pest PHP é baseado em qual framework de testes?", options: ["Laravel Testing", "PHPUnit", "Behat", "Cypress"], correctAnswer: 1 },
      { id: "q2", question: "Qual a vantagem de usar o método expect()?", options: ["É mais rápido que assert", "Fornece uma sintaxe mais humana e fluida para validações", "Não precisa de classes", "Criptografa o teste"], correctAnswer: 1 }
    ]
  },
  {
    id: "php-eco-mq4",
    title: "Quiz: Mutation Testing com Infection",
    passingScore: 80,
    questions: [
      { id: "q1", question: "O que acontece se um 'Mutante' sobrevive no Infection?", options: ["O código é excelente", "Os teus testes falharam em detetar uma mudança lógica no código, indicando fragilidade", "O programa crasha", "O servidor reinicia"], correctAnswer: 1 },
      { id: "q2", question: "Mutation testing foca em qual métrica?", options: ["Lines of Code", "Test Effectiveness (Eficácia real do teste)", "Speed of execution", "Number of files"], correctAnswer: 1 }
    ]
  },
  {
    id: "php-eco-mq5",
    title: "Quiz: DDD Estratégico",
    passingScore: 80,
    questions: [
      { id: "q1", question: "O que define um Bounded Context?", options: ["O tamanho do ficheiro", "Uma fronteira lógica onde os termos e modelos têm um significado único", "A conexão de rede", "O número de tabelas"], correctAnswer: 1 },
      { id: "q2", question: "Ubiquitous Language deve ser usada por quem?", options: ["Apenas programadores", "Toda a equipa, incluindo especialistas de negócio e stakeholders", "Apenas pelo cliente", "Apenas nos comentários"], correctAnswer: 1 }
    ]
  },
  {
    id: "php-eco-mq6",
    title: "Quiz: DDD Tático",
    passingScore: 80,
    questions: [
      { id: "q1", question: "Qual a principal característica de um Value Object?", options: ["Tem um ID autoincrement", "É imutável e definido pelos seus atributos", "É guardado numa tabela separada obrigatoriamente", "Pode ser alterado a qualquer momento"], correctAnswer: 1 },
      { id: "q2", question: "O que é um Aggregate Root?", options: ["O nó raiz do HTML", "A única entidade através da qual o mundo exterior interage com o grupo de objetos do agregado", "A base de dados principal", "O ficheiro index.php"], correctAnswer: 1 }
    ]
  },
  {
    id: "php-eco-mq7",
    title: "Quiz: CQRS & Event Sourcing",
    passingScore: 80,
    questions: [
      { id: "q1", question: "Em Event Sourcing, como obtemos o estado atual de um objeto?", options: ["Lendo uma tabela SQL comum", "Re-executando (replaying) todos os eventos históricos daquele objeto", "Pedindo ao utilizador", "Usando o cache apenas"], correctAnswer: 1 },
      { id: "q2", question: "Qual a vantagem do CQRS?", options: ["Código mais curto", "Permite otimizar os modelos de leitura e escrita de forma independente", "Não precisa de banco de dados", "Elimina o uso de classes"], correctAnswer: 1 }
    ]
  },
  {
    id: "php-eco-mq8",
    title: "Quiz: Creational Patterns",
    passingScore: 80,
    questions: [
      { id: "q1", question: "Qual o perigo do padrão Singleton?", options: ["Gasta muita CPU", "Cria estado global oculto dificultando o isolamento de testes", "Não permite herança", "É muito lento"], correctAnswer: 1 },
      { id: "q2", question: "Para que serve o padrão Builder?", options: ["Criar ficheiros", "Construir objetos complexos passo a passo com flexibilidade", "Compilar o código", "Mudar o tema"], correctAnswer: 1 }
    ]
  },
  {
    id: "php-eco-mq9",
    title: "Quiz: Behavioral Patterns",
    passingScore: 80,
    questions: [
      { id: "q1", question: "O padrão Strategy é ideal para quê?", options: ["Substituir herança", "Trocar algoritmos em runtime sem mudar a classe consumidora", "Mudar de banco de dados", "Criar instâncias"], correctAnswer: 1 },
      { id: "q2", question: "O padrão Observer é a base de qual funcionalidade?", options: ["Segurança", "Event Listeners e Reatividade", "Loops for", "Recursão"], correctAnswer: 1 }
    ]
  },
  {
    id: "php-eco-mq10",
    title: "Quiz: PSR Standards",
    passingScore: 80,
    questions: [
      { id: "q1", question: "Qual PSR define a interface comum para Contentores de Injeção de Dependência?", options: ["PSR-4", "PSR-7", "PSR-11", "PSR-15"], correctAnswer: 2 },
      { id: "q2", question: "A PSR-7 trata de quê?", options: ["Autoloading", "HTTP Message Interfaces (Request/Response)", "Cache", "Logs"], correctAnswer: 1 }
    ]
  },
  {
    id: "php-eco-mq11",
    title: "Quiz: Dependency Injection Profunda",
    passingScore: 80,
    questions: [
      { id: "q1", question: "O que é Autowiring?", options: ["Ligação elétrica", "Capacidade do container resolver dependências automaticamente via Reflection", "Mudar a password sozinho", "Instalar pacotes"], correctAnswer: 1 },
      { id: "q2", question: "Qual a vantagem de um Compiled Container?", options: ["Menos código", "Performance de runtime superior ao evitar Reflection em cada request", "É mais seguro", "Não precisa de cache"], correctAnswer: 1 }
    ]
  },
  {
    id: "php-eco-mq12",
    title: "Quiz: Laravel Internals",
    passingScore: 80,
    questions: [
      { id: "q1", question: "Qual a função do Service Provider?", options: ["Ligar o banco", "Registar e configurar serviços no IoC Container", "Enviar emails", "Mudar o CSS"], correctAnswer: 1 },
      { id: "q2", question: "Onde o Laravel começa o tratamento do request?", options: ["Em cada Controller", "No Kernel HTTP", "Na View", "No .env"], correctAnswer: 1 }
    ]
  },
  {
    id: "php-eco-mq13",
    title: "Quiz: Symfony HttpKernel",
    passingScore: 80,
    questions: [
      { id: "q1", question: "O Symfony baseia-se em qual paradigma para o seu fluxo principal?", options: ["Linear", "Event-Driven (EventDispatcher)", "Procedural", "Functional only"], correctAnswer: 1 },
      { id: "q2", question: "O que o HttpKernel faz?", options: ["Compila o PHP", "Transforma um Request numa Response de forma padronizada", "Lida com o disco", "Muda o hardware"], correctAnswer: 1 }
    ]
  },
  {
    id: "php-eco-mq14",
    title: "Quiz: PHP 8.4 Features",
    passingScore: 80,
    questions: [
      { id: "q1", question: "Para que servem os Property Hooks?", options: ["Para pescar dados", "Para definir lógica de leitura/escrita direto na propriedade (get/set)", "Para ligar ao banco", "Para mudar o tema"], correctAnswer: 1 },
      { id: "q2", question: "O que é Asymmetric Visibility?", options: ["Ocultar código", "Permitir visibilidades diferentes para leitura e escrita (ex: public get, private set)", "Mudar a cor dos erros", "Não existe"], correctAnswer: 1 }
    ]
  },
  {
    id: "php-eco-mq15",
    title: "Quiz: Profiling & Xdebug",
    passingScore: 80,
    questions: [
      { id: "q1", question: "Qual ferramenta é mais recomendada para profiling em produção sem degradar o JIT?", options: ["Xdebug", "Blackfire / Tideways", "echo microtime()", "Top"], correctAnswer: 1 },
      { id: "q2", question: "Xdebug Step Debugging permite o quê?", options: ["Acelerar o site", "Pausar a execução e inspecionar variáveis linha a linha", "Mudar o IP", "Apagar logs"], correctAnswer: 1 }
    ]
  },
  {
    id: "php-eco-mq16",
    title: "Quiz: Advanced Caching",
    passingScore: 80,
    questions: [
      { id: "q1", question: "Qual a vantagem do Redis sobre o Memcached?", options: ["É azul", "Suporta estruturas de dados complexas e persistência", "É mais barato", "Não usa RAM"], correctAnswer: 1 },
      { id: "q2", question: "O que é Cache Invalidation?", options: ["Apagar tudo", "O desafio de saber quando remover dados obsoletos do cache", "Um erro de rede", "O fim do site"], correctAnswer: 1 }
    ]
  },
  {
    id: "php-eco-mq17",
    title: "Quiz: Varnish & Edge Caching",
    passingScore: 80,
    questions: [
      { id: "q1", question: "Onde o Varnish se localiza na infraestrutura?", options: ["Dentro do PHP", "Entre o utilizador e o servidor web (Proxy Reverso)", "No banco de dados", "No browser"], correctAnswer: 1 },
      { id: "q2", question: "Para que serve o ESI?", options: ["Criptografia", "Permitir cachear partes de uma página e carregar outras dinamicamente", "Mudar o DNS", "Comprimir imagens"], correctAnswer: 1 }
    ]
  },
  {
    id: "php-eco-mq18",
    title: "Quiz: Database Scaling",
    passingScore: 80,
    questions: [
      { id: "q1", question: "O que é Sharding?", options: ["Fragmentação de disco", "Divisão horizontal de uma tabela massiva em múltiplos servidores", "Criptografia de tabela", "Mudar de SQL para NoSQL"], correctAnswer: 1 },
      { id: "q2", question: "Read/Write Splitting ajuda em quê?", options: ["Segurança", "Escalar leituras distribuindo-as para réplicas enquanto as escritas vão para o Master", "Backup", "Nada"], correctAnswer: 1 }
    ]
  },
  {
    id: "php-eco-mq19",
    title: "Quiz: Message Queues",
    passingScore: 80,
    questions: [
      { id: "q1", question: "Qual a função do Message Broker?", options: ["Ligar à internet", "Receber, armazenar e encaminhar mensagens entre serviços de forma assíncrona", "Mudar o CSS", "Validar senhas"], correctAnswer: 1 },
      { id: "q2", question: "Por que usar filas para enviar emails?", options: ["Para ser mais bonito", "Para não bloquear o request do utilizador aguardando a resposta lenta do servidor SMTP", "Para economizar RAM", "É obrigatório no PHP"], correctAnswer: 1 }
    ]
  },
  {
    id: "php-eco-mq20",
    title: "Quiz: PHP 8.4 Deep Dive",
    passingScore: 80,
    questions: [
      { id: "q1", question: "O PHP 8.4 introduziu o bcmath como objeto. Qual o benefício?", options: ["Nenhum", "Melhor legibilidade e fluidez em cálculos matemáticos de alta precisão", "Segurança", "Menos RAM"], correctAnswer: 1 },
      { id: "q2", question: "Novos métodos de array (ex: array_find) melhoram o quê?", options: ["Segurança", "Performance e expressividade ao evitar loops manuais", "O tamanho do ficheiro", "A cor do terminal"], correctAnswer: 1 }
    ]
  },
  {
    id: "php-eco-mq21",
    title: "Quiz: Capstone Final Audit",
    passingScore: 85,
    questions: [
      { id: "q1", question: "Qual o foco da auditoria final de um sistema de elite?", options: ["Apenas se o código roda", "Performance, Segurança, Resiliência e Escalabilidade comprovadas", "A beleza do código", "O número de commits"], correctAnswer: 1 },
      { id: "q2", question: "Um sistema pronto para Cloud deve ser:", options: ["Estático e lento", "Stateless, observável e automatizado (Infrastructure as Code)", "Baseado em servidores físicos manuais", "Escrito apenas em HTML"], correctAnswer: 1 }
    ]
  }
];
