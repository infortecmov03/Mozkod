
import type { KnowledgeArea } from '../../types';

export const softwareQuality: KnowledgeArea = {
  id: 'ka-se-quality',
  title: '03. Software Quality & QA',
  description: 'Testes automatizados, CI/CD e manutenção de sistemas.',
  load: '35h',
  iconName: 'ShieldCheck',
  theory: [
    {
      id: 'qual-t1',
      title: 'A Pirâmide de Testes',
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">📐 Estratégia de Qualidade</h2>
          <p>Uma estratégia eficiente foca na base da pirâmide para garantir velocidade e segurança.</p>
          <ul class="list-disc ml-6 space-y-2">
            <li><strong>Unit Tests:</strong> Testam pequenas partes isoladas. Baratos e rápidos.</li>
            <li><strong>Integration Tests:</strong> Testam a comunicação entre módulos.</li>
            <li><strong>E2E Tests:</strong> Testam o fluxo completo como o utilizador vê.</li>
          </ul>
        </div>
      `,
      quizId: 'qual-q1'
    }
  ],
  practice: {
    javascript: [
      {
        id: 'qual-p1',
        language: 'javascript',
        title: 'Laboratório: Teu Primeiro Unit Test',
        description: 'Escreva um teste simples usando Jest.',
        statement: 'Complete o teste para validar que a função soma(2, 2) retorna 4.',
        template: "test('soma 2 + 2', () => {\n  expect(soma(2, 2)).toBe();\n});",
        detailedExplanation: '<p>Testes unitários garantem que mudanças futuras não quebrem a lógica existente.</p>',
        objectives: [
          { id: 'obj1', description: 'O resultado esperado deve ser 4', test: 'toBe(4)' }
        ]
      }
    ]
  },
  quizzes: []
};
