import type { TheoryLesson } from '../../../types';
export const lesson: TheoryLesson = {
  id: "pf-t12",
  title: "Tratamento de Exceções e Erros",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold text-red-500">🛡️ Programação Defensiva</h2>
      <p>Sistemas robustos não crasham; eles lidam com falhas de forma elegante usando Try/Catch/Finally.</p>
      <div class="bg-card p-4 rounded-xl border font-code text-sm">
        try { <br/>
        &nbsp;&nbsp;abrirFicheiro(); <br/>
        } catch (erro) { <br/>
        &nbsp;&nbsp;avisarUtilizador(erro); <br/>
        }
      </div>
    </div>
  `,
  quizId: "pf-q12"
};
