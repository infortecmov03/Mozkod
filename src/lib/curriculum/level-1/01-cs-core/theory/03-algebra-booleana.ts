import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "cs-t3",
  title: "Álgebra Booleana: A Matemática da Lógica",
  youtubeVideoId: "95v88Oit0H8",
  quizId: "cs-t3-quiz",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 text-primary">
          ⚡ O Que é a Álgebra Booleana?
        </h2>
        <p class="text-lg leading-relaxed">
          Na matemática comum, usamos números de 0 a infinito. Na <strong>Álgebra Booleana</strong>, o nosso universo tem apenas dois valores: <strong>0 (Falso)</strong> e <strong>1 (Verdadeiro)</strong>. É o sistema matemático que permite que os computadores tomem decisões e processem dados.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. A Lei da Identidade (Por que A AND 1 = A?)</h3>
        <p class="text-sm">Muitos iniciantes perguntam: "Por que o resultado é a própria variável?". Imagina que o <b>1</b> é uma porta sempre aberta (energia a passar). O resultado final depende apenas de ti (<b>A</b>):</p>
        
        <div class="bg-black/40 p-6 rounded-xl border border-white/5 space-y-4 shadow-inner">
          <p class="font-bold text-primary italic">Prova linha por linha:</p>
          <ul class="space-y-3 text-sm font-mono">
            <li class="flex gap-4 border-b border-white/5 pb-2">
              <span class="text-accent">Cenário 1:</span>
              <span>Se A = 1 (Verdadeiro), então: 1 AND 1 = <b class="text-green-400">1</b> (O resultado foi igual a A)</span>
            </li>
            <li class="flex gap-4 pb-2">
              <span class="text-accent">Cenário 2:</span>
              <span>Se A = 0 (Falso), então: 0 AND 1 = <b class="text-red-400">0</b> (O resultado foi igual a A)</span>
            </li>
          </ul>
          <p class="text-xs text-muted-foreground mt-4 leading-relaxed">
            <b>Conclusão:</b> Como em ambos os casos o resultado final foi exatamente o valor que estava guardado na variável A, dizemos que <code>A AND 1 = A</code>. O 1 é o "Elemento Neutro" do operador AND.
          </p>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. A Lei do Nulo (O "Buraco Negro")</h3>
        <p class="text-sm">Existem valores que dominam a expressão, independentemente do que a variável <b>A</b> tente fazer:</p>
        <ul class="grid md:grid-cols-2 gap-4">
          <li class="bg-card p-5 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
            <h4 class="font-bold text-primary mb-1">A AND 0 = 0</h4>
            <p class="text-xs opacity-70">Se um dos lados é 0 num AND, o resultado é sempre 0. O zero "aniquila" a variável.</p>
          </li>
          <li class="bg-card p-5 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
            <h4 class="font-bold text-primary mb-1">A OR 1 = 1</h4>
            <p class="text-xs opacity-70">No OR, se já tens um 1, o sucesso é garantido. O resultado é sempre 1.</p>
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">3. Lei da Idempotência (Sem Repetições)</h3>
        <p class="text-sm">Diferente da álgebra comum onde <code>X + X = 2X</code>, na lógica booleana:</p>
        <div class="bg-primary/5 p-4 rounded-xl border border-primary/20 text-center font-code text-sm">
          A AND A = A <br/>
          A OR A = A
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-red-400">4. Lei da Contradição e do Excluído</h3>
        <p class="text-sm">O que acontece quando comparas algo com o seu oposto (NOT A)?</p>
        <ul class="space-y-4">
          <li class="flex gap-4 items-center">
            <div class="bg-black/60 p-3 rounded font-code text-xs text-yellow-500">A AND (NOT A) = 0</div>
            <p class="text-xs text-muted-foreground">Algo não pode ser Verdadeiro e Falso ao mesmo tempo.</p>
          </li>
          <li class="flex gap-4 items-center">
            <div class="bg-black/60 p-3 rounded font-code text-xs text-yellow-500">A OR (NOT A) = 1</div>
            <p class="text-xs text-muted-foreground">Algo é Verdadeiro ou é Falso. Não existe terceira opção.</p>
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">5. As Leis de De Morgan (A Chave da Simplificação)</h3>
        <p class="text-sm">Estas leis são fundamentais para engenheiros escreverem código limpo. Elas dizem-nos como "distribuir" uma negação:</p>
        <div class="bg-indigo-500/10 p-5 rounded-xl border border-indigo-500/20 space-y-4">
          <div class="bg-black/60 p-4 rounded-lg font-code text-xs text-accent text-center">
            NOT (A AND B) = (NOT A) OR (NOT B) <br/><br/>
            NOT (A OR B) = (NOT A) AND (NOT B)
          </div>
          <p class="text-xs italic text-center text-muted-foreground">"Negar um 'E' transforma-o num 'OU' de partes negadas."</p>
        </div>
      </div>

      <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 shadow-lg">
        <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
          🚀 Aplicação Prática na Engenharia
        </h4>
        <p class="text-sm leading-relaxed">
          Saber estas leis permite-te otimizar o teu código. Por exemplo, transformar uma condição complexa como <code>if (!(user.isLogged && user.hasPermission))</code> em algo mais legível como <code>if (!user.isLogged || !user.hasPermission)</code>, economizando ciclos de processamento e aumentando a clareza do sistema.
        </p>
      </div>
    </div>
  `
};
