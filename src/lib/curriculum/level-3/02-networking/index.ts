
import type { KnowledgeArea } from '../../types';

export const networking: KnowledgeArea = {
  id: 'ka-networking',
  title: '02. Networking',
  description: 'Como os computadores falam: TCP/IP, HTTP e DNS.',
  load: '25h',
  iconName: 'Globe',
  theory: [
    {
      id: 'net-t1',
      title: 'O Modelo OSI',
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">As 7 Camadas da Rede</h2>
          <p>O modelo OSI divide a comunicação de rede em 7 camadas abstratas.</p>
        </div>
      `,
      quizId: 'net-t1-quiz'
    }
  ],
  practice: {
    bash: [
      {
        id: 'net-p1',
        language: 'bash',
        title: 'Laboratório: Testando Conectividade',
        description: 'Uso do comando ping.',
        statement: 'Usa o comando ping para testar a conexão com o servidor 8.8.8.8.',
        template: '# Digita o comando abaixo\n',
        detailedExplanation: '<p>O ping envia pacotes ICMP para verificar se um IP está acessível.</p>',
        objectives: [
          { id: 'obj1', description: 'Pingar o IP do Google', test: 'ping 8.8.8.8' }
        ]
      }
    ]
  },
  quizzes: [
    {
      id: 'net-t1-quiz',
      title: 'Quiz: Redes',
      passingScore: 70,
      questions: [
        {
          id: 'q1',
          question: 'Em que camada opera o protocolo HTTP?',
          options: ['Aplicação', 'Transporte', 'Física'],
          correctAnswer: 0
        }
      ]
    }
  ]
};
