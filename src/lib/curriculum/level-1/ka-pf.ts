import type { KnowledgeArea } from '../types';

export const kaPF: KnowledgeArea = {
    id: "ka-programming",
    title: "Programming Fundamentals",
    description: "Variáveis, tipos, estruturas de controle, funções, arrays.",
    load: "80h",
    iconName: "Terminal",
    theory: [
      {
        id: "pf-t1",
        title: "Variáveis e Tipos de Dados",
        content: `
          <h2>O que é uma Variável?</h2>
          <p>Pense em uma variável como uma caixa com uma etiqueta. Você pode guardar informações dentro dessa caixa e usar a etiqueta (o nome da variável) para se referir a ela mais tarde.</p>
          <pre><code>nome = "Alice"  // 'nome' é a variável, "Alice" é o valor
idade = 30      // 'idade' é a variável, 30 é o valor
</code></pre>
          <h3>Tipos de Dados Comuns:</h3>
          <ul>
            <li><strong>String (texto):</strong> Sequência de caracteres. Ex: <code>"Olá, mundo!"</code>.</li>
            <li><strong>Integer (inteiro):</strong> Números inteiros, sem casas decimais. Ex: <code>10</code>, <code>-5</code>.</li>
            <li><strong>Float (ponto flutuante):</strong> Números com casas decimais. Ex: <code>9.99</code>, <code>3.1415</code>.</li>
            <li><strong>Boolean (booleano):</strong> Representa verdadeiro (True) ou falso (False).</li>
            <li><strong>Array/Lista:</strong> Uma coleção ordenada de valores. Ex: <code>[1, 2, 3, "maçã"]</code>.</li>
          </ul>
        `
      },
      {
        id: "pf-t2",
        title: "Estruturas de Controle (Condicionais)",
        content: `
          <h2>Tomando Decisões no Código</h2>
          <p>Estruturas de controle permitem que seu programa tome decisões e execute diferentes blocos de código com base em certas condições. A mais comum é a instrução <code>if/else</code>.</p>
          <pre><code>idade = 18

if idade >= 18:
  print("Você é maior de idade.")
else:
  print("Você é menor de idade.")
</code></pre>
          <p>Você também pode encadear múltiplas condições com <code>elif</code> (em Python) ou <code>else if</code> (em outras linguagens).</p>
        `
      },
      {
        id: "pf-t3",
        title: "Estruturas de Controle (Loops)",
        content: `
          <h2>Repetindo Tarefas</h2>
          <p>Loops são usados para executar o mesmo bloco de código várias vezes.</p>
          <h3>Loop 'for'</h3>
          <p>Usado para iterar sobre uma sequência (como uma lista).</p>
          <pre><code>frutas = ["maçã", "banana", "cereja"]
for fruta in frutas:
  print(fruta)
</code></pre>
          <h3>Loop 'while'</h3>
          <p>Executa um bloco de código enquanto uma condição for verdadeira.</p>
          <pre><code>contador = 0
while contador < 5:
  print(contador)
  contador = contador + 1  // Cuidado com loops infinitos!
</code></pre>
        `
      },
      {
        id: "pf-t4",
        title: "Funções e Métodos",
        content: `
          <h2>Blocos de Código Reutilizáveis</h2>
          <p>Funções são blocos de código nomeados que realizam uma tarefa específica. Elas ajudam a organizar o código, evitar repetição e torná-lo mais legível.</p>
          <pre><code>def saudar(nome):
  return f"Olá, {nome}!"

mensagem = saudar("Carlos")  // Chama a função
print(mensagem)  // Saída: Olá, Carlos!
</code></pre>
          <p><strong>Métodos</strong> são funções que pertencem a um objeto (veremos mais sobre isso em Programação Orientada a Objetos).</p>
        `
      },
      {
        id: "pf-t5",
        title: "Arrays e Coleções",
        content: `
          <h2>Organizando Múltiplos Dados</h2>
          <p>Arrays (ou listas em linguagens como Python) são estruturas de dados que armazenam uma coleção de itens em uma única variável.</p>
          <pre><code>numeros = [10, 20, 30, 40, 50]</code></pre>
          <h3>Acessando Elementos</h3>
          <p>Os elementos são acessados por seu <strong>índice</strong>, que começa em 0.</p>
          <pre><code>primeiro_numero = numeros[0]  // Retorna 10
terceiro_numero = numeros[2]  // Retorna 30
</code></pre>
          <p>Existem outras estruturas de coleção importantes, como <strong>Dicionários/Mapas</strong> (que usam chaves em vez de índices) e <strong>Conjuntos</strong> (que armazenam itens únicos e não ordenados).</p>
        `
      }
    ],
    practice: {
      python: [
        { id: 'py-vars', title: 'Exercício de Variáveis', statement: 'Declare variáveis para nome, idade e cidade.', template: '# seu código aqui' },
        { id: 'py-cond', title: 'Exercício de Condicionais', statement: 'Escreva um if/else que verifica se um número é par ou ímpar.', template: 'numero = 10\n# seu código aqui' },
      ],
      javascript: [
        { id: 'js-vars', title: 'Exercício de Variáveis', statement: 'Declare variáveis para nome, idade e cidade.', template: '// seu código aqui' },
        { id: 'js-cond', title: 'Exercício de Condicionais', statement: 'Escreva um if/else que verifica se um número é par ou ímpar.', template: 'const numero = 10;\n// seu código aqui' },
      ],
      java: [
        { id: 'java-vars', title: 'Exercício de Variáveis', statement: 'Declare variáveis para nome, idade e cidade.', template: '// seu código aqui' },
      ],
      cpp: [
        { id: 'cpp-vars', title: 'Exercício de Variáveis', statement: 'Declare variáveis para nome, idade e cidade.', template: '// seu código aqui' },
      ]
    },
    quizzes: [
      {
        id: 'quiz-pf-1',
        title: 'Quiz de Fundamentos 1',
        questions: [
          {
            id: 'q1',
            question: 'Qual tipo de dado é usado para texto?',
            options: ['Integer', 'Boolean', 'String', 'Float'],
            correctAnswer: 2
          }
        ]
      },
      {
        id: 'quiz-pf-2',
        title: 'Quiz de Fundamentos 2',
        questions: [
          {
            id: 'q1',
            question: 'Qual loop é melhor para iterar sobre os itens de uma lista?',
            options: ['while', 'for', 'do-while', 'if'],
            correctAnswer: 1
          }
        ]
      }
    ]
};
