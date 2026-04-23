import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "dt-t10",
  title: "GitHub Actions: O Motor de CI/CD",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🤖 Automatizando a Entrega
        </h2>
        <p class="text-lg">O <strong>GitHub Actions</strong> permite automatizar fluxos de trabalho (workflows) diretamente no teu repositório. Sempre que fazes um <i>push</i>, o GitHub pode testar e publicar o teu código sozinho.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">1. Workflows, Jobs e Steps</h3>
        <ul class="list-disc ml-6 space-y-2 text-sm text-muted-foreground">
          <li><strong>Workflow:</strong> O ficheiro YAML que descreve o processo completo.</li>
          <li><strong>Job:</strong> Uma série de passos que correm num servidor virtual (Runner).</li>
          <li><strong>Step:</strong> Uma tarefa individual, como "instalar dependências" ou "rodar testes".</li>
        </ul>

        <h3 class="text-xl font-bold font-headline">2. CI vs CD</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-green-500/20">
            <h4 class="font-bold text-green-400 mb-1">CI (Continuous Integration)</h4>
            <p class="text-xs">Focar em integrar código e rodar testes automaticamente para detetar erros cedo.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-blue-500/20">
            <h4 class="font-bold text-blue-400 mb-1">CD (Continuous Deployment)</h4>
            <p class="text-xs">Publicar automaticamente o código validado nos servidores de produção.</p>
          </div>
        </div>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 mt-6 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">🚀 Porquê usar?</h4>
          <p class="text-sm">Aumenta a confiança da equipa. Ninguém consegue "estragar" a produção por engano se o GitHub Actions bloquear o deploy quando um teste unitário falha.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "dt-q10"
};