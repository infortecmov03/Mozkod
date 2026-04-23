import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "se-t9",
  title: "Pipelines CI/CD: A Engenharia da Integração e Entrega Contínua",
  quizId: "se-q9-master",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🚀 O Fluxo de Valor Automatizado
        </h2>
        <p class="text-lg leading-relaxed">
          Um pipeline de <strong>CI/CD</strong> é a espinha dorsal da engenharia de software moderna. Ele garante que cada alteração de código, por mais pequena que seja, passe por um rigoroso processo de validação antes de chegar às mãos do utilizador.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Continuous Integration (CI)</h3>
        <p class="text-sm">A integração frequente (várias vezes ao dia) evita o "Inferno da Integração". O foco do CI é o <strong>Feedback Rápido</strong>.</p>
        <ul class="list-disc ml-6 space-y-2 text-xs">
          <li><strong>Automated Testing:</strong> Cada push dispara unit tests e linting. Se um falhar, o build é rejeitado.</li>
          <li><strong>Build Artifacts:</strong> O código é compilado e empacotado (ex: imagem Docker ou binário .jar) uma única vez para garantir consistência.</li>
        </ul>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-primary">2. Delivery vs. Deployment: A Diferença de Elite</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-accent/40">
            <h4 class="font-bold text-accent mb-2">Continuous Delivery</h4>
            <p class="text-[10px] text-muted-foreground leading-relaxed">O código está <b>SEMPRE</b> pronto para ser lançado. O pipeline automatiza tudo até ao ambiente de Staging. O lançamento para Produção é uma decisão de negócio (clique manual).</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-green-500/40">
            <h4 class="font-bold text-green-400 mb-2">Continuous Deployment</h4>
            <p class="text-[10px] text-muted-foreground leading-relaxed">Totalmente automático. Se o código passa em todos os testes do pipeline, ele vai para Produção <b>sem intervenção humana</b>. Exige maturidade extrema de testes.</p>
          </div>
        </div>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🧱 Anatomia do Pipeline Industrial</h3>
          <div class="space-y-4 font-mono text-[10px] uppercase">
            <div class="flex gap-4 items-center">
              <span class="w-24 text-accent font-bold">1. LINT</span>
              <span class="flex-1">Valida o estilo e erros estáticos do código (Prettier/ESLint).</span>
            </div>
            <div class="flex gap-4 items-center border-t border-white/5 pt-2">
              <span class="w-24 text-accent font-bold">2. TEST</span>
              <span class="flex-1">Executa testes unitários e de integração em isolamento.</span>
            </div>
            <div class="flex gap-4 items-center border-t border-white/5 pt-2">
              <span class="w-24 text-accent font-bold">3. BUILD</span>
              <span class="flex-1">Gera o artefacto imutável (ex: Imagem Docker).</span>
            </div>
            <div class="flex gap-4 items-center border-t border-white/5 pt-2">
              <span class="w-24 text-accent font-bold">4. SCAN</span>
              <span class="flex-1">Auditoria de vulnerabilidades em dependências (CVEs).</span>
            </div>
            <div class="flex gap-4 items-center border-t border-white/5 pt-2">
              <span class="w-24 text-accent font-bold">5. DEPLOY</span>
              <span class="flex-1">Publicação no ambiente alvo (Staging/Prod).</span>
            </div>
          </div>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Dica Master: Imutabilidade do Artefacto
          </h4>
          <p class="text-sm leading-relaxed">
            Nunca compiles o código novamente entre Staging e Produção. O mesmo ficheiro binário que passou no teste deve ser o que vai para o utilizador. Isto garante que o que foi validado é exatamente o que está a correr no mundo real.
          </p>
        </div>
      </div>
    </div>
  `
};