import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "web-t1",
  title: "Estrutura HTML5: O Esqueleto de Alta Performance",
  youtubeVideoId: "8ME9u065vD4",
  content: `
    <div class="space-y-8">
      <div class="bg-orange-500/10 p-6 rounded-2xl border border-orange-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 font-headline text-orange-400">
          🏗️ Mais que uma Linguagem de Marcação
        </h2>
        <p class="text-lg leading-relaxed">
          O HTML (HyperText Markup Language) define a estrutura de dados que o browser transforma em objetos (o DOM). Para um engenheiro, a escolha das tags dita a <strong>acessibilidade</strong>, o <strong>SEO</strong> e a velocidade de carregamento (LCP).
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Semântica: Dando Significado ao Silício</h3>
        <p>Utilizar as tags corretas permite que o Google e leitores de ecrã entendam a hierarquia da informação. Evite o "Div-itis" (uso excessivo de div).</p>
        <ul class="grid md:grid-cols-3 gap-4">
          <li class="bg-card p-4 rounded-xl border border-white/5">
            <strong class="text-orange-400">header/nav:</strong> Identidade e navegação.
          </li>
          <li class="bg-card p-4 rounded-xl border border-white/5">
            <strong class="text-orange-400">main/article:</strong> O conteúdo central e único.
          </li>
          <li class="bg-card p-4 rounded-xl border border-white/5">
            <strong class="text-orange-400">footer:</strong> Rodapé e metadados legais.
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Atributos de Identidade: Class vs ID</h3>
        <div class="flex flex-col md:flex-row gap-6">
          <div class="flex-1 p-5 bg-muted/20 rounded-xl border border-white/5">
            <h4 class="font-bold text-accent mb-2">Class (.)</h4>
            <p class="text-xs text-muted-foreground">Reutilizável. Identifica um estilo ou comportamento que se repete. <br/><code>class="btn-primary"</code></p>
          </div>
          <div class="flex-1 p-5 bg-muted/20 rounded-xl border border-white/5">
            <h4 class="font-bold text-primary mb-2">ID (#)</h4>
            <p class="text-xs text-muted-foreground">Único. Identifica um elemento absoluto no documento. Vital para o JavaScript. <br/><code>id="main-form"</code></p>
          </div>
        </div>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🚀 O Caminho Crítico de Renderização</h3>
          <p class="text-sm leading-relaxed">
            O browser lê o HTML de cima para baixo. A ordem das tags no <code>&lt;head&gt;</code> (como a meta charset e o favicon) decide se o utilizador vê uma página branca por 1 segundo ou se o site aparece instantaneamente.
          </p>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            💎 Visão Master
          </h4>
          <p class="text-sm leading-relaxed">
            O HTML5 introduziu atributos como <code>loading="lazy"</code> e <code>async/defer</code> para scripts. Dominar estes atributos é o que separa um site pesado de uma aplicação de elite otimizada para o mercado moçambicano.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "web-t1-quiz"
};