import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "dt-t2",
  title: "Terminal Mastery: Bash, Zsh e Navegação",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          🐚 A Linha de Comandos
        </h2>
        <p class="text-lg leading-relaxed">O terminal é a interface mais poderosa para interagir com o computador. Um engenheiro profissional passa 70% do tempo no terminal, seja navegando, compilando ou gerindo servidores.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">Comandos de Sobrevivência</h3>
        <ul class="grid md:grid-cols-2 gap-4">
          <li class="p-3 bg-muted/20 rounded-xl font-mono text-xs">
            <b class="text-accent">ls -la</b> : Lista todos os ficheiros (incluindo ocultos).
          </li>
          <li class="p-3 bg-muted/20 rounded-xl font-mono text-xs">
            <b class="text-accent">cd ..</b> : Sobe um nível na árvore de pastas.
          </li>
          <li class="p-3 bg-muted/20 rounded-xl font-mono text-xs">
            <b class="text-accent">mkdir -p</b> : Cria pastas e subpastas de uma vez.
          </li>
          <li class="p-3 bg-muted/20 rounded-xl font-mono text-xs">
            <b class="text-accent">rm -rf</b> : Remove ficheiros ou pastas recursivamente. ⚠️ Cuidado!
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline text-primary">Permissões e Sudo</h3>
        <p class="text-sm">Em sistemas baseados em Unix, as permissões decidem quem pode Ler (r), Escrever (w) e Executar (x). O comando <code>chmod</code> é usado para alterar estes privilégios.</p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">💎 Dica de Elite: Oh My Zsh</h4>
          <p class="text-sm leading-relaxed">
            Personaliza o teu terminal com plugins e temas que mostram o branch do Git e o status do sistema. Um terminal visualmente rico reduz o cansaço e evita erros.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "dt-q2"
};
