
import type { KnowledgeArea, TheoryLesson } from '../../types';

const lessons: TheoryLesson[] = [
  { id: "php-m1", title: "The Modern PHP Revolution (8.x)", content: "<p>Novas funcionalidades e performance do motor Zend.</p>", quizId: "php-mq1" },
  { id: "php-m2", title: "Strict Typing & Engine Internals", content: "<p>Segurança de tipos robusta em ambiente dinâmico.</p>", quizId: "php-mq2" },
  { id: "php-m3", title: "Composer & Dependency Management", content: "<p>Gestão profissional com Autoloading PSR-4.</p>", quizId: "php-mq3" },
  { id: "php-m4", title: "Object-Oriented PHP 8", content: "<p>Constructor promotion e Attributes avançados.</p>", quizId: "php-mq4" },
  { id: "php-m5", title: "Modern Frameworks: Laravel Internals", content: "<p>Injeção de Dependências e Service Container no Laravel.</p>", quizId: "php-mq5" },
  { id: "php-m6", title: "Async PHP (Swoole & RoadRunner)", content: "<p>Alta performance quebrando o ciclo Request-Response.</p>", quizId: "php-mq6" },
  { id: "php-m7", title: "Security Best Practices in PHP", content: "<p>Prevenindo vulnerabilidades reais e gestão de segredos.</p>", quizId: "php-mq7" },
  { id: "php-m8", title: "PHPUnit & Pest", content: "<p>Testes de elite para aplicações de missão crítica.</p>", quizId: "php-mq8" },
  { id: "php-m9", title: "Caching & Optimization (Opcache/Redis)", content: "<p>Escalando aplicações para milhões de utilizadores.</p>", quizId: "php-mq9" },
  { 
    id: "php-m10", 
    title: "Projeto Final: Laravel Portal & Deploy", 
    youtubeVideoId: "95v88Oit0H8",
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">🐘 PHP/Laravel Master Project</h2>
        <p>Constrói um sistema de gestão com Laravel e faz o deploy no <strong>Render</strong> ou <strong>Railway</strong>.</p>
        <div class="bg-card p-6 rounded-2xl border space-y-4">
          <h3 class="font-bold text-indigo-500">1. Laravel & Git</h3>
          <p class="text-sm text-muted-foreground">Instala via Composer. Versiona tudo no GitHub imediatamente.</p>
          <h3 class="font-bold text-indigo-500">2. DB Migration</h3>
          <p class="text-sm text-muted-foreground">Configura o MySQL remoto e executa as migrations.</p>
          <h3 class="font-bold text-indigo-500">3. Live Deployment</h3>
          <p class="text-sm text-muted-foreground">Configura os segredos (.env) na cloud e lança a plataforma.</p>
        </div>
      </div>
    `, 
    quizId: "php-mq10" 
  }
];

export const phpMaster: KnowledgeArea = {
  id: 'lang-php-master',
  title: '10. PHP Master',
  description: 'A força motriz da web: do PHP 8 moderno a arquiteturas de larga escala.',
  load: '35h',
  iconName: 'Globe',
  theory: lessons,
  practice: {
    php: [
      {
        id: 'php-p1',
        language: 'php',
        title: 'Lab: Constructor Promotion',
        description: 'Código limpo em PHP 8.',
        statement: 'Use promoção de propriedades no construtor.',
        template: 'public function __construct(public string $name) { }',
        detailedExplanation: '<p>PHP 8 permite declarar e inicializar propriedades no mesmo lugar.</p>',
        objectives: [{ id: 'obj1', description: 'Usar promotion', test: '__construct' }]
      }
    ]
  },
  quizzes: []
};
