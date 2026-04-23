import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "hci-t16",
  title: "Dark Patterns e Ética do Design",
  content: `
    <div class="space-y-8">
      <div class="bg-red-500/10 p-6 rounded-2xl border border-red-500/20 text-red-100 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-red-400">🚫 Design Malicioso</h2>
        <p class="text-lg leading-relaxed">Dark Patterns são truques de interface usados para enganar utilizadores a fazerem algo que não pretendiam (ex: assinar um serviço por engano).</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Exemplos Comuns:</h3>
        <ul class="space-y-3 text-sm">
          <li><strong>Roach Motel:</strong> Fácil de entrar, impossível de sair (ex: cancelar conta).</li>
          <li><strong>Confirmshaming:</strong> Fazer o utilizador sentir-se culpado por não aceitar algo.</li>
          <li><strong>Bait and Switch:</strong> O botão faz algo diferente do que parece.</li>
        </ul>
        <p class="text-sm italic border-l-4 border-primary pl-4">"O papel do Engenheiro de Elite é construir confiança, não armadilhas."</p>
      </div>
    </div>
  `,
  quizId: "hci-q16"
};
