import type { KnowledgeArea, TheoryLesson } from '../../types';

const htmlLessons: TheoryLesson[] = [
  { id: "html-m1", title: "Semântica Avançada e Acessibilidade", content: "<p>Uso profundo de ARIA roles e tags semânticas para SEO e leitores de ecrã.</p>", quizId: "html-mq1" },
  { id: "html-m2", title: "Arquitetura de Documentos Complexos", content: "<p>Estruturando aplicações web de grande porte.</p>", quizId: "html-mq2" },
  { id: "html-m3", title: "HTML5 APIs: Canvas e SVG", content: "<p>Gráficos de alta performance diretamente no documento.</p>", quizId: "html-mq3" },
  { id: "html-m4", title: "HTML5 APIs: Geolocation e Web Workers", content: "<p>Funcionalidades nativas do browser para apps modernas.</p>", quizId: "html-mq4" },
  { id: "html-m5", title: "Formulários e Validação Nativa", content: "<p>Domínio total de inputs, patterns e feedback de erro.</p>", quizId: "html-mq5" },
  { id: "html-m6", title: "SEO Técnico e Metadados", content: "<p>OpenGraph, JSON-LD e otimização para indexação.</p>", quizId: "html-mq6" },
  { id: "html-m7", title: "Web Components: Shadow DOM", content: "<p>Criando tags customizadas e encapsuladas.</p>", quizId: "html-mq7" },
  { id: "html-m8", title: "Performance: Preload e Resource Hints", content: "<p>Otimizando o carregamento crítico de recursos.</p>", quizId: "html-mq8" },
  { id: "html-m9", title: "Segurança no HTML (CSP)", content: "<p>Prevenindo injeções de script através de marcação segura.</p>", quizId: "html-mq9" },
  { id: "html-m10", title: "O Futuro: HTML6 e Web Standards", content: "<p>Novas propostas e a evolução do padrão W3C.</p>", quizId: "html-mq10" }
];

export const htmlKA: KnowledgeArea = {
  id: 'lang-html',
  title: '01. HTML Master',
  description: 'Domínio total da estrutura web e acessibilidade.',
  load: '30h',
  iconName: 'Code',
  theory: htmlLessons,
  practice: {
    html: [
      {
        id: 'html-p1',
        language: 'html',
        title: 'Laboratório: Acessibilidade Master',
        description: 'Criação de componentes totalmente acessíveis.',
        statement: 'Use ARIA labels num componente de modal simulado.',
        template: '<div role="dialog" aria-labelledby="title"></div>',
        detailedExplanation: '<p>A acessibilidade é a marca de um desenvolvedor sênior.</p>',
        objectives: [{ id: 'obj1', description: 'Usar aria-labelledby', test: 'aria-labelledby' }]
      }
    ]
  },
  quizzes: htmlLessons.map(l => ({ id: l.quizId, title: `Quiz: ${l.title}`, questions: [], passingScore: 80 }))
};
