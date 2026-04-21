
import { exercise as e1js } from './laboratory/javascript/01-variaveis';
import { exercise as e1py } from './laboratory/python/01-variaveis';
import { exercise as e2js } from './laboratory/javascript/02-operadores';
import { exercise as e2py } from './laboratory/python/02-operadores';
import { exercise as e3js } from './laboratory/javascript/03-condicionais';
import { exercise as e3py } from './laboratory/python/03-condicionais';

const programmingTopics = [
  { id: "pf-p4", title: "Estruturas de Repetição (Loops)", test: "for" },
  { id: "pf-p5", title: "Funções e Modularidade", test: "function" },
  { id: "pf-p6", title: "Arrays e Manipulação de Listas", test: "[" },
  { id: "pf-p7", title: "Objetos e Dicionários", test: "{" },
  { id: "pf-p8", title: "Recursividade Básica", test: "return" },
  { id: "pf-p9", title: "Introdução a Classes (POO)", test: "class" },
  { id: "pf-p10", title: "Debugging e Breakpoints", test: "log" },
  { id: "pf-p11", title: "Tratamento de Exceções (Try/Catch)", test: "try" },
  { id: "pf-p12", title: "Regex: Padrões de Texto", test: "match" },
  { id: "pf-p13", title: "Memória: Stack vs Heap", test: "null" },
  { id: "pf-p14", title: "Código Limpo e Linting", test: "const" },
  { id: "pf-p15", title: "Lógica Assíncrona Intro", test: "async" },
  { id: "pf-p16", title: "JSON e Serialização", test: "parse" },
  { id: "pf-p17", title: "Paradigma Funcional (Map/Filter)", test: "map" },
  { id: "pf-p18", title: "Gestão de Dependências (NPM/Pip)", test: "import" },
  { id: "pf-p19", title: "Segurança de Memória", test: "scope" },
  { id: "pf-p20", title: "Princípios DRY e KISS", test: "refactor" },
  { id: "pf-p21", title: "Design de APIs Internas", test: "service" }
];

export const practice = {
  javascript: [
    e1js, e2js, e3js,
    ...programmingTopics.map(topic => ({
      id: `${topic.id}-js`,
      language: "javascript",
      title: `Lab JS: ${topic.title}`,
      description: "Prática profissional de lógica e sintaxe.",
      statement: `Implemente a solução técnica para ${topic.title}.`,
      template: "// Seu código JavaScript aqui",
      detailedExplanation: `<p>Consolidação do tópico ${topic.title} em ambiente de execução real.</p>`,
      objectives: [{ id: "obj1", description: "Implementar lógica correta", test: topic.test }]
    }))
  ],
  python: [
    e1py, e2py, e3py,
    ...programmingTopics.map(topic => ({
      id: `${topic.id}-py`,
      language: "python",
      title: `Lab PY: ${topic.title}`,
      description: "Prática profissional com a sintaxe elegante de Python.",
      statement: `Implemente a solução técnica para ${topic.title}.`,
      template: "# Seu código Python aqui",
      detailedExplanation: `<p>Consolidação do tópico ${topic.title} usando as melhores práticas de Python.</p>`,
      objectives: [{ id: "obj1", description: "Implementar lógica correta", test: topic.test }]
    }))
  ]
};
