import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "cs-t17-quiz",
  title: "Quiz: Fundamentos de Virtualização",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual o componente responsável por gerir as Máquinas Virtuais?",
      options: ["Browser", "Kernel de Utilizador", "Hypervisor", "Compilador"],
      correctAnswer: 2,
      explanation: "O Hypervisor (ou VMM) é o árbitro do hardware para as VMs."
    },
    {
      id: "q2",
      question: "O que caracteriza um Hypervisor do Tipo 1?",
      options: [
        "Ele é grátis",
        "Ele corre diretamente no hardware físico (sem SO por baixo)",
        "Ele corre apenas em telemóveis",
        "Ele precisa do Windows para funcionar"
      ],
      correctAnswer: 1,
      explanation: "Hypervisors 'Bare Metal' são os mais performáticos e usados em data centers."
    }
  ]
};