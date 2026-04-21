
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m7",
  title: "Web Workers: Paralelismo Real no Browser",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🧵 Quebrando a Single Thread</h2>
        <p class="text-lg">O JavaScript corre numa thread principal. Se fizeres um cálculo pesado, o site "congela". Os <strong>Web Workers</strong> permitem criar threads separadas para processamento pesado em background.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Comunicação por Mensagens</h3>
        <p>Como o Worker corre num contexto isolado, ele não tem acesso ao DOM. A comunicação é feita via <code>postMessage</code> e eventos <code>message</code>.</p>
        
        <div class="bg-black/40 p-5 rounded-xl border font-code text-xs space-y-4">
          <div>
            <p class="text-muted-foreground">// main.js</p>
            <p>const worker = <span class="text-primary">new Worker</span>('worker.js');</p>
            <p>worker.<span class="text-accent">postMessage</span>({ task: 'compute' });</p>
            <p>worker.onmessage = (e) => console.log(e.data);</p>
          </div>
          <div>
            <p class="text-muted-foreground">// worker.js</p>
            <p>onmessage = (e) => {</p>
            <p>&nbsp;&nbsp;<span class="text-muted-foreground">// Realiza cálculo pesado aqui</span></p>
            <p>&nbsp;&nbsp;<span class="text-accent">postMessage</span>(result);</p>
            <p>};</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline text-accent">Transferable Objects</h3>
        <p>Normalmente, dados passados ao worker são copiados. Se passares Gigabytes de dados, isso é lento. <strong>Transferable Objects</strong> (como ArrayBuffer) permitem "mover" a memória da thread principal para o worker instantaneamente sem cópia.</p>
      </div>
    </div>
  `,
  quizId: "js-mq7"
};
