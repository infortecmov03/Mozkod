import type { KnowledgeArea, Quiz } from '../../types';

const seQuizzes: Quiz[] = [
  {
    id: 'se-q1',
    title: 'Quiz: Ciclo de Vida (SDLC)',
    passingScore: 70,
    questions: [
      {
        id: 'q1',
        question: 'Em qual fase do SDLC os diagramas de arquitetura são criados?',
        options: ['Análise', 'Design', 'Implementação', 'Manutenção'],
        correctAnswer: 1
      },
      {
        id: 'q2',
        question: 'O que define a fase de Verificação?',
        options: ['Escrever código', 'Testar se o software cumpre os requisitos', 'Falar com investidores', 'Vender o produto'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'se-q2',
    title: 'Quiz: Scrum e Agilidade',
    passingScore: 70,
    questions: [
      {
        id: 'q1',
        question: 'Quem é responsável por priorizar o Backlog do Produto no Scrum?',
        options: ['Scrum Master', 'Developers', 'Product Owner', 'CEO'],
        correctAnswer: 2
      }
    ]
  }
];

export const softwareProcesses: KnowledgeArea = {
  id: 'ka-se-processes',
  title: '01. Software Processes',
  description: 'Metodologias de desenvolvimento, ciclo de vida e gestão ágil de projetos.',
  load: '30h',
  iconName: 'Settings',
  theory: [
    {
      id: 'se-t1',
      title: 'SDLC: Ciclo de Vida do Software',
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
      quizId: 'se-q1'
    },
    {
      id: 'se-t2',
      title: 'Metodologias Ágeis e Scrum',
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">🏃 Agilidade em Equipa</h2>
          <p>Scrum é a framework ágil mais popular, baseada em transparência, inspeção e adaptação.</p>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="p-3 bg-primary/5 border rounded-lg">
              <h4 class="font-bold">Artifacts</h4>
              <p class="text-[10px]">Backlog, Sprint Backlog, Incremento.</p>
            </div>
            <div class="p-3 bg-accent/5 border rounded-lg">
              <h4 class="font-bold">Events</h4>
              <p class="text-[10px]">Sprint, Planning, Daily, Review, Retrospective.</p>
            </div>
            <div class="p-3 bg-muted border rounded-lg">
              <h4 class="font-bold">Roles</h4>
              <p class="text-[10px]">Product Owner, Scrum Master, Developers.</p>
            </div>
          </div>
        </div>
      `,
      quizId: 'se-q2'
    }
  ],
  practice: {
    process: [
      {
        id: 'se-p1',
        language: 'process',
        title: 'Laboratório: Definição de User Stories',
        description: 'Escreva requisitos do ponto de vista do utilizador.',
        statement: 'Crie uma User Story para a funcionalidade de "Login". Use o padrão: "Como [quem], quero [o que] para [porquê]".',
        template: 'Como usuário, quero poder entrar na minha conta para ver meus dados.',
        detailedExplanation: '<p>Uma boa User Story deve ser INVEST: Independente, Negociável, Valiosa, Estimável, Pequena (Small) e Testável.</p>',
        objectives: [
          { id: 'obj1', description: 'Incluir a persona Usuário', test: 'Como usuário' },
          { id: 'obj2', description: 'Incluir o benefício "para"', test: 'para' }
        ]
      }
    ]
  },
  quizzes: seQuizzes
};