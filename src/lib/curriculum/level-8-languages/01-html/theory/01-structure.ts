
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m1",
  title: "Arquitetura de Documentos: A Estrutura Master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 text-primary font-headline">
          🏗️ A Anatomia de um Documento de Elite
        </h2>
        <p class="text-lg leading-relaxed">
          Para um Engenheiro Master, o HTML não é apenas uma lista de tags. É um <strong>grafo de nós (DOM)</strong> processado pelo Browser Engine. A ausência de elementos fundamentais ou a sua má colocação degrada a performance (LCP) e quebra a experiência do utilizador.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">Atributos de Identificação (Hooks)</h3>
        <p>Como o CSS e o JS encontram os elementos no DOM? Através dos atributos <code>class</code> e <code>id</code>. No nível Master, usamos estes atributos como ganchos arquiteturais.</p>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div class="space-y-3">
            <h4 class="font-bold text-accent">O Atributo 'class'</h4>
            <p class="text-sm text-muted-foreground">Define uma categoria reutilizável. Ideal para padrões de design recorrentes.</p>
            <div class="bg-black/40 p-3 rounded-lg font-code text-xs">
              &lt;div class="card profile-card"&gt;
            </div>
          </div>
          <div class="space-y-3">
            <h4 class="font-bold text-accent">O Atributo 'id'</h4>
            <p class="text-sm text-muted-foreground">Um identificador único absoluto. Nunca deve haver dois IDs iguais num documento.</p>
            <div class="bg-black/40 p-3 rounded-lg font-code text-xs">
              &lt;form id="main-auth-form"&gt;
            </div>
          </div>
        </div>

        <div class="bg-yellow-500/5 p-5 rounded-xl border border-yellow-500/20">
          <h4 class="font-bold text-yellow-500 mb-2">🔗 A Conexão com CSS e JS</h4>
          <p class="text-sm leading-relaxed">
            Mantenha isto em mente: nas próximas etapas do currículo, você aprenderá a usar as <strong>classes</strong> para aplicar estilos avançados no módulo de <strong>CSS</strong>. Além disso, aprenderá como o <strong>ID</strong> é vital para o <strong>JavaScript</strong> selecionar e manipular elementos específicos, permitindo criar aplicações dinâmicas de alta complexidade.
          </p>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">O Gatilho de Standards (DOCTYPE)</h3>
        <p>Sem o DOCTYPE, o browser entra em <em>Quirks Mode</em>, emulando bugs de browsers dos anos 90 para não quebrar sites antigos. No nível Master, garantimos o modo padrão.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-sm border border-white/5 shadow-inner">
          <span class="text-muted-foreground">&lt;!-- Força o modo de standards moderno --&gt;</span><br/>
          <span class="text-primary">&lt;!DOCTYPE html&gt;</span>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">Configuração Crítica do Head</h3>
        <p>O <code>&lt;head&gt;</code> é o cérebro do documento. A ordem das tags aqui decide a velocidade com que o site aparece.</p>
        <div class="bg-black/40 p-5 rounded-xl font-code text-xs space-y-2 border border-white/5">
          <p><span class="text-primary">&lt;meta</span> <span class="text-accent">charset</span>=<span class="text-green-400">"UTF-8"</span><span class="text-primary">&gt;</span> <span class="text-muted-foreground">// Deve ser a primeira para evitar re-parsing de texto</span></p>
          <p><span class="text-primary">&lt;meta</span> <span class="text-accent">name</span>=<span class="text-green-400">"viewport"</span> <span class="text-accent">content</span>=<span class="text-green-400">"width=device-width, initial-scale=1"</span><span class="text-primary">&gt;</span> <span class="text-muted-foreground">// Vital para mobile</span></p>
          <p><span class="text-primary">&lt;title&gt;</span>Codworks Elite<span class="text-primary">&lt;/title&gt;</span></p>
        </div>
      </div>
    </div>
  `,
  quizId: "html-mq1"
};
