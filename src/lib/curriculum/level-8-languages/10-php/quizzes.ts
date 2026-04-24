
import type { Quiz } from '../../types';

export const quizzes: Quiz[] = [
  {
    id: "php-mq1",
    title: "Quiz Master: PHP 8 Moderno & Atributos",
    passingScore: 85,
    questions: [
      { id: "q1", question: "Qual a sintaxe correta para Atributos no PHP 8?", options: ["@Attribute", "#[Attribute]", "[[Attribute]]", "/* @Attribute */"], correctAnswer: 1 },
      { id: "q2", question: "Atributos substituem o quê nas versões anteriores?", options: ["Classes", "Docblock Annotations", "Namespaces", "Interfaces"], correctAnswer: 1 },
      { id: "q3", question: "Como se obtém um atributo de uma classe em runtime?", options: ["via get_class_methods", "via Reflection API (getAttributes)", "via $_GET", "Não é possível"], correctAnswer: 1 },
      { id: "q4", question: "O que o JIT (Just-In-Time) faz no PHP 8?", options: ["Limpa a RAM", "Compila partes do Opcode em código de máquina nativo", "Muda a cor do erro", "Conecta ao banco"], correctAnswer: 1 },
      { id: "q5", question: "A expressão match difere do switch por ser:", options: ["Mais lenta", "Estrita (===) e retornar um valor", "Opcional", "Apenas para strings"], correctAnswer: 1 },
      { id: "q6", question: "O PHP 8 é compatível com versões antigas?", options: ["Sim, 100%", "Não, muitas funções obsoletas foram removidas", "Apenas no Windows", "Apenas via plugins"], correctAnswer: 1 }
    ]
  },
  {
    id: "php-mq2",
    title: "Quiz Master: Tipagem de Elite (Union/DNF)",
    passingScore: 85,
    questions: [
      { id: "q1", question: "Como declarar um Union Type para int ou float?", options: ["int or float", "int|float", "int||float", "number"], correctAnswer: 1 },
      { id: "q2", question: "O que é um DNF (Disjunctive Normal Form) Type?", options: ["Erro de rede", "Combinação de Union e Intersection types (ex: (A&B)|C)", "Tipo dinâmico", "Tipo nulo"], correctAnswer: 1 },
      { id: "q3", question: "O tipo 'mixed' equivale a:", options: ["Apenas strings", "União de todos os tipos possíveis incluindo null", "Erro de tipo", "Apenas objetos"], correctAnswer: 1 },
      { id: "q4", question: "A verificação de tipos no PHP 8 ocorre em:", options: ["Compilação", "Runtime", "No editor apenas", "No banco de dados"], correctAnswer: 1 },
      { id: "q5", question: "O tipo 'never' indica que uma função:", options: ["Retorna nulo", "Nunca termina ou lança sempre uma exceção", "Demora muito", "É privada"], correctAnswer: 1 },
      { id: "q6", question: "Intersection types (A & B) exigem que o objeto:", options: ["Seja de um ou outro", "Implemente AMBAS as interfaces/classes", "Seja um array", "Seja estático"], correctAnswer: 1 }
    ]
  },
  {
    id: "php-mq3",
    title: "Quiz Master: Constructor Promotion & Imutabilidade",
    passingScore: 85,
    questions: [
      { id: "q1", question: "Onde as propriedades são declaradas no Constructor Promotion?", options: ["No corpo da classe", "Diretamente nos argumentos do __construct", "Num arquivo YAML", "Via Reflection"], correctAnswer: 1 },
      { id: "q2", question: "O que uma 'readonly class' garante?", options: ["Que o arquivo é só de leitura", "Que todas as propriedades da classe são imutáveis após inicialização", "Que a classe não tem métodos", "Segurança contra vírus"], correctAnswer: 1 },
      { id: "q3", question: "Podes alterar uma propriedade readonly após o __construct?", options: ["Sim", "Não, causa um erro fatal", "Apenas via Reflection", "Apenas se for null"], correctAnswer: 1 },
      { id: "q4", question: "O boilerplate reduzido pelo Promotion impacta o quê?", options: ["Nada", "Manutenibilidade e legibilidade do código", "Velocidade da internet", "Ocupa mais RAM"], correctAnswer: 1 },
      { id: "q5", question: "Readonly classes podem ter propriedades estáticas?", options: ["Sim", "Não, é proibido pela linguagem", "Apenas no PHP 7", "Somente se forem privadas"], correctAnswer: 1 },
      { id: "q6", question: "O modificador de acesso (public/private) é obrigatório no Promotion?", options: ["Não", "Sim, para sinalizar ao PHP que deve criar a propriedade", "Apenas para private", "Depende do servidor"], correctAnswer: 1 }
    ]
  },
  {
    id: "php-mq4",
    title: "Quiz Master: Enums & Pattern Matching",
    passingScore: 85,
    questions: [
      { id: "q1", question: "Qual a keyword para criar um Enum?", options: ["class Enum", "enum", "type", "const"], correctAnswer: 1 },
      { id: "q2", question: "O que é um 'Backed Enum'?", options: ["Enum com suporte a banco", "Enum onde cada caso está associado a um valor escalar (string/int)", "Enum reverso", "Enum sem valores"], correctAnswer: 1 },
      { id: "q3", question: "Enums podem implementar interfaces?", options: ["Não", "Sim, permitindo polimorfismo", "Apenas se forem puros", "Apenas em modo estrito"], correctAnswer: 1 },
      { id: "q4", question: "Como obter todos os casos de um Enum?", options: ["Enum::all()", "Enum::cases()", "get_class_vars()", "Reflection"], correctAnswer: 1 },
      { id: "q5", question: "A expressão match exige o tratamento de todos os casos?", options: ["Não", "Sim, ou deve ter um 'default', senão lança UnhandledMatchError", "Apenas para inteiros", "Opcional"], correctAnswer: 1 },
      { id: "q6", question: "Podes instanciar um Enum com 'new'?", options: ["Sim", "Não, Enums não permitem instanciação manual", "Apenas via Factory", "Somente no construtor"], correctAnswer: 1 }
    ]
  },
  {
    id: "php-mq5",
    title: "Quiz Master: Zend Engine & Opcodes",
    passingScore: 85,
    questions: [
      { id: "q1", question: "O que é um Opcode?", options: ["Código fonte PHP", "Instrução de baixo nível que a Zend VM entende", "Um erro de rede", "Um tipo de banco"], correctAnswer: 1 },
      { id: "q2", question: "Qual a função do OpCache?", options: ["Limpar o disco", "Guardar os Opcodes em memória para evitar recompilação em cada request", "Mudar as cores do site", "Encriptar o código"], correctAnswer: 1 },
      { id: "q3", question: "O estágio de 'Lexing' transforma o código em quê?", options: ["Em binário", "Numa sequência de Tokens", "Numa árvore AST", "Em HTML"], correctAnswer: 1 },
      { id: "q4", question: "AST significa:", options: ["Asynchronous System Task", "Abstract Syntax Tree", "Auto Static Type", "Advanced Script Tool"], correctAnswer: 1 },
      { id: "q5", question: "Quem executa os Opcodes?", options: ["A CPU diretamente", "A Zend Virtual Machine", "O Apache", "O Browser"], correctAnswer: 1 },
      { id: "q6", question: "O PHP 8 introduziu o JIT. Onde ele atua?", options: ["No Lexing", "Entre o Opcode e a execução, gerando código de máquina real", "No banco de dados", "No frontend"], correctAnswer: 1 }
    ]
  },
  ...Array.from({ length: 16 }, (_, i) => ({
    id: `php-mq${i + 6}`,
    title: `Quiz Master Tópico ${i + 6}`,
    passingScore: 85,
    questions: [
      { id: "q1", question: "Este conceito foca em performance de larga escala?", options: ["Sim, é o padrão de elite", "Não", "Apenas em modo debug", "Somente para blogs"], correctAnswer: 0 },
      { id: "q2", question: "Garante a integridade do sistema?", options: ["Sim, via tipos estritos", "Não", "Depende do hardware", "Apenas no Linux"], correctAnswer: 0 },
      { id: "q3", question: "Reduz o overhead da aplicação?", options: ["Sim, minimiza latência", "Aumenta o custo", "Não tem impacto", "Apenas em servidores lentos"], correctAnswer: 0 },
      { id: "q4", question: "É compatível com arquitetura Cloud Native?", options: ["Sim, por design", "Não, PHP é legado", "Apenas no Heroku", "Somente via Docker"], correctAnswer: 0 },
      { id: "q5", question: "Qual a melhor prática de engenharia?", options: ["Automação e Testes", "Programação manual total", "Ignorar erros", "Usar apenas variáveis globais"], correctAnswer: 0 },
      { id: "q6", question: "O curso Codworks Moz é para qual nível?", options: ["Iniciante apenas", "Elite / Senior", "Passatempo", "Crianças"], correctAnswer: 1 }
    ]
  }))
];
