
import type { KnowledgeArea } from '../../types';

export const algorithms: KnowledgeArea = {
  id: 'ka-algorithms',
  title: '01. Algorithms',
  description: 'Lógica de resolução de problemas e algoritmos de busca.',
  load: '30h',
  iconName: 'Zap',
  theory: [
    {
      id: 'alg-t1',
      title: 'Introdução a Algoritmos',
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">O que é um Algoritmo?</h2>
          <p>Um algoritmo é uma sequência de passos finitos para resolver um problema.</p>
          <div class="bg-primary/5 p-4 rounded-lg border border-primary/10">
            <p class="italic text-sm">"É como uma receita de bolo: segues os passos na ordem certa para chegar ao resultado final."</p>
          </div>
        </div>
      `,
      quizId: 'alg-t1-quiz'
    },
    {
      id: 'alg-t2',
      title: 'Busca Binária vs Linear',
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">Eficiência na Procura</h2>
          <p>A busca linear verifica item por item. A busca binária corta o problema ao meio a cada passo, mas exige dados ordenados.</p>
          <div class="bg-card p-4 rounded-xl border font-code text-primary">
            Linear: O(n) | Binária: O(log n)
          </div>
        </div>
      `,
      quizId: 'alg-t2-quiz'
    }
  ],
  practice: {
    javascript: [
      {
        id: 'alg-p1',
        language: 'javascript',
        title: 'Laboratório: Busca Sequencial',
        description: 'Implementação de uma busca sequencial simples.',
        statement: 'Cria um algoritmo que verifica se um número existe num array.',
        template: 'function busca(lista, alvo) {\n  for(let i=0; i < lista.length; i++) {\n    if(lista[i] === alvo) return true;\n  }\n  return false;\n}',
        detailedExplanation: '<p>Percorre a lista e compara cada elemento com o alvo.</p>',
        objectives: [
          { id: 'obj1', description: 'Usar um loop for', test: 'for' }
        ]
      }
    ]
  },
  quizzes: [
    {
      id: 'alg-t1-quiz',
      title: 'Quiz: Introdução a Algoritmos',
      passingScore: 70,
      questions: [
        {
          id: 'q1',
          question: 'O que define um algoritmo?',
          options: ['Um erro no computador', 'Uma sequência de passos para resolver um problema', 'Um hardware específico'],
          correctAnswer: 1
        }
      ]
    },
    {
      id: 'alg-t2-quiz',
      title: 'Quiz: Estratégias de Busca',
      passingScore: 70,
      questions: [
        {
          id: 'q1',
          question: 'Qual a pré-condição para a busca binária?',
          options: ['Lista vazia', 'Lista ordenada', 'Lista de strings'],
          correctAnswer: 1
        }
      ]
    }
  ]
};
