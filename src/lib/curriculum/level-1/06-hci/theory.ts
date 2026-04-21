import { lesson as l1 } from './theory/01-introducao-hci';
import { lesson as l2 } from './theory/02-usabilidade';
import { lesson as l3 } from './theory/03-acessibilidade';
import { lesson as l4 } from './theory/04-design-centrado';
import { lesson as l5 } from './theory/05-wireframes';
import { lesson as l6 } from './theory/06-ui-design';
import { lesson as l7 } from './theory/07-ux-research';
import { lesson as l8 } from './theory/08-arquitetura-info';
import { lesson as l9 } from './theory/09-feedback-affordance';
import { lesson as l10 } from './theory/10-avaliacao-interfaces';
import { lesson as l11 } from './theory/11-gestalt-principles';

const hciTitles = [
  "Teoria das Cores e Psicologia Visual",
  "Tipografia e Hierarquia de Leitura",
  "Design Patterns: Mobile vs Desktop",
  "Interação Multi-modal (Voz e Toque)",
  "Cognição e Carga Mental",
  "Micro-interações e Feedback",
  "Acessibilidade Cognitiva e Motora",
  "Dark Patterns e Ética do Design",
  "Design Systems e Consistência",
  "O Futuro do HCI: BCI e AR/VR"
];

export const lessons = [
  l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11,
  ...hciTitles.map((title, i) => ({
    id: `hci-t${i + 12}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🎨 HCI Master: ${title}</h2><p>Estudo da interface entre o utilizador e a máquina para criar experiências eficientes e inclusivas.</p></div>`,
    quizId: `hci-q${i + 12}`
  }))
];