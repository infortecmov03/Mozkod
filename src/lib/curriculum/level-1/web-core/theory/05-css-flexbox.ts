import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = { 
    id: "web-t5", 
    title: "Layout com Flexbox", 
    content: `
        <h2>Layout em Uma Dimensão</h2>
        <p>O Flexbox é um modelo de layout CSS projetado para criar layouts em uma única dimensão (uma linha ou uma coluna).</p>
        <p>Para usar o Flexbox, você aplica <code>display: flex;</code> a um container. Então, você pode controlar o alinhamento, espaçamento e ordem dos itens filhos.</p>
        <h3>Propriedades Comuns do Container:</h3>
        <ul>
            <li><strong>flex-direction:</strong> Define se os itens são organizados em linha (<code>row</code>) ou coluna (<code>column</code>).</li>
            <li><strong>justify-content:</strong> Alinha os itens no eixo principal (horizontal se <code>row</code>, vertical se <code>column</code>).</li>
            <li><strong>align-items:</strong> Alinha os itens no eixo transversal (vertical se <code>row</code>, horizontal se <code>column</code>).</li>
        </ul>
    `
};
