import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m18",
  title: "Service Workers e App Shell Architecture",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 text-headline">📶 Conectividade Resiliente</h2>
        <p>O Service Worker é um script que corre entre o browser e a rede. Ele permite que o site funcione offline e carregue instantaneamente.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">App Shell Architecture</h3>
        <p>Separe o "esqueleto" da interface (HTML, CSS, Logo) dos dados (JSON da API). O esqueleto é guardado no cache do Service Worker e aparece instantaneamente.</p>
        
        <h3 class="text-xl font-bold font-headline text-primary text-headline">Estratégias de Cache Master</h3>
        <ul class="space-y-3">
          <li class="bg-card p-3 rounded border border-white/5">
            <strong>Stale-While-Revalidate:</strong> Mostra o cache agora e atualiza-o em background. UX ideal.
          </li>
          <li class="bg-card p-3 rounded border border-white/5">
            <strong>Network First:</strong> Tenta a rede, se falhar usa o cache. Bom para dados sensíveis.
          </li>
          <li class="bg-card p-3 rounded border border-white/5">
            <strong>Cache First:</strong> Só vai à rede se o ficheiro não estiver no cache. Ideal para imagens e fontes.
          </li>
        </ul>
      </div>
    </div>
  `,
  quizId: "html-mq18"
};
