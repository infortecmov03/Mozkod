
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m9",
  title: "Shadow DOM Internals e Encapsulamento de Elite",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
          🌑 O Escudo do Componente
        </h2>
        <p class="text-lg leading-relaxed">
          O Shadow DOM não é apenas "esconder" HTML. É sobre criar uma fronteira de renderização que impede o vazamento de estilos e eventos, permitindo a criação de componentes verdadeiramente isolados.
        </p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>Mode Open vs Closed</h3>
        <p>No modo <strong>open</strong>, a árvore é acessível via <code>element.shadowRoot</code>. No modo <strong>closed</strong>, ela é totalmente privada. Engenheiros de Design Systems usam o modo open para permitir ferramentas de automação e testes.</p>
        
        <h3>CSS Custom Properties (Theming)</h3>
        <p>A única forma recomendada de estilizar dentro de um Shadow DOM por fora é através de variáveis CSS (Custom Properties), que atravessam a fronteira do shadow com segurança.</p>
      </div>
    </div>
  `,
  quizId: "html-mq9"
};
