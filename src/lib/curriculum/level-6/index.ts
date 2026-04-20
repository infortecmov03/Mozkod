import type { Level, KnowledgeArea, TheoryLesson, Quiz } from '../types';

const careerLessons: TheoryLesson[] = [
  { id: "career-t1", title: "O Mercado de Tecnologia Global", content: "<p>Tendências, salários e como se posicionar como um engenheiro de elite no mercado internacional.</p>", quizId: "career-q1" },
  { id: "career-t2", title: "Currículo e Branding Pessoal", content: "<p>Como destacar as tuas competências para recrutadores e sistemas de ATS.</p>", quizId: "career-q2" },
  { id: "career-t3", title: "LinkedIn Estratégico", content: "<p>Otimização de perfil, palavras-chave e networking ativo.</p>", quizId: "career-q3" },
  { id: "career-t4", title: "Portfólio de Engenheiro", content: "<p>Documentação de projetos, decisões técnicas e cases de sucesso.</p>", quizId: "career-q4" },
  { id: "career-t5", title: "Entrevistas de Algoritmos", content: "<p>Como resolver problemas em tempo real sob pressão.</p>", quizId: "career-q5" },
  { id: "career-t6", title: "System Design Interviews", content: "<p>Desenhando sistemas de larga escala durante a entrevista.</p>", quizId: "career-q6" },
  { id: "career-t7", title: "Soft Skills para Devs", content: "<p>Comunicação não-violenta, liderança técnica e trabalho em equipa.</p>", quizId: "career-q7" },
  { id: "career-t8", title: "Negociação Salarial", content: "<p>Entendendo o teu valor de mercado e benefícios.</p>", quizId: "career-q8" },
  { id: "career-t9", title: "Trabalho Remoto Internacional", content: "<p>Gestão de fuso horário, impostos e cultura global.</p>", quizId: "career-q9" },
  { id: "career-t10", title: "O Caminho para Senioridade", content: "<p>Plano de carreira: Individual Contributor vs Management.</p>", quizId: "career-q10" }
];

const careerQuizzes: Quiz[] = [
  {
    id: "career-q1",
    title: "Quiz: Mercado Global",
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "Qual competência é mais valorizada em equipas distribuídas?",
        options: ["Escrever código rápido", "Comunicação clara e assíncrona", "Trabalhar 15 horas por dia", "Usar o melhor teclado"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "career-q5",
    title: "Quiz: Entrevistas Técnicas",
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "Durante um desafio de código, o que deves fazer se não souberes a solução imediata?",
        options: ["Ficar em silêncio", "Desistir da entrevista", "Explicar o teu raciocínio em voz alta e pedir clarificações", "Chorar"],
        correctAnswer: 2
      }
    ]
  }
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
        statement: 'Escreva um README que inclua arquitetura e decisões técnicas. Use a palavra "Arquitetura".',
        template: '# Título do Projeto\n\n## Arquitetura\nExplique aqui as tecnologias usadas...',
        detailedExplanation: '<p>Um bom README demonstra que tu pensas como um engenheiro e não apenas como um codificador.</p>',
        objectives: [{ id: 'obj1', description: 'Incluir seção de Arquitetura', test: 'Arquitetura' }]
      }
    ]
  },
  quizzes: careerQuizzes
};

export const level6: Level = {
  id: 6,
  title: 'Nível 6: Desenvolvimento Profissional',
  description: 'Preparação para o mercado de trabalho e soft skills para engenheiros.',
  knowledgeAreas: [careerDev]
};