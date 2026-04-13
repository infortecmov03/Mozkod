import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = { 
    id: "web-t1", 
    title: "HTML: A Estrutura da Web", 
    content: `
        <h2>O que é HTML?</h2>
        <p>HTML (HyperText Markup Language) não é uma linguagem de programação, mas sim uma <strong>linguagem de marcação</strong>. Ela é usada para estruturar o conteúdo de uma página web, dizendo ao navegador o que é um título, um parágrafo, uma imagem, etc.</p>
        <h3>Elementos e Tags</h3>
        <p>O HTML usa "tags" para criar "elementos".</p>
        <pre><code>&lt;p&gt;Este é um parágrafo.&lt;/p&gt;</code></pre>
        <ul>
            <li><code>&lt;p&gt;</code> é a tag de abertura.</li>
            <li><code>&lt;/p&gt;</code> é a tag de fechamento.</li>
            <li>O texto no meio é o conteúdo.</li>
            <li>O conjunto todo é um elemento de parágrafo.</li>
        </ul>
    ` 
};
