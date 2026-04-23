import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "hci-t6",
  title: "UI Design: Hierarquia Visual e Grelhas",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📏 Guiando o Olhar</h2>
        <p class="text-lg">Hierarquia visual é a organização de elementos para indicar a sua importância. Como engenheiro, usas isto para que o utilizador veja o botão de "Comprar" antes do link de "Termos de Uso".</p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>Ferramentas de Hierarquia:</h3>
        <ul>
          <li><strong>Tamanho:</strong> Elementos maiores atraem a atenção primeiro.</li>
          <li><strong>Cor e Contraste:</strong> Cores vibrantes em fundos neutros criam pontos focais.</li>
          <li><strong>Espaçamento (White Space):</strong> Dá "respiração" e agrupa elementos relacionados.</li>
          <li><strong>Tipografia:</strong> Diferentes pesos (Bold vs Regular) criam níveis de leitura.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "hci-q6"
};
