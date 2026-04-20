
import type { KnowledgeArea } from '../../types';

export const dataStructures: KnowledgeArea = {
  id: 'ka-data-structures',
  title: '02. Data Structures',
  description: 'Organização eficiente de dados: Listas, Pilhas, Filas e Árvores.',
  load: '40h',
  iconName: 'Database',
  theory: [
    {
      id: 'ds-t1',
      title: 'Introdução a Estruturas de Dados',
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">O que são Estruturas de Dados?</h2>
          <p>São formas organizadas de armazenar e gerir dados para que possam ser utilizados de forma eficiente.</p>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="p-4 bg-card border rounded-xl">
              <h4 class="font-bold text-primary">Estáticas</h4>
              <p class="text-xs">Tamanho fixo (ex: Arrays tradicionais).</p>
            </div>
            <div class="p-4 bg-card border rounded-xl">
              <h4 class="font-bold text-accent">Dinâmicas</h4>
              <p class="text-xs">Crescem conforme a necessidade (ex: Listas Ligadas).</p>
            </div>
          </div>
        </div>
      `,
      quizId: 'ds-t1-quiz'
    }
  ],
  practice: {
    javascript: [
      {
        id: 'ds-p1',
        language: 'javascript',
        title: 'Laboratório: Implementando uma Pilha (Stack)',
        description: 'Lógica LIFO (Last In, First Out).',
        statement: 'Cria uma classe Pilha com os métodos push e pop.',
        template: 'class Pilha {\n  constructor() { this.itens = []; }\n  push(elem) { }\n  pop() { }\n}',
        detailedExplanation: '<p>Uma pilha funciona como uma pilha de pratos: o último a entrar é o primeiro a sair.</p>',
        objectives: [
          { id: 'obj1', description: 'Método push deve adicionar elemento', test: 'this.itens.push' },
          { id: 'obj2', description: 'Método pop deve remover elemento', test: 'this.itens.pop' }
        ]
      }
    ]
  },
  quizzes: [
    {
      id: 'ds-t1-quiz',
      title: 'Quiz: Fundamentos de DS',
      passingScore: 70,
      questions: [
        {
          id: 'q1',
          question: 'O que significa LIFO?',
          options: ['Last In, First Out', 'Last In, Fast Out', 'Left In, Right Out'],
          correctAnswer: 0
        }
      ]
    }
  ]
};
