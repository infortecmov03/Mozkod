import { lesson as l1 } from './theory/01-kernel-architecture';
import { lesson as l2 } from './theory/02-processes-threads';
import { lesson as l3 } from './theory/03-cpu-scheduling';
import { lesson as l4 } from './theory/04-synchronization-primitives';
import { lesson as l5 } from './theory/05-deadlock-theory';
import { lesson as l6 } from './theory/06-memory-addressing';
import { lesson as l7 } from './theory/07-virtual-memory-paging';
import { lesson as l8 } from './theory/08-file-system-internals';
import { lesson as l9 } from './theory/09-io-interrupts-dma';
import { lesson as l10 } from './theory/10-protection-security';
import { lesson as l11 } from './theory/11-virtualization-mechanics';
import { lesson as l12 } from './theory/12-linux-namespaces-cgroups';
import { lesson as l21 } from './theory/21-future-operating-systems';

export const lessons = [
  l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12,
  ...Array.from({ length: 8 }, (_, i) => ({
    id: `os-t${i + 13}`,
    title: `OS Advanced Topic ${i + 13}`,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>⚙️ OS Internals: Nível Master</h2><p>Estudo aprofundado dos subsistemas de gestão de hardware e software.</p></div>`,
    quizId: `os-q${i + 13}`
  })),
  l21
];