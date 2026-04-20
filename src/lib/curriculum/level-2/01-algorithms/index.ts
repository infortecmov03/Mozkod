
import type { KnowledgeArea } from '../../types';

export const algorithms: KnowledgeArea = {
  id: 'ka-algorithms',
  title: '01. Algorithms',
  description: 'Lógica de resolução de problemas, ordenação e busca eficiente.',
  load: '35h',
  iconName: 'Zap',
  theory: [
    {
      id: 'alg-t1',
      title: 'Análise de Complexidade (Big O)',
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">Porquê medir a eficiência?</h2>
          <p>Na engenharia de software, não basta que o código funcione; ele deve ser eficiente em termos de tempo e memória.</p>
          <div class="grid gap-4">
            <div class="bg-card p-4 rounded-xl border border-primary/20">
              <h4 class="font-bold text-primary">O(1) - Tempo Constante</h4>
              <p class="text-sm">A execução demora o mesmo, independentemente do volume de dados.</p>
            </div>
            <div class="bg-card p-4 rounded-xl border border-accent/20">
              <h4 class="font-bold text-accent">O(n) - Tempo Linear</h4>
              <p class="text-sm">O tempo cresce proporcionalmente ao número de elementos.</p>
            </div>
            <div class="bg-card p-4 rounded-xl border border-red-500/20">
              <h4 class="font-bold text-red-500">O(n²) - Tempo Quadrático</h4>
              <p class="text-sm">Comum em loops aninhados. Evitar com grandes volumes de dados.</p>
            </div>
          </div>
        </div>
      `,
      quizId: 'alg-t1-quiz'
    },
    {
      id: 'alg-t2',
      title: 'Algoritmos de Ordenação (Bubble & Selection)',
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">Organizando Dados</h2>
          <p>Ordenar é o processo de colocar itens numa sequência específica (numérica ou alfabética).</p>
          <ul class="list-disc ml-6 space-y-2">
            <li><strong>Bubble Sort:</strong> Flutua o maior elemento para o fim a cada iteração.</li>
            <li><strong>Selection Sort:</strong> Encontra o menor elemento e coloca-o no início.</li>
          </ul>
        </div>
      `,
      quizId: 'alg-t2-quiz'
    },
    {
      id: 'alg-t3',
      title: 'Ordenação Eficiente (Merge & Quick)',
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">Dividir para Conquistar</h2>
          <p>Algoritmos modernos como o QuickSort e MergeSort usam recursão para dividir o problema em partes menores.</p>
          <p class="bg-muted p-4 rounded-lg font-code">Complexidade: O(n log n)</p>
        </div>
      `,
      quizId: 'alg-t3-quiz'
    }
  ],
  practice: {
    javascript: [
      {
        id: 'alg-p1',
        language: 'javascript',
        title: 'Laboratório: Bubble Sort',
        description: 'Implementação de ordenação por bolha.',
        statement: 'Implemente o loop principal do Bubble Sort que troca elementos se o da esquerda for maior que o da direita.',
        template: 'function bubbleSort(arr) {\n  for(let i=0; i < arr.length; i++) {\n    for(let j=0; j < arr.length - 1; j++) {\n      if(arr[j] > arr[j+1]) {\n        // Troca aqui\n      }\n    }\n  }\n  return arr;\n}',
        detailedExplanation: '<p>A troca (swap) pode ser feita usando uma variável temporária ou desestruturação.</p>',
        objectives: [
          { id: 'obj1', description: 'Realizar a troca de valores', test: 'arr[j] = arr[j+1]' }
        ]
      }
    ],
    python: [
      {
        id: 'alg-p1-py',
        language: 'python',
        title: 'Laboratório: Selection Sort',
        description: 'Ordenação por seleção em Python.',
        statement: 'Crie um algoritmo que encontre o menor valor de uma lista.',
        template: 'def encontrar_menor(lista):\n    menor = lista[0]\n    # Seu loop aqui\n    return menor',
        detailedExplanation: '<p>Itere pela lista e atualize a variável "menor" sempre que encontrar um valor inferior.</p>',
        objectives: [
          { id: 'obj1', description: 'Encontrar o mínimo', test: 'if item < menor:' }
        ]
      }
    ]
  },
  quizzes: [
    {
      id: 'alg-t1-quiz',
      title: 'Quiz: Análise Big O',
      passingScore: 70,
      questions: [
        {
          id: 'q1',
          question: 'Qual complexidade é mais eficiente para grandes volumes de dados?',
          options: ['O(n²)', 'O(n)', 'O(1)', 'O(n!)'],
          correctAnswer: 2
        }
      ]
    }
  ]
};
