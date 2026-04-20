
import type { Level } from '../types';

export const level7: Level = {
  id: 7,
  title: 'Nível 7: Projetos & Certificações',
  description: 'Construção de projetos reais para o portfólio e exames de certificação.',
  knowledgeAreas: [
    {
      id: 'ka-capstone',
      title: '01. Capstone Project',
      description: 'Projeto final integrando todo o conhecimento do curso.',
      load: '80h',
      iconName: 'Trophy',
      theory: [
        {
          id: 'cap-t1',
          title: 'Guia do Projeto Final',
          content: `
            <div class="space-y-6">
              <h2 class="text-2xl font-bold">Construindo uma Aplicação Real</h2>
              <p>O teu projeto final deve resolver um problema real do contexto Moçambicano.</p>
              <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                <h4 class="font-bold mb-2">Requisitos Mínimos:</h4>
                <ul class="list-disc ml-6">
                  <li>Autenticação de Utilizadores</li>
                  <li>Base de Dados em Tempo Real</li>
                  <li>Interface Responsiva</li>
                  <li>Documentação Completa (README)</li>
                </ul>
              </div>
            </div>
          `,
          quizId: 'cap-t1-quiz'
        }
      ],
      practice: {
        project: [
          {
            id: 'cap-p1',
            language: 'process',
            title: 'Laboratório: Arquitetura do Projeto',
            description: 'Define as entidades da tua base de dados.',
            statement: 'Cria uma lista de tabelas para um sistema de e-commerce. Escreve "users, products, orders".',
            template: 'Tabelas: ',
            detailedExplanation: '<p>Uma boa modelagem é a base de um sistema escalável.</p>',
            objectives: [
              { id: 'obj1', description: 'Definir tabelas básicas', test: 'users, products, orders' }
            ]
          }
        ]
      },
      quizzes: []
    }
  ]
};
