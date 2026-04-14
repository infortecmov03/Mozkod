import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
    id: "webadv-t2",
    title: "Entendendo Promises em JavaScript",
    youtubeVideoId: "DHvZLI7Db8E",
    content: `
        <h2>O que são Promises?</h2>
        <p>No desenvolvimento web moderno, muitas operações levam tempo para serem concluídas, como buscar dados de um servidor (API). Se o JavaScript esperasse por cada uma dessas operações para continuar, a página inteira congelaria. Para resolver isso, usamos código <strong>assíncrono</strong>.</p>
        <p>Uma <strong>Promise</strong> (Promessa) é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante.</p>
        <p>Uma Promise está em um destes estados:</p>
        <ul>
            <li><strong>Pendente (pending):</strong> estado inicial, nem cumprida, nem rejeitada.</li>
            <li><strong>Cumprida (fulfilled):</strong> significa que a operação foi concluída com sucesso.</li>
            <li><strong>Rejeitada (rejected):</strong> significa que a operação falhou.</li>
        </ul>
        
        <h2>Consumindo uma Promise</h2>
        <p>A forma mais comum de interagir com uma Promise é usando os métodos <code>.then()</code> e <code>.catch()</code>.</p>
        <pre><code class="language-js">fetch('https://api.exemplo.com/dados')
  .then(response => {
    // A promise foi cumprida! O servidor respondeu.
    // Agora, processamos a resposta (ex: convertendo para JSON).
    return response.json(); 
  })
  .then(data => {
    // O .then() anterior também retornou uma promise (response.json()),
    // que agora foi cumprida. Temos os dados!
    console.log(data);
  })
  .catch(error => {
    // Se algo deu errado em qualquer ponto da corrente,
    // a promise é rejeitada e o .catch() é executado.
    console.error('Houve um erro:', error);
  });
</code></pre>

        <h2>Async/Await: Uma Sintaxe Mais Doce</h2>
        <p>ES2017 introduziu as palavras-chave <code>async</code> e <code>await</code>, que são "açúcar sintático" sobre as Promises, tornando o código assíncrono muito mais fácil de ler e escrever, parecendo mais com código síncrono.</p>
        <p>Para usar <code>await</code>, a função onde ele está deve ser declarada com <code>async</code>.</p>
        <pre><code class="language-js">async function buscarDados() {
  try {
    const response = await fetch('https://api.exemplo.com/dados');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Houve um erro:', error);
  }
}

buscarDados();
</code></pre>
        <p>Note como o uso de <code>try...catch</code> com async/await substitui o <code>.catch()</code> das Promises para tratamento de erros.</p>
    `
};
