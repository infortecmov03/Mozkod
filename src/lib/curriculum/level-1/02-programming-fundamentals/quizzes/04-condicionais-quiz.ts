import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "pf-t4-quiz",
  title: "Quiz: Lógica de Decisão Profissional",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "O que acontece se a expressão dentro de um 'if' resultar num valor Falso e não existir um bloco 'else'?",
      options: [
        "O programa crasha imediatamente",
        "O computador reinicia",
        "O bloco do 'if' é ignorado e o programa continua na linha seguinte",
        "O programa fica parado à espera que o utilizador mude o valor"
      ],
      correctAnswer: 2,
      explanation: "O 'else' é opcional. Sem ele, se a condição falhar, o fluxo simplesmente salta o bloco e segue adiante."
    },
    {
      id: "q2",
      question: "Qual operador lógico deves usar para garantir que um utilizador só acede ao sistema se tiver 'Email Confirmado' E 'Subscrição Ativa'?",
      options: ["OR (||)", "NOT (!)", "AND (&&)", "XOR"],
      correctAnswer: 2,
      explanation: "O operador AND exige que todas as premissas sejam verdadeiras para que o resultado final seja verdadeiro."
    },
    {
      id: "q3",
      question: "O que é o fenómeno de 'Short-circuit' (Curto-circuito) no operador OR (||)?",
      options: [
        "Um erro elétrico no processador",
        "Se a primeira condição for Verdadeira, a segunda nem é avaliada",
        "Se a primeira for Falsa, o programa pára",
        "A conversão de número para texto"
      ],
      correctAnswer: 1,
      explanation: "No OR, basta um ser verdadeiro. Se o primeiro já é, o motor ganha tempo ignorando o resto da expressão."
    },
    {
      id: "q4",
      question: "Para que serve a estrutura 'switch' ou 'match' em vez de múltiplos 'if/else'?",
      options: [
        "Para tornar o código mais lento",
        "Para apagar variáveis globais",
        "Para organizar melhor decisões baseadas em múltiplos valores fixos de uma única variável",
        "Apenas para cálculos matemáticos"
      ],
      correctAnswer: 2,
      explanation: "O switch é mais limpo visualmente quando tens de comparar uma variável com muitos valores possíveis (ex: dias da semana)."
    },
    {
      id: "q5",
      question: "Qual o resultado de !(10 > 5)?",
      options: ["True", "False", "10", "5"],
      correctAnswer: 1,
      explanation: "10 é maior que 5 (True). O operador NOT (!) inverte esse valor para False."
    },
    {
      id: "q6",
      question: "Por que se recomenda colocar a condição mais provável de ser Falsa no início de um operador AND (&&)?",
      options: [
        "Para gastar menos RAM",
        "Para aproveitar o curto-circuito e evitar processamento desnecessário das outras condições",
        "Para confundir hackers",
        "Não existe razão técnica"
      ],
      correctAnswer: 1,
      explanation: "Se o primeiro já é Falso, o AND morre ali. Isto poupa ciclos de CPU que seriam gastos a avaliar o resto da linha."
    }
  ]
};
