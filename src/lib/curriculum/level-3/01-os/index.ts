import type { KnowledgeArea, Quiz } from '../../types';
import { lessons } from './theory';

const osQuizzes: Quiz[] = [
  {
    id: "os-q1",
    title: "Quiz: Arquitetura de Kernels",
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "Qual a principal diferença entre um Kernel Monolítico e um Microkernel?",
        options: [
          "Monolítico é mais lento",
          "Microkernel corre a maioria dos serviços no espaço de utilizador para maior estabilidade",
          "Monolítico não suporta drivers",
          "Não há diferença prática"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "os-q2",
    title: "Quiz: Gestão de Processos",
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "Onde o SO guarda o estado de um processo (registradores, PC, etc)?",
        options: ["Na Cache L1", "No PCB (Process Control Block)", "No Disco Rígido", "Na BIOS"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "os-q3",
    title: "Quiz: Escalonamento de CPU",
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "Qual algoritmo de escalonamento evita que processos longos bloqueiem o sistema?",
        options: ["FCFS", "Round Robin", "SJF", "LIFO"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "os-q4",
    title: "Quiz: Threads e Concorrência",
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "O que caracteriza uma 'Race Condition'?",
        options: [
          "O programa corre mais rápido que o normal",
          "Duas threads acedem e modificam o mesmo dado simultaneamente, gerando inconsistência",
          "O computador aquece demais",
          "O processo termina antes do tempo"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "os-q5",
    title: "Quiz: Deadlocks",
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "Qual destas NÃO é uma das 4 condições de Coffman para Deadlock?",
        options: ["Exclusão Mútua", "Posse e Espera", "Preempção", "Espera Circular"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: "os-q6",
    title: "Quiz: Gestão de Memória",
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "O que faz a MMU (Memory Management Unit)?",
        options: [
          "Traduz endereços lógicos em endereços físicos em tempo real",
          "Limpa a memória RAM",
          "Gere a velocidade do processador",
          "Controla o teclado"
        ],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "os-q7",
    title: "Quiz: Memória Virtual",
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "O que é um 'Page Fault'?",
        options: [
          "Um erro no disco rígido",
          "Quando a CPU tenta aceder a uma página que não está carregada na RAM física",
          "Um erro de sintaxe no código",
          "Uma falha na fonte de alimentação"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "os-q8",
    title: "Quiz: Sistemas de Ficheiros",
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "O que é o 'Journaling' num sistema de ficheiros?",
        options: [
          "Um diário de bordo do utilizador",
          "Um registo de alterações pendentes para evitar corrupção em caso de falha de energia",
          "A compressão automática de fotos",
          "A sincronização com a nuvem"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "os-q9",
    title: "Quiz: Sistemas de I/O",
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "Qual a vantagem do DMA (Direct Memory Access)?",
        options: [
          "Torna a internet mais rápida",
          "Permite que dispositivos transfiram dados diretamente para a RAM sem sobrecarregar a CPU",
          "Aumenta a resolução do monitor",
          "Protege contra vírus"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "os-q10",
    title: "Quiz: Segurança de SO",
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "Para que serve a separação entre 'User Mode' e 'Kernel Mode'?",
        options: [
          "Para ter dois utilizadores logados",
          "Para impedir que aplicações de utilizador executem instruções privilegiadas que possam danificar o sistema",
          "Para mudar as cores do Windows",
          "Para acelerar jogos"
        ],
        correctAnswer: 1
      }
    ]
  }
];

export const os: KnowledgeArea = {
  id: 'ka-os',
  title: '01. Operating Systems',
  description: 'Arquitetura de Kernels, gestão de processos, memória, ficheiros e segurança de sistemas.',
  load: '45h',
  iconName: 'Cpu',
  theory: lessons,
  quizzes: osQuizzes,
  practice: {
    bash: [
      {
        id: "os-p1",
        language: "bash",
        title: "Laboratório: Inspeção de Processos",
        description: "Explore os processos ativos no sistema Linux.",
        statement: "Qual comando é usado para listar todos os processos ativos de forma detalhada? Escreva 'ps aux'.",
        template: "let comando = '';",
        detailedExplanation: "<p>O comando <code>ps aux</code> fornece uma visão completa de quem está a usar a CPU e RAM.</p>",
        objectives: [{ id: "obj1", description: "Identificar comando de listagem", test: "ps aux" }]
      }
    ]
  }
};