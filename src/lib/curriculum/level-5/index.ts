import type { Level, KnowledgeArea } from '../types';
import { lessons as webLessons } from './01-web-engineering/theory';
import { lessons as aiLessons } from './02-ai-data-science/theory';
import { lessons as secLessons } from './03-cybersecurity-cloud/theory';

const webEngineering: KnowledgeArea = {
  id: 'ka-web-eng',
  title: '01. Web Engineering',
  description: 'Mastering Next.js, Server Components e Performance de Elite.',
  load: '50h',
  iconName: 'Zap',
  theory: webLessons,
  practice: {
    typescript: [
      {
        id: 'web-adv-p1',
        language: 'typescript',
        title: 'Laboratório: Server Components',
        description: 'Implementando componentes que correm no servidor.',
        statement: 'Crie uma função assíncrona que simule um fetch de dados no servidor.',
        template: 'async function ServerData() {\n  // Fetch data here\n}',
        detailedExplanation: '<p>Server Components permitem fetching de dados sem expor chaves de API ao cliente.</p>',
        objectives: [{ id: 'obj1', description: 'Usar async function', test: 'async function' }]
      }
    ]
  },
  quizzes: webLessons.map(l => ({ id: l.quizId, title: `Quiz: ${l.title}`, questions: [], passingScore: 70 }))
};

const aiDataScience: KnowledgeArea = {
  id: 'ka-ai-ds',
  title: '02. AI & Data Science',
  description: 'De Algoritmos Lineares a Grandes Modelos de Linguagem (LLMs).',
  load: '60h',
  iconName: 'Cpu',
  theory: aiLessons,
  practice: {
    python: [
      {
        id: 'ai-p1',
        language: 'python',
        title: 'Laboratório: Regressão Linear',
        description: 'Otimização de parâmetros simples.',
        statement: 'Importe o Scikit-Learn para iniciar a modelagem.',
        template: 'import sklearn',
        detailedExplanation: '<p>Python é a língua franca da IA devido a bibliotecas como Sklearn e PyTorch.</p>',
        objectives: [{ id: 'obj1', description: 'Importar sklearn', test: 'import sklearn' }]
      }
    ]
  },
  quizzes: aiLessons.map(l => ({ id: l.quizId, title: `Quiz: ${l.title}`, questions: [], passingScore: 70 }))
};

const cloudSecurity: KnowledgeArea = {
  id: 'ka-cloud-sec',
  title: '03. Cloud & Cybersecurity',
  description: 'Segurança de Sistemas, Cloud Native e DevSecOps.',
  load: '50h',
  iconName: 'ShieldCheck',
  theory: secLessons,
  practice: {
    bash: [
      {
        id: 'sec-p1',
        language: 'bash',
        title: 'Laboratório: Permissões de Sistema',
        description: 'Configurando o modelo de segurança Linux.',
        statement: 'Qual comando muda as permissões de um ficheiro? Escreva "chmod".',
        template: 'let comando = "";',
        detailedExplanation: '<p>O chmod controla quem pode ler, escrever ou executar ficheiros.</p>',
        objectives: [{ id: 'obj1', description: 'Identificar chmod', test: 'chmod' }]
      }
    ]
  },
  quizzes: secLessons.map(l => ({ id: l.quizId, title: `Quiz: ${l.title}`, questions: [], passingScore: 70 }))
};

export const level5: Level = {
  id: 5,
  title: 'Nível 5: Especializações de Elite',
  description: 'Aprofunde-se nas tecnologias de ponta que dominam o mercado global.',
  knowledgeAreas: [webEngineering, aiDataScience, cloudSecurity]
};
