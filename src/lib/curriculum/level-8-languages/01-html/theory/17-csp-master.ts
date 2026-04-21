
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m17",
  title: "Content Security Policy (CSP) Profundo",
  content: `
    <div class="space-y-6">
      <div class="bg-red-500/10 p-6 rounded-2xl border border-red-500/20">
        <h2 class="text-2xl font-bold mb-4 text-red-400">🛡️ Blindagem contra Injeção</h2>
        <p>O CSP é a ferramenta mais forte contra ataques XSS. No nível Master, configuramos políticas restritivas através de meta tags ou cabeçalhos HTTP rigorosos.</p>
      </div>
      <p>Entender como usar <strong>Nonces</strong> (tokens de uso único) permite executar scripts internos com segurança sem abrir brechas para scripts maliciosos de domínios de terceiros.</p>
    </div>
  `,
  quizId: "html-mq17"
};
