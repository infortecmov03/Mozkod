import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t15",
  title: "Sistemas de Ficheiros e Inodes",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📂 Organizando o Caos Digital</h2>
        <p class="text-lg leading-relaxed">
          O disco rígido é apenas um mar de bits. O <strong>Sistema de Ficheiros</strong> (NTFS, Ext4, APFS) é a estrutura lógica que permite ao utilizador ver pastas e ficheiros com nomes.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">O Inode: O Bilhete de Identidade</h3>
        <p>No Linux e Unix, cada ficheiro é representado por um <strong>Inode</strong>. O Inode não guarda o nome do ficheiro, mas sim:</p>
        <ul class="list-disc ml-6 space-y-2 text-sm">
          <li><strong>Tamanho:</strong> Quantos bytes o ficheiro tem.</li>
          <li><strong>Localização:</strong> Onde os dados estão fisicamente no disco.</li>
          <li><strong>Permissões:</strong> Quem pode ler ou escrever.</li>
          <li><strong>Timestamps:</strong> Quando foi criado ou alterado.</li>
        </ul>

        <div class="bg-indigo-500/5 p-5 rounded-xl border border-indigo-500/20">
          <h4 class="font-bold text-indigo-400 mb-2">🧠 Facto Curioso:</h4>
          <p class="text-sm">Um diretório (pasta) é apenas um ficheiro especial que contém uma tabela ligando nomes de ficheiros a números de Inodes.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-t15-quiz"
};