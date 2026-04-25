import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-eco-t1",
  title: "Fase 1: Composer Master: Autoloaders, Scripts e Plugins",
  enableInteractive: true,
  quizId: "php-eco-mq1",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">📦 Gestão de Dependências de Elite</h2>
        <p class="text-lg leading-relaxed opacity-90">O <button>Composer</button> é o orquestrador do ecossistema. No nível Master, otimizamos o <button>Autoloading</button> para produção e criamos <button>Scripts</button> que automatizam o pipeline de qualidade.</p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Otimização de Autoload (PSR-4)</h3>
        <p class="text-sm">Em produção, o custo de procurar ficheiros no disco é proibitivo. O comando <button>composer dump-autoload -o</button> gera um mapa de classes estático, eliminando o overhead de I/O em cada request. Em sistemas de larga escala, utilizamos o <button>--classmap-authoritative</button> para impedir que o PHP procure ficheiros que não estão no mapa.</p>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Composer Scripts e Auditoria</h3>
        <p class="text-sm">Automatize tarefas complexas diretamente no <button>composer.json</button>. Scripts permitem rodar análises de segurança e formatação de código com um único comando.</p>
        <pre><code class="language-json">
"scripts": {
  "audit": ["phpstan analyze", "phpunit", "composer audit"],
  "post-install-cmd": "App\\\\Core\\\\Installer::warmup"
}
        </code></pre>
      </section>
    </div>
  `
};