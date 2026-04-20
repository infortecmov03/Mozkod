
import type { KnowledgeArea } from '../../types';

export const os: KnowledgeArea = {
  id: 'ka-os',
  title: '01. Operating Systems',
  description: 'Funcionamento interno do Kernel e gestão de processos.',
  load: '40h',
  iconName: 'Cpu',
  theory: [
    {
      id: 'os-t1',
      title: 'O Kernel e o Hardware',
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold text-red-500">O Coração do Sistema</h2>
          <p>O Kernel é a ponte entre o software e o hardware. Ele gere CPU, Memória e Dispositivos.</p>
        </div>
      `,
      quizId: 'os-t1-quiz'
    },
    {
      id: 'os-t2',
      title: 'Processos e Threads',
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">Multitarefa</h2>
          <p>Aprende como o SO alterna entre programas tão rápido que parece que correm ao mesmo tempo.</p>
        </div>
      `,
      quizId: 'os-t2-quiz'
    }
  ],
  practice: {
    bash: [
      {
        id: 'os-p1',
        language: 'bash',
        title: 'Laboratório: Gestão de Processos',
        description: 'Uso dos comandos top e ps.',
        statement: 'Qual comando mostra os processos em tempo real? Escreva "top".',
        template: 'let comando = "";',
        detailedExplanation: '<p>O utilitário top monitoriza o uso de recursos do sistema.</p>',
        objectives: [
          { id: 'obj1', description: 'Identificar o comando top', test: 'top' }
        ]
      }
    ]
  },
  quizzes: [
    {
      id: 'os-t1-quiz',
      title: 'Quiz: Kernel',
      passingScore: 70,
      questions: [
        {
          id: 'q1',
          question: 'Onde reside o Kernel durante a execução?',
          options: ['No monitor', 'Na memória RAM', 'No teclado'],
          correctAnswer: 1
        }
      ]
    }
  ]
};
