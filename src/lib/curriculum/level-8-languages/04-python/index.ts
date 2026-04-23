import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';
import { practice as practiceData } from './laboratory';

export const pythonMaster: KnowledgeArea = {
  id: 'lang-python-master',
  title: '04. Python Master',
  description: 'Domínio de Decoradores, Concorrência, Data Science e Engenharia de Produção.',
  load: '80h',
  iconName: 'Zap',
  theory: lessons,
  practice: {
    python: Array.from({ length: 21 }, (_, i) => ({
      id: `py-p${i + 1}`,
      language: "python",
      title: `Python Master Lab ${i + 1}`,
      description: "Desafio de engenharia cumulativo.",
      statement: "Implemente a lógica de elite no editor.",
      isProjectPart: true,
      template: "# Inicie a missão\n",
      detailedExplanation: "<h3>🐍 Pythonic Mastery</h3><p>Evolução do motor de sistema industrial.</p>",
      objectives: [{ id: "obj1", description: "Validar lógica", test: "def" }]
    }))
  },
  quizzes: quizzes
};