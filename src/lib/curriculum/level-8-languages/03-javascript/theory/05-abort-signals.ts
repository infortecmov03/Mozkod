
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m5",
  title: "Advanced Async: AbortController e Sinais de Cancelamento",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline">🛑 Parando o Imparável</h2>
        <p class="text-lg leading-relaxed">
          Tradicionalmente, uma <code>Promise</code> não pode ser cancelada depois de disparada. O <strong>AbortController</strong> mudou isto, fornecendo um padrão universal para cancelar operações assíncronas (Fetch, Eventos, Streams).
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline text-primary border-b border-white/5 pb-2">O Ciclo de Cancelamento</h3>
        <p>O controlador emite um sinal. Qualquer API compatível que receba este sinal irá parar imediatamente o que está a fazer e lançar um erro do tipo 'AbortError'.</p>
        
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs space-y-2 border border-white/5">
          <p>const <span class="text-accent">controller</span> = new AbortController();</p>
          <p>fetch(url, { <span class="text-primary">signal</span>: controller.signal });</p>
          <p class="text-muted-foreground">// Algures mais tarde...</p>
          <p>controller.<span class="text-primary">abort</span>();</p>
        </div>

        <h3 class="text-xl font-bold font-headline text-accent">Vantagem de Engenharia:</h3>
        <p>Em SPAs, se o utilizador navegar rapidamente entre páginas, deves cancelar os pedidos da página anterior. Isto poupa largura de banda e impede que estados de dados obsoletos "cheguem" atrasados e corrompam a UI da nova página.</p>
      </div>
    </div>
  `,
  quizId: "js-mq5"
};
