import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m1",
  title: "Fase 1: PHP 8 Attributes: Metadados Nativos de Elite",
  enableInteractive: true,
  quizId: "php-mq1",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🏷️ Metadados na Árvore de Sintaxe
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Até ao PHP 7.4, utilizávamos "Anotações" dentro de comentários (Docblocks). O motor precisava de fazer o <i>parsing</i> de strings, o que era lento. Os <strong>Attributes</strong> do PHP 8 são integrados na <strong>AST (Abstract Syntax Tree)</strong>, permitindo uma engenharia de metadados robusta e performática.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Integração no Compilador</h3>
        <p class="text-sm">Attributes não são meros comentários. Eles são validados pelo motor da Zend Engine durante a fase de compilação. Isto elimina a necessidade de bibliotecas externas de parsing para funcionalidades como rotas ou injeção de dependência.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
             <h4 class="font-bold text-red-400 text-xs mb-2">Padrão Obsoleto (Docblock)</h4>
             <pre><code class="language-php">
/** @Route("/api/v1") */
class UserController {}
             </code></pre>
          </div>
          <div class="p-4 bg-green-500/5 border border-green-500/20 rounded-xl">
             <h4 class="font-bold text-green-400 text-xs mb-2">Padrão Elite (Attributes)</h4>
             <pre><code class="language-php">
#[Route("/api/v1")]
class UserController {}
             </code></pre>
          </div>
        </div>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Reflection e Auto-discovery</h3>
        <p class="text-sm">Com <code>getAttributes()</code>, o seu sistema pode descobrir dinamicamente quais classes processam quais eventos, permitindo arquiteturas <i>plug-and-play</i>.</p>
        <pre><code class="language-php">
$reflection = new ReflectionClass(MyHandler::class);
$attrs = $reflection->getAttributes(EventHandler::class);

if (!empty($attrs)) {
    $handler = $attrs[0]->newInstance();
    $handler->execute();
}
        </code></pre>
      </section>
    </div>
  `
};
