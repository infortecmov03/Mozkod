import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m17",
  title: "Content Security Policy (CSP) Profundo",
  content: `
    <div class="space-y-8">
      <div class="bg-red-500/10 p-6 rounded-2xl border border-red-500/20 text-red-100">
        <h2 class="text-2xl font-bold mb-4 text-headline text-red-400">🛡️ Blindagem contra Injeção</h2>
        <p class="text-lg">O CSP é a ferramenta mais forte contra ataques XSS. No nível Master, configuramos políticas restritivas que bloqueiam qualquer código não autorizado.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">O Conceito de 'Nonce'</h3>
        <p>Um "Number used ONCE". O servidor gera um código aleatório em cada request e o HTML só executa scripts que tenham esse código exato.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs border border-white/10">
          <span class="text-muted-foreground">&lt;!-- No Cabeçalho HTTP ou Meta Tag --&gt;</span><br/>
          script-src 'nonce-X2Y3Z' 'self';<br/><br/>
          <span class="text-muted-foreground">&lt;!-- No HTML --&gt;</span><br/>
          <span class="text-primary">&lt;script</span> <span class="text-accent">nonce</span>=<span class="text-green-400">"X2Y3Z"</span><span class="text-primary">&gt;</span>...<span class="text-primary">&lt;/script&gt;</span>
        </div>

        <h3 class="text-xl font-bold font-headline">Diretivas Master</h3>
        <ul class="space-y-2 text-sm">
          <li><strong>default-src 'self':</strong> Bloqueia tudo o que não venha do seu próprio domínio por padrão.</li>
          <li><strong>img-src *:</strong> Permite imagens de qualquer lugar (útil mas perigoso).</li>
          <li><strong>connect-src:</strong> Restringe a quais APIs o seu JavaScript pode fazer pedidos.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "html-mq17"
};
