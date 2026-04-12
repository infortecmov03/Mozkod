import type { KnowledgeArea } from '../types';

export const kaDATA: KnowledgeArea = {
    id: "ka-data-science",
    title: "Data Science & Analytics",
    description: "Análise de dados, visualização, Big Data.",
    load: "40h",
    iconName: "BarChart",
    theory: [{
        id: "data-t1",
        title: "Extraindo Insights de Dados",
        content: `
            <h2>O que é Ciência de Dados?</h2>
            <p>Ciência de Dados é um campo interdisciplinar que usa métodos científicos, processos, algoritmos e sistemas para extrair conhecimento e insights de dados estruturados e não estruturados.</p>
            <h3>Processo de Ciência de Dados:</h3>
            <ol>
                <li>Coleta de Dados</li>
                <li>Limpeza e Preparação de Dados (ETL)</li>
                <li>Análise Exploratória de Dados</li>
                <li>Modelagem (usando estatística ou machine learning)</li>
                <li>Visualização de Dados</li>
                <li>Comunicação dos Resultados</li>
            </ol>
        `
    }],
    practice: {},
    quizzes: []
};
