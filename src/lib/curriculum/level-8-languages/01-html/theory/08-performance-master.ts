import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m8",
  title: "Performance: Resource Hints e o Caminho Crítico",
  content: `
    <div class="space-y-6">
      <div class="bg-green-500/10 p-6 rounded-2xl border border-green-500/20">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
          ⚡ Velocidade de Elite
        </h2>
        <p class="text-lg">O HTML Master controla como e quando o browser descarrega os recursos. Cada milissegundo poupado no parsing melhora as métricas de Core Web Vitals.</p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>1. Resource Hints</h3>
        <p>Instruções para o browser antecipar conexões ou descarregamentos:</p>
        <ul>
          <li><strong>dns-prefetch:</strong> Resolve o IP de um domínio antes do clique.</li>
          <li><strong>preconnect:</strong> Resolve DNS + TCP Handshake + TLS.</li>
          <li><strong>preload:</strong> Descarrega um recurso crítico (ex: fontes) com alta prioridade.</li>
        </ul>

        <h3>2. Otimização do Head</h3>
        <p>Colocar o CSS crítico in-line e adiar scripts não essenciais garante que o utilizador veja o conteúdo principal (LCP) em menos de 1.2 segundos.</p>
      </div>
    </div>
  `,
  quizId: "html-mq8"
};
