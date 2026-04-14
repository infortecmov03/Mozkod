import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'fcc-rwd-proj-1', 
    title: 'Análise de Projeto: Página de Tributo', 
    statement: 'O primeiro projeto da certificação de Design Web Responsivo é construir uma página de tributo. Descreva os principais requisitos técnicos e de usuário para este projeto, conforme especificado pelo freeCodeCamp.', 
    template: `// Requisitos do Usuário (User Stories):
// 1. ... (Deve ter um elemento main com id="main")
// 2. ... (Deve ter um elemento com id="title" contendo texto)
// 3. ... (Deve ter um div com id="img-div")
// ...etc.

// Requisitos Técnicos:
// 1. ... (A imagem deve ser responsiva - id="image")
// 2. ... (O link de tributo - id="tribute-link" - deve ter um target="_blank")
`,
    youtubeVideoId: 'R-JbDMY_2_Y',
    detailedExplanation: `
        <h2>Analisando os Requisitos do Projeto</h2>
        <p>A melhor maneira de começar um projeto é entender completamente seus requisitos. Os projetos do freeCodeCamp são definidos por um conjunto de "histórias de usuário" que devem ser satisfeitas para que os testes automatizados passem.</p>
        <h3>Passo a Passo da Análise</h3>
        <ol>
            <li>Leia atentamente a descrição do projeto no site do freeCodeCamp.</li>
            <li>Liste cada um dos requisitos (user stories) fornecidos.</li>
            <li>Identifique os elementos HTML específicos e os IDs que são necessários.</li>
            <li>Descreva os requisitos de estilo e responsividade, como garantir que a imagem se redimensione corretamente.</li>
        </ol>
        <p>Este exercício serve para planejar seu trabalho antes de começar a codificar, uma habilidade crucial para qualquer desenvolvedor.</p>
    `
};
