import { exercise as e1 } from './laboratory/01-sistemas-numericos';
import { exercise as e2 } from './laboratory/02-logica-booleana';
import { exercise as e3 } from './laboratory/03-algebra-booleana';
import { exercise as e4 } from './laboratory/04-arquitetura';
import { exercise as e5 } from './laboratory/05-memoria';
import { exercise as e6 } from './laboratory/06-algoritmos';
import { exercise as e7 } from './laboratory/07-complexidade';
import { exercise as e8 } from './laboratory/08-paradigmas';
import { exercise as e9 } from './laboratory/09-floating-point';
import { exercise as e10 } from './laboratory/10-cache-hierarchy';
import { exercise as e11 } from './laboratory/11-isa-architecture';

const labTitles = [
  "Lab: Simulação de Pipeline",
  "Lab: Análise de Barramento",
  "Lab: Programação orientada a Eventos/Interrupções",
  "Lab: Paginação e Memória Virtual",
  "Lab: Estrutura de Inodes",
  "Lab: Codificação de Sinais",
  "Lab: Parsing de Tokens",
  "Lab: Implementação de Hash",
  "Lab: Condições de Corrida Simples",
  "Lab: Dilemas Éticos na Engenharia"
];

export const exercises = [
  e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11,
  ...labTitles.map((title, i) => ({
    id: `cs-p${i + 12}`,
    language: "concept",
    title: title,
    description: "Aplicação prática dos fundamentos de hardware e arquitetura.",
    statement: `Validar o conceito de ${title.replace('Lab: ', '')}.`,
    template: "// Escreve a tua conclusão técnica aqui",
    detailedExplanation: "<p>Laboratório de consolidação de arquitetura.</p>",
    objectives: [{ id: "obj1", description: "Completar análise técnica", test: "conclusao" }]
  }))
];