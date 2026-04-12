import type { KnowledgeArea } from '../types';

export const kaTENG: KnowledgeArea = {
    id: "ka-tech-english",
    title: "Technical English",
    description: "Vocabulário, leitura de documentação, mensagens de erro.",
    load: "30h",
    iconName: "Languages",
    theory: [
      { 
        id: 'teng-t1', 
        title: 'Lendo Documentação Técnica', 
        content: `
          <h2>Por que a documentação é crucial?</h2>
          <p>A documentação é o manual de instruções de uma tecnologia (linguagem, framework, biblioteca). Aprender a lê-la eficientemente é uma das habilidades mais importantes para um desenvolvedor.</p>
          <h3>Termos Comuns em Documentações:</h3>
          <ul>
            <li><strong>Parameter / Argument:</strong> Um valor que você passa para uma função. <em>(Parâmetro / Argumento)</em></li>
            <li><strong>Return Value:</strong> O valor que uma função "devolve" após sua execução. <em>(Valor de Retorno)</em></li>
            <li><strong>Method:</strong> Uma função que pertence a um objeto. <em>(Método)</em></li>
            <li><strong>Property:</strong> Uma característica ou valor associado a um objeto. <em>(Propriedade)</em></li>
            <li><strong>Deprecated:</strong> Significa que uma função ou recurso está obsoleto e será removido em futuras versões. Deve ser evitado. <em>(Obsoleto / Descontinuado)</em></li>
            <li><strong>Callback:</strong> Uma função passada como argumento para outra função, para ser executada mais tarde.</li>
          </ul>
        `
      },
      {
        id: 'teng-t2',
        title: 'Entendendo Mensagens de Erro',
        content: `
          <h2>Erros são seus amigos!</h2>
          <p>Mensagens de erro não são um sinal de fracasso, mas sim um guia que o computador lhe dá para encontrar e corrigir problemas no seu código (um processo chamado <strong>debugging</strong>).</p>
          <h3>Tipos Comuns de Erros em Inglês:</h3>
          <ul>
            <li><strong>SyntaxError:</strong> Erro na "gramática" do código. Você escreveu algo que a linguagem não entende. Ex: "Missing semicolon".</li>
            <li><strong>ReferenceError / NameError:</strong> Tentou usar uma variável que não foi declarada. Ex: "variable 'x' is not defined".</li>
            <li><strong>TypeError:</strong> Usou um tipo de dado de forma incorreta. Ex: "Cannot read property 'length' of null" (tentou obter o comprimento de algo que não existe).</li>
            <li><strong>FileNotFoundError:</strong> O programa não conseguiu encontrar um arquivo que você pediu para ele ler.</li>
            <li><strong>IndexError / RangeError:</strong> Tentou acessar um item em uma lista/array usando um índice que não existe.</li>
          </ul>
          <p>A parte mais importante é ler a mensagem com atenção, ver o número da linha onde o erro ocorreu e entender o tipo de erro que está sendo reportado.</p>
        `
      }
    ],
    practice: {
      exercises: [
        { id: 'teng-ex-1', title: 'Quiz de Vocabulário', statement: 'Combine os termos técnicos com suas definições.', template: 'Parameter: ...' },
        { id: 'teng-ex-2', title: 'Depurar Erro', statement: 'Leia a mensagem de erro a seguir e explique o que ela significa: `TypeError: Cannot read properties of undefined (reading \'map\')`', template: 'Explicação: ...' }
      ]
    },
    quizzes: [
      {
        id: 'quiz-teng-final',
        title: 'Quiz Final: Inglês Técnico',
        questions: [
          { id: 'q1', question: 'O que significa "Deprecated"?', options: ['Recomendado', 'Novo', 'Obsoleto', 'Bugado'], correctAnswer: 2 }
        ]
      }
    ]
};
