import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "pf-t3",
  title: "Strings e Input/Output: A Voz do Software",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          💬 O que são Strings?
        </h2>
        <p class="text-lg leading-relaxed">
          Uma <strong>String</strong> é uma sequência de caracteres (letras, números, símbolos) tratada como um único dado. Na memória, cada caractere ocupa um espaço e possui um índice numérico.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Indexação: A Regra do Zero</h3>
        <p>Em programação, começamos a contar do zero. A primeira letra de uma string está sempre no índice <strong>0</strong>.</p>
        <div class="bg-black/40 p-4 rounded-xl border font-code text-center text-accent">
          S T R I N G <br/>
          0 1 2 3 4 5
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Concatenação vs Interpolação</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-primary mb-2">Concatenação (+)</h4>
            <p class="text-xs mb-2">Juntar textos como se fossem blocos manuais.</p>
            <code class="text-[10px] text-accent">"Ola " + nome + "!"</code>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-green-400 mb-2">Interpolação (Template)</h4>
            <p class="text-xs mb-2">Inserir variáveis diretamente no texto. Forma moderna e limpa.</p>
            <code class="text-[10px] text-green-400">\`Ola \${nome}!\` (JS) ou f"Ola {nome}" (Py)</code>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">3. Caracteres de Escape</h3>
        <p>Como colocar uma quebra de linha ou aspas dentro de um texto? Usamos a barra invertida <code>\\</code>.</p>
        <ul class="space-y-2 text-sm font-mono">
          <li><span class="text-accent">\\n</span> : Nova linha (Enter)</li>
          <li><span class="text-accent">\\t</span> : Tabulação (Espaço largo)</li>
          <li><span class="text-accent">\\"</span> : Aspas duplas literais</li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🖥️ I/O: Input e Output</h3>
          <p class="text-sm mb-4">Um programa interativo precisa de receber e enviar dados.</p>
          <ul class="list-disc ml-6 space-y-2 text-xs">
            <li><strong>Output:</strong> Exibir dados no terminal (<code>console.log</code> ou <code>print</code>). É a nossa ferramenta primária de debugging.</li>
            <li><strong>Input:</strong> Capturar o que o utilizador digita. Em ambientes web, isso costuma vir de formulários HTML.</li>
          </ul>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Visão de Elite: Imutabilidade
          </h4>
          <p class="text-sm leading-relaxed">
            Em muitas linguagens (como Python e Java), Strings são <strong>imutáveis</strong>. Isso significa que, ao "mudar" um texto, o computador cria um texto NOVO no Heap de memória e apaga o antigo. Ter consciência disto evita desperdício de RAM em loops pesados.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "pf-t3-quiz"
};
