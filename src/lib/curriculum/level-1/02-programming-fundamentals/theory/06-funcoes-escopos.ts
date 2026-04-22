import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "pf-t6",
  title: "Funções e Escopos: A Engenharia da Reutilização",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🛠️ O Lego da Programação
        </h2>
        <p class="text-lg leading-relaxed">
          Uma <strong>Função</strong> é um bloco isolado de código desenhado para realizar uma tarefa específica. Em vez de escrever a mesma lógica 10 vezes, escrevemo-la uma vez dentro de uma função e "chamamo-la" sempre que necessário.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Anatomia de uma Função</h3>
        <ul class="space-y-4">
          <li class="flex gap-4">
            <div class="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0 font-bold">1</div>
            <div><strong>Parâmetros:</strong> São as entradas da função (os ingredientes).</div>
          </li>
          <li class="flex gap-4">
            <div class="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0 font-bold">2</div>
            <div><strong>Corpo:</strong> A lógica de processamento entre chavetas <code>{ }</code>.</div>
          </li>
          <li class="flex gap-4">
            <div class="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0 font-bold">3</div>
            <div><strong>Retorno (Return):</strong> O resultado que a função devolve para quem a chamou.</div>
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. O Conceito de Escopo (Scope)</h3>
        <p>O escopo determina onde uma variável pode ser acedida. É o sistema de "segurança" que impede que partes diferentes do programa alterem dados umas das outras por acidente.</p>
        
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-primary mb-1">Escopo Global</h4>
            <p class="text-xs text-muted-foreground">Variáveis declaradas fora de qualquer função. Estão visíveis para o programa inteiro (perigoso!).</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-accent mb-1">Escopo Local</h4>
            <p class="text-xs text-muted-foreground">Variáveis dentro de uma função. Elas nascem e morrem dentro dela. Ninguém fora as consegue ver.</p>
          </div>
        </div>

        <div class="bg-yellow-500/5 p-6 rounded-2xl border border-yellow-500/20 mt-6 shadow-inner">
          <h4 class="font-bold text-yellow-500 mb-2 flex items-center gap-2">
            💎 Pure Functions (Funções Puras)
          </h4>
          <p class="text-sm leading-relaxed">
            Na engenharia de elite, preferimos funções que não alteram nada fora delas (sem efeitos secundários). Dada a mesma entrada, uma função pura deve retornar SEMPRE a mesma saída. Isto torna o código previsível e fácil de testar.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "pf-t6-quiz"
};
