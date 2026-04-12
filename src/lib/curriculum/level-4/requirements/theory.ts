import type { TheoryLesson } from '../../types';

export const theory: TheoryLesson[] = [
    {
        id: "req-t1",
        title: "Entendendo o que Construir",
        content: `
            <h2>Definindo o Problema</h2>
            <p>Engenharia de Requisitos é o processo de definir, documentar e manter os requisitos de um sistema. É sobre entender o que o cliente quer e o que o sistema precisa fazer.</p>
            <h3>Histórias de Usuário (User Stories)</h3>
            <p>Uma forma popular de documentar requisitos em metodologias ágeis. Segue um formato simples:</p>
            <blockquote><strong>Como um</strong> &lt;tipo de usuário&gt;, <strong>eu quero</strong> &lt;um objetivo&gt; <strong>para que</strong> &lt;um benefício&gt;.</blockquote>
            <p><strong>Exemplo:</strong> "Como um cliente da loja, eu quero adicionar produtos ao meu carrinho para que eu possa comprá-los mais tarde."</p>
            <p>Histórias de usuário focam no valor para o usuário e iniciam conversas sobre a funcionalidade.</p>
        `
    }
];
