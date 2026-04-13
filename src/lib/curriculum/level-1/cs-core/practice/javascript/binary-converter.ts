import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'js-bin-converter', 
    title: 'Conversor Binário', 
    statement: 'Crie uma função que converte um número decimal para binário.', 
    template: 'function decimalToBinary(decimal) {\n  // seu código aqui\n}',
    youtubeVideoId: 'Qdw4iA1p2so',
    detailedExplanation: `
        <h2>Convertendo Decimal para Binário</h2>
        <p>A conversão de decimal para binário pode ser feita através de divisões sucessivas por 2.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li>Divida o número decimal por 2.</li>
            <li>Guarde o resto (que será 0 ou 1).</li>
            <li>Use o quociente como o novo número e repita o processo até que o quociente seja 0.</li>
            <li>A sequência de restos, lida de baixo para cima, é a representação binária.</li>
        </ol>
        <p>Em JavaScript, você pode usar o método <code>.toString(2)</code> em um número para uma conversão rápida.</p>
    `
};
