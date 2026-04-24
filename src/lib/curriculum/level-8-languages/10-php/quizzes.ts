
import type { Quiz } from '../../types';

export const quizzes: Quiz[] = Array.from({ length: 21 }, (_, i) => {
  const idNum = i + 1;
  
  // Nomes dos tópicos para os quizes
  const topics = [
    "PHP 8 Moderno & Atributos", "Tipagem de Elite (Union/DNF)", "Constructor Promotion & Imutabilidade",
    "Enums & Pattern Matching", "Zend Engine & Opcodes", "Gestão de Memória & GC",
    "PDO Master & ACID", "SPL Internals & Performance", "Reflection API & Metadados",
    "Fibers & Concorrência", "Swoole & Async PHP", "Network Sockets & Streams",
    "FFI: Interoperabilidade Nativa", "Generators & Memory Efficiency", "Arquitetura Hexagonal & DDD",
    "Dependency Injection Internals", "Static Analysis (PHPStan 9)", "OpCache & JIT Tuning",
    "Security: RCE & Injeção", "Microserviços com gRPC", "Capstone: Produção e Auditoria"
  ];

  return {
    id: `php-mq${idNum}`,
    title: `Quiz Master: ${topics[i]}`,
    passingScore: 85,
    questions: [
      {
        id: "q1",
        question: `Qual o impacto principal de ${topics[i]} na arquitetura de um sistema de larga escala?`,
        options: ["Reduz a latência de execução", "Aumenta o overhead de rede", "Não tem impacto mensurável", "Serve apenas para estética"],
        correctAnswer: 0,
        explanation: "Na engenharia de elite, cada recurso é escolhido para maximizar o throughput ou reduzir a carga do servidor."
      },
      {
        id: "q2",
        question: "Como o motor do PHP 8.x otimiza este conceito em tempo de execução?",
        options: ["Via JIT compilation para código de máquina", "Usando interpretação linear simples", "Delegando ao banco de dados", "Desligando o Garbage Collector"],
        correctAnswer: 0
      },
      {
        id: "q3",
        question: "Qual a melhor prática de segurança ao implementar este padrão?",
        options: ["Confiar no input do utilizador", "Sanitização rigorosa e uso de tipos estritos", "Desativar o firewall", "Usar apenas variáveis globais"],
        correctAnswer: 1
      },
      {
        id: "q4",
        question: "Este recurso suporta execução assíncrona?",
        options: ["Sim, nativamente ou via extensões como Swoole", "Não, PHP é estritamente síncrono", "Apenas em servidores Windows", "Somente se o banco for NoSQL"],
        correctAnswer: 0
      },
      {
        id: "q5",
        question: "Qual o custo de memória (RAM) desta operação em comparação com versões antigas (PHP 5)?",
        options: ["Muito superior", "Significativamente inferior devido à otimização de structs na Zend VM", "Idêntico", "Zero"],
        correctAnswer: 1
      },
      {
        id: "q6",
        question: "A certificação de Engenheiro de Elite Codworks exige domínio de:",
        options: ["Apenas sintaxe básica", "Internals da linguagem e arquitetura de sistemas", "Copiar código de fóruns", "Instalar plugins genéricos"],
        correctAnswer: 1
      }
    ]
  };
});
