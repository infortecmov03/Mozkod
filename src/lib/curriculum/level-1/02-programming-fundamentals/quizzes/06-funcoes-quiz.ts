import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "pf-t6-quiz",
  title: "Quiz: Arquitetura de Funções e Escopos",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual o principal objetivo de usar funções?",
      options: [
        "Tornar o código mais longo",
        "Reutilização de lógica e organização do código (DRY)",
        "Aumentar a velocidade da internet",
        "Apagar variáveis automaticamente"
      ],
      correctAnswer: 1,
      explanation: "O princípio DRY (Don't Repeat Yourself) foca em escrever a lógica uma vez e reutilizá-la em todo o projeto."
    },
    {
      id: "q2",
      question: "Para que serve a palavra-chave 'return'?",
      options: [
        "Para imprimir um texto no terminal",
        "Para encerrar a função e enviar um valor de volta para quem a chamou",
        "Para reiniciar o loop",
        "Para apagar a função da memória"
      ],
      correctAnswer: 1,
      explanation: "O return é a saída da função. Sem ele, a função realiza a tarefa mas não entrega o resultado final."
    },
    {
      id: "q3",
      question: "O que acontece se tentares aceder a uma variável definida DENTRO de uma função a partir de fora dela?",
      options: [
        "O programa funciona normalmente",
        "Ocorre um erro de referência porque a variável está no escopo local",
        "O valor é mostrado mas com um aviso",
        "A variável torna-se global automaticamente"
      ],
      correctAnswer: 1,
      explanation: "Variáveis locais 'nascem' e 'morrem' dentro da função. Isto protege o sistema de efeitos colaterais indesejados."
    },
    {
      id: "q4",
      question: "O que são 'Parâmetros' de uma função?",
      options: [
        "São as variáveis de entrada que a função espera receber",
        "É o nome que damos à função",
        "São os erros que a função pode dar",
        "São as bibliotecas que importamos"
      ],
      correctAnswer: 0,
      explanation: "Parâmetros funcionam como 'caixas de entrada' para os dados que a função vai processar."
    },
    {
      id: "q5",
      question: "Uma 'Função Pura' é aquela que:",
      options: [
        "Não tem parâmetros",
        "Não tem retorno",
        "Sempre retorna o mesmo resultado para a mesma entrada e não altera nada fora dela",
        "Foi escrita sem usar o teclado"
      ],
      correctAnswer: 2,
      explanation: "Funções puras são a base da estabilidade em engenharia, pois são previsíveis e fáceis de testar."
    },
    {
      id: "q6",
      question: "O que acontece ao fluxo do programa assim que o 'return' é executado?",
      options: [
        "O programa continua a ler as linhas abaixo dentro da função",
        "A execução da função para IMEDIATAMENTE",
        "O programa entra em loop",
        "O programa apaga todos os parâmetros"
      ],
      correctAnswer: 1,
      explanation: "O return é o ponto final de uma função. Qualquer código abaixo dele dentro do mesmo bloco nunca será executado."
    }
  ]
};