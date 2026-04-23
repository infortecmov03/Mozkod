import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "se-q20-master",
  title: "Quiz: Engenharia de Software e IA",
  passingScore: 80,
  questions: [
    {
      id: "q20_1",
      question: "Qual o principal perigo de aceitar sugestões de IA sem revisão humana?",
      options: [
        "A IA cobrar pelo código gerado.",
        "Introdução de vulnerabilidades de segurança ou lógica incorreta que 'parece' certa (Alucinação).",
        "O computador desligar por excesso de processamento.",
        "O código tornar-se demasiado curto."
      ],
      correctAnswer: 1
    },
    {
      id: "q20_2",
      question: "Como um Engenheiro Master deve usar a IA para melhorar a qualidade do sistema?",
      options: [
        "Deixar a IA escrever todo o código e não fazer testes.",
        "Usar a IA para gerar cenários de teste exaustivos e documentação que ele mesmo validará.",
        "Proibir o uso de IA em toda a empresa.",
        "Copiar e colar funções inteiras de fóruns via IA."
      ],
      correctAnswer: 1
    },
    {
      id: "q20_3",
      question: "O que é 'Prompt Engineering' no contexto de desenvolvimento de software?",
      options: [
        "Consertar o monitor.",
        "A habilidade de formular instruções precisas para obter os melhores resultados da IA.",
        "Um novo tipo de base de dados.",
        "O ato de digitar rápido."
      ],
      correctAnswer: 1
    },
    {
      id: "q20_4",
      question: "Qual a regra de ouro sobre dados sensíveis e IAs Generativas?",
      options: [
        "Podes enviar qualquer dado se for para resolver um bug.",
        "Nunca submeter código proprietário, segredos ou dados de clientes em IAs sem garantias de privacidade.",
        "A IA apaga os dados após a resposta, por isso é seguro.",
        "Apenas senhas não devem ser enviadas."
      ],
      correctAnswer: 1
    },
    {
      id: "q20_5",
      question: "A IA é melhor que o humano em qual destas tarefas?",
      options: [
        "Tomada de decisão arquitetural complexa com base em trade-offs de negócio.",
        "Gerar rapidamente código repetitivo (boilerplate) e estruturas padrão.",
        "Negociar prazos com stakeholders difíceis.",
        "Ter empatia com o utilizador final."
      ],
      correctAnswer: 1
    },
    {
      id: "q20_6",
      question: "Como o uso de IA afeta a necessidade de saber algoritmos e fundamentos?",
      options: [
        "Torna o conhecimento de fundamentos inútil.",
        "Aumenta a necessidade, pois o engenheiro precisa de fundamentação para auditar a lógica gerada pela IA.",
        "Não altera nada.",
        "O aprendizado de algoritmos deve ser substituído por cursos de prompt."
      ],
      correctAnswer: 1
    }
  ]
};
