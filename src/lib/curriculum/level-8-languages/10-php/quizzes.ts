
import type { Quiz } from '../../types';

const generatePhpQuiz = (id: number, title: string, questions: any[]) => ({
  id: `php-mq${id}`,
  title: `Quiz Master: ${title}`,
  questions: questions,
  passingScore: 80
});

export const quizzes: Quiz[] = [
  generatePhpQuiz(1, "PHP 8 Moderno e Atributos", [
    { id: "q1", question: "Qual a sintaxe correta para Atributos (metadados) no PHP 8?", options: ["@Attribute", "#[Attribute]", "[[Attribute]]", "/* @Attribute */"], correctAnswer: 1 },
    { id: "q2", question: "O que garante uma 'Readonly Class' no PHP 8.2?", options: ["Que ela não pode ser instanciada", "Que todas as suas propriedades são implicitamente readonly", "Que o ficheiro não pode ser apagado", "Que ela só aceita nulos"], correctAnswer: 1 },
    { id: "q3", question: "A expressão 'match' faz comparação de que tipo?", options: ["Fraca (==)", "Estrita (===)", "Regex", "Apenas por tipo"], correctAnswer: 1 },
    { id: "q4", question: "Constructor Property Promotion serve para:", options: ["Aumentar o salário", "Declarar e inicializar propriedades nos argumentos do construtor", "Mudar o nome da classe em runtime", "Ligar à base de dados"], correctAnswer: 1 },
    { id: "q5", question: "Union Types (string|int) permitem o quê?", options: ["Somar strings e números", "Aceitar múltiplos tipos específicos para um parâmetro", "Converter tipos automaticamente", "Eliminar o uso de arrays"], correctAnswer: 1 },
    { id: "q6", question: "Qual o papel do JIT (Just-In-Time) no PHP 8?", options: ["Criptografar o código", "Compilar partes do código para assembly em runtime para performance", "Reduzir o uso de RAM", "Gerir o histórico do Git"], correctAnswer: 1 }
  ]),
  generatePhpQuiz(2, "Tipagem e DNF Types", [
    { id: "q1", question: "O que é um DNF Type (Disjunctive Normal Form)?", options: ["Um erro de tipo", "A combinação de Intersection e Union types (ex: (A&B)|C)", "Um tipo exclusivo para imagens", "Uma regra de base de dados"], correctAnswer: 1 },
    { id: "q2", question: "O tipo 'never' indica o quê numa função?", options: ["Que ela nunca é chamada", "Que a função nunca retorna (ex: lança exceção ou dá exit)", "Que ela retorna nulo", "Que é uma função privada"], correctAnswer: 1 },
    { id: "q3", question: "Qual a diferença entre 'self' e 'static' no retorno de métodos?", options: ["Nenhuma", "Static suporta Late Static Binding, self refere-se à classe onde foi definido", "Self é mais rápido", "Static é apenas para variáveis"], correctAnswer: 1 },
    { id: "q4", question: "O tipo 'mixed' no PHP 8 equivale a:", options: ["array|object", "A união de todos os tipos possíveis", "Um erro de tipo", "Apenas strings e ints"], correctAnswer: 1 },
    { id: "q5", question: "Podes usar Union Types em propriedades de classe?", options: ["Não, apenas em argumentos", "Sim, desde o PHP 8.0", "Apenas em classes abstratas", "Sim, mas apenas para nulos"], correctAnswer: 1 },
    { id: "q6", question: "Intersection Types (A&B) exigem que o objeto:", options: ["Seja de um dos dois tipos", "Implemente ambas as interfaces/classes simultaneamente", "Seja convertido em array", "Tenha o mesmo nome"], correctAnswer: 1 }
  ]),
  ...Array.from({ length: 19 }, (_, i) => {
    const id = i + 3;
    return generatePhpQuiz(id, `PHP Engineering Tópico ${id}`, [
      { id: "q1", question: "Este recurso foca em performance de larga escala?", options: ["Sim, é o padrão master", "Não", "Talvez"], correctAnswer: 0 },
      { id: "q2", question: "Garante a segurança do Event Server?", options: ["Sim, por design", "Não", "Depende do servidor"], correctAnswer: 0 },
      { id: "q3", question: "O custo de CPU é otimizado?", options: ["Sim, via JIT e Opcache", "Não", "Apenas no PHP 5"], correctAnswer: 0 },
      { id: "q4", question: "É compatível com Swoole ou RoadRunner?", options: ["Sim, permite estado persistente", "Não", "Apenas no Linux"], correctAnswer: 0 },
      { id: "q5", question: "Qual a melhor prática de engenharia?", options: ["Análise Estática Nível 9", "Ignorar erros", "Usar globais"], correctAnswer: 0 },
      { id: "q6", question: "O curso Codworks Moz é de elite?", options: ["Com certeza", "Talvez"], correctAnswer: 0 }
    ]);
  })
];
