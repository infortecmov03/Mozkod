import type { KnowledgeArea, TheoryLesson, Quiz } from '../../types';

const htmlLessons: TheoryLesson[] = [
  { id: "html-m1", title: "Semântica Avançada e Acessibilidade", content: `<div class="space-y-4">
    <h2 class="text-2xl font-bold">🏗️ Além das Divs</h2>
    <p>O HTML moderno exige o uso de tags que descrevam o seu conteúdo (main, section, article, aside). Isso é vital para SEO e para tecnologias assistivas.</p>
    <ul class="list-disc ml-6">
      <li><strong>ARIA Roles:</strong> Definem o propósito de um elemento quando a tag nativa não é suficiente.</li>
      <li><strong>Landmarks:</strong> Permitem que usuários de leitores de ecrã naveguem rapidamente pela página.</li>
    </ul>
  </div>`, quizId: "html-mq1" },
  { id: "html-m2", title: "Arquitetura de Documentos Complexos", content: "<p>Estruturando aplicações web de grande porte usando templates e slots.</p>", quizId: "html-mq2" },
  { id: "html-m3", title: "HTML5 APIs: Canvas e SVG", content: "<p>Gráficos vetoriais e desenho programático para visualização de dados e jogos.</p>", quizId: "html-mq3" },
  { id: "html-m4", title: "HTML5 APIs: Web Workers", content: "<p>Execução de scripts em background sem bloquear a UI principal.</p>", quizId: "html-mq4" },
  { id: "html-m5", title: "Formulários e Validação Nativa", content: "<p>Uso de Constraint Validation API para feedback instantâneo sem bibliotecas pesadas.</p>", quizId: "html-mq5" },
  { id: "html-m6", title: "SEO Técnico e Metadados", content: "<p>JSON-LD e Microdados para Schema.org, melhorando a visibilidade em motores de busca.</p>", quizId: "html-mq6" },
  { id: "html-m7", title: "Web Components: Shadow DOM", content: "<p>Encapsulamento de estilos e comportamento em componentes reutilizáveis nativos.</p>", quizId: "html-mq7" },
  { id: "html-m8", title: "Performance: Resource Hints", content: "<p>DNS-prefetch, Preconnect, Preload e Prefetch para carregamento ultra-rápido.</p>", quizId: "html-mq8" },
  { id: "html-m9", title: "Segurança no HTML (CSP)", content: "<p>Configuração de Content Security Policy para prevenir XSS e injeções.</p>", quizId: "html-mq9" },
  { 
    id: "html-m10", 
    title: "Projeto Final: Landing Page Profissional e Deploy", 
    youtubeVideoId: "2O93X_fXk-Q",
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">🚀 Do Código ao Mundo</h2>
        <p>Neste projeto, vais construir o teu portfólio profissional usando apenas HTML5 semântico e publicá-lo gratuitamente no <strong>GitHub Pages</strong>.</p>
        
        <div class="bg-card p-6 rounded-2xl border space-y-4">
          <h3 class="font-bold text-primary">Passo 1: Repositório no GitHub</h3>
          <p class="text-sm text-muted-foreground">Cria um novo repositório chamado <code>meu-portfolio</code>. Inicializa com um ficheiro <code>index.html</code>.</p>
          
          <h3 class="font-bold text-primary">Passo 2: Estrutura Master</h3>
          <p class="text-sm text-muted-foreground">Usa as tags <code>header</code>, <code>nav</code>, <code>main</code>, <code>section</code> e <code>footer</code>. Adiciona metadados OpenGraph para partilha em redes sociais.</p>
          
          <h3 class="font-bold text-primary">Passo 3: Deploy via GitHub Pages</h3>
          <p class="text-sm text-muted-foreground">Vai a <em>Settings > Pages</em> no teu repositório e ativa o deploy a partir do branch <code>main</code>. Em 2 minutos, o teu site estará online!</p>
        </div>
      </div>
    `, 
    quizId: "html-mq10" 
  }
];

const htmlQuizzes: Quiz[] = [
  {
    id: "html-mq1",
    title: "Quiz: Semântica e Acessibilidade",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Qual o propósito principal do atributo 'aria-live'?",
        options: [
          "Definir a cor de um elemento em tempo real",
          "Anunciar atualizações de conteúdo dinâmico para leitores de ecrã",
          "Aumentar o brilho da tela",
          "Executar um script quando o usuário clica"
        ],
        correctAnswer: 1
      },
      {
        id: "q2",
        question: "Qual tag é a mais adequada para um conteúdo secundário relacionado ao principal?",
        options: ["<div>", "<section>", "<aside>", "<article>"],
        correctAnswer: 2
      }
    ]
  }
];

export const htmlKA: KnowledgeArea = {
  id: 'lang-html',
  title: '01. HTML Master',
  description: 'Domínio total da estrutura web e acessibilidade profunda.',
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
        statement: 'Use o atributo ARIA correto para indicar que um elemento é um diálogo modal.',
        template: '<div role=""></div>',
        detailedExplanation: '<p>A acessibilidade é a marca de um desenvolvedor sênior.</p>',
        objectives: [{ id: 'obj1', description: 'Definir o role como dialog', test: 'role="dialog"' }]
      }
    ]
  },
  quizzes: htmlQuizzes
};