import type { KnowledgeArea } from '../types';

export const kaWEB: KnowledgeArea = {
    id: "ka-web",
    title: "Web Core",
    description: "HTML5 semântico, CSS3 (Flexbox/Grid), padrões web.",
    load: "60h",
    iconName: "Globe",
    theory: [
        { 
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
        },
        {
            id: "web-t2",
            title: "HTML Semântico",
            content: `
                <h2>Escrevendo HTML com Significado</h2>
                <p>HTML semântico significa usar as tags HTML para seu propósito correto. Em vez de usar <code>&lt;div&gt;</code> para tudo, usamos tags que descrevem o conteúdo.</p>
                <h3>Por que usar HTML Semântico?</h3>
                <ul>
                    <li><strong>Acessibilidade:</strong> Leitores de tela usam a semântica para ajudar usuários com deficiência visual a navegar na página.</li>
                    <li><strong>SEO (Search Engine Optimization):</strong> Mecanismos de busca como o Google entendem melhor o conteúdo da sua página.</li>
                    <li><strong>Manutenibilidade:</strong> O código se torna mais fácil de ler e entender para outros desenvolvedores.</li>
                </ul>
                <h3>Exemplos de Tags Semânticas:</h3>
                <pre><code>&lt;header&gt;...&lt;/header&gt;  // Cabeçalho da página ou de uma seção
&lt;nav&gt;...&lt;/nav&gt;        // Links de navegação
&lt;main&gt;...&lt;/main&gt;      // Conteúdo principal da página
&lt;article&gt;...&lt;/article&gt;  // Um bloco de conteúdo autônomo (ex: post de blog)
&lt;section&gt;...&lt;/section&gt;  // Uma seção temática dentro da página
&lt;footer&gt;...&lt;/footer&gt;  // Rodapé da página
                </code></pre>
            `
        },
        { 
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
        },
        {
            id: "web-t4",
            title: "CSS: Box Model",
            content: `
                <h2>Tudo é uma Caixa</h2>
                <p>No CSS, todo elemento HTML é tratado como uma caixa retangular. O "Box Model" descreve como essa caixa é composta:</p>
                <img src="https://picsum.photos/seed/boxmodel/600/250" alt="CSS Box Model Diagram" style="width:100%; max-width:500px; margin: 1rem auto; display: block; border: 1px solid #ccc;"/>
                <ul>
                    <li><strong>Conteúdo (Content):</strong> A área onde seu texto e imagens aparecem.</li>
                    <li><strong>Padding:</strong> Uma área transparente ao redor do conteúdo, dentro da borda.</li>
                    <li><strong>Borda (Border):</strong> Uma borda que envolve o padding e o conteúdo.</li>
                    <li><strong>Margem (Margin):</strong> Uma área transparente fora da borda, que empurra outros elementos para longe.</li>
                </ul>
            `
        },
        { 
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
        },
        {
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
        }
    ],
    practice: {
        javascript: []
    },
    quizzes: []
};
