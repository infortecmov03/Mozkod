import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "dt-t1",
  title: "VS Code Elite: Configuração e Produtividade",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">⚡ O Teu Quartel-General</h2>
        <p class="text-lg">O VS Code não é apenas um editor de texto; é uma IDE leve e modular. Um engenheiro de elite configura o seu ambiente para remover fricção e focar na lógica.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">1. Extensões Obrigatórias</h3>
        <ul class="grid md:grid-cols-2 gap-4">
          <li class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-accent">Prettier & ESLint:</strong> Garantem que o código está sempre formatado e sem erros de sintaxe.
          </li>
          <li class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-accent">GitLens:</strong> Visualização profunda do histórico de cada linha de código.
          </li>
          <li class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-accent">Vim (Opcional):</strong> Para quem quer atingir a velocidade máxima de edição sem tocar no rato.
          </li>
          <li class="p-4 bg-card border rounded-xl border-white/5">
            <strong class="text-accent">Thunder Client:</strong> Testes de API diretamente no editor.
          </li>
        </ul>

        <h3 class="text-xl font-bold font-headline">2. O Poder da Command Palette</h3>
        <p class="text-sm">O atalho <code>Ctrl+Shift+P</code> (ou <code>Cmd+Shift+P</code>) é a porta de entrada para qualquer comando do VS Code. Nunca procures nos menus; usa a paleta.</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">🚀 Atalhos de Sobrevivência:</h4>
          <ul class="space-y-2 text-xs font-mono">
            <li><span class="text-accent">Ctrl + P</span> : Abrir ficheiro por nome.</li>
            <li><span class="text-accent">Ctrl + \` </span> : Abrir/Fechar o Terminal integrado.</li>
            <li><span class="text-accent">Alt + Click</span> : Múltiplos cursores para edição em massa.</li>
            <li><span class="text-accent">F12</span> : Ir para a definição da função/variável.</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  quizId: "dt-q1"
};
