import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "hci-q1",
  title: "Quiz: Fundamentos de HCI",
  passingScore: 70,
  questions: [
    {
      id: "hci_q1_1",
      question: "Qual o foco primordial da Interação Humano-Computador (HCI)?",
      options: [
        "Aumentar a velocidade da CPU",
        "Melhorar a relação entre humanos e máquinas através do design e engenharia",
        "Reduzir o custo de produção de hardware",
        "Vender mais software no mercado global"
      ],
      correctAnswer: 1
    },
    {
      id: "hci_q1_2",
      question: "O que é um 'Modelo Mental' no contexto de HCI?",
      options: [
        "O diagrama de base de dados do sistema",
        "A forma como o utilizador imagina que o sistema funciona na sua mente",
        "Um algoritmo de inteligência artificial",
        "A memória RAM do computador"
      ],
      correctAnswer: 1
    },
    {
      id: "hci_q1_3",
      question: "Em HCI, o que representa a 'Interação'?",
      options: [
        "O tempo de download da página",
        "O diálogo e a troca de sinais entre o utilizador e o sistema",
        "A ligação via cabo de rede",
        "A instalação do sistema operativo"
      ],
      correctAnswer: 1
    },
    {
      id: "hci_q1_4",
      question: "Por que um Engenheiro de Software deve estudar HCI?",
      options: [
        "Para escrever código em binário",
        "Para evitar erros de utilização e aumentar a eficiência do software",
        "Para consertar monitores estragados",
        "Apenas se for trabalhar com artes visuais"
      ],
      correctAnswer: 1
    },
    {
      id: "hci_q1_5",
      question: "Qual destes é um dispositivo de 'Input' em HCI?",
      options: ["Monitor", "Microfone", "Altifalante", "Impressora"],
      correctAnswer: 1
    },
    {
      id: "hci_q1_6",
      question: "O conceito de 'Usabilidade' está inserido em qual área?",
      options: ["Hardware puro", "HCI", "Back-end infra", "Redes de computadores"],
      correctAnswer: 1
    }
  ]
};
