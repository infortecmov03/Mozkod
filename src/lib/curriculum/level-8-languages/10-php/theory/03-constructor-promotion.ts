import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m3",
  title: "Constructor Property Promotion",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">🚀 Código Limpo e Eficiente</h2>
      <p>Reduzimos drasticamente o boilerplate de classes de serviço e DTOs ao declarar e inicializar propriedades diretamente no construtor.</p>
      <div class="bg-card p-4 rounded-xl border font-code">
        public function __construct(<br/>
        &nbsp;&nbsp;public string $name,<br/>
        &nbsp;&nbsp;private int $id<br/>
        ) {}
      </div>
    </div>
  `,
  quizId: "php-mq3"
};