import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "se-t10",
  title: "Deployment Strategies: Reduzindo o Downtime e o Impacto",
  youtubeVideoId: "Z5JC9Ve1sfI",
  quizId: "se-q10-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">🔄 Atualizando sem Interrupção</h2>
        <p class="text-lg">Como atualizar um sistema usado por milhões de pessoas sem que ele fique offline? Usamos estratégias de deploy avançadas para mitigar falhas catastróficas.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">1. Blue-Green Deployment</h3>
        <p class="text-sm">Mantemos dois ambientes idênticos. O "Blue" está online com a versão antiga. Publicamos a nova no "Green". Se tudo estiver bem, o router (Load Balancer) aponta o tráfego para o Green instantaneamente. O rollback é imediato: basta voltar para o Blue.</p>

        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2 text-accent">2. Canary Deployment</h3>
        <p class="text-sm">Liberamos a versão nova apenas para uma pequena percentagem (ex: 5%) dos utilizadores. Monitorizamos os erros. Se não houver problemas, aumentamos gradualmente até 100%. É a forma mais segura de testar código novo com tráfego real.</p>

        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">3. Rolling Update</h3>
        <p class="text-sm">Atualizamos um servidor de cada vez. A capacidade total da rede diminui ligeiramente durante o processo, mas o site nunca fica 100% offline. É o padrão nativo do Kubernetes.</p>

        <div class="bg-red-500/5 p-6 rounded-2xl border border-red-500/20 mt-6">
          <h4 class="font-bold text-red-400 mb-2">⚠️ O Desafio da Base de Dados</h4>
          <p class="text-sm leading-relaxed">
            As estratégias de deploy são fáceis para o código, mas difíceis para os dados. Um engenheiro master deve garantir que a nova versão do código é compatível com o esquema antigo do banco de dados (Backward Compatibility) para permitir rollbacks sem corrupção.
          </p>
        </div>
      </div>
    </div>
  `
};