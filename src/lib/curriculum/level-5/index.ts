
import type { Level } from '../types';

export const level5: Level = {
  id: 5,
  title: 'Nível 5: Especializações',
  description: 'Escolha a sua trilha e aprofunde-se nas tecnologias mais requisitadas do mercado.',
  knowledgeAreas: [
    {
      id: 'ka-web-advanced',
      title: '01. Web Advanced',
      description: 'Mastering React, Next.js e Ecossistema Moderno.',
      load: '50h',
      iconName: 'Zap',
      theory: [
        {
          id: 'web-adv-t1',
          title: 'Arquitetura de Componentes',
          content: '<div class="space-y-4"><h2 class="text-2xl font-bold">React & Next.js</h2><p>Aprenda a construir interfaces performantes com Server Components e Hooks avançados.</p></div>',
          quizId: 'web-adv-t1-quiz'
        }
      ],
      practice: {
        typescript: [
          {
            id: 'web-adv-p1',
            language: 'typescript',
            title: 'Laboratório: Teu Primeiro Hook',
            description: 'Crie um hook customizado para gerir estado.',
            statement: 'Implemente a lógica de incremento no hook useCounter.',
            template: 'function useCounter() {\n  const [count, setCount] = useState(0);\n  const inc = () => {};\n  return { count, inc };\n}',
            detailedExplanation: '<p>Hooks permitem reutilizar lógica de estado entre componentes.</p>',
            objectives: [
              { id: 'obj1', description: 'Usar setCount para incrementar', test: 'setCount(count + 1)' }
            ]
          }
        ]
      },
      quizzes: []
    },
    {
      id: 'ka-ai-ml',
      title: '02. AI & Machine Learning',
      description: 'Fundamentos de IA, Redes Neuronais e Engenharia de Prompts.',
      load: '60h',
      iconName: 'Cpu',
      theory: [],
      practice: {},
      quizzes: []
    },
    {
      id: 'ka-cloud-devops',
      title: '03. Cloud & DevOps',
      description: 'Infraestrutura como código, AWS, Docker e Kubernetes.',
      load: '45h',
      iconName: 'Cloud',
      theory: [],
      practice: {},
      quizzes: []
    }
  ]
};
