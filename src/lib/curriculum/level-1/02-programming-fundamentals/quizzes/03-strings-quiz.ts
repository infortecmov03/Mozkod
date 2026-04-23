import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "pf-t3-quiz",
  title: "Quiz: Strings e Comunicação de Dados",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual o índice da letra 'D' na string 'CODEWORKS'?",
      options: ["1", "2", "3", "0"],
      correctAnswer: 1,
      explanation: "C(0), O(1), D(2)... A indexação começa sempre em 0."
    },
    {
      id: "q2",
      question: "O que acontece se tentares somar um número e uma string no JavaScript (ex: 5 + '5')?",
      options: [
        "Ocorre um erro de sistema",
        "O resultado é 10 (número)",
        "O resultado é '55' (string) devido à coerção automática",
        "O computador explode"
      ],
      correctAnswer: 2,
      explanation: "O JS converte o número para string e junta os dois (concatenação)."
    },
    {
      id: "q3",
      question: "Qual o caractere de escape usado para criar uma nova linha no terminal?",
      options: ["\\t", "\\r", "\\n", "\\l"],
      correctAnswer: 2,
      explanation: "\\n vem de 'New Line'."
    },
    {
      id: "q4",
      question: "O que caracteriza a 'Interpolação de Strings'?",
      options: [
        "Mudar a cor da fonte",
        "Inserir o valor de variáveis dentro de um texto usando delimitadores especiais",
        "Dividir uma string ao meio",
        "Traduzir o texto automaticamente"
      ],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "Em linguagens onde as strings são IMUTÁVEIS, o que ocorre ao mudar um caractere?",
      options: [
        "Apenas aquele bit é alterado",
        "Uma nova string é criada na memória com a alteração",
        "O programa para de funcionar",
        "Nada, a alteração é ignorada"
      ],
      correctAnswer: 1,
      explanation: "Imutabilidade significa que o objeto original nunca muda; qualquer 'edição' gera um novo objeto."
    },
    {
      id: "q6",
      question: "Para que serve a função trim() na maioria das linguagens?",
      options: [
        "Para cortar a string ao meio",
        "Para remover espaços em branco inúteis no início e no fim do texto",
        "Para converter tudo para maiúsculas",
        "Para contar o número de palavras"
      ],
      correctAnswer: 1
    }
  ]
};
