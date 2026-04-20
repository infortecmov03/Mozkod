import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "pf-t8",
  title: "Objetos e Mapas: Estruturando Informação Complexa",
  content: `
    <div class="space-y-6">
      <div class="bg-accent/5 p-6 rounded-2xl border border-accent/10">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
          <span class="text-3xl">🏷️</span> Chave e Valor
        </h2>
        <p class="text-lg leading-relaxed">
          Enquanto um array organiza dados por posição (número), um <strong>Objeto</strong> organiza por nome (chave).
        </p>
      </div>

      <div class="prose prose-neutral dark:prose-invert max-w-none">
        <h3>Exemplo no Mundo Real</h3>
        <p>Um Carro não é apenas uma lista. Ele tem propriedades específicas:</p>
        <div class="bg-card p-5 rounded-xl border font-code">
          carro = {<br/>
          &nbsp;&nbsp;marca: "Toyota",<br/>
          &nbsp;&nbsp;cor: "Azul",<br/>
          &nbsp;&nbsp;ano: 2023<br/>
          }
        </div>
        
        <h3 class="mt-6">Porquê usar Objetos?</h3>
        <ul class="list-disc ml-6 space-y-2">
          <li><strong>Legibilidade:</strong> É mais fácil entender <code>aluno.nota</code> do que <code>aluno[5]</code>.</li>
          <li><strong>Organização:</strong> Permite agrupar dados relacionados num único "pacote".</li>
          <li><strong>Modelagem:</strong> Essencial para representar utilizadores, produtos e qualquer entidade de sistema.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "pf-t8-quiz"
};