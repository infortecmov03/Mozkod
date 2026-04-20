import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';

export const os: KnowledgeArea = {
  id: 'ka-os',
  title: '01. Operating Systems',
  description: 'Arquitetura de Kernels, gestão de processos, memória, ficheiros e segurança de sistemas.',
  load: '45h',
  iconName: 'Cpu',
  theory: lessons,
  quizzes: Array.from({ length: 21 }, (_, i) => ({
    id: `os-q${i + 1}`,
    title: `OS Quiz ${i + 1}`,
    questions: [
      {
        id: "q_auto",
        question: "Validação técnica para o tópico " + (i + 1),
        options: ["Opção Correta", "Incorreta", "Erro"],
        correctAnswer: 0
      }
    ],
    passingScore: 70
  })),
  practice: {
    bash: [
      {
        id: "os-p1",
        language: "bash",
        title: "Laboratório: Inspeção de Processos",
        description: "Explore os processos ativos no sistema Linux.",
        statement: "Qual comando é usado para listar todos os processos ativos? Escreva 'ps aux'.",
        template: "let comando = '';",
        detailedExplanation: "<p>O comando ps aux é a base do monitoramento em Linux.</p>",
        objectives: [{ id: "obj1", description: "Identificar comando", test: "ps aux" }]
      }
    ]
  }
};
