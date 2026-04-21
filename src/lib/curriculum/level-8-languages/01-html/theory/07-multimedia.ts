import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m7",
  title: "Multimédia Master: Canvas, Áudio e Vídeo Avançado",
  content: `
    <div class="space-y-8">
      <div class="bg-purple-500/10 p-6 rounded-2xl border border-purple-500/20">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 text-headline">
          🎨 Além dos Pixels Estáticos
        </h2>
        <p class="text-lg">No nível Master, a multimédia não é apenas exibir imagens. É sobre renderização programática e sincronização de dados.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Canvas vs SVG</h3>
        <p>Um Engenheiro deve saber quando usar cada um. SVG é vetorial e parte do DOM. Canvas é uma superfície de pixels (raster) rápida e manipulada por JS.</p>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl">
            <h4 class="font-bold text-primary">Use SVG para:</h4>
            <p class="text-xs">Logos, ícones, ilustrações que precisam de zoom e interação individual com cada forma.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl">
            <h4 class="font-bold text-accent">Use Canvas para:</h4>
            <p class="text-xs">Jogos, visualização de milhões de dados, edição de imagem em tempo real.</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline">Legendagem e WebVTT</h3>
        <p>Para acessibilidade e SEO de vídeo, usamos o elemento <code>&lt;track&gt;</code> ligado a ficheiros <code>.vtt</code>.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-sm">
          <span class="text-primary">&lt;track</span> <span class="text-accent">kind</span>=<span class="text-green-400">"subtitles"</span> <span class="text-accent">src</span>=<span class="text-green-400">"legenda.vtt"</span> <span class="text-accent">srclang</span>=<span class="text-green-400">"pt"</span><span class="text-primary">&gt;</span>
        </div>

        <h3 class="text-xl font-bold font-headline">Media Artístico e a API de Áudio</h3>
        <p>Podes criar sintetizadores de som usando apenas o browser através da <strong>Web Audio API</strong>, processando o áudio em nós de efeitos antes de chegar às colunas do utilizador.</p>
      </div>
    </div>
  `,
  quizId: "html-mq7"
};
