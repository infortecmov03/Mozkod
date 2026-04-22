import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "pf-t6-quiz",
  title: "Quiz: Arquitetura de Funções e Escopos",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Para que serve a palavra-chave 'return' numa função?",
      options: [
        "Para imprimir algo no ecrã",
        "Para encerrar a função e devolver um valor para o ponto onde foi chamada",
        "Para apagar a função da memória",
        "Para ligar o computador"
      ],
      correctAnswer: 1,
      explanation: "Sem o return, a função executa a tarefa mas quem a chamou não recebe o resultado de volta."
    },
    {
      id: "q2",
      question: "O que acontece se tentares aceder a uma variável definida DENTRO de uma função a partir de fora dela?",
      options: [
        "O programa funciona normalmente",
        "Ocorre um erro de 'ReferenceError' porque a variável está no escopo local",
        "A variável torna-se global automaticamente",
        "O computador mostra o valor mas com um aviso"
      ],
      correctAnswer: 1,
      explanation: "Variáveis locais estão encapsuladas. O isolamento de escopo é vital para evitar bugs de colisão de nomes."
    },
    {
      id: "q3",
      question: "O que são os 'Parâmetros' de uma função?",
      options: [
        "São os erros que a função dá",
        "São as variáveis de entrada que a função espera receber para trabalhar",
        "É o nome da função",
        "São as bibliotecas externas"
      ],
      correctAnswer: 1,
      explanation: "Parâmetros agem como 'placeholders' para os valores reais (argumentos) que serão passados na chamada."
    },
    {
      id: "q4",
      question: "Qual a principal vantagem de usar funções em vez de escrever código longo e contínuo?",
      options: [
        "O código corre 100x mais rápido",
        "Reutilização de código e facilidade de manutenção (DRY - Don't Repeat Yourself)",
        "O código fica mais colorido",
        "Não existem vantagens"
      ],
      correctAnswer: 1,
      explanation: "Ao modularizar, se precisares de mudar uma lógica, mudas apenas num lugar em vez de em 50 arquivos."
    },
    {
      id: "q5",
      question: "O que caracteriza uma 'Função Pura'?",
      options: [
        "Uma função que não tem parâmetros",
        "Uma função que sempre retorna o mesmo resultado para a mesma entrada e não tem efeitos colaterais",
        "Uma função que só usa números inteiros",
        "Uma função que foi escrita sem erros"
      ],
      correctAnswer: 1,
      explanation: "Funções puras são a base da estabilidade em sistemas complexos, pois são previsíveis e isoladas."
    },
    {
      id: "q6",
      question: "O que acontece ao fluxo do programa assim que uma instrução 'return' é executada?",
      options: [
        "O programa continua a ler as linhas seguintes dentro da função",
        "A execução da função para imediatamente e o controlo volta para quem a invocou",
        "O programa entra em loop",
        "O programa fecha todas as abas"
      ],
      correctAnswer: 1,
      explanation: "Nada que venha depois do return dentro daquele bloco será executado. O return é o ponto final daquela chamada."
    }
  ]
};
