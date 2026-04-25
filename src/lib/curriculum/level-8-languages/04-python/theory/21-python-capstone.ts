import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m21",
  title: "Capstone Milestone: Deploy de Produção e Auditoria",
  youtubeVideoId: "R8dYLbJiTUE",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl text-center">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🎓 O Ápice da Engenharia Python</h2>
        <p class="text-lg leading-relaxed opacity-90">Chegaste ao fim da jornada Python Master. O seu <strong>CWM-MONITOR-PRO</strong> agora é uma peça de software resiliente, assíncrona e performática.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div class="p-6 bg-card border rounded-[2rem] border-white/5 shadow-xl">
          <h4 class="font-bold text-accent mb-4 uppercase tracking-widest text-xs">Checklist de Auditoria Final</h4>
          <ul class="text-xs space-y-3 opacity-80">
            <li class="flex gap-2">✅ <b>Concorrência:</b> Uso correto de AsyncIO e Multiprocessing.</li>
            <li class="flex gap-2">✅ <b>Memória:</b> Profiling realizado com cProfile e livre de ciclos órfãos.</li>
            <li class="flex gap-2">✅ <b>Segurança:</b> Inputs sanitizados e ausência de funções perigosas (eval).</li>
            <li class="flex gap-2">✅ <b>Infraestrutura:</b> Dockerfile multi-stage e Poetry lock validado.</li>
          </ul>
        </div>
        
        <div class="p-6 bg-card border rounded-[2rem] border-white/5 shadow-xl flex flex-col justify-center">
          <h4 class="font-bold text-primary mb-4 uppercase tracking-widest text-xs">Métricas de Performance</h4>
          <p class="text-sm mb-4">O motor deve ser capaz de processar 10.000 métricas por segundo com um consumo de RAM inferior a 128MB.</p>
          <div class="h-2 bg-secondary rounded-full overflow-hidden">
            <div class="w-[95%] h-full bg-green-500"></div>
          </div>
          <p class="text-[9px] mt-2 text-muted-foreground">Otimização via NumPy e C-Extensions (Cython) aplicada.</p>
        </div>
      </div>

      <section class="bg-primary/5 p-8 rounded-[2.5rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Certificação Master</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "O Python é a linguagem da inteligência. Ao dominar as suas entranhas e o seu ecossistema industrial, você deixa de ser um codificador para se tornar um engenheiro de sistemas globais."
        </p>
      </section>
    </div>
  `
};
