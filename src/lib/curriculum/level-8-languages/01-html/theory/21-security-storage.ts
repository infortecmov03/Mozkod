import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m21",
  title: "Security Master: Cookies e Persistência Segura",
  content: `
    <div class="space-y-8">
      <div class="bg-red-500/10 p-6 rounded-2xl border border-red-500/20 text-red-500">
        <h2 class="text-2xl font-bold mb-4 text-headline">🔒 Blindagem Final</h2>
        <p class="text-lg">Chegaste ao fim. O último passo de um Engenheiro Master é garantir que a persistência de dados é imune a ataques.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline text-red-400">Atributos de Cookies de Elite</h3>
        <ul class="space-y-4">
          <li class="bg-card p-4 rounded-xl border border-white/5">
            <strong>HttpOnly:</strong> Impede que o seu JavaScript (e scripts maliciosos) acedam ao cookie. Proteção máxima contra roubo de sessão.
          </li>
          <li class="bg-card p-4 rounded-xl border border-white/5">
            <strong>SameSite=Strict:</strong> O cookie nunca é enviado em pedidos vindos de outros sites, eliminando ataques de CSRF (Cross-Site Request Forgery).
          </li>
          <li class="bg-card p-4 rounded-xl border border-white/5">
            <strong>Secure:</strong> O cookie só é transmitido sobre ligações HTTPS cifradas.
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline">Privacy Sandbox</h3>
        <p>Entenda que os cookies de terceiros estão a morrer. O futuro da persistência e publicidade na web baseia-se em APIs como <i>Topics</i> e <i>FLEDGE</i>, integradas diretamente no browser para proteger a privacidade do utilizador.</p>
      </div>
    </div>
  `,
  quizId: "html-mq21"
};
