import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m1",
  title: "Arquitetura de Documentos: A Estrutura Master",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
          🏗️ O Esqueleto de Alta Performance
        </h2>
        <p class="text-lg leading-relaxed">
          No nível Master, a estrutura básica não é apenas sobre colocar tags, mas sobre como o <strong>Browser Engine</strong> processa o documento. A ordem dos elementos no <code class="text-primary">&lt;head&gt;</code> define o caminho crítico de renderização.
        </p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>1. O Doctype e o Modo de Renderização</h3>
        <p>O <code><!DOCTYPE html></code> é o gatilho que impede o browser de entrar em "Quirks Mode", garantindo que os padrões modernos de CSS e JS sejam aplicados corretamente.</p>

        <h3>2. O Elemento Raiz e Localização</h3>
        <p>Definir o atributo <code>lang</code> no <code>&lt;html&gt;</code> é a primeira regra de ouro para acessibilidade (leitores de ecrã) e SEO geolocalizado.</p>
        
        <div class="bg-card p-4 rounded-xl border font-code text-sm">
          &lt;html lang="pt-MZ"&gt; <!-- Otimizado para Moçambique -->
        </div>

        <h3 class="mt-6">3. Ciclo de Vida do Parsing</h3>
        <p>O navegador lê o HTML de cima para baixo. Bloqueios no cabeçalho (CSS pesado ou JS sem async/defer) atrasam a exibição do primeiro pixel para o utilizador.</p>
      </div>
    </div>
  `,
  quizId: "html-mq1"
};
