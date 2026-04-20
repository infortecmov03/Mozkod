import { exercise as e1js } from './laboratory/javascript/01-variaveis-tipos';
import { exercise as e1py } from './laboratory/python/01-variaveis-tipos';
import { exercise as e2js } from './laboratory/javascript/02-operadores';
import { exercise as e2py } from './laboratory/python/02-operadores';
import { exercise as e3js } from './laboratory/javascript/03-strings-io';
import { exercise as e3py } from './laboratory/python/03-strings-io';

const stubObj = { id: "stub", description: "Consolidação", test: "true" };

export const practice = {
  javascript: [
    e1js, e2js, e3js,
    ...Array.from({ length: 18 }, (_, i) => ({
      id: `pf-p${i + 4}-js`,
      language: "javascript",
      title: `Lab JS: Tópico ${i + 4}`,
      description: "Prática avançada de lógica.",
      statement: "Implemente a solução proposta.",
      template: "// Seu código aqui",
      detailedExplanation: "<p>Consolidação de fundamentos.</p>",
      objectives: [stubObj]
    }))
  ],
  python: [
    e1py, e2py, e3py,
    ...Array.from({ length: 18 }, (_, i) => ({
      id: `pf-p${i + 4}-py`,
      language: "python",
      title: `Lab PY: Tópico ${i + 4}`,
      description: "Prática avançada de lógica.",
      statement: "Implemente a solução em Python.",
      template: "# Seu código aqui",
      detailedExplanation: "<p>Consolidação de fundamentos.",
      objectives: [stubObj]
    }))
  ]
};