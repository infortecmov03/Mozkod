import type { KnowledgeArea, Quiz } from '../../types';
import { lessons } from './theory';

const netQuizzes: Quiz[] = [
  {
    id: "net-q1",
    title: "Quiz: Modelo OSI e TCP/IP",
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "Qual camada do modelo OSI é responsável pelo endereçamento IP e roteamento?",
        options: ["Sessão", "Transporte", "Rede", "Física"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: "net-q5",
    title: "Quiz: Camada de Transporte",
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "Qual protocolo garante que os pacotes chegam na ordem correta e sem erros?",
        options: ["UDP", "IP", "TCP", "ICMP"],
        correctAnswer: 2
      }
    ]
  }
];

export const networking: KnowledgeArea = {
  id: 'ka-networking',
  title: '02. Networking',
  description: 'Comunicação digital: protocolos, roteamento, segurança de rede e nuvem seguindo o padrão ACM.',
  load: '40h',
  iconName: 'Globe',
  theory: lessons,
  quizzes: netQuizzes,
  practice: {
    bash: [
      {
        id: "net-p1",
        language: "bash",
        title: "Laboratório: Diagnóstico de Rede",
        description: "Use comandos de terminal para testar conectividade.",
        statement: "Qual comando é usado para verificar se um servidor está ativo enviando pacotes ICMP? Escreva 'ping'.",
        template: "let comando = '';",
        detailedExplanation: "<p>O comando ping mede a latência e confirma se o destino está alcançável.</p>",
        objectives: [{ id: "obj1", description: "Identificar o comando de teste", test: "ping" }]
      }
    ]
  }
};