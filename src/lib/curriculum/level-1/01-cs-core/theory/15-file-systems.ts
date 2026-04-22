import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t15",
  title: "Sistemas de Ficheiros: A Arquitetura do Armazenamento",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          📂 Organizando o Caos de Bits
        </h2>
        <p class="text-lg leading-relaxed">
          Para o hardware, um disco é apenas uma sequência linear de setores. O <strong>Sistema de Ficheiros</strong> (FS) é a estrutura lógica que permite organizar estes blocos em ficheiros, pastas e permissões, garantindo que os dados possam ser recuperados de forma eficiente e segura.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. O Inode: A Estrutura Mestra</h3>
        <p>Em sistemas Linux e Unix, o <strong>Inode (Index Node)</strong> é o coração do ficheiro. Curiosamente, o Inode <strong>não contém o nome do ficheiro</strong>, mas contém todos os metadados vitais:</p>
        
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-5 bg-card border rounded-2xl border-primary/20 shadow-lg">
            <h4 class="font-bold text-primary mb-3">Metadados (No Inode)</h4>
            <ul class="text-xs space-y-2 opacity-80">
              <li>📏 Tamanho em Bytes</li>
              <li>👤 Owner ID (UID) e Group ID (GID)</li>
              <li>🔒 Permissões (Read, Write, Execute)</li>
              <li>📅 Timestamps (atime, mtime, ctime)</li>
              <li>📍 <strong>Ponteiros de Blocos:</strong> Onde os dados estão fisicamente.</li>
            </ul>
          </div>
          <div class="p-5 bg-card border rounded-2xl border-accent/20 shadow-lg">
            <h4 class="font-bold text-accent mb-3">O Diretório</h4>
            <p class="text-xs leading-relaxed">Um diretório é apenas um ficheiro especial que contém uma lista de nomes associados a números de Inode. É a ponte entre a linguagem humana e a lógica do sistema.</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Alocação e Fragmentação</h3>
        <p>Como o SO escolhe onde colocar os blocos de um ficheiro? Existem três estratégias principais:</p>
        <ul class="space-y-3">
          <li class="flex gap-4 p-3 bg-muted/20 rounded-xl">
            <span class="font-bold text-accent">Contígua:</span> Rápida (blocos juntos), mas causa fragmentação externa difícil de gerir.
          </li>
          <li class="flex gap-4 p-3 bg-muted/20 rounded-xl">
            <span class="font-bold text-accent">Indexada:</span> O Inode aponta para um bloco de índice que contém os endereços de todos os outros blocos. Permite acesso aleatório rápido.
          </li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🛡️ Journaling: Proteção contra Corrupção</h3>
          <p class="text-sm leading-relaxed mb-4">
            Em sistemas antigos, se a energia caísse durante uma escrita, o sistema de ficheiros ficava corrompido. O <strong>Journaling</strong> resolve isto:
          </p>
          <ol class="space-y-2 text-xs font-mono">
            <li>1. O SO escreve a intenção da mudança num ficheiro de "Diário" (Journal).</li>
            <li>2. O SO realiza a escrita real nos blocos de dados.</li>
            <li>3. O SO remove a entrada do diário.</li>
          </ol>
          <p class="text-[10px] mt-4 opacity-60">Se houver um crash, no próximo boot o SO olha para o Diário e ou completa a tarefa ou desfaz a alteração parcial, garantindo a integridade do disco.</p>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Visão Master: Links e Inodes
          </h4>
          <p class="text-sm leading-relaxed">
            Como um Inode não tem nome, podes ter múltiplos nomes no sistema apontando para o mesmo Inode físico. Isto chama-se <strong>Hard Link</strong>. Se apagares um nome, o ficheiro continua no disco enquanto houver pelo menos um nome (link count > 0) ligado a esse Inode.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-t15-quiz"
};