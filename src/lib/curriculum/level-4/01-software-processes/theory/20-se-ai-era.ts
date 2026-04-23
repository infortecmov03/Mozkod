import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "se-t20",
  title: "Engenharia na Era da IA: Produtividade com Rigor",
  quizId: "se-q20-master",
  content: `
    <div class="space-y-8">
      <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-indigo-400 flex items-center gap-2">
          🤖 A Nova Ferramenta do Engenheiro
        </h2>
        <p class="text-lg leading-relaxed">
          A IA Generativa (LLMs) não substitui o engenheiro; ela substitui a tarefa mecânica. No nível Master, utilizamos a IA como um <strong>Pair Programmer de ultra-velocidade</strong>, mantendo o controlo total sobre a arquitetura, segurança e validação da lógica gerada.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. O Risco da Alucinação e a Validação Humana</h3>
        <p class="text-sm">Modelos de IA podem gerar código que "parece" correto mas contém bugs subtis ou vulnerabilidades de segurança. O papel do Engenheiro Master mudou de <i>Escritor</i> para <strong>Editor e Auditor</strong>.</p>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-accent block mb-1">Zero Trust AI:</strong> Nunca faça commit de código gerado por IA sem o entender linha a linha e sem ter testes unitários que validem o comportamento esperado.
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-primary">2. IA no Ciclo de Vida (SDLC)</h3>
        <p class="text-sm mb-4">Como alavancar a IA em cada fase do projeto:</p>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-accent text-xs mb-1">Análise</h4>
            <p class="text-[10px] opacity-70">Gerar casos de teste e cenários de erro a partir de uma descrição de requisito.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-accent text-xs mb-1">Coding</h4>
            <p class="text-[10px] opacity-70">Escrita de boilerplate, conversão de dados e sugestão de algoritmos conhecidos.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-accent text-xs mb-1">Refactoring</h4>
            <p class="text-[10px] opacity-70">Sugerir formas mais limpas ou performáticas de escrever uma função complexa.</p>
          </div>
        </div>

        <div class="bg-yellow-500/5 p-6 rounded-2xl border border-yellow-500/20 mt-6 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-yellow-500 mb-4">🛡️ Ética e Propriedade Intelectual</h3>
          <p class="text-sm leading-relaxed mb-4">
            Um engenheiro profissional respeita a privacidade dos dados da sua empresa. Nunca cole segredos de estado, chaves de API ou dados de clientes reais em prompts de IAs públicas, a menos que use instâncias privadas e seguras.
          </p>
        </div>
      </div>
    </div>
  `
};
