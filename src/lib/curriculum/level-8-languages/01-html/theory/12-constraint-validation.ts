import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m12",
  title: "Constraint Validation API: Lógica Nativa",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 text-headline">🛡️ Validando na Fonte</h2>
        <p>A API de Validação de Restrições permite que o browser trate a lógica de erro antes mesmo do seu JavaScript ser executado, garantindo uma performance superior.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">O Objeto 'ValidityState'</h3>
        <p>Cada input possui um objeto <code>validity</code> com booleanos que indicam o porquê da falha.</p>
        <ul class="grid grid-cols-2 gap-4 text-xs font-code">
          <li class="p-2 border rounded">valueMissing: (required)</li>
          <li class="p-2 border rounded">typeMismatch: (ex: email)</li>
          <li class="p-2 border rounded">patternMismatch: (regex)</li>
          <li class="p-2 border rounded">tooShort / tooLong</li>
        </ul>

        <h3 class="text-xl font-bold font-headline">Mensagens Personalizadas Nativas</h3>
        <p>Podes mudar o texto do "balão" de erro do browser sem criar um sistema de UI novo.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-sm border border-white/5">
          <span class="text-accent">input</span>.<span class="text-primary">setCustomValidity</span>(<span class="text-green-400">'Este campo é obrigatório em Moçambique'</span>);
        </div>

        <h3 class="text-xl font-bold font-headline text-primary">Pseudo-classes de Estado</h3>
        <p>Estilize o feedback visual instantaneamente sem uma linha de JS.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs">
          input:invalid { <span class="text-accent">border-color</span>: red; }<br/>
          input:valid { <span class="text-accent">border-color</span>: green; }
        </div>
      </div>
    </div>
  `,
  quizId: "html-mq12"
};
