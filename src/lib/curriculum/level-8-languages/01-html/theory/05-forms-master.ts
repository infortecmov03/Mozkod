import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m6",
  title: "Formulários Master: Validação e UX Profissional",
  content: `
    <div class="space-y-8">
      <div class="bg-blue-500/10 p-6 rounded-2xl border border-blue-500/20">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 text-headline">
          📝 A Fronteira da Interação
        </h2>
        <p class="text-lg">No nível Master, formulários não são apenas inputs. É sobre garantir que o utilizador nunca se sinta perdido e que os dados cheguem limpos ao servidor.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Constraint Validation Nativa</h3>
        <p>Use o poder do browser para validar. O atributo <code>pattern</code> aceita expressões regulares diretas, economizando KBs de JavaScript.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-sm border border-white/5">
          <span class="text-primary">&lt;input</span> <span class="text-accent">type</span>=<span class="text-green-400">"text"</span> <span class="text-accent">pattern</span>=<span class="text-green-400">"[A-Z]{3}"</span> <span class="text-accent">title</span>=<span class="text-green-400">"3 letras maiúsculas"</span><span class="text-primary">&gt;</span>
        </div>

        <h3 class="text-xl font-bold font-headline">Otimização de Teclado (Inputmode)</h3>
        <p>Para uma UX de elite em Moçambique, onde o acesso mobile é predominante, deves instruir o telemóvel sobre qual teclado abrir.</p>
        <ul class="grid grid-cols-2 gap-4">
          <li class="bg-card p-3 rounded border border-white/5 text-xs"><code>inputmode="numeric"</code>: Teclado de números.</li>
          <li class="bg-card p-3 rounded border border-white/5 text-xs"><code>inputmode="tel"</code>: Teclado telefónico (+, #, *).</li>
          <li class="bg-card p-3 rounded border border-white/5 text-xs"><code>inputmode="email"</code>: Teclado com '@'.</li>
          <li class="bg-card p-3 rounded border border-white/5 text-xs"><code>inputmode="search"</code>: Botão 'Ir' no teclado.</li>
        </ul>

        <h3 class="text-xl font-bold font-headline">Datalist: Autocomplete Nativo</h3>
        <p>Forneça sugestões sem carregar bibliotecas pesadas de Select2.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs">
          <span class="text-primary">&lt;input</span> <span class="text-accent">list</span>=<span class="text-green-400">"cidades"</span><span class="text-primary">&gt;</span><br/>
          <span class="text-primary">&lt;datalist</span> <span class="text-accent">id</span>=<span class="text-green-400">"cidades"</span><span class="text-primary">&gt;</span><br/>
          &nbsp;&nbsp;<span class="text-primary">&lt;option</span> <span class="text-accent">value</span>=<span class="text-green-400">"Maputo"</span><span class="text-primary">&gt;</span><br/>
          &nbsp;&nbsp;<span class="text-primary">&lt;option</span> <span class="text-accent">value</span>=<span class="text-green-400">"Beira"</span><span class="text-primary">&gt;</span><br/>
          <span class="text-primary">&lt;/datalist&gt;</span>
        </div>
      </div>
    </div>
  `,
  quizId: "html-mq6"
};
