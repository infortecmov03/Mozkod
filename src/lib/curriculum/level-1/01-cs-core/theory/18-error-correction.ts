import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t18",
  title: "Deteção e Correção de Erros: A Integridade do Bit",
  content: `
    <div class="space-y-8">
      <div class="bg-red-500/5 p-6 rounded-2xl border border-red-500/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-red-400 flex items-center gap-2">
          🛡️ Sobrevivendo ao Ruído Físico
        </h2>
        <p class="text-lg leading-relaxed">
          No mundo real, os bits não são perfeitos. Calor, interferência eletromagnética ou radiação podem causar o <strong>Bit Flip</strong> (um 0 torna-se 1). Sem mecanismos de correção, o teu dinheiro no banco poderia desaparecer ou o teu ficheiro de sistema corromper-se silenciosamente.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Métodos de Deteção (Saber que falhou)</h3>
        <p>Estes métodos indicam que o dado está errado, mas não sabem onde e não o podem reparar.</p>
        
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-accent mb-2">Bit de Paridade</h4>
            <p class="text-xs text-muted-foreground">Adiciona-se um bit extra ao byte. Se o número de '1s' for ímpar num sistema de paridade par, o erro é detetado. <br/><strong>Limitação:</strong> Falha se 2 bits inverterem ao mesmo tempo.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-accent mb-2">Checksum e CRC</h4>
            <p class="text-xs text-muted-foreground">Somas matemáticas complexas enviadas com o pacote. O destinatário refaz a conta. Se não bater, o pacote é descartado. Vital em Downloads e WiFi.</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-primary">2. Código de Hamming: A Auto-Cura</h3>
        <p>A engenharia de elite utiliza <strong>Redundância Inteligente</strong>. O Código de Hamming insere bits de verificação em posições de potência de 2 (1, 2, 4, 8...).</p>
        
        <div class="bg-black/40 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <p class="text-sm italic mb-4">Como funciona a mágica?</p>
          <div class="space-y-3 text-xs">
            <p>1. Cada bit de verificação monitoriza um grupo diferente de bits de dados.</p>
            <p>2. Se ocorre um erro, a combinação de falhas nos bits de verificação cria um <strong>Síndrome</strong>.</p>
            <p>3. Este síndrome é um número binário que indica a <strong>posição exata</strong> do bit que inverteu.</p>
            <p>4. O hardware inverte o bit de volta. O erro foi corrigido em milissegundos!</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline">3. ECC RAM: Memória de Missão Crítica</h3>
        <p>As memórias <strong>ECC (Error Correction Code)</strong> possuem chips extras que guardam estes bits de Hamming. Enquanto uma RAM normal morre num crash (BSOD) se um bit inverter, a ECC deteta e corrige erros de 1 bit sem que o utilizador sequer perceba.</p>
        
        <div class="grid grid-cols-2 gap-4 text-center">
          <div class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <span class="block font-bold text-red-400">Desktop RAM</span>
            <span class="text-[10px]">Mais barata. Sem proteção. Ideal para jogos/casa.</span>
          </div>
          <div class="p-4 bg-muted/20 rounded-xl border border-green-500/20">
            <span class="block font-bold text-green-400">Server/ECC RAM</span>
            <span class="text-[10px]">Mais cara. Obrigatória em Bancos e Nuvens.</span>
          </div>
        </div>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 mt-6 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2 flex items-center gap-2">
            🚀 Visão Master: Distância de Hamming
          </h4>
          <p class="text-sm leading-relaxed">
            Medimos a robustez de um código pela sua <strong>Distância</strong>. Quanto mais bits de diferença existirem entre duas palavras válidas, mais erros o sistema consegue detetar ou corrigir antes que uma mensagem se transforme noutra mensagem válida (porém errada).
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-t18-quiz"
};