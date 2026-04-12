import type { KnowledgeArea } from '../types';

export const kaDS: KnowledgeArea = {
    id: "ka-data-structures",
    title: "Data Structures",
    description: "Listas, pilhas, filas, árvores, grafos.",
    load: "70h",
    iconName: "Database",
    theory: [
        {
            id: "ds-t1",
            title: "Introdução a Estruturas de Dados",
            content: `
                <h2>Organizando a Informação</h2>
                <p>Estruturas de Dados são formas de organizar, gerenciar e armazenar dados em um computador para que possam ser acessados e modificados de forma eficiente. A escolha da estrutura de dados correta pode ter um impacto enorme no desempenho de um algoritmo.</p>
                <h3>Tipos de Estruturas de Dados:</h3>
                <ul>
                    <li><strong>Lineares:</strong> Os dados são organizados sequencialmente. Ex: Arrays, Listas Ligadas, Pilhas, Filas.</li>
                    <li><strong>Não Lineares:</strong> Os dados são organizados de forma hierárquica ou em rede. Ex: Árvores, Grafos.</li>
                </ul>
            `
        }
    ],
    practice: {},
    quizzes: []
};
