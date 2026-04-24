import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m14",
  title: "Fase 3: Streams API: Processamento de Dados Massivos",
  enableInteractive: true,
  quizId: "js-mq14",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🌊 Fluxos Contínuos de Dados</h2>
        <p class="text-lg leading-relaxed opacity-90">
          Como processar um ficheiro de 2GB num browser com 512MB de RAM? A resposta são as <strong>Streams</strong>. No nível Master, não esperamos o download terminar; processamos os dados enquanto eles ainda estão a viajar pela rede.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. ReadableStream e Backpressure</h3>
        <p class="text-sm">A API de Streams permite ler pedaços (chunks) de dados de forma assíncrona. O <strong>Backpressure</strong> é o mecanismo que avisa a fonte para abrandar se o processamento for mais lento que o download.</p>
        <pre><code class="language-javascript">
const response = await fetch('/big-data.json');
const reader = response.body.getReader();

while(true) {
  const { done, value } = await reader.read();
  if (done) break;
  // 'value' é um Uint8Array contendo um pedaço do ficheiro
  processChunk(value);
}
        </code></pre>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Transform Streams</h3>
        <p class="text-sm">Podes encadear transformações (como compressão ou tradução) num "tubo" de dados sem nunca carregar o ficheiro inteiro na memória.</p>
        <pre><code class="language-javascript">
readableStream
  .pipeThrough(new TextDecoderStream())
  .pipeThrough(new MyCustomTransformStream())
  .pipeTo(writableStream);
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Regra do Engenheiro de Performance</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Em sistemas de escala, a memória é mais cara que a CPU. Use Streams para manter o consumo de RAM constante (O(1)), independentemente do tamanho do ficheiro processado."
        </p>
      </section>
    </div>
  `
};