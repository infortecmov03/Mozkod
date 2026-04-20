
import type { Level, KnowledgeArea } from '../types';

const webAdvanced: KnowledgeArea = {
  id: 'ka-web-adv',
  title: '01. Web Advanced',
  description: 'Mastering Next.js, Server Components e Performance.',
  load: '50h',
  iconName: 'Zap',
  theory: [
    {
      id: 'web-adv-t1',
      title: 'Hydration e Interatividade',
      content: '<p>Como o Next.js transforma HTML estático em apps React vivas.</p>',
      quizId: 'web-adv-t1-quiz'
    }
  ],
  practice: {
    typescript: [
      {
        id: 'web-adv-p1',
        language: 'typescript',
        title: 'Laboratório: useMemo e Performance',
        description: 'Otimizando re-renderizações.',
        statement: 'Use useMemo para guardar o resultado de um cálculo pesado.',
        template: 'const valor = useMemo(() => calculoPesado(n), [n]);',
        detailedExplanation: '<p>Memoization evita trabalho desnecessário no browser.</p>',
        objectives: [{ id: 'obj1', description: 'Implementar useMemo', test: 'useMemo' }]
      }
    ]
  },
  quizzes: []
};

const aiMlIntro: KnowledgeArea = {
  id: 'ka-ai-ml',
  title: '02. AI & Machine Learning',
  description: 'Redes Neuronais, LLMs e Engenharia de Prompts.',
  load: '60h',
  iconName: 'Cpu',
  theory: [
    {
      id: 'ai-t1',
      title: 'O que são Transformers?',
      content: '<p>A arquitetura por trás do ChatGPT e modelos modernos de linguagem.</p>',
      quizId: 'ai-t1-quiz'
    }
  ],
  practice: {
    python: [
      {
        id: 'ai-p1',
        language: 'python',
        title: 'Laboratório: Teu Primeiro Modelo',
        description: 'Uso de Scikit-Learn.',
        statement: 'Importe o LinearRegression do sklearn.',
        template: 'from sklearn.linear_model import LinearRegression',
        detailedExplanation: '<p>Regressão Linear é a base da predição numérica.</p>',
        objectives: [{ id: 'obj1', description: 'Importar modelo', test: 'LinearRegression' }]
      }
    ]
  },
  quizzes: []
};

export const level5: Level = {
  id: 5,
  title: 'Nível 5: Especializações',
  description: 'Aprofunde-se nas tecnologias de ponta do mercado global.',
  knowledgeAreas: [webAdvanced, aiMlIntro]
};
