
import { KnowledgeArea } from '../../types';

export const algorithms: KnowledgeArea = {
  id: 'ka-algorithms',
  title: '01. Algorithms',
  description: 'Lógica de resolução de problemas e algoritmos de busca.',
  supportedLanguages: ['javascript', 'python', 'java', 'cpp'],
  theoryLessons: [
    {
      id: 'alg-t1',
      title: 'Introdução a Algoritmos',
      content: 'Um algoritmo é uma sequência de passos finitos para resolver um problema.',
      beginnerExplanation: 'É como uma receita de bolo: segues os passos na ordem certa para chegar ao resultado final.',
      quiz: []
    }
  ],
  practiceExercises: []
};
