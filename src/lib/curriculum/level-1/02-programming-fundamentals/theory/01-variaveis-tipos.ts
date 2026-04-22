import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "pf-t1",
  title: "Variáveis e Tipos: As Caixas da Memória",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 font-headline">
          📦 O que é uma Variável?
        </h2>
        <p class="text-lg leading-relaxed">
          Uma variável é um espaço nomeado na memória RAM onde guardamos dados. Como engenheiros, pensamos nelas como referências para valores que podem ser manipulados ao longo da execução de um programa.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Tipos de Dados (Primitivos)</h3>
        <p>Cada linguagem tem o seu conjunto de tipos, mas os universais são:</p>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
          <li class="bg-card p-4 rounded-xl border border-white/5">
            <strong class="text-primary block mb-1">String (Texto):</strong> Cadeias de caracteres. <br/><span class="text-[10px] opacity-60">Ex: "Maputo", 'Elite Dev'</span>
          </li>
          <li class="bg-card p-4 rounded-xl border border-white/5">
            <strong class="text-green-500 block mb-1">Number / Integer / Float:</strong> Valores numéricos. <br/><span class="text-[10px] opacity-60">Ex: 258, 3.1415</span>
          </li>
          <li class="bg-card p-4 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Boolean (Lógico):</strong> Representa verdade ou falsidade. <br/><span class="text-[10px] opacity-60">Ex: true, false</span>
          </li>
          <li class="bg-card p-4 rounded-xl border border-white/5">
            <strong class="text-yellow-500 block mb-1">Null / Undefined:</strong> Representam a ausência de valor ou algo não definido.
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Tipagem Dinâmica vs Estática</h3>
        <div class="flex flex-col md:flex-row gap-6">
          <div class="flex-1 space-y-2">
            <h4 class="font-bold text-accent">Dinâmica (JS, Python)</h4>
            <p class="text-xs text-muted-foreground leading-relaxed">O tipo da variável é decidido em tempo de execução. Podes mudar de um número para um texto na mesma variável.</p>
          </div>
          <div class="flex-1 space-y-2">
            <h4 class="font-bold text-primary">Estática (Java, C++, TS)</h4>
            <p class="text-xs text-muted-foreground leading-relaxed">Deves declarar o tipo no início e ele nunca muda. Oferece mais segurança em sistemas de grande escala.</p>
          </div>
        </div>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">💎 Boas Práticas de Naming</h3>
          <ul class="space-y-3 text-sm">
            <li><strong>Semântica:</strong> O nome deve dizer o que o dado É (ex: <code>userAge</code> em vez de <code>x</code>).</li>
            <li><strong>CamelCase:</strong> Padrão comum em JS/Java (ex: <code>orderTotal</code>).</li>
            <li><strong>Snake_case:</strong> Comum em Python (ex: <code>order_total</code>).</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  quizId: "pf-t1-quiz"
};
