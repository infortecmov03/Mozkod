import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m7",
  title: "Multimédia Master: Canvas, Áudio e Vídeo Avançado",
  content: `
    <div class="space-y-6">
      <div class="bg-purple-500/10 p-6 rounded-2xl border border-purple-500/20">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
          🎨 Além dos Pixels Estáticos
        </h2>
        <p class="text-lg">No nível Master, a multimédia não é apenas exibir imagens. É sobre renderização programática e acessibilidade universal em fluxos de media.</p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>1. O Poder do &lt;canvas&gt;</h3>
        <p>O elemento canvas fornece uma superfície de desenho 2D e 3D (via WebGL) onde cada pixel pode ser manipulado via JavaScript. É a base para jogos web e visualização de dados complexos.</p>

        <h3>2. Vídeo e Acessibilidade com &lt;track&gt;</h3>
        <p>Utilizar a tag <code>&lt;track&gt;</code> é obrigatório para fornecer legendas (subtitles) e descrições áudio, permitindo que o conteúdo seja indexável e acessível.</p>
        
        <div class="bg-card p-4 rounded-xl border font-code text-sm text-purple-400">
          &lt;video controls&gt;<br/>
          &nbsp;&nbsp;&lt;source src="video.mp4" type="video/mp4"&gt;<br/>
          &nbsp;&nbsp;&lt;track kind="subtitles" src="subs_pt.vtt" srclang="pt" label="Português"&gt;<br/>
          &lt;/video&gt;
        </div>
      </div>
    </div>
  `,
  quizId: "html-mq7"
};
