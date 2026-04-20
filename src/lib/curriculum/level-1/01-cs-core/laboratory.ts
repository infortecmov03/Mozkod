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

export const exercises = [
  e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11,
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `cs-p${i + 12}`,
    language: "concept",
    title: `Lab: Tópico ${i + 12}`,
    description: "Prática conceitual de engenharia.",
    statement: "Valide o conceito técnico do tópico.",
    template: "// Escreve a tua conclusão técnica",
    detailedExplanation: "<p>Exercício de consolidação de arquitetura.</p>",
    objectives: [{ id: "obj1", description: "Completar análise", test: "conclusao" }]
  }))
];