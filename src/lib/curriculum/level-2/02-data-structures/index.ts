
import type { KnowledgeArea } from '../../types';

export const dataStructures: KnowledgeArea = {
  id: 'ka-data-structures',
  title: '02. Data Structures',
  description: 'Listas Ligadas, Árvores e Tabelas Hash.',
  load: '40h',
  iconName: 'Database',
  theory: [
    {
      id: 'ds-t1',
      title: 'Listas Ligadas (Linked Lists)',
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">Para além dos Arrays</h2>
          <p>Ao contrário dos arrays, os elementos de uma lista ligada não estão em posições contíguas na memória. Cada elemento (Node) aponta para o próximo.</p>
          <div class="bg-card p-4 rounded-xl border">
            <p class="font-code text-primary">[Data | Next] -> [Data | Next] -> null</p>
          </div>
        </div>
      `,
      quizId: 'ds-t1-quiz'
    },
    {
      id: 'ds-t2',
      title: 'Árvores Binárias (Trees)',
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">Estruturas Hierárquicas</h2>
          <p>Árvores são usadas para representar hierarquias, como pastas no computador ou o DOM do navegador.</p>
          <ul class="list-disc ml-6 space-y-2">
            <li><strong>Root:</strong> O nó no topo.</li>
            <li><strong>Leaf:</strong> Nós sem filhos.</li>
            <li><strong>Binary Search Tree (BST):</strong> Valores menores à esquerda, maiores à direita.</li>
          </ul>
        </div>
      `,
      quizId: 'ds-t2-quiz'
    }
  ],
  practice: {
    javascript: [
      {
        id: 'ds-p1',
        language: 'javascript',
        title: 'Laboratório: O Nó da Lista',
        description: 'Criação de uma estrutura de Node.',
        statement: 'Crie uma classe Node que tenha as propriedades "valor" e "proximo".',
        template: 'class Node {\n  constructor(valor) {\n    \n  }\n}',
        detailedExplanation: '<p>O construtor deve inicializar o valor e definir o próximo como null por padrão.</p>',
        objectives: [
          { id: 'obj1', description: 'Definir this.valor', test: 'this.valor =' },
          { id: 'obj2', description: 'Definir this.proximo como null', test: 'this.proximo = null' }
        ]
      }
    ]
  },
  quizzes: [
    {
      id: 'ds-t1-quiz',
      title: 'Quiz: Estruturas de Dados',
      passingScore: 70,
      questions: [
        {
          id: 'q1',
          question: 'Em que estrutura o último a entrar é o primeiro a sair?',
          options: ['Fila (Queue)', 'Pilha (Stack)', 'Árvore (Tree)'],
          correctAnswer: 1
        }
      ]
    }
  ]
};
