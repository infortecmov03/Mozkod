import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "se-q7-master",
  title: "Quiz: Estimativa e Planeamento",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Por que usamos a sequência de Fibonacci (1, 2, 3, 5, 8...) para estimar?",
      options: ["Porque é bonita", "Para refletir a maior incerteza em tarefas maiores", "Porque o código corre mais rápido", "Para facilitar a divisão por 2"],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "Story Points medem o quê?",
      options: ["Horas de trabalho", "Esforço, complexidade e risco relativos", "O salário do programador", "O número de linhas de código"],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "No Planning Poker, o que acontece se um programador vota 2 e outro vota 21?",
      options: ["Faz-se a média aritmética", "O SM decide o valor médio", "Eles discutem as razões para expor riscos ou simplificações ocultas", "O voto maior ganha sempre"],
      correctAnswer: 2
    },
    {
      id: "q4",
      question: "O que é a 'Velocidade' (Velocity) da equipa?",
      options: ["A rapidez da internet no escritório", "A média de Story Points entregues por Sprint", "O tempo que o CPU leva a compilar", "O número de bugs por dia"],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "Estimar em Story Points é melhor que em Horas porque:",
      options: ["É mais difícil de cobrar", "Horas dependem da experiência individual; Story Points focam no tamanho da tarefa para a equipa", "O Scrum Master não sabe contar horas", "Horas são proibidas pelo manifesto ágil"],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "Uma tarefa de 13 pontos que não foi terminada na Sprint deve ser:",
      options: ["Contada como 6 pontos", "Re-estimada e devolvida ao Product Backlog", "Ignorada no cálculo da velocidade", "Apagada"],
      correctAnswer: 1
    }
  ]
};