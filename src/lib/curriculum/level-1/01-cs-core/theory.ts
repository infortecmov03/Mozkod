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
import { lesson as l16 } from './theory/16-pipelining';
import { lesson as l17 } from './theory/17-virtualization-basics';
import { lesson as l18 } from './theory/18-error-correction';
import { lesson as l19 } from './theory/19-microarchitecture';
import { lesson as l20 } from './theory/20-clock-cycles';
import { lesson as l21 } from './theory/21-ethics-history';

export const lessons = [
  l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11,
  {
    id: "cs-t12",
    title: "Síntese Lógica e Portas NAND/NOR",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>⚡ A Universalidade das Portas</h2><p>Entenda por que as portas NAND e NOR são chamadas de "universais" e como qualquer circuito complexo pode ser construído apenas com elas.</p></div>`,
    quizId: "cs-q12"
  },
  {
    id: "cs-t13",
    title: "Barramento do Sistema e Largura de Banda",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🛣️ As Autoestradas de Dados</h2><p>Exploração de como os dados viajam entre CPU, RAM e GPU, e o impacto da largura de banda (bits) na performance global.</p></div>`,
    quizId: "cs-q13"
  },
  {
    id: "cs-t14",
    title: "Memória Virtual e Paginação",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🖼️ A Ilusão de Memória Infinita</h2><p>Como o SO utiliza o disco rígido para simular mais memória RAM do que a física disponível através da paginação.</p></div>`,
    quizId: "cs-q14"
  },
  {
    id: "cs-t15",
    title: "Sistemas de Ficheiros e Inodes",
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>📂 Organização no Disco</h2><p>Como o computador guarda e encontra os teus ficheiros usando tabelas de alocação e metadados de sistema.</p></div>`,
    quizId: "cs-q15"
  },
  l16, l17, l18, l19, l20, l21
];
