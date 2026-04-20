import type { Level, KnowledgeArea, Quiz } from '../types';
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
        statement: 'Crie uma função assíncrona que simule um fetch de dados no servidor usando "async".',
        template: 'async function ServerData() {\n  // Fetch data here\n}',
        detailedExplanation: '<p>Server Components permitem fetching de dados sem expor chaves de API ao cliente.</p>',
        objectives: [{ id: 'obj1', description: 'Usar async function', test: 'async function' }]
      }
    ]
  },
  quizzes: [
    {
      id: "web-adv-q1",
      title: "Quiz: Next.js Server Components",
      passingScore: 70,
      questions: [
        {
          id: "q1",
          question: "Qual o comportamento padrão dos componentes no App Router do Next.js?",
          options: ["Client Components", "Server Components", "Shared Components", "Static Components"],
          correctAnswer: 1
        }
      ]
    }
  ]
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
        title: 'Laboratório: Introdução a Bibliotecas',
        description: 'Preparação do ambiente de dados.',
        statement: 'Importe a biblioteca numpy com o alias np.',
        template: 'import numpy as np',
        detailedExplanation: '<p>Numpy é a base para computação científica em Python.</p>',
        objectives: [{ id: 'obj1', description: 'Importar numpy como np', test: 'import numpy as np' }]
      }
    ]
  },
  quizzes: [
    {
      id: "ai-q1",
      title: "Quiz: Fundamentos de IA",
      passingScore: 70,
      questions: [
        {
          id: "q1",
          question: "Qual a diferença principal entre Supervised e Unsupervised Learning?",
          options: [
            "Supervised usa dados rotulados (etiquetados)",
            "Unsupervised é mais rápido",
            "Supervised não usa matemática",
            "Não há diferença"
          ],
          correctAnswer: 0
        }
      ]
    }
  ]
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
        template: 'let comando = "chmod";',
        detailedExplanation: '<p>O chmod controla quem pode ler, escrever ou executar ficheiros.</p>',
        objectives: [{ id: 'obj1', description: 'Identificar chmod', test: 'chmod' }]
      }
    ]
  },
  quizzes: [
    {
      id: "sec-q1",
      title: "Quiz: Tríade CIA",
      passingScore: 70,
      questions: [
        {
          id: "q1",
          question: "O que significa o 'I' na tríade CIA da segurança?",
          options: ["Identidade", "Integridade", "Internet", "Isolamento"],
          correctAnswer: 1
        }
      ]
    }
  ]
};

export const level5: Level = {
  id: 5,
  title: 'Nível 5: Especializações de Elite',
  description: 'Aprofunde-se nas tecnologias de ponta que dominam o mercado global.',
  knowledgeAreas: [webEngineering, aiDataScience, cloudSecurity]
};