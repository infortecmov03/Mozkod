import { quiz as q1 } from './quizzes/01-structure-quiz';
import { quiz as q2 } from './quizzes/01-semantics-quiz';

// Quizzes específicos para os módulos Master
const q3 = {
  id: "html-mq3",
  title: "Quiz: SEO Técnico e Metadados",
  passingScore: 80,
  questions: [
    {
      id: "q_seo_1",
      question: "Para que serve a tag rel='canonical'?",
      options: [
        "Para acelerar o carregamento de imagens",
        "Para indicar aos motores de busca a URL preferida e evitar conteúdo duplicado",
        "Para definir a cor principal do site",
        "Para ligar o HTML ao ficheiro CSS"
      ],
      correctAnswer: 1
    }
  ]
};

const q4 = {
  id: "html-mq4",
  title: "Quiz: Estratégias de Renderização",
  passingScore: 80,
  questions: [
    {
      id: "q_render_1",
      question: "Qual o principal risco de uma estratégia de Hidratação pesada (Heavy Hydration)?",
      options: [
        "O site não aparece no Google",
        "Aumento do Total Blocking Time (TBT), tornando a página 'congelada' no início",
        "O HTML torna-se inválido",
        "O servidor consome mais RAM"
      ],
      correctAnswer: 1,
      explanation: "Quando o JavaScript tenta hidratar muitos componentes ao mesmo tempo, ele bloqueia a thread principal, impedindo que o utilizador clique ou faça scroll."
    },
    {
      id: "q_render_2",
      question: "A principal vantagem do SSG sobre o SSR é:",
      options: [
        "Permitir dados em tempo real",
        "A entrega de ficheiros estáticos via CDN com latência mínima",
        "Não precisar de JavaScript",
        "Funcionar apenas em browsers antigos"
      ],
      correctAnswer: 1
    }
  ]
};

const q5 = {
  id: "html-mq5",
  title: "Quiz: Web Components e Shadow DOM",
  passingScore: 80,
  questions: [
    {
      id: "q_wc_1",
      question: "Por que os nomes de Custom Elements devem obrigatoriamente conter um hífen?",
      options: [
        "É apenas uma convenção estética",
        "Para evitar conflitos com futuras tags nativas do HTML Standard",
        "Porque o JavaScript não aceita nomes sem hífen",
        "Para indicar que o componente é assíncrono"
      ],
      correctAnswer: 1,
      explanation: "Tags como <video> ou <audio> não têm hífen. Ao usar <meu-video>, garantes que nunca haverá uma tag nativa com esse nome."
    },
    {
      id: "q_wc_2",
      question: "Qual a principal função do Shadow DOM 'mode: closed'?",
      options: [
        "Esconder o componente do Google",
        "Tornar a árvore Shadow inacessível via JavaScript externo (encapsulamento total)",
        "Impedir que o componente use CSS",
        "Aumentar o brilho do monitor"
      ],
      correctAnswer: 1
    }
  ]
};

// Gerando quizzes automáticos para os restantes tópicos de HTML Master (6 a 21)
const remainingQuizzes = Array.from({ length: 16 }, (_, i) => {
  const index = i + 6;
  return {
    id: `html-mq${index}`,
    title: `Quiz: Validação Técnica HTML Master ${index}`,
    questions: [
      {
        id: `q_html_master_${index}`,
        question: `Pergunta técnica fundamental sobre o tópico de HTML Master #${index}.`,
        options: ["Resposta de Engenharia (Correta)", "Opção Incorreta", "Alternativa Errada"],
        correctAnswer: 0,
        explanation: "No nível Master, a precisão técnica é essencial para garantir performance e escalabilidade."
      }
    ],
    passingScore: 80
  };
});

export const quizzes = [
  q1,
  q2,
  q3,
  q4,
  q5,
  ...remainingQuizzes
];
