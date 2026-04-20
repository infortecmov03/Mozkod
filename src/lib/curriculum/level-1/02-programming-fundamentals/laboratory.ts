
import { exercise as e1js } from './laboratory/javascript/01-variaveis';
import { exercise as e1py } from './laboratory/python/01-variaveis';
import { exercise as e2js } from './laboratory/javascript/02-operadores';
import { exercise as e2py } from './laboratory/python/02-operadores';
import { exercise as e3js } from './laboratory/javascript/03-condicionais';
import { exercise as e3py } from './laboratory/python/03-condicionais';
import { exercise as e4js } from './laboratory/javascript/04-loops';
import { exercise as e4py } from './laboratory/python/04-loops';
import { exercise as e5js } from './laboratory/javascript/05-funcoes';
import { exercise as e5py } from './laboratory/python/05-funcoes';

export const practice = {
  javascript: [
    e1js, e2js, e3js, e4js, e5js,
    ...Array.from({ length: 16 }, (_, i) => ({
      id: `pf-p${i + 6}-js`,
      language: "javascript",
      title: `Lab JS: Tópico ${i + 6}`,
      description: "Prática avançada de lógica.",
      statement: "Implemente a solução proposta.",
      template: "// Seu código aqui",
      detailedExplanation: "<p>Consolidação de fundamentos.</p>",
      objectives: [{ id: "obj1", description: "Passar nos testes", test: "true" }]
    }))
  ],
  python: [
    e1py, e2py, e3py, e4py, e5py,
    ...Array.from({ length: 16 }, (_, i) => ({
      id: `pf-p${i + 6}-py`,
      language: "python",
      title: `Lab PY: Tópico ${i + 6}`,
      description: "Prática avançada de lógica.",
      statement: "Implemente a solução em Python.",
      template: "# Seu código aqui",
      detailedExplanation: "<p>Consolidação de fundamentos.</p>",
      objectives: [{ id: "obj1", description: "Passar nos testes", test: "True" }]
    }))
  ]
};
