import type { PracticeExercise } from '../../../../types';

export const exercise: PracticeExercise = { 
    id: 'py-bin-converter', 
    title: 'Conversor Binário', 
    statement: 'Crie uma função que converte um número decimal para binário.', 
    template: 'def decimal_para_binario(decimal):\n  # seu código aqui\n  pass',
    youtubeVideoId: '8ELie_3a2jM',
    detailedExplanation: `
        <h2>Convertendo Decimal para Binário em Python</h2>
        <p>A conversão de decimal para binário pode ser feita através de divisões sucessivas por 2.</p>
        <h3>Passo a Passo</h3>
        <ol>
            <li>Divida o número decimal por 2.</li>
            <li>Guarde o resto (que será 0 ou 1).</li>
            <li>Use o quociente como o novo número e repita o processo até que o quociente seja 0.</li>
            <li>A sequência de restos, lida de baixo para cima, é a representação binária.</li>
        </ol>
        <p>Em Python, você pode usar a função nativa <code>bin()</code>, que retorna a representação binária de um número como uma string (ex: '0b1010').</p>
    `
};
