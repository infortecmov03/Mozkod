
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-mq9",
  title: "Quiz Master: Reflection API e Introspecção",
  passingScore: 85,
  questions: [
    {
      id: "q9_1",
      question: "Qual classe da Reflection API permite inspecionar as propriedades de um objeto?",
      options: ["ReflectionMethod", "ReflectionProperty", "ReflectionClass", "ReflectionFunction"],
      correctAnswer: 2
    },
    {
      id: "q9_2",
      question: "Como o Reflection é usado para implementar Injeção de Dependência?",
      options: [
        "Aumentando a velocidade do carregamento",
        "Analisando os tipos dos argumentos do construtor em runtime para instanciar as dependências automaticamente",
        "Mudando o nome das variáveis",
        "Apagando ficheiros temporários"
      ],
      correctAnswer: 1
    },
    {
      id: "q9_3",
      question: "Reflection permite alterar a visibilidade de um método privado para torná-lo acessível num teste?",
      options: ["Sim, usando setAccessible(true)", "Não, o PHP proíbe", "Apenas no PHP 7", "Apenas para métodos estáticos"],
      correctAnswer: 0
    },
    {
      id: "q9_4",
      question: "Qual o impacto de usar Reflection excessivamente num loop de alta performance?",
      options: ["O código fica mais seguro", "Alto overhead de CPU, pois a introspecção é uma operação custosa", "Nenhum impacto", "A RAM é limpa automaticamente"],
      correctAnswer: 1
    },
    {
      id: "q9_5",
      question: "ReflectionClass::newInstanceArgs() permite:",
      options: ["Criar uma nova classe", "Instanciar uma classe passando um array de argumentos para o construtor", "Apagar uma instância", "Mudar o pai da classe"],
      correctAnswer: 1
    },
    {
      id: "q9_6",
      question: "Os Atributos do PHP 8 podem ser lidos sem a Reflection API?",
      options: ["Sim, via $_SERVER", "Não, a Reflection API é o único meio oficial de ler metadados de atributos", "Sim, via get_class_methods()", "Sim, via strings de comentários"],
      correctAnswer: 1
    }
  ]
};
