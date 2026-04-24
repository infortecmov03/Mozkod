import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m14",
  title: "Fase 3: Canvas API: Renderização Gráfica 2D",
  enableInteractive: true,
  quizId: "html-mq14",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🖌️ Engenharia Gráfica no Browser
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O elemento <code>&lt;canvas&gt;</code> não é um componente DOM comum; é uma superfície de desenho de baixo nível. Diferente do SVG (vetorial), o Canvas opera em <strong>Immediate Mode</strong>: o browser não guarda a lista de objetos desenhados, ele apenas manipula pixels na memória. No nível Master, isto permite renderizar milhares de partículas a 60 FPS.
        </p>
      </div>

      <!-- 1. O CONTEXTO 2D -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. O Contexto de Renderização</h3>
        <p class="text-sm">Para desenhar, precisamos obter o contexto. O objeto <code>ctx</code> é a sua caixa de ferramentas que contém todos os métodos de pintura.</p>
        
        <div class="space-y-4">
           <pre><code class="language-html">
&lt;canvas id="master-canvas" width="400" height="200" style="border:1px solid #ccc; border-radius:12px;"&gt;&lt;/canvas&gt;

&lt;script&gt;
  const canvas = document.querySelector('#master-canvas');
  const ctx = canvas.getContext('2d');

  // Desenhar um retângulo preenchido
  ctx.fillStyle = '#3b82f6';
  ctx.fillRect(50, 50, 150, 100);

  // Desenhar apenas o contorno
  ctx.strokeStyle = '#ef4444';
  ctx.lineWidth = 5;
  ctx.strokeRect(250, 50, 100, 100);
&lt;/script&gt;
           </code></pre>
        </div>
      </section>

      <!-- 2. CAMINHOS E FORMAS -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Caminhos e Lógica de Desenho</h3>
        <p class="text-sm leading-relaxed">Formas complexas são construídas através de <strong>Paths</strong>. É um processo de três etapas: Iniciar, Desenhar e Preencher (ou Contornar).</p>

        <div class="space-y-4">
           <h4 class="font-bold text-primary text-xs uppercase tracking-widest">Exemplo: Triângulo e Círculo</h4>
           <pre><code class="language-html">
&lt;canvas id="path-canvas" width="400" height="150"&gt;&lt;/canvas&gt;
&lt;script&gt;
  const c = document.querySelector('#path-canvas');
  const d = c.getContext('2d');

  // Desenhar Triângulo
  d.beginPath();
  d.moveTo(50, 130);   // Ponto A
  d.lineTo(100, 30);   // Ponto B
  d.lineTo(150, 130);  // Ponto C
  d.closePath();       // Volta ao Ponto A
  d.fillStyle = 'orange';
  d.fill();

  // Desenhar Círculo (Arco de 360 graus)
  d.beginPath();
  d.arc(300, 80, 50, 0, Math.PI * 2);
  d.strokeStyle = 'green';
  d.stroke();
&lt;/script&gt;
           </code></pre>
        </div>
      </section>

      <!-- 3. ANIMACAO E V-SYNC -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Animação de Elite: requestAnimationFrame</h3>
        <p class="text-sm">Nunca use <code>setInterval</code> para animações. O <code>requestAnimationFrame</code> sincroniza o desenho com a taxa de atualização física do monitor, garantindo fluidez e poupando bateria.</p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">O Loop de Renderização</h4>
          <pre><code class="language-javascript">
let x = 0;
function animate() {
  // 1. Limpar o frame anterior (Fundamental!)
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // 2. Atualizar estado
  x += 2;
  if (x > canvas.width) x = 0;
  
  // 3. Desenhar novo estado
  ctx.fillRect(x, 75, 50, 50);
  
  // 4. Solicitar o próximo frame
  requestAnimationFrame(animate);
}
animate();
          </code></pre>
        </div>
      </section>

      <!-- 4. OFFSCREEN CANVAS -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">4. Performance: OffscreenCanvas</h3>
        <p class="text-sm leading-relaxed">A funcionalidade definitiva para sistemas pesados. Permite mover toda a lógica de desenho para um <strong>Web Worker</strong>. Se o processamento gráfico demorar, a interface do site (botões, scroll) continua 100% responsiva.</p>
        
        <pre><code class="language-javascript">
// No script principal:
const offscreen = canvas.transferControlToOffscreen();
const worker = new Worker('painter.js');
worker.postMessage({ canvas: offscreen }, [offscreen]);
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Regra do Arquiteto Gráfico</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Canvas é sobre controle. Você é responsável por cada pixel. Use-o para dados massivos e animações complexas, mas prefira SVG para ícones e ilustrações que precisam de acessibilidade nativa e SEO."
        </p>
      </section>
    </div>
  `,
};
