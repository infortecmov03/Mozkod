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
            <p class="text-[10px] opacity-70 leading-relaxed">Impede que o JavaScript aceda ao cookie. Se um atacante injetar um script (XSS), ele não conseguirá ler o seu token de sessão via document.cookie.</p>
          </div>
          <div class="p-6 bg-card border rounded-2xl border-white/5 shadow-lg">
            <h4 class="font-bold text-red-400 mb-2">Secure</h4>
            <p class="text-[10px] opacity-70 leading-relaxed">Garante que o cookie só viaja em ligações encriptadas (HTTPS). Nunca é enviado em redes Wi-Fi abertas ou inseguras.</p>
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

      <!-- 3. STORAGE AUDIT -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Auditoria: Onde guardar o quê?</h3>
        <p class="text-sm">Um erro estratégico é guardar dados sensíveis no local errado. Utilize esta matriz de decisão Master para o seu projeto:</p>
        
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
                <td class="p-3 text-muted-foreground">Proteção nativa do browser contra roubo via scripts XSS.</td>
              </tr>
              <tr class="border-t border-white/5">
                <td class="p-3 font-bold">Preferências (Tema/Idioma)</td>
                <td class="p-3 text-blue-400 font-bold">LocalStorage</td>
                <td class="p-3 text-muted-foreground">Acesso síncrono e simples no carregamento da página.</td>
              </tr>
              <tr class="border-t border-white/5">
                <td class="p-3 font-bold">Dados do App (Offline)</td>
                <td class="p-3 text-yellow-400 font-bold">IndexedDB</td>
                <td class="p-3 text-muted-foreground">Suporte a grandes volumes, objetos e transações atómicas.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 4. CAPSTONE INTERATIVO -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">4. Simulador de Política de Segurança</h3>
        <p class="text-sm leading-relaxed">Experimente o impacto das flags. No motor de preview, observe como o JavaScript falha ao tentar ler um cookie protegido com HttpOnly.</p>
        
        <pre><code class="language-html">
&lt;div id="security-log" style="font-family:monospace; font-size:12px; color:green; background:#000; padding:15px; border-radius:8px;"&gt;
  &gt; Iniciando auditoria de segurança...&lt;br&gt;
&lt;/div&gt;

&lt;script&gt;
  const log = document.getElementById('security-log');
  
  // 1. Simulação de escrita de cookie inseguro (Acessível ao JS)
  document.cookie = "insecure_token=amador_123; SameSite=Strict; Secure";
  
  log.innerHTML += "&gt; A verificar vulnerabilidade XSS...&lt;br&gt;";
  log.innerHTML += "&gt; Tentando ler cookies via JavaScript:&lt;br&gt;";
  log.innerHTML += " [COOKIES ENCONTRADOS]: " + (document.cookie || 'Nenhum') + "&lt;br&gt;";
  
  if (document.cookie.includes("insecure_token")) {
    log.innerHTML += "&lt;br&gt;&lt;span style='color:#ef4444;'&gt;[ALERTA] Cookie inseguro detectado! Um atacante poderia roubar esta sessão.&lt;/span&gt;";
  } else {
    log.innerHTML += "&lt;br&gt;&lt;span style='color:#22c55e;'&gt;[SUCESSO] Sessão protegida. O script não consegue ler os dados sensíveis.&lt;/span&gt;";
  }
&lt;/script&gt;
        </code></pre>
      </section>

      <section class="bg-red-500/5 p-8 rounded-[2rem] border-2 border-dashed border-red-500/20 text-center">
        <h4 class="text-xl font-bold text-red-400 mb-4">🏆 Certificação Master</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Parabéns, Engenheiro! Completaste a trilha definitiva de HTML Master. Dominaste da estrutura base à segurança bancária. Estás agora apto a liderar a arquitetura de interfaces que movem o mundo digital."
        </p>
      </section>
    </div>
  `
};