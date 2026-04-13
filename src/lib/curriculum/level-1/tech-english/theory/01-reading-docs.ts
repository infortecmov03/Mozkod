import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = { 
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
};
