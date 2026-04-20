
import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "pf-t1-quiz",
  title: "Quiz: Variáveis e Tipos",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual é a função principal de uma variável?",
      options: [
        "Ligar o processador",
        "Guardar informação na memória com um nome",
        "Desenhar gráficos no ecrã",
        "Apagar ficheiros inúteis"
      ],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "Como se chama o tipo de dado que guarda texto?",
      options: ["Number", "Boolean", "String", "Float"],
      correctAnswer: 2
    },
    {
      id: "q3",
      question: "Qual destes valores é um Boolean?",
      options: ["'Verdadeiro'", "100", "null", "false"],
      correctAnswer: 3
    }
  ]
};
