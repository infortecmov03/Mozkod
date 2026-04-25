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
          🏷️ Metadados de Primeira Classe
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Até ao PHP 7.4, utilizávamos "Anotações" dentro de comentários (Docblocks). O motor precisava de fazer o <i>parsing</i> de strings de texto, o que era lento e sujeito a erros. Os <strong>Attributes</strong> do PHP 8+ são integrados diretamente na árvore de sintaxe do compilador, permitindo uma engenharia de metadados robusta e performática.
        </p>
      </div>

      <!-- 1. PORQUÊ ATRIBUTOS? -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Atributos vs. Docblocks</h3>
        <p class="text-sm">Diferente dos comentários, os atributos são validados pelo compilador. Se tentares usar uma classe de atributo que não existe, o PHP avisa-te.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
             <h4 class="font-bold text-red-400 text-xs mb-2">Amador (Docblocks)</h4>
             <pre><code class="language-php">
/**
 * @Route("/api/users")
 * @Method("GET")
 */
function getUsers() {}
             </code></pre>
             <p class="text-[10px] mt-2 opacity-70">Lento: Exige regex e parsing de texto em runtime.</p>
          </div>
          <div class="p-4 bg-green-500/5 border border-green-500/20 rounded-xl">
             <h4 class="font-bold text-green-400 text-xs mb-2">Elite (PHP 8 Attributes)</h4>
             <pre><code class="language-php">
#[Route("/api/users")]
#[Method("GET")]
function getUsers() {}
             </code></pre>
             <p class="text-[10px] mt-2 opacity-70">Rápido: Parte da AST da Zend Engine.</p>
          </div>
        </div>
      </section>

      <!-- 2. DEFINIÇÃO DE ATRIBUTOS -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Criando o seu Próprio Atributo</h3>
        <p class="text-sm leading-relaxed">Para criar um atributo, basta definir uma classe comum e anotá-la com o atributo nativo <code>#[Attribute]</code>. Podes restringir onde o atributo pode ser aplicado.</p>

        <div class="space-y-4">
           <pre><code class="language-php">
namespace App\Attributes;

use Attribute;

#[Attribute(Attribute::TARGET_CLASS | Attribute::TARGET_METHOD)]
class EventHandler {
    public function __construct(
        public string $topic,
        public int $priority = 0
    ) {}
}
           </code></pre>
           <p class="text-xs text-muted-foreground italic">Nota Master: A restrição de TARGET evita que o seu atributo de "Rota" seja aplicado acidentalmente a uma propriedade de classe, garantindo a integridade arquitetural.</p>
        </div>
      </section>

      <!-- 3. REFLECTION API -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Inspecionando em Runtime</h3>
        <p class="text-sm">A Reflection API foi expandida para permitir a leitura destes metadados. É assim que frameworks como Laravel e Symfony gerem rotas e injeção de dependência de forma ultra-veloz.</p>
        
        <pre><code class="language-php">
$reflection = new ReflectionClass(MyEvent::class);
$attributes = $reflection->getAttributes(EventHandler::class);

foreach ($attributes as $attribute) {
    // Instancia a classe do atributo com os dados reais
    $handler = $attribute->newInstance();
    echo "Tópico: " . $handler->topic;
}
        </code></pre>
      </section>

      <!-- 4. CASO DE USO: EVENT SERVER -->
      <section class="bg-indigo-500/10 p-8 rounded-[2rem] border-2 border-dashed border-indigo-500/20">
        <h4 class="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
          🚀 Aplicação no Projeto Master
        </h4>
        <p class="text-sm leading-relaxed mb-6">
          No nosso <strong>High-Scale Event Server</strong>, usaremos atributos para marcar classes que processam mensagens de rede. Isto permite que o motor faça o <i>auto-discovery</i> de handlers sem ficheiros de configuração gigantes.
        </p>
        <pre><code class="language-php">
#[EventHandler(topic: "user.signup", priority: 100)]
readonly class WelcomeEmailHandler {
    // O motor encontrará esta classe automaticamente
}
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 A Visão do Arquiteto</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Atributos são a forma mais limpa de aplicar Programação Orientada a Aspectos (AOP) no PHP. Eles permitem que separemos a lógica de negócio (o que fazer) dos metadados de sistema (como ou quando fazer)."
        </p>
      </section>
    </div>
  `,
};
