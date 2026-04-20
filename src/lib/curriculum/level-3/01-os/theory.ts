
import { lesson as l1 } from './theory/01-kernel-architecture';
import { lesson as l2 } from './theory/02-process-management';
import { lesson as l3 } from './theory/03-cpu-scheduling';
import { lesson as l4 } from './theory/04-threads-concurrency';
import { lesson as l5 } from './theory/05-deadlocks';
import { lesson as l6 } from './theory/06-memory-management';
import { lesson as l7 } from './theory/07-virtual-memory';
import { lesson as l8 } from './theory/08-file-systems';
import { lesson as l9 } from './theory/09-io-systems';
import { lesson as l10 } from './theory/10-os-security';

export const lessons = [
  l1, l2, l3, l4, l5, l6, l7, l8, l9, l10,
  ...Array.from({ length: 11 }, (_, i) => ({
    id: `os-t${i + 11}`,
    title: [
      "Virtualização & Hypervisors", "Contentores & Isolamento", "Drivers de Dispositivo",
      "Sistemas Distribuídos", "Redes no SO", "Signals & IPC", "Shared Memory",
      "Real-Time OS (RTOS)", "System Performance Profiling", "Boot Process & BIOS/UEFI",
      "Cloud OS Internals"
    ][i],
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🖥️ Core Systems</h2><p>Por dentro do software que gere o hardware.</p></div>`,
    quizId: `os-q${i + 11}`
  }))
];
