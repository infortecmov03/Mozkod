import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t14",
  title: "Memória Virtual e Paginação",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🖼️ A Ilusão da RAM Infinita</h2>
        <p class="text-lg leading-relaxed">
          A Memória Virtual permite que o Sistema Operativo corra programas maiores do que a RAM física instalada, usando uma parte do disco (SSD/HDD) como extensão.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">Paginação (Paging)</h3>
        <p>O SO divide a memória em blocos de tamanho fixo chamados <strong>Páginas</strong>. Se a RAM ficar cheia, o SO move as páginas menos usadas para o disco (Swap).</p>
        
        <div class="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
          <h4 class="font-bold text-yellow-500 mb-2">🛑 Page Fault:</h4>
          <p class="text-xs">Acontece quando o processador pede um dado que foi movido para o disco. O SO tem de interromper tudo, ir ao disco (lento) e trazer o dado de volta para a RAM. Isto é o que causa "travamentos" no PC.</p>
        </div>

        <h3 class="text-xl font-bold font-headline">MMU: O Tradutor Mágico</h3>
        <p>A Unidade de Gestão de Memória (MMU) traduz os endereços 'virtuais' do programa para endereços 'físicos' reais na RAM, garantindo que um programa nunca aceda aos dados de outro (Isolamento).</p>
      </div>
    </div>
  `,
  quizId: "cs-t14-quiz"
};