
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m1",
  title: "CPython Internals e o GIL",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4">⚙️ O Coração do Python</h2>
        <p class="text-lg">Para ser um mestre em Python, deves entender como o CPython (a implementação padrão) executa o teu código.</p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>O que é o GIL (Global Interpreter Lock)?</h3>
        <p>O GIL é um mutex que protege o acesso aos objetos do Python, impedindo que múltiplas threads executem bytecodes simultaneamente. Isto garante a segurança da memória mas limita o paralelismo em CPUs multicore para tarefas de computação pura.</p>
        
        <h3>Bytecode e Stack Machine</h3>
        <p>O Python compila o teu código para <strong>Bytecode</strong> (.pyc), que é depois executado por uma máquina virtual baseada em stack.</p>
      </div>
    </div>
  `,
  quizId: "py-mq1"
};
