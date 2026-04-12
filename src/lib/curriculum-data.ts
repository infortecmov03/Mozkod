import type { Level } from './curriculum/types';
import { level1KnowledgeAreas } from './curriculum/level-1';
import { level2KnowledgeAreas } from './curriculum/level-2';
import { level3KnowledgeAreas } from './curriculum/level-3';
import { level4KnowledgeAreas } from './curriculum/level-4';
import { level5KnowledgeAreas } from './curriculum/level-5';
import { level6KnowledgeAreas } from './curriculum/level-6';
import { level7KnowledgeAreas } from './curriculum/level-7';

export * from './curriculum/types';

export const curriculumData: Level[] = [
  {
    id: 1,
    title: "Nível 1: Fundamentos (Core Foundations)",
    description: "Comece sua jornada aprendendo os conceitos fundamentais da programação e da computação.",
    knowledgeAreas: level1KnowledgeAreas,
  },
  {
    id: 2,
    title: "Nível 2: Algoritmos e Estruturas de Dados",
    description: "Organize e manipule dados de forma eficiente para resolver problemas complexos.",
    knowledgeAreas: level2KnowledgeAreas,
  },
  {
    id: 3,
    title: "Nível 3: Sistemas e Infraestrutura",
    description: "Entenda como os sistemas de software funcionam em um nível mais profundo.",
    knowledgeAreas: level3KnowledgeAreas,
  },
  {
    id: 4,
    title: "Nível 4: Engenharia de Software",
    description: "Aprenda a projetar, construir e manter software de alta qualidade em equipe.",
    knowledgeAreas: level4KnowledgeAreas,
  },
  {
    id: 5,
    title: "Nível 5: Especializações",
    description: "Aprofunde-se em áreas de alta demanda no mercado de tecnologia.",
    knowledgeAreas: level5KnowledgeAreas,
  },
  {
    id: 6,
    title: "Nível 6: Desenvolvimento Profissional",
    description: "Desenvolva as habilidades interpessoais e de carreira para se destacar.",
    knowledgeAreas: level6KnowledgeAreas,
  },
  {
    id: 7,
    title: "Nível 7: Certificações Full Stack (freeCodeCamp)",
    description: "Valide suas habilidades com projetos práticos e certificações reconhecidas.",
    knowledgeAreas: level7KnowledgeAreas,
  },
];
