import { lesson as l1 } from './theory/01-sistemas-numericos';
import { lesson as l2 } from './theory/02-logica-booleana';
import { lesson as l3 } from './theory/03-algebra-booleana';
import { lesson as l4 } from './theory/04-arquitetura-computadores';
import { lesson as l5 } from './theory/05-memoria-armazenamento';
import { lesson as l6 } from './theory/06-algoritmos-fundamentais';
import { lesson as l7 } from './theory/07-complexidade-algoritmos';
import { lesson as l8 } from './theory/08-paradigmas-programacao';

// New Topics for Expansion
const t9 = { id: "cs-t9", title: "Aritmética de Ponto Flutuante (IEEE 754)", content: "<p>Como computadores representam números reais e os riscos da perda de precisão.</p>", quizId: "cs-q9" };
const t10 = { id: "cs-t10", title: "Hierarquia de Cache e Localidade", content: "<p>L1, L2, L3 e por que o design do seu código afeta a velocidade física.</p>", quizId: "cs-q10" };
const t11 = { id: "cs-t11", title: "ISA: RISC vs CISC", content: "<p>O conjunto de instruções que define como o software fala com o silício.</p>", quizId: "cs-q11" };
const t12 = { id: "cs-t12", title: "Síntese Lógica e Mapas de Karnaugh", content: "<p>Minimização de circuitos e otimização de portas lógicas.</p>", quizId: "cs-q12" };
const t13 = { id: "cs-t13", title: "Barramento do Sistema e Interrupções", content: "<p>Como os dados viajam entre CPU, RAM e Periféricos.</p>", quizId: "cs-q13" };
const t14 = { id: "cs-t14", title: "Fundamentos de Kernel de SO", content: "<p>A ponte entre hardware e software: gestão de privilégios.</p>", quizId: "cs-q14" };
const t15 = { id: "cs-t15", title: "Futuro: Computação Quântica e Neuromórfica", content: "<p>O próximo salto tecnológico além do binário tradicional.</p>", quizId: "cs-q15" };

export const lessons = [l1, l2, l3, l4, l5, l6, l7, l8, t9, t10, t11, t12, t13, t14, t15];