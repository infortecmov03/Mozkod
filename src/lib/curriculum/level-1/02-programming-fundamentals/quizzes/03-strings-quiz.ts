import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "pf-t3-quiz",
  title: "Quiz: Strings e Manipulação de Texto",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "O que é 'Interpolação de Strings'?",
      options: [
        "Dividir uma string em duas",
        "Inserir o valor de variáveis diretamente dentro de um texto",
        "Apagar o conteúdo de uma string",
        "Converter texto para maiúsculas"
      ],
      correctAnswer: 1,
      explanation: "Exemplo: `Olá, ${nome}`. É a forma moderna de criar textos dinâmicos."
    },
    {
      id: "q2",
      question: "Qual o caractere usado para 'escapar' caracteres especiais dentro de uma string (ex: colocar aspas dentro de aspas)?",
      options: ["/", "\\ (barra invertida)", "|", "&"],
      correctAnswer: 1,
      explanation: "A barra invertida diz ao interpretador que o próximo caractere deve ser tratado como texto, não como código."
    },
    {
      id: "q3",
      question: "Strings são coleções indexadas. Qual o índice do primeiro caractere da string 'MOZ'?",
      options: ["1", "0", "-1", "M"],
      correctAnswer: 1,
      explanation: "A contagem em programação (zero-based) começa sempre no 0."
    },
    {
      id: "q4",
      question: "O que significa dizer que uma string é 'Imutável' em Java ou Python?",
      options: [
        "Que não pode ser impressa",
        "Que o seu valor não pode ser alterado após criada; qualquer mudança gera uma nova string",
        "Que ocupa zero de memória",
        "Que só aceita letras"
      ],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "Qual método é comummente usado para remover espaços em branco no início e fim de uma string?",
      options: ["clear()", "slice()", "trim()", "split()"],
      correctAnswer: 2
    },
    {
      id: "q6",
      question: "Como se chama a operação de juntar duas ou mais strings?",
      options: ["Soma de Texto", "Concatenação", "Fusão de Bits", "Linkagem"],
      correctAnswer: 1
    }
  ]
};
