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
          Chegaste ao topo da engenharia HTML. A lição final foca na <strong>Segurança de Estado</strong>. No nível Master, entendemos que onde e como guardas os dados do utilizador define a resiliência do sistema contra ataques cibernéticos globais como XSS e CSRF.
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
            <p class="text-[10px] opacity-70 leading-relaxed">Garante que o cookie só viaja em ligações encriptadas (HTTPS). <strong>⚠️ Importante:</strong> Se o seu site estiver em HTTP (sem S), a flag 'Secure' fará com que o browser <strong>não envie nem guarde</strong> o cookie, protegendo o utilizador de transmissões em texto limpo.</p>
          </div>
          <div class="p-6 bg-card border rounded-2xl border-white/5 shadow-lg">
            <h4 class="font-bold text-red-400 mb-2">SameSite=Strict</h4>
            <p class="text-[10px] opacity-70 leading-relaxed">O cookie nunca é enviado em pedidos vindos de outros sites. A defesa definitiva contra ataques CSRF (falsificação de pedidos).</p>
          </div>
        </div>
      </section>

      <!-- 2. DATA PARTITIONING (CHIPS) -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. O Futuro: CHIPS e Cookies Particionados</h3>
        <p class="text-sm leading-relaxed">Com o fim dos cookies de terceiros, o browser introduziu o <strong>CHIPS (Cookies Having Independent Partitioned State)</strong>. O atributo <code>Partitioned</code> permite guardar cookies de embutidos (widgets) de forma isolada por site, mantendo a privacidade total do utilizador.</p>

        <div class="space-y-4">
           <h4 class="font-bold text-primary text-xs uppercase tracking-widest">Exemplo de Cabeçalho Seguro</h4>
           <div class="bg-black/40 p-5 rounded-xl border font-code text-xs text-accent shadow-inner">
             Set-Cookie: session_id=xyz123; <span class="text-green-400">Secure; HttpOnly; SameSite=Strict; Partitioned;</span>
           </div>
        </div>
      </section>

      <!-- 3. PERSISTÊNCIA DURÁVEL -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Persistência Durável (Durable Storage)</h3>
        <p class="text-sm">Por padrão, o browser pode apagar dados do IndexedDB ou LocalStorage se o disco do utilizador ficar cheio (Best-effort). Para aplicações críticas (ex: um editor offline), precisamos de solicitar que o armazenamento seja <strong>Persistente</strong>.</p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">A API navigator.storage</h4>
          <p class="text-xs mb-4">Utilizamos o método <code>persist()</code> para pedir ao browser que não descarte os nossos dados sob pressão de disco.</p>
          <pre><code class="language-javascript">
async function requestPersistence() {
  if (navigator.storage && navigator.storage.persist) {
    const isPersisted = await navigator.storage.persist();
    if (isPersisted) {
      console.log("Os dados estão seguros contra limpeza automática!");
    }
  }
}
          </code></pre>
        </div>
      </section>

      <!-- 4. MATRIZ DE AUDITORIA -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">4. Auditoria: Onde guardar o quê?</h3>
        <div class="overflow-x-auto rounded-xl border border-white/10">
          <table class="w-full border-collapse text-xs">
            <thead>
              <tr class="bg-muted/50">
                <th class="p-3 text-left">Tipo de Dado</th>
                <th class="p-3 text-left">Recomendação</th>
                <th class="p-3 text-left">Razão Técnica</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t border-white/5">
                <td class="p-3 font-bold">Token JWT (Sessão)</td>
                <td class="p-3 text-green-400 font-bold">Cookie (HttpOnly)</td>
                <td class="p-3 text-muted-foreground">Proteção nativa contra roubo via scripts XSS.</td>
              </tr>
              <tr class="border-t border-white/5">
                <td class="p-3 font-bold">Preferências (Tema/Idioma)</td>
                <td class="p-3 text-blue-400 font-bold">LocalStorage</td>
                <td class="p-3 text-muted-foreground">Acesso síncrono simples.</td>
              </tr>
              <tr class="border-t border-white/5">
                <td class="p-3 font-bold">Dados Offline (Gigabytes)</td>
                <td class="p-3 text-yellow-400 font-bold">IndexedDB + Persistence</td>
                <td class="p-3 text-muted-foreground">Suporte a grandes volumes e garantia de não-exclusão.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="bg-red-500/5 p-8 rounded-[2rem] border-2 border-dashed border-red-500/20 text-center">
        <h4 class="text-xl font-bold text-red-400 mb-4">🏆 Certificação Master</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Parabéns, Engenheiro! Completaste a trilha definitiva de HTML Master. Dominaste da estrutura base à segurança bancária. Estás agora apto a liderar a arquitetura de interfaces que movem o mundo digital."
        </p>
      </section>
    </div>
  `,
};
