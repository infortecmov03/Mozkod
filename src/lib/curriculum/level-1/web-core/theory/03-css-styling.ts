import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = { 
    id: "web-t3", 
    title: "CSS: Estilizando a Web", 
    content: `
        <h2>O que é CSS?</h2>
        <p>CSS (Cascading Style Sheets) é a linguagem que usamos para estilizar documentos HTML. Ela controla as cores, fontes, espaçamentos, layout e muito mais.</p>
        <h3>Anatomia de uma Regra CSS</h3>
        <pre><code>seletor {
propriedade: valor;
}

h1 {
color: blue;
font-size: 24px;
}
        </code></pre>
        <ul>
            <li><strong>Seletor (<code>h1</code>):</strong> Aponta para o elemento HTML que você quer estilizar.</li>
            <li><strong>Declaração (<code>color: blue;</code>):</strong> Consiste em uma propriedade e um valor.</li>
            <li><strong>Propriedade (<code>color</code>):</strong> A propriedade de estilo que você quer alterar.</li>
            <li><strong>Valor (<code>blue</code>):</strong> O valor que você atribui à propriedade.</li>
        </ul>
    ` 
};
