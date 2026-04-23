import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "dt-t6",
  title: "Linters e Formatters: Automação da Qualidade",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🤖 O Teu Corretor Automático de Engenharia
        </h2>
        <p class="text-lg leading-relaxed">Escrever código é humano; garantir que ele segue padrões industriais é tarefa de máquinas. <strong>Linters</strong> e <strong>Formatters</strong> são os guardiões que impedem código "sujo" de chegar à produção.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">1. ESLint: Análise Estática</h3>
        <p class="text-sm">O ESLint analisa o teu código sem o executar. Ele procura por erros de lógica, variáveis não utilizadas e potenciais bugs de segurança baseando-se num conjunto de regras pré-definidas.</p>
        
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">2. Prettier: Consistência Estética</h3>
        <p class="text-sm">O Prettier é focado em <i>opinionated formatting</i>. Ele decide onde quebrar linhas, onde colocar espaços e vírgulas, garantindo que toda a equipa escreva código visualmente idêntico.</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">💎 Porquê usar ambos?</h4>
          <p class="text-sm leading-relaxed">
            O <strong>ESLint</strong> cuida da <strong>qualidade do código</strong> (lógica). <br/>
            O <strong>Prettier</strong> cuida da <strong>aparência do código</strong> (estilo). <br/>
            Juntos, eliminam discussões inúteis em Code Reviews sobre onde deve ficar uma chaveta, permitindo à equipa focar-se no que realmente importa: a arquitetura.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "dt-q6"
};