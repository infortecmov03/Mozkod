
import { KnowledgeArea } from '../../types';

export const softwareEngineering: KnowledgeArea = {
  id: 'ka-se',
  title: '01. Software Engineering',
  description: 'Metodologias e Ciclo de Vida de Software.',
  supportedLanguages: [],
  theoryLessons: [
    {
      id: 'se-t1',
      title: 'Metodologias Ágeis',
      content: 'A agilidade foca na entrega contínua de valor e feedback rápido.',
      beginnerExplanation: 'Em vez de construir um carro todo de uma vez, fazemos primeiro um skate, depois uma bicicleta, para testar se o cliente gosta de se mover.',
      quiz: [
        {
          id: 'q1',
          question: 'O que é um Sprint?',
          options: ['Uma corrida longa', 'Um ciclo curto de trabalho', 'Um erro de código'],
          correctAnswer: 1
        }
      ]
    }
  ],
  practiceExercises: []
};
