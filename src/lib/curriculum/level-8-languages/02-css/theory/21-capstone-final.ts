import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m21",
  title: "Fase 4: Capstone: Design System de Elite Completo",
  enableInteractive: true,
  quizId: "css-mq16",
  content: `<div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl text-center">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🎓 A Graduação do Arquiteto Visual</h2>
        <p class="text-lg leading-relaxed opacity-90">
          Chegaste ao fim da jornada de CSS Master. O teu <strong>Design System</strong> está agora completo. Nesta lição final, validamos a arquitetura de camadas, o uso de espaços de cor modernos e a performance de animação baseada em hardware.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">Checklist de Auditoria Master</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-6 bg-card border rounded-2xl border-white/5 shadow-xl">
             <h4 class="font-bold text-primary text-xs mb-3 uppercase tracking-widest">Arquitetura</h4>
             <ul class="text-[10px] space-y-2 opacity-80">
               <li>✅ @layer para gestão de conflitos.</li>
               <li>✅ Custom Properties (Tokens) para temas.</li>
               <li>✅ Propriedades Lógicas para escala global.</li>
             </ul>
          </div>
          <div class="p-6 bg-card border rounded-2xl border-white/5 shadow-xl">
             <h4 class="font-bold text-primary text-xs mb-3 uppercase tracking-widest">Performance</h4>
             <ul class="text-[10px] space-y-2 opacity-80">
               <li>✅ Animações via GPU (Transform/Opacity).</li>
               <li>✅ Container Queries para modularidade.</li>
               <li>✅ Fontes Variáveis otimizadas.</li>
             </ul>
          </div>
        </div>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Selo de Excelência Codworks</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "O seu código é agora um exemplo de sustentabilidade e performance. Você não apenas pinta o ecrã; você projeta sistemas resilientes que definem o futuro da web em Moçambique e no mundo."
        </p>
      </section>
    </div>`
};