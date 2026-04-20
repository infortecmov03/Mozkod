import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m2",
  title: "Metaprogramação e Introspeção",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4">🎭 Código que Escreve Código</h2>
        <p>A metaprogramação permite que o Python manipule a sua própria estrutura em tempo de execução. Isto é feito através de decoradores, metaclasses e introspeção.</p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>Ferramentas de Introspeção</h3>
        <ul>
          <li><strong>type() e isinstance():</strong> Verificar tipos.</li>
          <li><strong>getattr() e setattr():</strong> Aceder a atributos dinamicamente.</li>
          <li><strong>__dict__:</strong> O dicionário interno de atributos do objeto.</li>
        </ul>
        <h3 class="mt-6">Metaclasses</h3>
        <p>Uma metaclasse é a classe de uma classe. Elas permitem intercetar a criação de classes para validar regras de negócio ou injetar comportamentos automaticamente.</p>
      </div>
    </div>
  `,
  quizId: "py-mq2"
};
