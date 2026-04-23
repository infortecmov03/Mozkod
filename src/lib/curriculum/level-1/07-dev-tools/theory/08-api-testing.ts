import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "dt-t8",
  title: "API Testing: Postman e Diagnóstico de Endpoints",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          📡 Validando o Contrato de Dados
        </h2>
        <p class="text-lg">Desenvolver um backend exige testar os endpoints antes de os ligar ao frontend. Ferramentas como <strong>Postman</strong> ou <strong>Insomnia</strong> são essenciais para simular clientes reais.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">1. Anatomia do Request</h3>
        <ul class="space-y-2 text-sm">
          <li><strong>URL & Endpoint:</strong> Para onde os dados vão.</li>
          <li><strong>HTTP Methods:</strong> GET, POST, PUT, DELETE (os verbos da web).</li>
          <li><strong>Headers:</strong> Metadados como <i>Authorization</i> (tokens) e <i>Content-Type</i>.</li>
          <li><strong>Body:</strong> O payload real, geralmente em JSON.</li>
        </ul>

        <h3 class="text-xl font-bold font-headline">2. Automatizando Testes de API</h3>
        <p class="text-sm">Um engenheiro de elite escreve scripts dentro do Postman para validar se o <code>Status Code</code> é 200 e se o tempo de resposta (latency) está abaixo de um limite aceitável.</p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">🚀 Pro Tip: Coleções e Ambientes</h4>
          <p class="text-sm leading-relaxed">Organiza os teus testes em Coleções e usa Variáveis de Ambiente para alternar entre <i>Localhost</i> e <i>Produção</i> com um único clique.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "dt-q8"
};