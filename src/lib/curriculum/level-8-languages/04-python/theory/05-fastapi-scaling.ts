import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m5",
  title: "Escalando APIs com FastAPI",
  content: `
    <div class="space-y-6">
      <div class="bg-green-500/10 p-6 rounded-2xl border border-green-500/20">
        <h2 class="text-2xl font-bold mb-4">🚀 Velocidade e Tipagem</h2>
        <p>FastAPI é atualmente a framework web mais rápida para Python, baseada em Pydantic para validação de dados e AsyncIO para performance.</p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>Vantagens Técnicas</h3>
        <ul>
          <li><strong>Documentação Automática:</strong> Swagger UI gerado sem esforço.</li>
          <li><strong>Dependency Injection:</strong> Sistema nativo para injetar bases de dados e segurança.</li>
          <li><strong>Type Hints:</strong> Menos bugs em produção graças à validação estática.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "py-mq5"
};
