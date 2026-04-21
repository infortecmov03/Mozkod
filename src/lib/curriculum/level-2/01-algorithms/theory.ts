import { lesson as l1 } from './theory/01-big-o';
import { lesson as l2 } from './theory/02-busca';
import { lesson as l3 } from './theory/03-ordenacao-basica';
import { lesson as l4 } from './theory/04-ordenacao-avancada';
import { lesson as l5 } from './theory/05-recursao';
import { lesson as l6 } from './theory/06-greedy';
import { lesson as l7 } from './theory/07-dp';
import { lesson as l8 } from './theory/08-grafos';
import { lesson as l9 } from './theory/09-divide-conquer';
import { lesson as l10 } from './theory/10-backtracking';

const titles = [
  "Manipulação de Bits e Máscaras", "Algoritmos de String (KMP & Rabin-Karp)", 
  "Heurísticas e Meta-heurísticas", "Fluxo Máximo em Redes",
  "Geometria Computacional Básica", "Algoritmos Probabilistas",
  "Busca A* (Pathfinding)", "Dijkstra e Caminhos Curtos",
  "Kruskal e Prim (MST)", "Ordenação Topológica", "Complexidade P vs NP"
];

export const lessons = [
  l1, l2, l3, l4, l5, l6, l7, l8, l9, l10,
  ...titles.map((title, i) => ({
    id: `alg-t${i + 11}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🧠 Algoritmos: ${title}</h2><p>Exploração técnica profunda sobre a lógica e eficiência de resolução deste problema clássico da computação.</p></div>`,
    quizId: `alg-q${i + 11}`
  }))
];
