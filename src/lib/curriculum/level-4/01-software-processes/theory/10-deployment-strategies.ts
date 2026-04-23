import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "se-t10",
  title: "Deployment Strategies: Minimizando o Downtime e o Risco de Falha",
  quizId: "se-q10-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🔄 Lançamentos Sem Sobressaltos
        </h2>
        <p class="text-lg leading-relaxed">
          Colocar código em produção é uma operação de alto risco. No nível Master, não apenas "copiamos ficheiros"; utilizamos estratégias que garantem o <strong>Zero Downtime</strong> e permitem a reversão instantânea (Rollback) em caso de anomalia.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Blue-Green Deployment: O Espelho Seguro</h3>
        <p class="text-sm">Mantemos dois ambientes de produção idênticos:</p>
        <ul class="list-disc ml-6 space-y-2 text-xs">
          <li><strong>Blue (Atual):</strong> A versão estável que os utilizadores estão a usar.</li>
          <li><strong>Green (Nova):</strong> Onde publicamos a nova versão e testamos no ambiente real.</li>
        </ul>
        <p class="text-sm mt-4">Quando o Green está validado, o <strong>Load Balancer</strong> vira o tráfego instantaneamente do Blue para o Green. Se algo falhar, a volta para o Blue é imediata.</p>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-accent">2. Canary Deployment: O Teste de Campo</h3>
        <p class="text-sm leading-relaxed">
          Inspirado nos mineiros que usavam canários para detetar gás tóxico. Lançamos a nova versão para uma pequena percentagem (ex: 5%) dos utilizadores reais.
          <br/><br/>
          Monitorizamos métricas de erro e latência. Se os "canários" (utilizadores do grupo 5%) estiverem satisfeitos e sem erros, aumentamos gradualmente a percentagem até 100%. É a forma mais segura de mitigar o raio de impacto de um bug.
        </p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🧩 O Desafio do Estado (Database)</h3>
          <p class="text-sm mb-4">Estratégias de deploy são simples para o código, mas o <strong>Estado (Base de Dados)</strong> é o grande vilão. Um Engenheiro Master garante:</p>
          <ul class="list-disc ml-6 space-y-2 text-xs text-muted-foreground">
            <li><strong>Backward Compatibility:</strong> A versão nova do código deve funcionar com o esquema antigo da BD.</li>
            <li><strong>Forward Compatibility:</strong> A versão antiga do código deve sobreviver se a BD for atualizada, permitindo o Rollback seguro do código.</li>
          </ul>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Rolling Updates
          </h4>
          <p class="text-sm leading-relaxed">
            Estratégia padrão do Kubernetes. Atualizamos um servidor (ou pod) de cada vez. A capacidade da rede diminui ligeiramente durante o processo, mas o custo de infraestrutura é menor que no Blue-Green, pois não precisas de duplicar todo o cluster.
          </p>
        </div>
      </div>
    </div>
  `
};