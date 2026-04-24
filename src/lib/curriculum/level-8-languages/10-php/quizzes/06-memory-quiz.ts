import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-mq6",
  title: "Quiz Master: Gestão de Memória e GC",
  passingScore: 85,
  questions: [
    {
      id: "q6_1",
      question: "Qual o principal mecanismo de gestão de memória do PHP para objetos?",
      options: [
        "Garbage Collector geracional (como Java)",
        "Reference Counting (Contagem de Referências)",
        "Alocação manual (como C)",
        "Não existe gestão automática"
      ],
      correctAnswer: 1
    },
    {
      id: "q6_2",
      question: "O que é o 'Cycle Collector' do PHP?",
      options: [
        "Um temporizador de execução",
        "Um mecanismo que identifica e limpa referências circulares que o refcounting simples não consegue",
        "Um limpador de ficheiros temporários",
        "Um plugin do servidor Apache"
      ],
      correctAnswer: 1
    },
    {
      id: "q6_3",
      question: "O que a técnica de 'Copy-on-Write' (COW) otimiza?",
      options: [
        "A escrita em disco",
        "O uso de memória ao passar arrays grandes; o PHP só duplica os dados se um deles for modificado",
        "A velocidade do banco de dados",
        "A segurança das sessões"
      ],
      correctAnswer: 1
    },
    {
      id: "q6_4",
      question: "O comando gc_collect_cycles() serve para:",
      options: [
        "Reiniciar o servidor",
        "Forçar a execução do coletor de lixo para limpar ciclos de referência",
        "Limpar o cache do browser",
        "Contar o número de threads"
      ],
      correctAnswer: 1
    },
    {
      id: "q6_5",
      question: "A memória do PHP é partilhada entre diferentes pedidos (requests) no modelo FPM?",
      options: [
        "Sim, a RAM é global",
        "Não, cada request tem o seu próprio espaço de memória isolado que é limpo ao terminar",
        "Apenas as variáveis estáticas",
        "Apenas se usar Redis"
      ],
      correctAnswer: 1
    },
    {
      id: "q6_6",
      question: "Qual o perigo de desativar o garbage collector em scripts de longa duração (CLI)?",
      options: [
        "O script fica mais lento",
        "Esgotamento da memória RAM (Memory Leak) devido a referências circulares não limpas",
        "O ficheiro PHP apaga-se",
        "Nenhum, o PHP gere tudo perfeitamente"
      ],
      correctAnswer: 1
    }
  ]
};
