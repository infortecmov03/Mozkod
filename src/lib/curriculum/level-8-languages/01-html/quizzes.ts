import { quiz as q1 } from './quizzes/01-structure-quiz';
import { quiz as q2 } from './quizzes/01-semantics-quiz';

export const quizzes = [
  q1,
  q2,
  {
    id: "html-mq3",
    title: "Quiz: SEO Técnico e Metadados",
    passingScore: 80,
    questions: [
      {
        id: "q3_1",
        question: "Qual o objetivo da tag rel='canonical'?",
        options: ["Acelerar o site", "Evitar conteúdo duplicado", "Mudar a cor do link", "Traduzir a página"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "html-mq4",
    title: "Quiz: Hidratação e Renderização",
    passingScore: 80,
    questions: [
      {
        id: "q4_1",
        question: "O que é o Total Blocking Time (TBT) no contexto da hidratação?",
        options: ["Tempo de download do HTML", "Tempo que a thread principal fica bloqueada pelo JS", "Tempo de resposta do servidor", "Tamanho das imagens"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "html-mq5",
    title: "Quiz: Web Components",
    passingScore: 80,
    questions: [
      {
        id: "q5_1",
        question: "Qual destas afirmações sobre Shadow DOM é verdadeira?",
        options: ["Serve apenas para esconder senhas", "Providencia isolamento de CSS e encapsulamento de DOM", "Torna o HTML inválido", "Funciona apenas no Chrome"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "html-mq6",
    title: "Quiz: Formulários Profissionais",
    passingScore: 80,
    questions: [
      {
        id: "q6_1",
        question: "O atributo 'novalidate' num form serve para quê?",
        options: ["Desativar a segurança", "Impedir o browser de usar a validação nativa para que o JS assuma o controlo", "Acelerar o envio", "Mudar o estilo visual"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "html-mq7",
    title: "Quiz: Multimedia e Canvas",
    passingScore: 80,
    questions: [
      {
        id: "q7_1",
        question: "Por que usar requestAnimationFrame em vez de setInterval para animações em Canvas?",
        options: ["É mais fácil de escrever", "Sincroniza com o refresh rate do ecrã e poupa bateria", "Não precisa de funções", "Funciona offline"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "html-mq8",
    title: "Quiz: Performance e Resource Hints",
    passingScore: 80,
    questions: [
      {
        id: "q8_1",
        question: "Qual a diferença entre preconnect e dns-prefetch?",
        options: ["Não há diferença", "Preconnect faz DNS + TCP + TLS; Prefetch faz apenas DNS", "Prefetch é mais rápido", "Preconnect é apenas para imagens"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "html-mq9",
    title: "Quiz: Shadow DOM Internals",
    passingScore: 80,
    questions: [
      {
        id: "q9_1",
        question: "No modo 'closed' do Shadow DOM, como se acede à raiz via JS externo?",
        options: ["shadowRoot", "Não é possível aceder", "rootPath", "closedRoot"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "html-mq10",
    title: "Quiz: Gestão de Foco",
    passingScore: 80,
    questions: [
      {
        id: "q10_1",
        question: "O que faz o atributo 'inert'?",
        options: ["Muda a cor", "Torna o elemento e seus filhos invisíveis para o utilizador e tecnologias assistivas", "Aumenta a velocidade", "Liga ao CSS"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "html-mq11",
    title: "Quiz: SVG Acessível",
    passingScore: 80,
    questions: [
      {
        id: "q11_1",
        question: "Qual atributo ARIA ajuda leitores de ecrã a identificar um SVG como imagem?",
        options: ["type='image'", "role='img'", "alt='svg'", "class='vector'"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "html-mq12",
    title: "Quiz: Constraint Validation",
    passingScore: 80,
    questions: [
      {
        id: "q12_1",
        question: "Qual método da API de validação define um erro customizado?",
        options: ["setError()", "setCustomValidity()", "writeError()", "validationMessage()"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "html-mq13",
    title: "Quiz: WebVTT Master",
    passingScore: 80,
    questions: [
      {
        id: "q13_1",
        question: "Um ficheiro WebVTT começa obrigatoriamente com qual cabeçalho?",
        options: ["HTML VTT", "VTT FILE", "WEBVTT", "VIDEO TEXT"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: "html-mq14",
    title: "Quiz: Canvas Engineering",
    passingScore: 80,
    questions: [
      {
        id: "q14_1",
        question: "Qual o benefício principal do OffscreenCanvas?",
        options: ["Desenhar melhor", "Mudar cores", "Executar renderização numa Web Worker", "Pode ser impresso"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: "html-mq15",
    title: "Quiz: WebAssembly",
    passingScore: 80,
    questions: [
      {
        id: "q15_1",
        question: "O WebAssembly substitui o JavaScript?",
        options: ["Sim, totalmente", "Não, eles trabalham juntos através de uma ponte", "Apenas no Firefox", "Apenas para jogos"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "html-mq16",
    title: "Quiz: Fetch Priority",
    passingScore: 80,
    questions: [
      {
        id: "q16_1",
        question: "Qual atributo define a prioridade de um recurso no HTML?",
        options: ["importance", "priority", "fetchpriority", "loadorder"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: "html-mq17",
    title: "Quiz: CSP Master",
    passingScore: 80,
    questions: [
      {
        id: "q17_1",
        question: "O que é um 'Nonce' numa política CSP?",
        options: ["Um erro de script", "Um token único para validar scripts inline específicos", "O nome do servidor", "Um tipo de cookie"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "html-mq18",
    title: "Quiz: Service Workers",
    passingScore: 80,
    questions: [
      {
        id: "q18_1",
        question: "Onde corre um Service Worker?",
        options: ["Na thread principal", "Numa thread separada em background", "No servidor", "Dentro do HTML"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "html-mq19",
    title: "Quiz: WebGPU",
    passingScore: 80,
    questions: [
      {
        id: "q19_1",
        question: "WebGPU é sucessor de qual tecnologia?",
        options: ["Flash", "WebGL", "Java Applets", "Silverlight"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "html-mq20",
    title: "Quiz: SEO de Dados",
    passingScore: 80,
    questions: [
      {
        id: "q20_1",
        question: "Qual formato é recomendado pelo Google para dados estruturados?",
        options: ["Microdata", "JSON-LD", "RDFa", "CSV"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "html-mq21",
    title: "Quiz: Persistência Segura",
    passingScore: 80,
    questions: [
      {
        id: "q21_1",
        question: "Qual flag de cookie impede que ele seja enviado em pedidos cross-site?",
        options: ["Secure", "HttpOnly", "SameSite", "Path"],
        correctAnswer: 2
      }
    ]
  }
];
