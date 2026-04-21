
import type { PracticeExercise } from '../../types';

export const practice = {
  css: [
    {
      id: "css-p1",
      language: "css",
      title: "Lab Master: Estilizando o Projeto Master",
      description: "Agora vamos dar vida ao HTML que construíste no módulo anterior.",
      statement: "Utilize CSS Variables para definir a cor primária como #3b82f6 e aplique ao body.",
      isProjectPart: true, // Herda o HTML do módulo anterior
      template: `:root {
  --primary: #3b82f6;
}

body {
  background: var(--primary);
}`,
      detailedExplanation: "<h3>🎨 Design Systems</h3><p>O CSS Master começa com a organização de variáveis. Como este laboratório herda o teu projeto, podes começar a estilizar as tags que criaste no HTML.</p>",
      objectives: [
        { id: "obj1", description: "Usar variável CSS", test: "var(--primary)" }
      ]
    }
    // ... outros labs seguem a mesma lógica
  ]
};
