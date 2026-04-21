
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m21",
  title: "Security Master: Cookies e Persistência Segura",
  content: `
    <div class="space-y-6">
      <div class="bg-red-500/10 p-6 rounded-2xl border border-red-500/20">
        <h2 class="text-2xl font-bold mb-4 text-red-500">🔒 Blindagem Final</h2>
        <p>Configuração de cookies de nível bancário com <strong>SameSite=Strict</strong>, <strong>HttpOnly</strong> e <strong>Secure</strong>.</p>
      </div>
      <p>Entenda o impacto da Privacy Sandbox e o fim dos cookies de terceiros no armazenamento local e na persistência de sessões de utilizador.</p>
    </div>
  `,
  quizId: "html-mq21"
};
