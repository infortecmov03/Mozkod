import type { KnowledgeArea } from '../types';

export const kaALG: KnowledgeArea = {
    id: "ka-algorithms",
    title: "Algorithms",
    description: "Análise, ordenação, busca, recursão.",
    load: "70h",
    iconName: "BrainCircuit",
    theory: [
        {
            id: "alg-t1",
            title: "O que é um Algoritmo?",
            content: `
                <h2>Definição</h2>
                <p>Um algoritmo é uma sequência finita de instruções bem definidas e não ambíguas, que, quando executadas, resolvem um problema específico. Pense nele como uma receita de bolo: uma lista de passos para chegar a um resultado desejado.</p>
                <h3>Características de um bom algoritmo:</h3>
                <ul>
                    <li><strong>Correto:</strong> Ele deve resolver o problema corretamente.</li>
                    <li><strong>Eficiente:</strong> Deve usar a menor quantidade de recursos (tempo e memória) possível.</li>
                    <li><strong>Legível:</strong> Deve ser fácil de entender.</li>
                </ul>
            `
        }
    ],
    practice: {},
    quizzes: []
};
