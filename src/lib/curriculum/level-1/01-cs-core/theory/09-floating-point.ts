import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "cs-t9",
  title: "Aritmética de Ponto Flutuante (IEEE 754)",
  content: `
    <div class="space-y-8">
      <div class="bg-red-500/10 p-6 rounded-2xl border border-red-500/20 text-red-100 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-red-400 flex items-center gap-2">
          ⚠️ O Mistério: 0.1 + 0.2 = 0.30000000000000004
        </h2>
        <p class="text-lg leading-relaxed">
          Já te perguntaste por que razão um supercomputador falha numa conta de primária? A resposta não é um erro de hardware, mas uma limitação física da base 2 (binário) para representar frações decimais.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. O Padrão IEEE 754</h3>
        <p>Para que todos os computadores do mundo falem a mesma língua matemática, a norma <strong>IEEE 754</strong> define como os números reais (com vírgula) são guardados. Pensa nisto como a "Notação Científica" do computador.</p>
        
        <div class="bg-card p-6 rounded-2xl border border-white/5 shadow-inner">
          <p class="text-xs font-bold uppercase text-primary mb-4">Anatomia de um Número de 64 bits (Double Precision):</p>
          <div class="grid grid-cols-12 gap-1 text-center font-mono text-[10px]">
            <div class="col-span-1 bg-red-600/40 p-2 rounded" title="Sinal">S</div>
            <div class="col-span-3 bg-blue-600/40 p-2 rounded" title="Expoente">Expoente (11b)</div>
            <div class="col-span-8 bg-green-600/40 p-2 rounded" title="Mantissa">Mantissa / Fração (52b)</div>
          </div>
          <ul class="mt-6 space-y-3 text-sm">
            <li><strong class="text-red-400">Sinal (1 bit):</strong> 0 para positivo, 1 para negativo.</li>
            <li><strong class="text-blue-400">Expoente (11 bits):</strong> Determina a posição da "vírgula flutuante". Permite representar números minúsculos ou galácticos.</li>
            <li><strong class="text-green-400">Mantissa (52 bits):</strong> Guarda a precisão do número (os algarismos significativos).</li>
          </ul>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Por que a imprecisão ocorre?</h3>
        <p class="text-sm leading-relaxed">
          Na nossa base 10, o número <code>1/3</code> é uma dízima infinita (0.333...). No computador (base 2), o número <code>0.1</code> decimal também é uma dízima infinita.
          <br/><br/>
          Como o computador tem bits finitos (64 bits), ele tem de "cortar" o número em algum lugar. Esse minúsculo corte acumula-se em operações matemáticas, gerando resultados como <code>0.30000000000000004</code>.
        </p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🏦 A Regra de Ouro do Engenheiro Financeiro</h3>
          <p class="text-sm mb-4">Nunca, sob circunstância alguma, uses <strong>float</strong> ou <strong>double</strong> para guardar dinheiro (saldos, preços, taxas).</p>
          <div class="space-y-2">
            <p class="flex gap-2 text-xs"><span class="text-green-500">✅</span> <strong>Caminho de Elite:</strong> Guarda valores como inteiros na menor unidade (Cêntimos). Ex: 10,00 MT -> 1000.</p>
            <p class="flex gap-2 text-xs"><span class="text-red-500">❌</span> <strong>Caminho Amador:</strong> Usar <code>let preco = 10.00;</code>. Em larga escala, o banco perderá dinheiro por arredondamentos errados.</p>
          </div>
        </div>

        <div class="bg-yellow-500/5 p-5 rounded-xl border border-yellow-500/20">
          <h4 class="font-bold text-yellow-500 mb-2">🚀 Sabias que?</h4>
          <p class="text-sm">O padrão IEEE 754 também define valores especiais como <strong>NaN</strong> (Not a Number), <strong>Infinity</strong> e <strong>-0</strong>. Saber lidar com eles evita que o teu programa crash ao dividir por zero ou processar dados corrompidos.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-t9-quiz"
};
