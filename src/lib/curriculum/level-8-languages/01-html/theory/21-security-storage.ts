
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m21",
  title: "Security Master: Cookies e Persistência Segura",
  content: `
    <div class="space-y-8">
      <div class="bg-red-500/10 p-6 rounded-2xl border border-red-500/20 text-red-500 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline">🔒 Blindagem Final de Persistência</h2>
        <p class="text-lg">Chegaste ao topo. O último passo de um Engenheiro Master é garantir que as chaves de acesso do utilizador são impenetráveis.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">Atributos de Cookies Inexpugnáveis</h3>
        <ul class="space-y-4">
          <li class="bg-card p-5 rounded-xl border border-white/5">
            <strong class="text-red-400">HttpOnly:</strong> Impede que scripts (mesmo os maliciosos) leiam o cookie. Acaba com 99% do perigo de XSS focado em roubo de sessão.
          </li>
          <li class="bg-card p-5 rounded-xl border border-white/5">
            <strong class="text-red-400">SameSite=Strict:</strong> O cookie nunca viaja em pedidos vindos de outros sites. É a defesa definitiva contra CSRF (Cross-Site Request Forgery).
          </li>
          <li class="bg-card p-5 rounded-xl border border-white/5">
            <strong class="text-red-400">Secure:</strong> Garante que o cookie só viaja via HTTPS. Nunca em rede aberta.
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline">O Futuro: Privacy Sandbox</h3>
        <p>Os cookies de terceiros (Tracking) estão a ser eliminados. O novo HTML Master utiliza APIs como <i>Topics</i> e <i>FLEDGE</i> para publicidade privada e o <strong>CHIPS</strong> para cookies particionados, respeitando a privacidade global por design.</p>
        
        <div class="text-center py-8">
          <p class="text-primary font-bold text-2xl animate-pulse">🎓 Parabéns! Completaste a base de HTML Master.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "html-mq21"
};
