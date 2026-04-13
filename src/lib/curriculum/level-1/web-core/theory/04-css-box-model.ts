import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
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
};
