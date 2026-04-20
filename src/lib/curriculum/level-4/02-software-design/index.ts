
import type { KnowledgeArea } from '../../types';

export const softwareDesign: KnowledgeArea = {
  id: 'ka-se-design',
  title: '02. Design & Architecture',
  description: 'Princípios SOLID, Design Patterns e Arquitetura Limpa para sistemas escaláveis.',
  load: '45h',
  iconName: 'Layout',
  theory: [
    {
      id: 'des-t1',
      title: 'Princípios SOLID: A Base do Código Limpo',
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">💎 Ouro na Engenharia de Software</h2>
          <p>SOLID são cinco princípios de design de classes que tornam o software mais compreensível, flexível e fácil de manter.</p>
          <ul class="list-none space-y-4">
            <li class="p-4 border rounded-xl bg-card">
              <strong class="text-primary">S - SRP:</strong> Responsabilidade Única. Uma classe deve ter apenas um motivo para mudar.
            </li>
            <li class="p-4 border rounded-xl bg-card">
              <strong class="text-accent">O - OCP:</strong> Aberto/Fechado. Aberto para extensão, fechado para modificação.
            </li>
            <li class="p-4 border rounded-xl bg-card">
              <strong class="text-green-500">L - LSP:</strong> Substituição de Liskov. Subtipos devem ser substituíveis pelos seus tipos base.
            </li>
          </ul>
        </div>
      `,
      quizId: 'des-q1'
    }
  ],
  practice: {
    typescript: [
      {
        id: 'des-p1',
        language: 'typescript',
        title: 'Laboratório: Refatoração SRP',
        description: 'Aplique o princípio da responsabilidade única.',
        statement: 'Separe a lógica de "EnviarEmail" da classe "Pedido".',
        template: 'class Pedido { /* ... */ }\nclass ServicoEmail { \n  enviar() { }\n}',
        detailedExplanation: '<p>Evite "God Classes" que fazem tudo. Delegue responsabilidades para classes menores.</p>',
        objectives: [
          { id: 'obj1', description: 'Criar uma classe separada para Email', test: 'class ServicoEmail' }
        ]
      }
    ]
  },
  quizzes: []
};
