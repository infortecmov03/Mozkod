import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "hci-t8",
  title: "Arquitetura de Informação: Organizando o Conteúdo",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🗺️ O Mapa do Site</h2>
        <p class="text-lg leading-relaxed">A Arquitetura de Informação (IA) foca em organizar o conteúdo de forma a que os utilizadores o encontrem facilmente. É sobre rotulagem, navegação e sistemas de busca.</p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>Princípios da IA:</h3>
        <ul>
          <li><strong>Card Sorting:</strong> Técnica para entender como os utilizadores agrupam informação.</li>
          <li><strong>Taxonomia:</strong> A classificação hierárquica dos itens.</li>
          <li><strong>Navegação:</strong> Menus, breadcrumbs e footers que guiam o utilizador.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "hci-q8"
};
