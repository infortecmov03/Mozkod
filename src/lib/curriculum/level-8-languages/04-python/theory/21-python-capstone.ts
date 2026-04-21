import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m21",
  title: "Capstone Milestone: Deploy de Produção e Auditoria",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl text-center">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🎓 O Ápice da Engenharia Python</h2>
        <p class="text-lg leading-relaxed">Você chegou ao fim da trilha Python Master. Agora, consolidamos tudo: do bytecode à nuvem, construindo um sistema que é rápido, seguro e escalável.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="p-5 bg-card border rounded-2xl border-white/5">
          <h4 class="font-bold text-accent mb-2">Checklist de Engenharia</h4>
          <ul class="text-xs space-y-2 opacity-80">
            <li>✅ Performance via Vectorização (NumPy).</li>
            <li>✅ Segurança contra Injeção de Código.</li>
            <li>✅ Build Determinístico com Poetry.</li>
            <li>✅ Deploy Contentorizado e Otimizado.</li>
          </ul>
        </div>
        <div class="p-5 bg-card border rounded-2xl border-white/5">
          <h4 class="font-bold text-accent mb-2">Monitorização em Produção</h4>
          <p class="text-xs">Uso de logs estruturados, tracing e métricas expostas para garantir que o seu sistema Python Master nunca falhe sem deixar rasto.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "py-mq21"
};
