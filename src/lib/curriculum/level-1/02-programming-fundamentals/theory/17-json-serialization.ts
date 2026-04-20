
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "pf-t17",
  title: "Serialização e JSON: Troca de Dados",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
          📄 O que é o JSON?
        </h2>
        <p class="text-lg leading-relaxed">
          JSON (JavaScript Object Notation) é o formato padrão para troca de dados na web. Ele permite que diferentes linguagens (como Python e JS) comuniquem entre si usando uma sintaxe de texto comum.
        </p>
      </div>

      <div class="prose prose-neutral dark:prose-invert max-w-none">
        <h3>Parse e Stringify</h3>
        <ul>
          <li><strong>Stringify:</strong> Transformar um objeto em texto para enviar.</li>
          <li><strong>Parse:</strong> Transformar texto recebido num objeto para usar.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "pf-t17-quiz"
};
