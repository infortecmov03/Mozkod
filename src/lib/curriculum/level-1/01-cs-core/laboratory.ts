import { exercise as e1 } from './laboratory/01-sistemas-numericos';
import { exercise as e2 } from './laboratory/02-logica-booleana';
import { exercise as e3 } from './laboratory/03-algebra-booleana';
import { exercise as e4 } from './laboratory/04-arquitetura';
import { exercise as e5 } from './laboratory/05-memoria';
import { exercise as e6 } from './laboratory/06-algoritmos';
import { exercise as e7 } from './laboratory/07-complexidade';
import { exercise as e8 } from './laboratory/08-paradigmas';
import { exercise as e9 } from './laboratory/09-floating-point';

const titles = [
  "Lab: Hierarquia de Cache", "Lab: RISC vs CISC",
  "Lab: Simulação de Pipeline", "Lab: Análise de Barramento",
  "Lab: Programação orientada a Eventos", "Lab: Memória Virtual",
  "Lab: Estrutura de Inodes", "Lab: Codificação de Sinais",
  "Lab: Parsing de Tokens", "Lab: Implementação de Hash",
  "Lab: Condições de Corrida", "Lab: Dilemas Éticos"
];

export const exercises = [
  e1, e2, e3, e4, e5, e6, e7, e8, e9,
  ...titles.map((title, i) => ({
    id: `cs-p${i + 10}`,
    language: "concept",
    title: title,
    description: "Aplicação prática dos fundamentos de engenharia.",
    statement: `Validar o conceito de ${title.replace('Lab: ', '')}.`,
    template: "// Escreve a tua conclusão técnica aqui",
    detailedExplanation: "<p>Laboratório de consolidação.</p>",
    objectives: [{ id: "obj1", description: "Completar análise técnica", test: "conclusao" }]
  }))
];