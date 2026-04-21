
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m10",
  title: "Animações de Alta Performance: O Papel do Compositor",
  content: `
    <div class="space-y-8">
      <div class="bg-red-500/5 p-6 rounded-2xl border border-red-500/10">
        <h2 class="text-2xl font-bold mb-4 font-headline text-red-400">🏎️ Mantendo os 60 FPS</h2>
        <p class="text-lg">Nem todas as animações CSS são iguais. Animar as propriedades erradas causa "Jank" (soluços visuais) porque obriga o browser a recalcular o layout de toda a página (Reflow).</p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="p-4 bg-card border rounded-xl border-red-500/20">
          <h4 class="font-bold text-red-400 mb-2">🚫 Evite Animar (Lento)</h4>
          <ul class="text-xs space-y-1 opacity-70">
            <li>width / height</li>
            <li>top / left / margin</li>
            <li>padding</li>
            <li>box-shadow</li>
          </ul>
        </div>
        <div class="p-4 bg-card border rounded-xl border-green-500/20">
          <h4 class="font-bold text-green-400 mb-2">✅ Anime Apenas (Rápido)</h4>
          <ul class="text-xs space-y-1">
            <li>transform: translate / scale / rotate</li>
            <li>opacity</li>
            <li>filter (com cautela)</li>
          </ul>
        </div>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-bold font-headline text-primary">A Camada do Compositor</h3>
        <p>Propriedades como <code>transform</code> e <code>opacity</code> são processadas diretamente pela GPU (Placa Gráfica) sem tocar na Main Thread do CPU. Isto garante que a animação continue fluida mesmo que o JavaScript do site esteja pesado.</p>
        
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs text-accent">
          .heavy-animation { <br/>
          &nbsp;&nbsp;<span class="text-primary">will-change</span>: transform, opacity; <br/>
          &nbsp;&nbsp;<span class="text-primary">transition</span>: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); <br/>
          }
        </div>
      </div>
    </div>
  `,
  quizId: "css-mq10"
};
