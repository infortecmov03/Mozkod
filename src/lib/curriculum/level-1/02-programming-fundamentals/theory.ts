import { lesson as l1 } from './theory/01-variaveis-tipos';
import { lesson as l2 } from './theory/02-operadores';
import { lesson as l3 } from './theory/03-strings-io';
import { lesson as l4 } from './theory/04-condicionais';
import { lesson as l5 } from './theory/05-loops';
import { lesson as l6 } from './theory/06-funcoes-escopos';
import { lesson as l7 } from './theory/07-arrays';
import { lesson as l8 } from './theory/08-objetos-mapas';
import { lesson as l9 } from './theory/09-recursao';
import { lesson as l10 } from './theory/10-poo-intro';
import { lesson as l11 } from './theory/11-testes-debugging';

// Expansion Topics
const l12 = { id: "pf-t12", title: "Tratamento de Exceções e Erros", content: "<p>Como antecipar falhas e manter o sistema estável com Try/Catch.</p>", quizId: "pf-q12" };
const l13 = { id: "pf-t13", title: "Expressões Regulares (RegEx)", content: "<p>A arte de manipular e validar padrões complexos de texto.</p>", quizId: "pf-q13" };
const l14 = { id: "pf-t14", title: "Memória: Stack vs Heap", content: "<p>Onde as tuas variáveis vivem e como isso afeta a velocidade do programa.</p>", quizId: "pf-q14" };
const l15 = { id: "pf-t15", title: "Estilo de Código e Linting", content: "<p>Padrões de mercado (Clean Code) para escrita de código legível.</p>", quizId: "pf-q15" };

export const lessons = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15];