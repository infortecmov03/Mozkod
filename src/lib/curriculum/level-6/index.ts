import type { Level, KnowledgeArea, TheoryLesson } from '../types';

const careerLessons: TheoryLesson[] = [
  { id: "career-t1", title: "O Mercado de Tecnologia Global", content: "<p>Tendências, salários e como se posicionar como um engenheiro de elite.</p>", quizId: "career-q1" },
  { id: "career-t2", title: "Currículo e Branding Pessoal", content: "<p>Como destacar as tuas competências para recrutadores internacionais.</p>", quizId: "career-q2" },
  { id: "career-t3", title: "LinkedIn e Networking Estratégico", content: "<p>Construindo conexões que geram oportunidades reais.</p>", quizId: "career-q3" },
  { id: "career-t4", title: "O Portfólio de Impacto", content: "<p>Documentação de projetos e prova de conceito técnica.</p>", quizId: "career-q4" },
  { id: "career-t5", title: "Entrevistas de Algoritmos e Lógica", content: "<p>Dominando o whiteboard e desafios tipo LeetCode.</p>", quizId: "career-q5" },
  { id: "career-t6", title: "Entrevistas de System Design", content: "<p>Como discutir arquiteturas escaláveis em tempo real.</p>", quizId: "career-q6" },
  { id: "career-t7", title: "Soft Skills para Engenheiros", content: "<p>Comunicação, empatia e trabalho em equipas distribuídas.</p>", quizId: "career-q7" },
  { id: "career-t8", title: "Negociação Salarial e Contratos", content: "<p>Entendendo o teu valor e benefícios no mercado tech.</p>", quizId: "career-q8" },
  { id: "career-t9", title: "Freelancing e Trabalho Remoto", content: "<p>Gerindo a tua própria carreira de forma independente.</p>", quizId: "career-q9" },
  { id: "career-t10", title: "Liderança e Mentoria", content: "<p>O caminho para Senior e Staff Engineer.</p>", quizId: "career-q10" }
];

const careerDev: KnowledgeArea = {
  id: 'ka-career',
  title: '01. Career Development',
  description: 'Portfólio, LinkedIn e Entrevistas Técnicas para o mercado global.',
  load: '30h',
  iconName: 'Briefcase',
  theory: careerLessons,
  practice: {
    text: [
      {
        id: 'career-p1',
        language: 'text',
        title: 'Laboratório: Escrita de README Profissional',
        description: 'Documentação de projetos que vende o seu trabalho.',
        statement: 'Escreva um README que inclua arquitetura e decisões técnicas.',
        template: '# Título do Projeto\n\n## Arquitetura\nExplique aqui...',
        detailedExplanation: '<p>Um bom README é a primeira coisa que um engenheiro sênior olha no teu GitHub.</p>',
        objectives: [{ id: 'obj1', description: 'Incluir seção de Arquitetura', test: 'Arquitetura' }]
      }
    ]
  },
  quizzes: careerLessons.map(l => ({ id: l.quizId, title: `Quiz: ${l.title}`, questions: [], passingScore: 70 }))
};

export const level6: Level = {
  id: 6,
  title: 'Nível 6: Desenvolvimento Profissional',
  description: 'Preparação para o mercado de trabalho e soft skills para engenheiros.',
  knowledgeAreas: [careerDev]
};
