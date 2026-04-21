import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m7",
  title: "Container Queries vs Media Queries",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📦 O Fim da Dependência da Viewport</h2>
        <p class="text-lg leading-relaxed">
          Tradicionalmente, a responsividade (Media Queries) baseia-se no tamanho da janela do browser. Mas num sistema de componentes, o que importa é o <strong>espaço disponível para o componente</strong>.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">A Revolução do Contexto</h3>
        <p>As <strong>Container Queries</strong> permitem que um componente altere o seu estilo baseado no tamanho do seu elemento pai, não do ecrã inteiro. Isto permite que o mesmo card tenha um layout de lista na barra lateral e um layout de banner no centro da página.</p>
        
        <div class="bg-black/40 p-5 rounded-xl border font-code text-sm space-y-4">
          <div class="space-y-1">
            <p class="text-muted-foreground">// 1. Define o elemento como um container</p>
            <p>.parent { <span class="text-accent">container-type</span>: inline-size; }</p>
          </div>
          <div class="space-y-1">
            <p class="text-muted-foreground">// 2. O filho reage ao pai</p>
            <p><span class="text-primary">@container</span> (min-width: 400px) {</p>
            <p>&nbsp;&nbsp;.card { <span class="text-accent">display</span>: flex; }</p>
            <p>}</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline text-accent">Unidades de Medida de Container</h3>
        <p>Agora temos unidades como <code>cqw</code> (1% da largura do container) e <code>cqh</code> (1% da altura do container), permitindo um design verdadeiramente modular.</p>
      </div>
    </div>
  `,
  quizId: "css-mq7"
};
