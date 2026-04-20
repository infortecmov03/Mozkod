
import type { PracticeExercise } from '../../types';

export const exercise: PracticeExercise = {
  id: "git-p1",
  language: "bash",
  title: "Laboratório: Teu Primeiro Repositório",
  description: "Inicia um projeto com Git.",
  statement: "Usa o comando 'git init' para começar a monitorizar esta pasta.",
  template: "# Digita o comando abaixo\n",
  detailedExplanation: `
    <h3>🚀 Iniciando o Git</h3>
    <p>O comando <code class="text-primary">git init</code> cria uma pasta oculta chamada <strong>.git</strong>. A partir desse momento, o Git passa a "vigiar" tudo o que acontece nessa pasta.</p>
  `,
  objectives: [
    {
      id: "obj1",
      description: "Inicializar o repositório",
      hint: "git init",
      test: "git init"
    }
  ]
};
