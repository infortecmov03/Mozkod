import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "se-t5",
  title: "Engenharia de Requisitos: Funcionais, Não-Funcionais e Restrições",
  youtubeVideoId: "8hly31xKli0",
  quizId: "se-q5-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🎯 Definindo o Sucesso do Software
        </h2>
        <p class="text-lg leading-relaxed">
          A Engenharia de Requisitos é a fase mais crítica do SDLC. Se os requisitos estiverem errados, o sistema mais elegante do mundo será um fracasso comercial. No nível Master, distinguimos rigorosamente o "O que" do "Como".
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Requisitos Funcionais (RF)</h3>
        <p class="text-sm">Descrevem as funções que o sistema deve executar. São os comportamentos e serviços esperados pelo utilizador.</p>
        <div class="bg-black/40 p-4 rounded-xl border border-white/5 italic text-xs text-accent">
          "O sistema deve permitir que o aluno descarregue o certificado em formato PDF."
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-primary">2. Requisitos Não-Funcionais (RNF) - "As Ilidades"</h3>
        <p class="text-sm">Muitas vezes ignorados por amadores, os RNF definem a <strong>Qualidade</strong> do sistema. Eles descrevem como o sistema deve se comportar sob restrições.</p>
        <ul class="grid md:grid-cols-2 gap-4">
          <li class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-green-400 block mb-1">Escalabilidade:</strong> O sistema deve suportar 10.000 utilizadores simultâneos sem perda de performance.
          </li>
          <li class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-green-400 block mb-1">Disponibilidade:</strong> O sistema deve estar online 99.9% do tempo (Uptime).
          </li>
          <li class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-green-400 block mb-1">Segurança:</strong> Todos os dados sensíveis devem ser encriptados via AES-256.
          </li>
          <li class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-green-400 block mb-1">Usabilidade:</strong> Um utilizador novo deve conseguir realizar a primeira lição em menos de 2 minutos.
          </li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">⚠️ Regras de Negócio vs Restrições</h3>
          <p class="text-sm leading-relaxed mb-4">
            Uma <strong>Restrição</strong> é um fator que limita as opções do arquiteto. <br/>
            Ex: "O sistema deve ser desenvolvido em Java porque a infraestrutura atual da empresa só suporta a JVM."
          </p>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Dica Master: Documentação Enxuta
          </h4>
          <p class="text-sm leading-relaxed">
            Em processos ágeis, evitamos documentos de 200 páginas. Usamos <strong>Backlog Refinement</strong> constante para manter os requisitos claros, testáveis e prontos para desenvolvimento (Ready).
          </p>
        </div>
      </div>
    </div>
  `
};