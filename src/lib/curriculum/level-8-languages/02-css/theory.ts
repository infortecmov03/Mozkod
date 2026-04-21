import type { TheoryLesson } from '../../types';

export const lessons: TheoryLesson[] = [
  {
    id: "css-m1",
    title: "Seletores de Elite e Especificidade",
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">🎯 Domínio da Cascata</h2>
        <p>No nível Master, CSS não é sobre tentativa e erro. É sobre entender exatamente como o motor do browser calcula a prioridade.</p>
        <ul class="list-disc ml-6 space-y-2">
          <li><strong>:is() e :where():</strong> Agrupamento eficiente.</li>
          <li><strong>:has():</strong> O seletor "pai" que permite lógica condicional no CSS.</li>
          <li><strong>Especificidade Zero:</strong> O uso estratégico de :where().</li>
        </ul>
      </div>
    `,
    quizId: "css-mq1"
  },
  {
    id: "css-m2",
    title: "Cascade Layers (@layer)",
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">🛡️ Organização de Arquitetura</h2>
        <p>As Cascade Layers permitem que os engenheiros criem camadas de estilos (reset, framework, components) onde a ordem da camada dita a vitória num conflito, ignorando a especificidade individual.</p>
      </div>
    `,
    quizId: "css-mq2"
  },
  {
    id: "css-m3",
    title: "Grids Avançados e Subgrid",
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">📐 O Santo Graal do Alinhamento</h2>
        <p>Subgrid resolve o problema de alinhar elementos dentro de componentes diferentes com a grelha principal da página.</p>
      </div>
    `,
    quizId: "css-mq3"
  }
];
