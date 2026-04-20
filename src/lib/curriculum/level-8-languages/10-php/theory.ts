
import type { TheoryLesson } from '../../types';

export const lessons: TheoryLesson[] = [
  { id: "php-m1", title: "Modern PHP 8 Revolution", content: "<p>Novas funcionalidades e motor Zend.</p>", quizId: "php-mq1" },
  { id: "php-m2", title: "Strict Typing", content: "<p>Segurança de tipos robusta.</p>", quizId: "php-mq2" },
  { id: "php-m3", title: "Composer & PSR-4", content: "<p>Gestão profissional de dependências.</p>", quizId: "php-mq3" },
  { id: "php-m4", title: "OOP PHP Avançado", content: "<p>Attributes e Constructor promotion.</p>", quizId: "php-mq4" },
  { id: "php-m5", title: "Laravel Internals", content: "<p>Service Container e Injeção de Dependência.</p>", quizId: "php-mq5" },
  { id: "php-m6", title: "Async PHP", content: "<p>Swoole e alta performance.</p>", quizId: "php-mq6" },
  { id: "php-m7", title: "PHP Security Best Practices", content: "<p>Proteção real contra ataques.</p>", quizId: "php-mq7" },
  { id: "php-m8", title: "Pest & PHPUnit", content: "<p>Testes de elite.</p>", quizId: "php-mq8" },
  { id: "php-m9", title: "Caching com Redis", content: "<p>Escalando para milhões.</p>", quizId: "php-mq9" },
  { 
    id: "php-m10", 
    title: "Projeto Final: Laravel Portal & Deploy", 
    youtubeVideoId: "95v88Oit0H8",
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">🐘 PHP Master Project</h2>
        <p>Cria um portal de gestão com Laravel e publica no <strong>Render</strong>.</p>
        <div class="bg-card p-6 rounded-2xl border space-y-4">
          <h3 class="font-bold text-indigo-500">1. Laravel Install</h3>
          <p class="text-sm">Inicia o projeto via Composer.</p>
          <h3 class="font-bold text-indigo-500">2. DB Migrations</h3>
          <p class="text-sm">Configura o MySQL remoto e executa migrations.</p>
          <h3 class="font-bold text-indigo-500">3. Live Deploy</h3>
          <p class="text-sm">Configura segredos (.env) na cloud.</p>
        </div>
      </div>
    `, 
    quizId: "php-mq10" 
  }
];
