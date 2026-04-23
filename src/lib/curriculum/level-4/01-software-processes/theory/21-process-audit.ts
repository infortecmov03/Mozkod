import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "se-t21",
  title: "Auditoria de Processos: A Ciência da Melhoria Contínua",
  quizId: "se-q21-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl text-center">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary">🎓 O Ápice da Maturidade</h2>
        <p class="text-lg leading-relaxed">
          Chegaste ao fim do módulo de Processos de Software. A última fronteira do Engenheiro Master é a capacidade de <strong>auditar o seu próprio processo</strong> e o da sua equipa para garantir que a fábrica de software está a evoluir e não apenas a rodar.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Métricas de Saúde Industrial (DORA Metrics)</h3>
        <p class="text-sm">Como provar que o teu processo é de elite? O Google (DevOps Research and Assessment) definiu 4 métricas chave:</p>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-accent block mb-1">Deployment Frequency:</strong> Com que frequência entregamos valor em produção?
          </li>
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-accent block mb-1">Lead Time for Changes:</strong> Quanto tempo leva do commit ao deploy?
          </li>
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-accent block mb-1">Change Failure Rate:</strong> Qual a percentagem de deploys que causam falhas?
          </li>
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-accent block mb-1">Time to Restore Service:</strong> Quão rápido recuperamos de um incidente?
          </li>
        </div>

        <h3 class="text-xl font-bold font-headline">2. Kaizen: A Melhoria Contínua</h3>
        <p class="text-sm leading-relaxed">
          Um processo master nunca está "terminado". Através de retrospectivas rigorosas e análise de métricas, a equipa deve identificar o seu maior gargalo atual e aplicar uma pequena mudança para o resolver no próximo Sprint. Isto é a engenharia aplicada ao próprio modo de trabalhar.
        </p>

        <div class="bg-yellow-500/5 p-6 rounded-2xl border border-yellow-500/20 text-center mt-10">
           <h4 class="font-bold text-yellow-500 text-2xl mb-2">🎓 Nível 4 - Módulo de Processos Concluído!</h4>
           <p class="text-sm text-muted-foreground">Agora dominas o ciclo de vida, a agilidade, as operações e a ética. Estás pronto para a próxima jornada: <strong>Design & Architecture</strong>, onde aprenderás a desenhar sistemas que resistem ao teste do tempo.</p>
        </div>
      </div>
    </div>
  `
};
