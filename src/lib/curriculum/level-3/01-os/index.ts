
import { KnowledgeArea } from '../../types';

export const os: KnowledgeArea = {
  id: 'ka-os',
  title: '01. Operating Systems',
  description: 'Funcionamento interno do Kernel e gestão de processos.',
  supportedLanguages: ['bash'],
  theoryLessons: [
    {
      id: 'os-t1',
      title: 'O que é um Sistema Operativo?',
      content: 'O SO é o software que gere todo o hardware e outros softwares num computador.',
      beginnerExplanation: 'Imagina que o SO é o gerente de um restaurante. Ele decide quem usa o fogão (processador) e onde guardar os ingredientes (memória).',
      quiz: [
        {
          id: 'q1',
          question: 'Qual a principal função do Kernel?',
          options: ['Desenhar ícones', 'Gerir o hardware', 'Navegar na web'],
          correctAnswer: 1
        }
      ]
    }
  ],
  practiceExercises: [
    {
      id: 'os-p1',
      title: 'Laboratório: Explorando o Terminal',
      description: 'Aprenda a navegar no sistema usando comandos.',
      beginnerGuide: 'O Terminal permite dar ordens diretas ao "gerente" (SO).',
      objectives: [
        {
          id: 'obj-1',
          title: 'Onde estou?',
          description: 'Use o comando para ver o diretório atual.',
          explanation: 'O comando "pwd" (print working directory) mostra a sua localização.',
          hint: 'pwd',
          validationRegex: 'pwd'
        }
      ],
      starterCode: {
        bash: '# Digite o comando para ver a pasta atual\n'
      }
    }
  ]
};
