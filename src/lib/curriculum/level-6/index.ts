
import type { Level } from '../types';

export const level6: Level = {
  id: 6,
  title: 'Nível 6: Desenvolvimento Profissional',
  description: 'Carreira, Soft Skills, Portfólio e Preparação para o Mercado Global.',
  knowledgeAreas: [
    {
      id: 'ka-career',
      title: '01. Career Development',
      description: 'LinkedIn, CV e Estratégias de Entrevista para o mercado tech.',
      load: '15h',
      iconName: 'Briefcase',
      theory: [
        {
          id: 'career-t1',
          title: 'O Teu Perfil Profissional',
          content: `
            <div class="space-y-6">
              <h2 class="text-2xl font-bold">LinkedIn e Currículo Tech</h2>
              <p>O teu perfil é a tua primeira linha de código no mercado de trabalho. Aprende a destacar as tuas competências.</p>
              <ul class="list-disc ml-6 space-y-2">
                <li><strong>Headline:</strong> Foca-te no que resolves, não apenas no cargo.</li>
                <li><strong>Projetos:</strong> Mostra o link do GitHub e explica o impacto técnico.</li>
              </ul>
            </div>
          `,
          quizId: 'career-t1-quiz'
        }
      ],
      practice: {
        cv: [
          {
            id: 'career-p1',
            language: 'text',
            title: 'Laboratório: Revisão de CV',
            description: 'Melhora a descrição das tuas competências.',
            statement: 'Escreve um resumo profissional que mencione "Next.js" e "Supabase".',
            template: 'Resumo: ',
            detailedExplanation: '<p>Palavras-chave são essenciais para sistemas de recrutamento (ATS).</p>',
            objectives: [
              { id: 'obj1', description: 'Incluir Next.js', test: 'Next.js' },
              { id: 'obj2', description: 'Incluir Supabase', test: 'Supabase' }
            ]
          }
        ]
      },
      quizzes: [
        {
          id: 'career-t1-quiz',
          title: 'Quiz: Mercado de Trabalho',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Qual o elemento mais importante num portfólio de programador?',
              options: ['Uma foto bonita', 'Código real acessível no GitHub', 'Muitos certificados'],
              correctAnswer: 1
            }
          ]
        }
      ]
    },
    {
      id: 'ka-soft-skills',
      title: '02. Soft Skills',
      description: 'Comunicação, Liderança, Inteligência Emocional e Trabalho em Equipa.',
      load: '15h',
      iconName: 'Users',
      theory: [
        {
          id: 'soft-t1',
          title: 'Comunicação Assertiva',
          content: '<div class="space-y-4"><h2 class="text-2xl font-bold">Comunicação em Engenharia</h2><p>Saber explicar conceitos técnicos para pessoas não-técnicas é um superpoder.</p></div>',
          quizId: 'soft-t1-quiz'
        }
      ],
      practice: {},
      quizzes: []
    }
  ]
};
