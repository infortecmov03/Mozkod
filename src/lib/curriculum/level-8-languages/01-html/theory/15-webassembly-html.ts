import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m15",
  title: "WebAssembly: O Binário no seu HTML",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 text-headline">⚙️ Velocidade Próxima do Nativo</h2>
        <p>WebAssembly (Wasm) é o quarto pilar da web. Permite correr código binário compilado de linguagens como C++, Rust ou Go no browser com performance quase nativa.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Como carregar Wasm</h3>
        <p>O HTML e o JavaScript servem como a "cola" para instanciar o binário.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-sm border border-white/5">
          <span class="text-primary">WebAssembly</span>.<span class="text-accent">instantiateStreaming</span>(<br/>
          &nbsp;&nbsp;<span class="text-primary">fetch</span>(<span class="text-green-400">'logic.wasm'</span>),<br/>
          &nbsp;&nbsp;importObject<br/>
          ).<span class="text-primary">then</span>(obj => { ... });
        </div>

        <h3 class="text-xl font-bold font-headline">Casos de Uso Master</h3>
        <ul class="list-disc ml-6 space-y-2">
          <li><strong>Editores de Vídeo:</strong> Processamento de frames em tempo real.</li>
          <li><strong>IA e Redes Neuronais:</strong> Inferência pesada no cliente.</li>
          <li><strong>Motores de Jogos:</strong> Portar jogos complexos para o browser.</li>
        </ul>

        <h3 class="text-xl font-bold font-headline text-accent">Ponte de Memória (Linear Memory)</h3>
        <p>A comunicação entre JS e Wasm acontece através de um <strong>ArrayBuffer</strong> partilhado. Entender este buffer é a chave para a performance máxima.</p>
      </div>
    </div>
  `,
  quizId: "html-mq15"
};
