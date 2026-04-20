
import type { Level, KnowledgeArea } from '../types';

const careerLessons = Array.from({ length: 21 }, (_, i) => ({
  id: `career-t${i + 1}`,
  title: [
    "Mercado Global & Tendências", "Currículo de Engenheiro (ATS Ready)",
    "Branding Pessoal & LinkedIn", "Portfólio de Decisões Técnicas",
    "Entrevistas de Algoritmos (LeetCode)", "System Design Interviews",
    "Soft Skills: Comunicação & Liderança", "Negociação Salarial & Benefícios",
    "Trabalho Remoto Internacional", "Roadmap para Senioridade",
    "Open Source como Alavanca", "Public Speaking para Tech",
    "Escrita Técnica (Technical Writing)", "Gestão de Tempo para Engenheiros",
    "Networking Ativo em Comunidades", "Mentoria: Dar e Receber",
    "Impostos & Legal para Freelancers", "Cultura de Silicon Valley",
    "Inglês para Negócios & Reuniões", "Saúde Mental & Burnout Prevention",
    "Engenharia como Carreira de Vida"
  ][i],
  content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>💼 Carreira de Elite</h2><p>Estratégias para se posicionar entre os melhores engenheiros do mundo.</p></div>`,
  quizId: `career-q${i + 1}`
}));

const careerDev: KnowledgeArea = {
  id: 'ka-career',
  title: '01. Career Development',
  description: 'Portfólio, LinkedIn e Entrevistas Técnicas para o mercado global.',
  load: '30h',
  iconName: 'Briefcase',
  theory: careerLessons,
  practice: { text: [] },
  quizzes: Array.from({ length: 21 }, (_, i) => ({
    id: `career-q${i + 1}`,
    title: `Career Quiz ${i + 1}`,
    questions: [],
    passingScore: 70
  }))
};

export const level6: Level = {
  id: 6,
  title: 'Nível 6: Desenvolvimento Profissional',
  description: 'Preparação para o mercado de trabalho e soft skills para engenheiros.',
  knowledgeAreas: [careerDev]
};
