import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "ds-t3",
  title: "Pilhas (Stacks): Lógica LIFO",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">📚 O Último a Entrar é o Primeiro a Sair</h2>
      <p>Pense numa pilha de pratos. Você só pode mexer no prato do topo.</p>
      <div class="bg-card p-4 rounded-xl border">
        <h4 class="font-bold text-primary">Operações:</h4>
        <ul class="list-disc ml-6 mt-2">
          <li><strong>Push:</strong> Adicionar ao topo.</li>
          <li><strong>Pop:</strong> Remover do topo.</li>
          <li><strong>Peek:</strong> Olhar o topo sem remover.</li>
        </ul>
      </div>
      <p class="text-sm text-muted-foreground italic">Uso real: Botão "Retroceder" do navegador e Undo/Redo.</p>
    </div>
  `,
  quizId: "ds-q3"
};
