import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m13",
  title: "Multimedia: WebVTT e Captions Master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 text-headline">🎬 Legendagem e Transcrições</h2>
        <p>WebVTT (Web Video Text Tracks) é o padrão para sincronizar texto com media. Permite não só legendas, mas também capítulos e descrições áudio.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Estrutura de um ficheiro .vtt</h3>
        <p>Um ficheiro de texto simples que o browser lê para sobrepor ao vídeo.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-sm border border-white/5">
          WEBVTT<br/><br/>
          00:00:01.000 --> 00:00:04.500<br/>
          &lt;v Narrador&gt;Bem-vindos à lição de HTML Master.
        </div>

        <h3 class="text-xl font-bold font-headline">Capítulos e Navegação</h3>
        <p>Podes usar o mesmo formato para criar uma barra de capítulos no vídeo, permitindo que o utilizador salte para secções específicas.</p>
        
        <h3 class="text-xl font-bold font-headline text-accent">Estilização de Legendas (::cue)</h3>
        <p>Sim, podes mudar a cor e o fundo das legendas nativas usando CSS!</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs">
          video<span class="text-primary">::cue</span> { <span class="text-accent">background</span>: rgba(0,0,0,0.8); <span class="text-accent">color</span>: yellow; }
        </div>
      </div>
    </div>
  `,
  quizId: "html-mq13"
};
