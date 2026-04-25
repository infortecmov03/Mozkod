import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-eco-t5",
  title: "Fase 2: DDD Estratégico: Bounded Contexts e Linguagem Ubíqua",
  youtubeVideoId: "raf_id_ddd_strat",
  enableInteractive: true,
  quizId: "php-eco-mq5",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          ⬢ Domando a Complexidade
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O <strong>Domain-Driven Design (DDD)</strong> não é sobre código; é sobre o entendimento profundo do negócio. No nível Master, utilizamos o design estratégico para dividir sistemas gigantes em <button>Bounded Contexts</button> independentes, garantindo que cada parte do software fale a mesma língua que os especialistas do domínio.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Ubiquitous Language (Linguagem Ubíqua)</h3>
        <p class="text-sm leading-relaxed">
          Se o especialista de negócio diz "Apólice", o código deve ter uma classe <code>Policy</code>, e a base de dados uma tabela <code>policies</code>. O fim do "telefone estragado" entre engenheiros e clientes é o segredo da longevidade de sistemas corporativos.
        </p>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Bounded Contexts: Fronteiras de Significado</h3>
        <p class="text-sm">Um "Produto" no contexto de Vendas é diferente de um "Produto" na Logística. Em vez de uma classe gigante com 50 campos, criamos dois modelos separados, isolados por contextos delimitados.</p>
      </div>
    </div>
  `
};
