
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "jv-m6",
  title: "Transações e Propriedades ACID: A Engenharia da Consistência",
  quizId: "jv-mq6",
  content: `
    <div class="space-y-8">
      <div class="bg-red-500/5 p-6 rounded-2xl border border-red-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-red-400 flex items-center gap-2">💎 O Contrato Sagrado dos Dados</h2>
        <p class="text-lg">Num sistema bancário, as transações são a unidade atómica de trabalho. Se um passo falha, tudo deve ser revertido.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">As 4 Garantias ACID</h3>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl">
            <strong class="text-primary block">Atomicity (Atomicidade):</strong> Tudo ou nada. Em Java, usamos o <code>@Transactional</code> do Spring para garantir este comportamento via AOP.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl">
            <strong class="text-primary block">Consistency (Consistência):</strong> O banco de dados move-se de um estado válido para outro. Regras de integridade (PK/FK) nunca são violadas.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl">
            <strong class="text-primary block">Isolation (Isolamento):</strong> Transações paralelas não vêm o estado intermédio uma da outra. Níveis master incluem <i>Serializable</i> e <i>Snapshot Isolation</i>.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl">
            <strong class="text-primary block">Durability (Durabilidade):</strong> Uma vez feito o commit, o dado é escrito no log (WAL) e sobrevive a falhas de energia.
          </li>
        </ul>
      </div>
    </div>
  `
};
