import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "pf-t5-quiz",
  title: "Quiz: Automação e Iteração",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual o loop mais adequado para percorrer todos os 50 elementos de uma lista de compras?",
      options: ["While", "For", "If", "Switch"],
      correctAnswer: 1,
      explanation: "O loop 'For' é ideal quando conhecemos o tamanho da coleção ou o número exato de repetições."
    },
    {
      id: "q2",
      question: "O que causa um 'Loop Infinito'?",
      options: [
        "Usar muitos comentários no código",
        "Uma condição que é SEMPRE verdadeira e nunca é alterada",
        "O computador ficar sem bateria",
        "Usar a variável 'i' como contador"
      ],
      correctAnswer: 1,
      explanation: "Se o teste lógico do loop nunca falhar, o processador ficará preso executando o mesmo bloco para sempre."
    },
    {
      id: "q3",
      question: "Para que serve a instrução 'continue' dentro de um loop?",
      options: [
        "Para parar o programa",
        "Para saltar apenas a iteração atual e ir para a próxima volta do loop",
        "Para reiniciar o computador",
        "Para fechar a base de dados"
      ],
      correctAnswer: 1,
      explanation: "Diferente do break, o continue não encerra o loop, apenas pula o código que vem depois dele naquela volta específica."
    },
    {
      id: "q4",
      question: "Qual o valor final de 'x' após este loop: for(let i=0; i<3; i++) { x += 2 } (assumindo x inicia em 0)?",
      options: ["2", "4", "6", "8"],
      correctAnswer: 2,
      explanation: "O loop roda 3 vezes (i=0, 1, 2). Em cada volta soma 2. Total: 2+2+2 = 6."
    },
    {
      id: "q5",
      question: "Qual a principal diferença entre o loop While e o Do-While?",
      options: [
        "O While é mais rápido",
        "O Do-While garante que o código execute pelo menos UMA vez antes de testar a condição",
        "O While não aceita números",
        "Não existe diferença real"
      ],
      correctAnswer: 1,
      explanation: "No Do-While, o teste lógico é feito no fim do bloco, por isso a primeira execução é garantida."
    },
    {
      id: "q6",
      question: "Em termos de performance, o que deves evitar fazer dentro de um loop que roda milhões de vezes?",
      options: [
        "Fazer somas simples",
        "Operações pesadas como ler do disco ou fazer pedidos de rede",
        "Mudar o valor do contador",
        "Usar chavetas"
      ],
      correctAnswer: 1,
      explanation: "Operações de I/O são lentas. Multiplicar essa lentidão por milhões de vezes pode congelar o sistema por minutos."
    }
  ]
};
