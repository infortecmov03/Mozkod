import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "web-t6",
    title: "Layout com Grid",
    content: `
        <h2>Layout em Duas Dimensões</h2>
        <p>O CSS Grid é um sistema de layout poderoso que permite criar layouts complexos em duas dimensões (linhas e colunas).</p>
        <p>Você ativa o Grid com <code>display: grid;</code> em um container e define as colunas e linhas com <code>grid-template-columns</code> e <code>grid-template-rows</code>.</p>
        <pre><code>.container {
display: grid;
grid-template-columns: 1fr 1fr 1fr; /* Três colunas de largura igual */
gap: 1rem; /* Espaço entre os itens */
}
        </code></pre>
    `
};
