
import type { TheoryLesson } from '../../../../types';
export const lesson: TheoryLesson = {
  id: "se-t1",
  title: "SDLC: Ciclo de Vida do Software",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">🏛️ As Fases da Engenharia</h2>
      <p>O desenvolvimento profissional de software segue um ciclo estruturado para garantir qualidade e previsibilidade.</p>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>Análise de Requisitos:</strong> O que o sistema deve fazer?</li>
        <li><strong>Design/Arquitetura:</strong> Como o sistema será estruturado?</li>
        <li><strong>Implementação:</strong> A fase de codificação real.</li>
        <li><strong>Verificação/Testes:</strong> Garantir que funciona como esperado.</li>
        <li><strong>Manutenção:</strong> Correção de bugs e evolução.</li>
      </ul>
    </div>
  `,
  quizId: "se-q1"
};
