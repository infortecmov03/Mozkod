import type { TheoryLesson } from '../../../types';
export const lesson: TheoryLesson = {
  id: "pf-t12",
  title: "Tratamento de Exceções e Erros",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">🛡️ Programação Defensiva</h2>
      <p>Aprender a antecipar que algo vai falhar (rede, ficheiros, input) é o que diferencia um amador de um profissional.</p>
      <div class="bg-card p-4 rounded-xl border font-code">
        try { <br/>
        &nbsp;&nbsp;processarDados(); <br/>
        } catch (erro) { <br/>
        &nbsp;&nbsp;logarErro(erro); <br/>
        }
      </div>
    </div>
  `,
  quizId: "pf-q12"
};