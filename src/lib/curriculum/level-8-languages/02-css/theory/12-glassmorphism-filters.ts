import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m12",
  title: "Fase 3: Glassmorphism & Backdrop Filters",
  enableInteractive: true,
  quizId: "css-mq12",
  content: `<div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          💎 O Efeito Vidro Fosco e Profundidade
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O <strong>Glassmorphism</strong> é um padrão de design que utiliza transparência, desfoque e bordas brilhantes para simular camadas de vidro sobrepostas. A chave técnica para este efeito é o <code>backdrop-filter</code>, que permite processar o fundo atrás do elemento.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. A Diferença entre Filter e Backdrop-Filter</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-5 bg-card border rounded-2xl border-white/5 shadow-xl">
             <h4 class="font-bold text-primary text-xs mb-3 uppercase tracking-widest">filter: blur(10px)</h4>
             <p class="text-xs opacity-70 leading-relaxed">
               Desfoca o <strong>elemento e todo o seu conteúdo</strong> (incluindo o texto em cima). O conteúdo torna-se ilegível.
             </p>
          </div>
          <div class="p-5 bg-card border rounded-2xl border-green-500/20 shadow-xl">
             <h4 class="font-bold text-green-400 text-xs mb-3 uppercase tracking-widest">backdrop-filter: blur(10px)</h4>
             <p class="text-xs opacity-70 leading-relaxed">
               Desfoca <strong>apenas o que está por trás</strong> do elemento. O texto e os ícones em cima permanecem 100% nítidos.
             </p>
          </div>
        </div>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Anatomia de um Card Glass Master</h3>
        <pre><code class="language-css">
.glass-card {
  background: rgba(255, 255, 255, 0.1); /* Transparência crucial */
  backdrop-filter: blur(12px) saturate(180%); /* Desfoque e saturação */
  border: 1px solid rgba(255, 255, 255, 0.2); /* Borda brilhante */
  border-radius: 24px;
}
        </code></pre>
      </section>

      <section class="bg-red-500/5 p-8 rounded-[2rem] border-2 border-dashed border-red-500/20 text-center">
        <h4 class="text-xl font-bold text-red-400 mb-4">⚠️ Aviso de Performance</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "O desfoque de fundo é uma operação de GPU pesada. Evite usá-lo em containers gigantes que fazem scroll ou em centenas de itens de uma lista, pois isto pode degradar o <strong>Frame Rate</strong> da aplicação."
        </p>
      </section>
    </div>`
};