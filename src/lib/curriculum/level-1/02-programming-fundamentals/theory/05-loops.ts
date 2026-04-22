import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "pf-t5",
  title: "Loops e Iteração: O Poder da Escala",
  content: `
    <div class="space-y-8">
      <div class="bg-accent/5 p-6 rounded-2xl border border-accent/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 font-headline text-accent">
          🔄 Automatizando a Repetição
        </h2>
        <p class="text-lg leading-relaxed">
          Imagine enviar um email para 1 milhão de clientes. Escrever o código 1 milhão de vezes é impossível. <strong>Loops</strong> (Laços) permitem executar o mesmo bloco de código repetidamente enquanto uma condição for atendida.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Loop FOR: O Contador Determinístico</h3>
        <p>Usado quando sabemos <strong>exatamente</strong> quantas vezes queremos repetir a tarefa (ex: percorrer um array de 10 itens).</p>
        <div class="bg-black/40 p-5 rounded-xl border font-code text-xs space-y-2">
          <p class="text-muted-foreground">// (Início; Condição de Paragem; Incremento)</p>
          <p><span class="text-accent">for</span> (let i = 0; i < 10; i++) {</p>
          <p>&nbsp;&nbsp;sendEmail(customer[i]);</p>
          <p>}</p>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Loop WHILE: O Vigilante</h3>
        <p>Usado quando não sabemos o fim exato. Ele repete enquanto algo for verdade. Útil para esperar por uma resposta de rede ou entrada do utilizador.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs text-primary">
          <span class="text-accent">while</span> (!connection.isReady) { <br/>
          &nbsp;&nbsp;waitOneSecond(); <br/>
          }
        </div>

        <h3 class="text-xl font-bold font-headline text-red-400">⚠️ O Perigo do Loop Infinito</h3>
        <p class="text-sm leading-relaxed">
          Se a condição de paragem de um loop nunca se tornar falsa, o programa entrará num <strong>Loop Infinito</strong>, consumindo 100% da CPU e travando o sistema. Como engenheiro, deves sempre garantir que o estado da variável de controlo muda em cada iteração.
        </p>

        <div class="bg-indigo-500/5 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">💎 Controlo de Fluxo: Break e Continue</h4>
          <ul class="space-y-2 text-xs">
            <li><strong>Break:</strong> Sai imediatamente do loop, ignorando o resto.</li>
            <li><strong>Continue:</strong> Salta o resto do código desta volta e vai direto para a próxima iteração.</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  quizId: "pf-t5-quiz"
};
