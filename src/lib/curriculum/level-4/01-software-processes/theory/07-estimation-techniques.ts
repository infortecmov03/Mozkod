import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "se-t7",
  title: "Técnicas de Estimativa: Fibonacci e Story Points",
  youtubeVideoId: "TQvD-Uq86oY",
  quizId: "se-q7-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📏 Esforço vs Tempo</h2>
        <p class="text-lg leading-relaxed">
          Estimar em horas é o erro clássico da engenharia. Humanos são péssimos a prever o tempo, mas excelentes a comparar tamanhos. No nível Master, estimamos o <strong>Esforço</strong> usando tamanhos relativos.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Story Points e a Escala Fibonacci</h3>
        <p class="text-sm">Usamos a sequência de Fibonacci (1, 2, 3, 5, 8, 13, 21) para representar a incerteza. Quanto maior o esforço, maior a distância entre os números, refletindo a maior probabilidade de erro na estimativa.</p>
        
        <h3 class="text-xl font-bold font-headline">2. O Triângulo do Esforço</h3>
        <p class="text-sm mb-4">Ao dar Story Points, a equipa avalia três fatores simultaneamente:</p>
        <ul class="grid md:grid-cols-3 gap-4 text-center">
          <li class="p-4 bg-card border rounded-xl"><strong>Complexidade</strong></li>
          <li class="p-4 bg-card border rounded-xl"><strong>Volume de Trabalho</strong></li>
          <li class="p-4 bg-card border rounded-xl"><strong>Incerteza/Risco</strong></li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🃏 Planning Poker</h3>
          <p class="text-sm leading-relaxed mb-4">
            Técnica de consenso onde todos votam simultaneamente. O objetivo não é apenas o número, mas a conversa que ocorre quando um programador vota 2 e outro vota 13. É neste momento que os riscos técnicos ocultos aparecem.
          </p>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2">🚀 Velocidade da Equipa</h4>
          <p class="text-sm leading-relaxed">
            A <strong>Velocity</strong> é a média de Story Points que a equipa entrega por Sprint. Ela serve para o PO planear o roadmap futuro com base na capacidade histórica real, e não em desejos de prazo.
          </p>
        </div>
      </div>
    </div>
  `
};