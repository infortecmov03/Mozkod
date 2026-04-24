
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-mq5",
  title: "Quiz Master: Zend Engine e Opcodes",
  passingScore: 85,
  questions: [
    {
      id: "q5_1",
      question: "O que é um Opcode no contexto do PHP?",
      options: [
        "O código-fonte escrito pelo programador",
        "Uma instrução intermediária de baixo nível que a Zend VM consegue executar",
        "Um erro de sintaxe no servidor",
        "O nome do servidor web"
      ],
      correctAnswer: 1
    },
    {
      id: "q5_2",
      question: "Qual o benefício principal do OpCache?",
      options: [
        "Aumentar o brilho das cores do site",
        "Evitar o parsing e compilação do código em cada request, guardando Opcodes na RAM",
        "Substituir a base de dados SQL",
        "Encriptar o código para o utilizador"
      ],
      correctAnswer: 1
    },
    {
      id: "q5_3",
      question: "O estágio de 'Parsing' no PHP 8 gera qual estrutura?",
      options: ["Binary File", "AST (Abstract Syntax Tree)", "Token Stream", "HTML"],
      correctAnswer: 1
    },
    {
      id: "q5_4",
      question: "Qual a função do 'Lexer' no motor Zend?",
      options: [
        "Realizar cálculos matemáticos",
        "Transformar o código em uma sequência de unidades chamadas Tokens",
        "Ligar à internet",
        "Apagar ficheiros temporários"
      ],
      correctAnswer: 1
    },
    {
      id: "q5_5",
      question: "A Zend Virtual Machine é uma máquina de:",
      options: ["Registos", "Pilha (Stack)", "Estado Linear", "Hardware Puro"],
      correctAnswer: 1
    },
    {
      id: "q5_6",
      question: "Onde o JIT (Just-In-Time) atua no pipeline da Zend?",
      options: [
        "No momento do download do ficheiro",
        "Convertendo Opcodes 'quentes' em código de máquina nativo em runtime",
        "Validando a senha do utilizador",
        "Comprimindo imagens JPG"
      ],
      correctAnswer: 1
    }
  ]
};
