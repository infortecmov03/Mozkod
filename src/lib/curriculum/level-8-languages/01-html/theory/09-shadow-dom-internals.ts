import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m9",
  title: "Shadow DOM Internals e Encapsulamento de Elite",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 text-headline">
          🌑 O Escudo do Componente
        </h2>
        <p class="text-lg leading-relaxed">
          O Shadow DOM cria uma fronteira de renderização que impede o vazamento de estilos e eventos. É a tecnologia que permite que tags como <code>&lt;video&gt;</code> tenham botões internos que tu não consegues estilizar por acidente.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Shadow Root: Open vs Closed</h3>
        <p>Ao criar uma sombra, decides se o JavaScript exterior pode espreitar lá para dentro.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-sm border border-white/5">
          <span class="text-muted-foreground">// Modo Open (Recomendado para Design Systems)</span><br/>
          <span class="text-accent">el</span>.<span class="text-primary">attachShadow</span>({ mode: <span class="text-green-400">'open'</span> });<br/>
          <span class="text-muted-foreground">// el.shadowRoot está acessível</span>
        </div>

        <h3 class="text-xl font-bold font-headline">Encapsulamento de Estilos</h3>
        <p>Qualquer CSS definido dentro do Shadow DOM é local. IDs duplicados entre a sombra e a luz (Light DOM) não causam conflitos.</p>
        
        <h3 class="text-xl font-bold font-headline text-accent">Furação Seletiva (CSS Parts)</h3>
        <p>Como permitir que utilizadores estilizem partes do seu componente? Use o atributo <code>part</code>.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs space-y-1">
          <span class="text-muted-foreground">&lt;!-- No componente --&gt;</span><br/>
          <span class="text-primary">&lt;div</span> <span class="text-accent">part</span>=<span class="text-green-400">"tab-active"</span><span class="text-primary">&gt;</span>...<span class="text-primary">&lt;/div&gt;</span><br/><br/>
          <span class="text-muted-foreground">/* No CSS global */</span><br/>
          <span class="text-primary">my-tabs::part</span>(tab-active) { <span class="text-accent">color</span>: gold; }
        </div>
      </div>
    </div>
  `,
  quizId: "html-mq9"
};
