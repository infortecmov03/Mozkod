import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t18",
  title: "Deteção e Correção de Erros: A Integridade dos Bits",
  content: `
    <div class="space-y-8">
      <div class="bg-red-500/5 p-6 rounded-2xl border border-red-500/10 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 font-headline text-red-400 flex items-center gap-2">
          🛡️ Sobrevivendo ao Ruído Físico
        </h2>
        <p class="text-lg leading-relaxed">
          No mundo real, os bits não são perfeitos. Interferência eletromagnética, calor extremo ou até raios cósmicos podem causar o chamado <strong>Bit Flip</strong> (um 0 torna-se 1 ou vice-versa). Sem mecanismos de correção, um único bit errado poderia corromper um ficheiro inteiro ou causar um crash no sistema.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Métodos de Deteção (Saber que algo falhou)</h3>
        <p>Estes métodos indicam que o dado está corrompido, mas geralmente não conseguem recuperá-lo.</p>
        
        <div class="grid md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-accent mb-2">Bit de Paridade</h4>
            <p class="text-xs text-muted-foreground">Adiciona-se um bit extra ao final de um byte. Na <b>Paridade Par</b>, o bit extra garante que o número total de '1s' seja par. Se chegar um número ímpar de '1s', o sistema sabe que houve um erro.</p>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5">
            <h4 class="font-bold text-accent mb-2">Checksum (Soma de Verificação)</h4>
            <p class="text-xs text-muted-foreground">O emissor soma todos os valores dos dados e envia o resultado. O recetor faz a mesma conta. Se os resultados forem diferentes, o pacote é descartado. Muito usado em downloads e rede.</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2 text-primary">2. Métodos de Correção (Reparar o erro)</h3>
        <p>Engenharia de elite utiliza redundância matemática para não só detetar, mas também <strong>reverter</strong> o bit errado para o seu estado original.</p>
        
        <div class="space-y-4">
          <div class="p-5 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 shadow-inner">
            <h4 class="font-bold text-indigo-400 mb-2">Código de Hamming</h4>
            <p class="text-sm leading-relaxed">
              Criado por Richard Hamming, este algoritmo insere bits de verificação em posições estratégicas (potências de 2). Através de uma matriz de paridade, o computador consegue identificar a COORDENADA exata do bit que inverteu e desinvertê-lo instantaneamente.
            </p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline">3. ECC RAM: Memória de Missão Crítica</h3>
        <p class="text-sm leading-relaxed">
          As memórias <strong>ECC (Error Correction Code)</strong> possuem um chip extra para guardar estes bits de redundância. São obrigatórias em servidores, bancos e missões espaciais, onde um erro de memória "silencioso" poderia causar prejuízos de milhões ou desastres humanos.
        </p>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2 flex items-center gap-2">
            🚀 Visão de Engenheiro
          </h4>
          <p class="text-sm leading-relaxed">
            Como desenvolvedor, deves saber que embora o hardware trate a maioria dos erros, em sistemas distribuídos (rede), deves sempre implementar <strong>Checksums</strong> ou <strong>Hashes de Integridade</strong> na camada de aplicação para garantir que o que foi enviado de Maputo chegou intacto a Londres.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-t18-quiz"
};
