import type { Quiz } from '../../types';

export const quizzes: Quiz[] = [
  {
    id: "php-eco-mq1",
    title: "Quiz: Composer & Autoloading Mastery",
    passingScore: 80,
    questions: [
      { id: "q1", question: "Qual comando gera o mapa de classes otimizado para produção?", options: ["composer update", "composer dump-autoload -o", "composer install", "composer clean"], correctAnswer: 1 },
      { id: "q2", question: "O que a flag --classmap-authoritative faz?", options: ["Impede o download de pacotes", "Garante que o PHP só procure classes no mapa gerado, sem olhar para o disco", "Muda a versão do PHP", "Nada, é opcional"], correctAnswer: 1 },
      { id: "q3", question: "Para que serve a seção 'scripts' no composer.json?", options: ["Para mudar a cor do terminal", "Para automatizar tarefas de build e qualidade", "Para instalar bibliotecas", "Para documentar o código"], correctAnswer: 1 },
      { id: "q4", question: "O ficheiro composer.lock deve ser enviado para o repositório?", options: ["Apenas no desenvolvimento", "Sim, para garantir versões idênticas em toda a equipa", "Não, é um ficheiro pessoal", "Apenas se usar Docker"], correctAnswer: 1 },
      { id: "q5", question: "O comando 'composer audit' verifica o quê?", options: ["A velocidade do código", "Vulnerabilidades conhecidas (CVEs) nas dependências", "Erros de sintaxe", "O tamanho das imagens"], correctAnswer: 1 },
      { id: "q6", question: "Qual o padrão de autoloading mais usado atualmente no PHP?", options: ["PSR-0", "PSR-4", "PSR-7", "PSR-11"], correctAnswer: 1 }
    ]
  },
  {
    id: "php-eco-mq2",
    title: "Quiz: PHPUnit Avançado: Mocks e Stubs",
    passingScore: 80,
    questions: [
      { id: "q1", question: "O que distingue um Mock de um Stub?", options: ["Mocks são mais rápidos", "Mocks validam o comportamento (interações), Stubs apenas o estado (respostas)", "Stubs são proibidos no PHP 8", "Não há diferença"], correctAnswer: 1 },
      { id: "q2", question: "Qual a função do @dataProvider no PHPUnit?", options: ["Ligar ao banco de dados", "Fornecer múltiplos conjuntos de dados para o mesmo teste", "Gerar relatórios PDF", "Mudar o tema do log"], correctAnswer: 1 },
      { id: "q3", question: "O método setUp() corre quando?", options: ["Uma vez por ficheiro", "Antes de cada método de teste", "Apenas em caso de erro", "No final do teste"], correctAnswer: 1 },
      { id: "q4", question: "Para que serve o Double 'Spy'?", options: ["Para hackear o sistema", "Para registar chamadas e verificá-las após a execução", "Para apagar o cache", "Para esconder o código"], correctAnswer: 1 },
      { id: "q5", question: "Qual o benefício de testar contra uma Interface em vez de Classe Concreta?", options: ["Código mais curto", "Facilita o uso de Mocks e o desacoplamento (DIP)", "Aumenta a velocidade do processador", "Nenhum"], correctAnswer: 1 },
      { id: "q6", question: "O que é 'Code Coverage'?", options: ["A segurança do site", "A percentagem de linhas de código executadas durante os testes", "O tamanho do ficheiro final", "A cor do terminal"], correctAnswer: 1 }
    ]
  },
  {
    id: "php-eco-mq3",
    title: "Quiz: Pest PHP e Expectativas",
    passingScore: 80,
    questions: [
      { id: "q1", question: "Qual a filosofia principal do Pest PHP?", options: ["Velocidade absoluta", "Elegância e legibilidade via DSL funcional", "Compatibilidade com PHP 5", "Uso obrigatório de classes"], correctAnswer: 1 },
      { id: "q2", question: "O método expect() no Pest substitui o quê?", options: ["O loop for", "As asserções tradicionais do PHPUnit", "A conexão de rede", "O banco de dados"], correctAnswer: 1 },
      { id: "q3", question: "Pest pode correr testes tradicionais do PHPUnit?", options: ["Não, é incompatível", "Sim, é construído sobre o PHPUnit e suporta ambos", "Apenas se forem convertidos", "Apenas no Laravel"], correctAnswer: 1 },
      { id: "q4", question: "O que o plugin 'Architecture' do Pest valida?", options: ["O preço do hardware", "Regras arquiteturais (ex: não usar eval, não injetar classes X em Y)", "A velocidade do site", "O design visual"], correctAnswer: 1 },
      { id: "q5", question: "Para que serve o método describe() no Pest?", options: ["Para escrever comentários longos", "Para agrupar testes relacionados de forma semântica", "Para apagar testes", "Para formatar o terminal"], correctAnswer: 1 },
      { id: "q6", question: "O que o comando 'pest --parallel' faz?", options: ["Corre os testes em ordem alfabética", "Executa a suíte de testes em múltiplos cores simultaneamente", "Para a execução no primeiro erro", "Gera um log binário"], correctAnswer: 1 }
    ]
  },
  {
    id: "php-eco-mq14",
    title: "Quiz: PHP 8.4 Property Hooks",
    passingScore: 80,
    questions: [
      { id: "q1", question: "Qual o principal benefício dos Property Hooks no PHP 8.4?", options: ["Mudar a cor do site", "Eliminar o boilerplate de getters e setters manuais", "Aumentar a largura de banda", "Criptografar variáveis"], correctAnswer: 1 },
      { id: "q2", question: "Como se define um hook de escrita numa propriedade?", options: ["write =>", "set =>", "input =>", "change =>"], correctAnswer: 1 },
      { id: "q3", question: "Property Hooks podem ser usados em interfaces?", options: ["Não, apenas em classes", "Sim, para definir requisitos de lógica em propriedades", "Apenas em classes abstratas", "Sim, mas são ignorados"], correctAnswer: 1 },
      { id: "q4", question: "O que é Asymmetric Visibility?", options: ["Ocultar o código do utilizador", "Permitir visibilidades diferentes para leitura e escrita (ex: public get, private set)", "Mudar a cor dos erros", "Não existe"], correctAnswer: 1 },
      { id: "q5", question: "Property hooks substituem os métodos mágicos __get e __set?", options: ["Sim, em todos os casos", "Não, mas são preferíveis para propriedades específicas e tipadas", "Apenas no Laravel", "Sim, mas são mais lentos"], correctAnswer: 1 },
      { id: "q6", question: "Podes usar Property Hooks em classes readonly?", options: ["Não, é proibido", "Sim, mas apenas o hook get", "Sim, sem restrições", "Apenas se a classe for final"], correctAnswer: 1 }
    ]
  },
  {
    id: "php-eco-mq21",
    title: "Quiz Final: Capstone e Auditoria de Produção",
    passingScore: 85,
    questions: [
      { id: "q1", question: "O que define um sistema como 'Cloud-Native'?", options: ["Rodar no Windows Server", "Ser stateless, escalável horizontalmente e automatizado via CI/CD", "Usar apenas HTML estático", "Ter um domínio .com"], correctAnswer: 1 },
      { id: "q2", question: "Qual o foco da auditoria final de um sistema Master?", options: ["Apenas se o código roda", "Performance, Segurança, Resiliência e Escalabilidade comprovadas", "A beleza da interface", "O número de commits"], correctAnswer: 1 },
      { id: "q3", question: "O que garante que o sistema suporte picos de tráfego?", options: ["Um servidor muito grande", "Escalabilidade horizontal baseada em métricas de fila e CPU", "Desligar o CSS", "Mudar a password"], correctAnswer: 1 },
      { id: "q4", question: "Por que usar Probes (Liveness/Readiness)?", options: ["Para enfeitar o painel", "Para o orquestrador saber se o worker está saudável e pronto para receber tráfego", "Para aumentar o preço do serviço", "Para monitorizar cliques"], correctAnswer: 1 },
      { id: "q5", question: "A integridade final do sistema é validada por:", options: ["Opinião do programador", "Testes de carga, segurança e contrato automatizados", "O número de ficheiros no projeto", "A cor do logo"], correctAnswer: 1 },
      { id: "q6", question: "Parabéns, Master! Qual o sentimento final?", options: ["Completado", "Pronto para o mercado global", "Cansado", "Dúvida"], correctAnswer: 1 }
    ]
  },
  // Placeholders técnicos para 4-13 e 15-20 para evitar falhas de build
  ...Array.from({ length: 16 }, (_, i) => {
    const ids = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20];
    const idNum = ids[i];
    return {
      id: `php-eco-mq${idNum}`,
      title: `Quiz Master Tópico ${idNum}`,
      questions: [
        { id: "q1", question: "Este conceito foca em performance?", options: ["Sim, é vital", "Não", "Talvez"], correctAnswer: 0 },
        { id: "q2", question: "Garante resiliência industrial?", options: ["Sim", "Não"], correctAnswer: 0 },
        { id: "q3", question: "O curso é de elite?", options: ["Com certeza", "Talvez"], correctAnswer: 0 },
        { id: "q4", question: "Utiliza as últimas APIs do PHP?", options: ["Sim", "Não"], correctAnswer: 0 },
        { id: "q5", question: "É seguro para produção?", options: ["Sim", "Não"], correctAnswer: 0 },
        { id: "q6", question: "Escala para milhões de utilizadores?", options: ["Sim", "Não"], correctAnswer: 0 }
      ],
      passingScore: 80
    };
  })
];