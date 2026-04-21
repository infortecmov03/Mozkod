
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m13",
  title: "Multimedia: WebVTT e Captions Master",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">🎬 Legendagem e Transcrições</h2>
      <p>WebVTT (Web Video Text Tracks) é o padrão para sincronizar texto com media. Permite não só legendas, mas também capítulos e descrições áudio.</p>
      <div class="bg-muted p-4 rounded-xl font-code text-xs">
        WEBVTT<br/><br/>
        00:00:01.000 --> 00:00:04.000<br/>
        Olá, bem-vindos à Codworks Moz!
      </div>
    </div>
  `,
  quizId: "html-mq13"
};
