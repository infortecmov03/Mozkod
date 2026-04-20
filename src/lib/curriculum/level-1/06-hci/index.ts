
import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';

export const hci: KnowledgeArea = {
  id: 'ka-hci',
  title: '06. HCI (Interação Humano-Computador)',
  description: 'Design centrado no utilizador, princípios de usabilidade e arquitetura de interfaces.',
  load: '20h',
  iconName: 'Layout',
  theory: lessons,
  quizzes: [
    {
      id: "hci-t1-quiz",
      title: "Quiz: Fundamentos de HCI",
      passingScore: 70,
      questions: [
        {
          id: "q1",
          question: "O que significa o termo 'Affordance' no design?",
          options: [
            "O custo de um software",
            "A capacidade de um objeto sugerir o seu uso",
            "A velocidade da interface",
            "Um erro de acessibilidade"
          ],
          correctAnswer: 1
        },
        {
          id: "q2",
          question: "Qual o foco principal do Design Centrado no Utilizador (UCD)?",
          options: [
            "A tecnologia mais recente",
            "As necessidades e limitações do utilizador",
            "O menor custo possível",
            "A opinião do programador"
          ],
          correctAnswer: 1
        }
      ]
    }
  ],
  practice: {
    design: [
      {
        id: "hci-p1",
        language: "concept",
        title: "Laboratório: Análise de Usabilidade",
        description: "Avalia a facilidade de uso de uma interface.",
        statement: "Identifica qual princípio de Nielsen foca na prevenção de erros. Escreve 'Prevenção'.",
        template: "let principio = '';",
        detailedExplanation: `
          <h3>📐 Heurísticas de Nielsen</h3>
          <p>Jakob Nielsen definiu 10 regras de ouro para o design de interface. Uma das mais importantes é evitar que o utilizador cometa erros em primeiro lugar.</p>
        `,
        objectives: [
          {
            id: "obj1",
            description: "Identificar o princípio correto",
            test: "principio = 'Prevenção'"
          }
        ]
      }
    ]
  }
};
