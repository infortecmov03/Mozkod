import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';

export const csCore: KnowledgeArea = {
  id: 'ka-cs-core',
  title: '01. CS Core (Engenharia Base)',
  description: 'Ciência da Computação Profunda: de circuitos lógicos a arquiteturas avançadas de CPU. 21 tópicos de nível universitário.',
  load: '45h',
  iconName: 'Cpu',
  theory: lessons,
  quizzes: quizzes,
  practice: {
    concept: [
      {
        id: "cs-p1",
        language: "concept",
        title: "Laboratório: Aritmética IEEE 754",
        description: "Entenda como o computador lida com decimais.",
        statement: "Converta um número decimal para o padrão de ponto flutuante.",
        template: "let sign = 0; let exponent = 127; let fraction = 0;",
        detailedExplanation: "<h3>⚡ Precisão Numérica</h3><p>Computadores usam o padrão IEEE 754 para representar números reais. Pequenos erros de arredondamento podem causar bugs críticos em sistemas financeiros.</p>",
        objectives: [{ id: "obj1", description: "Configurar expoente bias", test: "127" }]
      }
    ]
  }
};