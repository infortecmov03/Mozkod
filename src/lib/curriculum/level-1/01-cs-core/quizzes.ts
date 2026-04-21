import { quiz as q1 } from './quizzes/01-sistemas-numericos-quiz';
import { quiz as q2 } from './quizzes/02-logica-booleana-quiz';
import { quiz as q3 } from './quizzes/03-algebra-booleana-quiz';
import { quiz as q4 } from './quizzes/04-arquitetura-quiz';
import { quiz as q5 } from './quizzes/05-memoria-quiz';
import { quiz as q6 } from './quizzes/06-algoritmos-quiz';
import { quiz as q7 } from './quizzes/07-complexidade-quiz';
import { quiz as q8 } from './quizzes/08-paradigmas-quiz';
import { quiz as q9 } from './quizzes/09-floating-point-quiz';
import { quiz as q10 } from './quizzes/10-cache-hierarchy-quiz';
import { quiz as q11 } from './quizzes/11-isa-architecture-quiz';

export const quizzes = [
  q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11,
  {
    id: "cs-q12",
    title: "Quiz: Portas Universais",
    questions: [{ id: "q1", question: "Qual porta é considerada universal?", options: ["AND", "NAND", "OR"], correctAnswer: 1 }],
    passingScore: 70
  },
  {
    id: "cs-q13",
    title: "Quiz: Barramentos",
    questions: [{ id: "q1", question: "O que define a largura de um barramento?", options: ["Velocidade", "Número de bits paralelos", "Cor do cabo"], correctAnswer: 1 }],
    passingScore: 70
  },
  {
    id: "cs-q14",
    title: "Quiz: Memória Virtual",
    questions: [{ id: "q1", question: "O que é um Page Fault?", options: ["Erro de disco", "Dado não encontrado na RAM", "Falta de energia"], correctAnswer: 1 }],
    passingScore: 70
  },
  {
    id: "cs-q15",
    title: "Quiz: Sistemas de Ficheiros",
    questions: [{ id: "q1", question: "O que guarda um Inode?", options: ["O nome do ficheiro apenas", "Metadados e permissões", "O conteúdo binário"], correctAnswer: 1 }],
    passingScore: 70
  },
  {
    id: "cs-q16",
    title: "Quiz: Pipelining",
    questions: [{ id: "q1", question: "Qual o objetivo do pipeline?", options: ["Gastar menos energia", "Executar múltiplas instruções em paralelo", "Aumentar o disco"], correctAnswer: 1 }],
    passingScore: 70
  },
  {
    id: "cs-q17",
    title: "Quiz: Virtualização",
    questions: [{ id: "q1", question: "O que faz um Hypervisor?", options: ["Acelera o rato", "Gere máquinas virtuais", "Limpa o browser"], correctAnswer: 1 }],
    passingScore: 70
  },
  {
    id: "cs-q18",
    title: "Quiz: Erros ECC",
    questions: [{ id: "q1", question: "O que significa ECC na RAM?", options: ["Energy Control", "Error Correction Code", "Extra Cache Control"], correctAnswer: 1 }],
    passingScore: 70
  },
  {
    id: "cs-q19",
    title: "Quiz: Microarquitetura",
    questions: [{ id: "q1", question: "O que é microcódigo?", options: ["Lógica de baixo nível que implementa o ISA", "Uma linguagem web", "Um erro pequeno"], correctAnswer: 0 }],
    passingScore: 70
  },
  {
    id: "cs-q20",
    title: "Quiz: Ciclos",
    questions: [{ id: "q1", question: "O que dita o ritmo da CPU?", options: ["Software", "Cristal de Quartzo (Clock)", "Utilizador"], correctAnswer: 1 }],
    passingScore: 70
  },
  {
    id: "cs-q21",
    title: "Quiz: Ética",
    questions: [{ id: "q1", question: "Quem é considerado o pai da computação?", options: ["Bill Gates", "Alan Turing", "Steve Jobs"], correctAnswer: 1 }],
    passingScore: 70
  }
];
