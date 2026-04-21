import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m12",
  title: "Glassmorphism & Backdrop Filters",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">💎 O Efeito Vidro Fosco</h2>
        <p class="text-lg">Glassmorphism é uma tendência que utiliza transparência e desfoque para criar profundidade. A chave tecnológica é o <code>backdrop-filter</code>.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">A Diferença entre Filter e Backdrop-Filter</h3>
        <p>O <code>filter</code> afeta o próprio elemento e os seus filhos. O <code>backdrop-filter</code> afeta apenas a área que está <strong>atrás</strong> do elemento, permitindo que o texto em cima continue nítido enquanto o fundo fica desfocado.</p>
        
        <div class="bg-black/40 p-5 rounded-xl border font-code text-sm">
          .glass-panel { <br/>
          &nbsp;&nbsp;<span class="text-primary">background</span>: rgba(255, 255, 255, 0.1); <br/>
          &nbsp;&nbsp;<span class="text-accent">backdrop-filter</span>: blur(10px); <br/>
          &nbsp;&nbsp;<span class="text-primary">border</span>: 1px solid rgba(255, 255, 255, 0.2); <br/>
          }
        </div>

        <h3 class="text-xl font-bold font-headline text-red-400">⚠️ Avisos de Performance</h3>
        <p>Filtros de desfoque são pesados para a GPU, especialmente se houver animações por baixo. No nível Master, evite aplicar desfoques gigantes em ecrãs retina sem testar o impacto nas métricas de performance.</p>
      </div>
    </div>
  `,
  quizId: "css-mq12"
};
