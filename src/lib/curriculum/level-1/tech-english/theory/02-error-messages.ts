import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
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
};
