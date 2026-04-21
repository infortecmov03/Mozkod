import { lesson as l1 } from './theory/01-sistemas-numericos';
import { lesson as l2 } from './theory/02-logica-booleana';
import { lesson as l3 } from './theory/03-algebra-booleana';
import { lesson as l4 } from './theory/04-arquitetura-computadores';
import { lesson as l5 } from './theory/05-memoria-armazenamento';
import { lesson as l6 } from './theory/06-algoritmos-fundamentais';
import { lesson as l7 } from './theory/07-complexidade-algoritmos';
import { lesson as l8 } from './theory/08-paradigmas-programacao';
import { lesson as l9 } from './theory/09-floating-point';
import { lesson as l10 } from './theory/10-cache-hierarchy';
import { lesson as l11 } from './theory/11-isa-architecture';

const titles = [
  "Pipelining e Paralelismo de Instrução", "Barramentos e Comunicação de Dados",
  "Gestão de Interrupções e I/O", "Hierarquia de Memória Virtual",
  "Sistemas de Ficheiros e Inodes", "Redes: Camada Física e Sinais",
  "Compiladores e a Árvore de Sintaxe (AST)", "Criptografia: Hash e Chaves Simétricas",
  "Computação Paralela e Multithreading", "Ética, Privacidade e Impacto Social"
];

// Apenas exportamos o que existe fisicamente + mocks seguros para evitar erros de build
export const lessons = [
  l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11,
  ...titles.map((title, i) => ({
    id: `cs-t${i + 12}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🧠 Engenharia Profunda: ${title}</h2><p>Exploração técnica avançada sobre como este pilar sustenta os sistemas computacionais modernos.</p></div>`,
    quizId: `cs-q${i + 12}`
  }))
];