import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "css-mq2",
  title: "Quiz: Cascade Layers (@layer)",
  passingScore: 80,
  questions: [
    {
      id: "q2_1",
      question: "Qual camada tem prioridade numa declaração '@layer base, components, theme'?",
      options: [
        "A camada 'base', pois vem primeiro",
        "A camada 'theme', pois vem por último na ordem de definição",
        "A que tiver o seletor com mais IDs",
        "Nenhuma, a cascata continua a ignorar as camadas"
      ],
      correctAnswer: 1,
      explanation: "No CSS Layers, a última camada declarada na lista de prioridade é a que tem maior peso, independentemente da especificidade dos seletores lá dentro."
    }
  ]
};
