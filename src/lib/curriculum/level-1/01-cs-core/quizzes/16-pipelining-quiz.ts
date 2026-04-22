import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "cs-t16-quiz",
  title: "Quiz: CPU Pipelining Master",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual o principal benefício do Pipelining numa CPU moderna?",
      options: [
        "Reduzir o tempo que uma única instrução demora a ser executada (latência)",
        "Aumentar o número de instruções finalizadas por segundo (throughput)",
        "Diminuir o consumo de energia da bateria",
        "Aumentar a capacidade de armazenamento do disco rígido"
      ],
      correctAnswer: 1,
      explanation: "O pipelining foca na vazão (throughput). Tal como numa linha de montagem, o objetivo é que instruções terminem mais frequentemente, mesmo que cada uma individualmente leve o mesmo tempo total."
    },
    {
      id: "q2",
      question: "O que acontece no estágio de 'Decode' (Descodificação) da pipeline?",
      options: [
        "A CPU busca a instrução na memória RAM",
        "A Unidade de Controlo interpreta o opcode para saber qual operação realizar",
        "A ALU realiza a soma dos bits",
        "O resultado final é mostrado no monitor do utilizador"
      ],
      correctAnswer: 1,
      explanation: "No estágio Decode, o processador decifra os bits da instrução para entender quais circuitos (como a ALU) devem ser ativados."
    },
    {
      id: "q3",
      question: "Um 'Data Hazard' ocorre quando:",
      options: [
        "O cabo de rede é desligado durante o processamento",
        "Uma instrução depende do resultado de uma instrução anterior que ainda não terminou",
        "A CPU tenta aceder a dois discos rígidos ao mesmo tempo",
        "O utilizador apaga um ficheiro importante"
      ],
      correctAnswer: 1,
      explanation: "Hazards de dados acontecem quando a ordem lógica do programa é quebrada pela execução paralela, exigindo que a pipeline espere (stall) pelo dado correto."
    },
    {
      id: "q4",
      question: "O que acontece se a 'Previsão de Desvio' (Branch Prediction) falhar?",
      options: [
        "O computador reinicia automaticamente",
        "A pipeline deve ser esvaziada (flushed) e reiniciada, desperdiçando ciclos de clock",
        "A CPU duplica a sua voltagem para compensar o erro",
        "O software é apagado do disco"
      ],
      correctAnswer: 1,
      explanation: "Um erro de predição é caro: todo o trabalho em progresso na pipeline para as instruções seguintes é descartado, pois o processador percebe que buscou o código do caminho errado."
    },
    {
      id: "q5",
      question: "Pense na analogia da linha de montagem. Se cada instrução leva 4 ciclos e temos 4 estágios, qual a média de instruções terminadas por ciclo após a pipeline estar cheia?",
      options: [
        "0.25 instruções por ciclo",
        "1 instrução por ciclo",
        "4 instruções por ciclo",
        "16 instruções por ciclo"
      ],
      correctAnswer: 1,
      explanation: "Numa pipeline ideal de 4 estágios, após os primeiros 4 ciclos (preenchimento), uma nova instrução termina em cada pulsar do relógio (1 IPC)."
    },
    {
      id: "q6",
      question: "Qual destes componentes é responsável por realizar o cálculo real durante o estágio 'Execute'?",
      options: [
        "Unidade de Controlo (UC)",
        "Registradores",
        "Unidade Lógica e Aritmética (ALU)",
        "Memória Cache L3"
      ],
      correctAnswer: 2,
      explanation: "A ALU é o componente que executa as operações matemáticas e lógicas solicitadas pela instrução durante o estágio de execução da pipeline."
    }
  ]
};
