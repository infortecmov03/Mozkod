
import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "eng-t1",
  title: "Basic Computer Vocabulary",
  youtubeVideoId: "",
  content: `
    <div class="space-y-6">
      <div class="bg-indigo-50 dark:bg-indigo-950 p-6 rounded-xl border border-indigo-200 dark:border-indigo-900">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
          🇬🇧 Why English?
        </h2>
        <p class="text-lg leading-relaxed">
          O Inglês é a "língua franca" da tecnologia. Quase todas as linguagens de programação usam palavras em inglês como comandos (ex: <em>if</em>, <em>while</em>, <em>return</em>).
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <div class="bg-card p-4 rounded-lg border">
          <h4 class="font-bold text-indigo-400">Hardware Terms</h4>
          <ul class="text-sm mt-2 space-y-1">
            <li><strong>Input:</strong> Entrada de dados</li>
            <li><strong>Output:</strong> Saída de dados</li>
            <li><strong>Storage:</strong> Armazenamento</li>
          </ul>
        </div>
        <div class="bg-card p-4 rounded-lg border">
          <h4 class="font-bold text-indigo-400">Software Terms</h4>
          <ul class="text-sm mt-2 space-y-1">
            <li><strong>Run:</strong> Executar</li>
            <li><strong>Bug:</strong> Erro/Falha</li>
            <li><strong>Features:</strong> Funcionalidades</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  quizId: "eng-t1-quiz"
};
