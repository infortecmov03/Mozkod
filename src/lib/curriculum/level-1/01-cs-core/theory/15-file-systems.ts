import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t15",
  title: "Sistemas de Ficheiros e Inodes: A Lógica do Armazenamento",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary flex items-center gap-2">
          📂 Organizando o Caos Digital
        </h2>
        <p class="text-lg leading-relaxed">
          Um disco rígido ou SSD é, fisicamente, apenas uma sequência massiva de blocos de bits. O <strong>Sistema de Ficheiros</strong> (como Ext4, NTFS ou APFS) é a estrutura lógica que impõe ordem, permitindo-nos ver nomes, pastas e hierarquias em vez de apenas zeros e uns.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. O Inode: O Bilhete de Identidade</h3>
        <p>Em sistemas baseados em Unix (Linux, macOS), cada ficheiro é identificado por um número de <strong>Inode (Index Node)</strong>. Um facto contra-intuitivo para iniciantes: o Inode <strong>não</strong> guarda o nome do ficheiro, mas guarda tudo o resto:</p>
        
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-accent mb-2">Metadados (No Inode)</h4>
            <ul class="text-xs space-y-1 opacity-80">
              <li>Tamanho do ficheiro em bytes.</li>
              <li>ID do dono e do grupo.</li>
              <li>Permissões (RWX).</li>
              <li>Timestamps (Criação, Acesso, Modificação).</li>
              <li><strong>Ponteiros:</strong> Endereços de onde os dados estão no disco.</li>
            </ul>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-accent mb-2">Dados Reais (No Disco)</h4>
            <ul class="text-xs space-y-1 opacity-80">
              <li>O conteúdo binário do ficheiro (.jpg, .mp4, .txt).</li>
              <li>Dividido em <strong>blocos de dados</strong> (Data Blocks).</li>
            </ul>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Diretórios: Apenas Ficheiros de Mapeamento</h3>
        <p>Para o Sistema Operativo, uma "pasta" é apenas um ficheiro especial que contém uma tabela simples: uma coluna com o <strong>nome do ficheiro</strong> e outra com o seu respetivo <strong>número de Inode</strong>. É por isso que podemos ter "Hard Links" (dois nomes diferentes para o mesmo Inode).</p>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-primary">3. Journaling: A Proteção contra Desastres</h3>
        <p>Sistemas de ficheiros modernos (como Ext4) utilizam o <strong>Journaling</strong>. Antes de escrever uma alteração definitiva, o SO regista a intenção num "diário" (journal). Se a luz cair a meio da escrita, o SO consulta o diário no próximo arranque e recupera a integridade do sistema, evitando ficheiros corrompidos.</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">🧩 Fragmentação e Alocação</h3>
          <p class="text-sm leading-relaxed">
            Quando um ficheiro é guardado, o SO tenta encontrar blocos contíguos (juntos). Se não houver espaço, o ficheiro é "espalhado" pelo disco. Isso chama-se <strong>Fragmentação</strong>. Em HDDs mecânicos, isto é lento (pois a agulha tem de saltar); em SSDs, o impacto é quase nulo, mas ainda exige gestão lógica complexa da <i>Allocation Table</i>.
          </p>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2">🚀 Visão de Elite: Tudo é Ficheiro</h4>
          <p class="text-sm leading-relaxed">
            No Linux, existe o mantra: <i>"Everything is a file"</i>. O teu teclado, o teu monitor e até a tua placa de rede são representados como ficheiros especiais em diretórios como <code>/dev</code> ou <code>/proc</code>. Entender o sistema de ficheiros é entender como o Linux comunica com todo o hardware.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-t15-quiz"
};
