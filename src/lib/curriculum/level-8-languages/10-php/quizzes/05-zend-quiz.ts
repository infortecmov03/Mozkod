import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-mq5",
  title: "Quiz Master: Zend Engine e Opcodes",
  passingScore: 85,
  questions: [
    {
      id: "q5_1",
      question: "O que é um Opcode no contexto da Zend VM?",
      options: [
        "O código-fonte escrito pelo engenheiro",
        "Uma instrução binária de baixo nível que o motor consegue executar eficientemente",
        "Um erro de sintaxe no servidor",
        "Um protocolo de rede"
      ],
      correctAnswer: 1
    },
    {
      id: "q5_2",
      question: "Qual o papel do OpCache na performance de uma aplicação de elite?",
      options: [
        "Criptografar os dados do banco",
        "Armazenar os Opcodes compilados na RAM para evitar o custo de parsing e compilação em cada request",
        "Reduzir o tamanho das imagens",
        "Ligar o servidor ao GitHub"
      ],
      correctAnswer: 1
    },
    {
      id: "q5_3",
      question: "O estágio de 'Lexing' transforma o código fonte em:",
      options: ["Opcodes", "AST (Abstract Syntax Tree)", "Tokens", "Ficheiros binários"],
      correctAnswer: 2
    },
    {
      id: "q5_4",
      question: "A Zend Virtual Machine (ZVM) é uma máquina de:",
      options: ["Registos (como a Lua VM)", "Pilha (Stack-based)", "Hardware físico", "Rede"],
      correctAnswer: 1
    },
    {
      id: "q5_5",
      question: "O que o JIT (Just-In-Time) do PHP 8 faz especificamente?",
      options: [
        "Limpa a memória mais rápido",
        "Compila Opcodes 'quentes' em código de máquina nativo (x86/ARM) em tempo de execução",
        "Corrige bugs automaticamente",
        "Aumenta a segurança contra SQL Injection"
      ],
      correctAnswer: 1
    },
    {
      id: "q5_6",
      question: "Qual ferramenta permite visualizar os Opcodes gerados por um ficheiro PHP?",
      options: ["var_dump", "VLD (Vulcan Logic Dumper)", "Xdebug (apenas)", "Composer"],
      correctAnswer: 1
    }
  ]
};
