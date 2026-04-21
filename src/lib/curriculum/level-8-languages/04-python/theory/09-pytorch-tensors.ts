import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m9",
  title: "PyTorch: Grafo Dinâmico e Tensores na GPU",
  content: `
    <div class="space-y-8">
      <div class="bg-red-500/5 p-6 rounded-2xl border border-red-500/10">
        <h2 class="text-2xl font-bold mb-4 font-headline text-red-400">🧠 O Motor do Deep Learning</h2>
        <p class="text-lg">Diferente do NumPy, os Tensores do PyTorch suportam <strong>Autograd</strong> (Diferenciação Automática) e podem ser movidos para a <strong>GPU</strong> para aceleração massiva.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Grafo de Computação Dinâmico</h3>
        <p>O PyTorch reconstrói o grafo de operações em cada execução. Isto permite usar estruturas de controlo normais do Python (if, for) dentro da sua rede neuronal.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs text-accent">
          import torch<br/>
          x = torch.randn(3, device='cuda') <span class="text-muted-foreground">// Vive na placa gráfica</span><br/>
          y = x * 2<br/>
          y.backward() <span class="text-muted-foreground">// Calcula os gradientes automaticamente</span>
        </div>
      </div>
    </div>
  `,
  quizId: "py-mq9"
};
