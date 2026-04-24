
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m21",
  title: "Fase 3: Capstone: Auditoria de Segurança e Cookies",
  enableInteractive: true,
  quizId: "html-mq21",
  content: `
    <div class="space-y-12">
      <div class="bg-red-500/10 p-8 rounded-[2.5rem] border border-red-500/20 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-red-400 flex items-center gap-3">
          🔒 A Última Linha de Defesa
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Chegaste ao topo da engenharia HTML. A lição final foca na <strong>Segurança de Estado</strong>. No nível Master, entendemos que onde e como guardas os dados do utilizador define a resiliência do sistema contra ataques cibernéticos globais.
        </p>
      </div>

      <!-- 1. COOKIE SECURITY FLAGS -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Cookies de Nível Bancário</h3>
        <p class="text-sm">Cookies não são apenas ficheiros de texto; são tokens de identidade. Para evitar o roubo de sessão, deves utilizar as três bandeiras de segurança obrigatórias em produção.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-6 bg-card border rounded-2xl border-white/5 shadow-lg">
            <h4 class="font-bold text-red-400 mb-2">HttpOnly</h4>
            <p class="text-[10px] opacity-70 leading-relaxed">Impede que o JavaScript aceda ao cookie. Se um atacante injetar um script (XSS), ele não conseguirá ler o seu token de sessão via <code>document.cookie</code>.</p>
          </div>
          <div class="p-6 bg-card border rounded-2xl border-white/5 shadow-lg">
            <h4 class="font-bold text-red-400 mb-2">Secure</h4>
            <p class="text-[10px] opacity-70 leading-relaxed">Garante que o cookie só viaja em ligações encriptadas (HTTPS). <strong>⚠️ Comportamento em HTTP:</strong> Se o seu site for apenas HTTP, o browser <strong>descarta</strong> o cookie com flag Secure, impedindo que seja guardado.</p>
          </div>
          <div class="p-6 bg-card border rounded-2xl border-white/5 shadow-lg">
            <h4 class="font-bold text-red-400 mb-2">SameSite=Strict</h4>
            <p class="text-[10px] opacity-70 leading-relaxed">O cookie nunca é enviado em pedidos vindos de outros sites. A defesa definitiva contra ataques CSRF (falsificação de pedidos).</p>
          </div>
        </div>
      </section>

      <!-- 2. PERSISTÊNCIA DURÁVEL -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Durable Storage: Protegendo o IndexedDB</h3>
        <p class="text-sm leading-relaxed">Por padrão, o browser apaga dados locais se o disco encher. No nível Master, usamos a API de Persistência para evitar que dados críticos do utilizador desapareçam.</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">navigator.storage.persist()</h4>
          <p class="text-xs mb-4">Esta técnica garante que os dados do <strong>IndexedDB</strong> e <strong>LocalStorage</strong> não sejam descartados automaticamente sob pressão de disco.</p>
          <pre><code class="language-javascript">
if (navigator.storage && navigator.storage.persist) {
  const isPersisted = await navigator.storage.persist();
  console.log("Persistência Durável: " + (isPersisted ? "ATIVO" : "NEGADO"));
}
          </code></pre>
        </div>
      </section>

      <!-- 3. MATRIZ DE AUDITORIA FINAL -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Matriz de Auditoria de Dados</h3>
        <div class="overflow-x-auto rounded-xl border border-white/10">
          <table class="w-full border-collapse text-xs">
            <thead>
              <tr class="bg-muted/50">
                <th class="p-3 text-left">Tipo de Dado</th>
                <th class="p-3 text-left">Recomendação</th>
                <th class="p-3 text-left">Persistência</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t border-white/5">
                <td class="p-3 font-bold">Session Token</td>
                <td class="p-3 text-green-400">Cookie (HttpOnly; Secure)</td>
                <td class="p-3">Volátil/Sessão</td>
              </tr>
              <tr class="border-t border-white/5">
                <td class="p-3 font-bold">User Theme</td>
                <td class="p-3 text-blue-400">LocalStorage</td>
                <td class="p-3">Permanente</td>
              </tr>
              <tr class="border-t border-white/5">
                <td class="p-3 font-bold">Offline Sync Data</td>
                <td class="p-3 text-yellow-400">IndexedDB</td>
                <td class="p-3">Durável (Persisted)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Graduação Master</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Parabéns, Engenheiro! Você completou a trilha definitiva de HTML Master. Dominou da estrutura base à segurança bancária. O seu Projeto Master é agora um testemunho da sua excelência técnica."
        </p>
      </section>
    </div>
  `,
};
