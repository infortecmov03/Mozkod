import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m5",
  title: "Formulários Master: Validação e UX Profissional",
  content: `
    <div class="space-y-6">
      <div class="bg-blue-500/10 p-6 rounded-2xl border border-blue-500/20">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
          📝 A Fronteira da Interação
        </h2>
        <p class="text-lg">No nível Master, formulários não são apenas inputs. É sobre garantir que o utilizador nunca se sinta perdido, usando validação nativa e atributos avançados.</p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>Atributos de Constraint Validation</h3>
        <ul>
          <li><strong>pattern:</strong> Regex nativa para validação no browser.</li>
          <li><strong>minlength / maxlength:</strong> Controlo rigoroso de caracteres.</li>
          <li><strong>inputmode:</strong> Otimiza o teclado em dispositivos móveis (numeric, email, tel).</li>
          <li><strong>novalidate:</strong> Quando queres assumir o controlo total via JS.</li>
        </ul>
        <h3 class="mt-6">Acessibilidade em Forms</h3>
        <p>Use <code>fieldset</code> e <code>legend</code> para agrupar campos relacionados, e garanta que cada input tem um <code>label</code> explicitamente ligado via <code>for</code>.</p>
      </div>
    </div>
  `,
  quizId: "html-mq5"
};
