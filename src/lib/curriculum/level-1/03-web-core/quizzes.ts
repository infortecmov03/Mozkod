import { quiz1 as q1 } from './quizzes/01-estrutura-html-quiz';
import { quiz as q2 } from './quizzes/02-css-selectors-quiz';
import { quiz as q3 } from './quizzes/03-box-model-quiz';
import { quiz as q4 } from './quizzes/04-flexbox-quiz';
import { quiz as q5 } from './quizzes/05-grid-quiz';
import { quiz as q6 } from './quizzes/06-responsividade-quiz';

export const quizzes = [
  q1, q2, q3, q4, q5, q6,
  {
    id: "web-q7",
    title: "Quiz: Formulários",
    questions: [{ id: "q1", question: "Qual atributo de input é obrigatório para envio?", options: ["class", "name", "id"], correctAnswer: 1 }],
    passingScore: 70
  },
  {
    id: "web-q8",
    title: "Quiz: Publicação",
    questions: [{ id: "q1", question: "O que é Deployment?", options: ["Escrever código", "Colocar o site num servidor", "Apagar o projeto"], correctAnswer: 1 }],
    passingScore: 70
  },
  {
    id: "web-q9",
    title: "Quiz: SEO",
    questions: [{ id: "q1", question: "O que significa SEO?", options: ["Search Engine Optimization", "System Entry Office", "Secure Engine Open"], correctAnswer: 0 }],
    passingScore: 70
  },
  {
    id: "web-q10",
    title: "Quiz: SVG",
    questions: [{ id: "q1", question: "SVG é baseado em quê?", options: ["Pixels", "Vetores (XML)", "Vídeo"], correctAnswer: 1 }],
    passingScore: 70
  },
  {
    id: "web-q11",
    title: "Quiz: Acessibilidade",
    questions: [{ id: "q1", question: "O que são papéis ARIA?", options: ["Cores", "Atributos que descrevem a função do elemento", "Scripts"], correctAnswer: 1 }],
    passingScore: 70
  },
  {
    id: "web-q12",
    title: "Quiz: Animações",
    questions: [{ id: "q1", question: "Qual propriedade CSS cria movimento suave?", options: ["transition", "static", "block"], correctAnswer: 0 }],
    passingScore: 70
  },
  {
    id: "web-q13",
    title: "Quiz: BEM",
    questions: [{ id: "q1", question: "O que significa BEM?", options: ["Block Element Modifier", "Big Entry Mode", "Body Entry Menu"], correctAnswer: 0 }],
    passingScore: 70
  },
  {
    id: "web-q14",
    title: "Quiz: HTTP",
    questions: [{ id: "q1", question: "Qual status code significa 'Não Encontrado'?", options: ["200", "404", "500"], correctAnswer: 1 }],
    passingScore: 70
  },
  {
    id: "web-q15",
    title: "Quiz: Performance",
    questions: [{ id: "q1", question: "O que mede o LCP?", options: ["Segurança", "Tempo de carregamento do maior elemento", "Número de cliques"], correctAnswer: 1 }],
    passingScore: 70
  },
  {
    id: "web-q16",
    title: "Quiz: Segurança",
    questions: [{ id: "q1", question: "O que o HTTPS garante?", options: ["Mais cores", "Comunicação encriptada", "Internet grátis"], correctAnswer: 1 }],
    passingScore: 70
  },
  {
    id: "web-q17",
    title: "Quiz: PWA",
    questions: [{ id: "q1", question: "Qual componente permite o modo offline?", options: ["Service Worker", "HTML tag", "CSS class"], correctAnswer: 0 }],
    passingScore: 70
  },
  {
    id: "web-q18",
    title: "Quiz: DevTools",
    questions: [{ id: "q1", question: "Qual separador permite ver os pedidos de rede?", options: ["Console", "Network", "Elements"], correctAnswer: 1 }],
    passingScore: 70
  },
  {
    id: "web-q19",
    title: "Quiz: Tipografia",
    questions: [{ id: "q1", question: "O que é FOUT?", options: ["Erro de fonte", "Flash of Unstyled Text", "Fonte colorida"], correctAnswer: 1 }],
    passingScore: 70
  },
  {
    id: "web-q20",
    title: "Quiz: Container Queries",
    questions: [{ id: "q1", question: "Onde o componente olha para mudar de estilo?", options: ["Janela (Viewport)", "Elemento Pai (Container)", "Rede"], correctAnswer: 1 }],
    passingScore: 70
  },
  {
    id: "web-q21",
    title: "Quiz: DOM",
    questions: [{ id: "q1", question: "O que é o DOM?", options: ["Document Object Model", "Data Online Mode", "Digital Object Menu"], correctAnswer: 0 }],
    passingScore: 70
  }
];
