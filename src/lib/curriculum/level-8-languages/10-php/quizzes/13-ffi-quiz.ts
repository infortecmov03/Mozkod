import type { Quiz } from '../../../../types';

export const quiz: Quiz = {
  id: "php-mq13",
  title: "Quiz: FFI - Chamando Código C nativo",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "O que significa FFI?",
      options: ["Fast File Interface", "Foreign Function Interface", "Final Function Integration", "Framework Form Info"],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "O FFI permite que o PHP aceda a quê?",
      options: [
        "Apenas ao banco de dados",
        "A bibliotecas dinâmicas (.so, .dll) escritas em C/Rust/C++",
        "A ficheiros HTML remotos",
        "À memória RAM de outro utilizador"
      ],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "Qual o risco de usar FFI em ambientes web comuns?",
      options: [
        "O site fica mais lento",
        "Risco de segurança e instabilidade (podes crashar a memória da VM do PHP)",
        "Aumento do uso de disco",
        "Não há riscos"
      ],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "A função FFI::cdef() aceita o quê como argumento?",
      options: [
        "Código binário",
        "Protótipos de funções C (headers)",
        "Ficheiros JSON",
        "Somente o nome da biblioteca"
      ],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "FFI é habilitado por padrão em todos os servidores?",
      options: [
        "Sim",
        "Não, deve ser configurado no php.ini (geralmente restrito a CLI)",
        "Apenas em servidores Windows",
        "Sim, desde o PHP 5"
      ],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "Qual o benefício de performance do FFI?",
      options: [
        "Nenhum",
        "Permite executar algoritmos pesados em C sem o custo de criar uma extensão PHP completa",
        "Reduz o uso de CPU",
        "Comprime o código fonte"
      ],
      correctAnswer: 1
    }
  ]
};
