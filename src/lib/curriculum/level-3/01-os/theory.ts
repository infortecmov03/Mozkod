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
import { lesson as l11 } from './theory/11-virtualization-hypervisors';
import { lesson as l12 } from './theory/12-containers-isolation';
import { lesson as l21 } from './theory/21-cloud-os-internals';

const titles = [
  "Drivers de Dispositivos e BIOS/UEFI", "Sistemas Distribuídos e RPC",
  "Networking no Espaço do Kernel", "Sinais e Comunicação Inter-Processos (IPC)",
  "Memória Partilhada e Semáforos", "Sistemas Operativos de Tempo Real (RTOS)",
  "Profiling de Sistema e eBPF", "Sistemas de Inicialização: Systemd e Init"
];

export const lessons = [
  l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12,
  ...titles.map((title, i) => ({
    id: `os-t${i + 13}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>⚙️ OS Internals: ${title}</h2><p>Exploração das camadas mais profundas do sistema operativo e interação com o hardware.</p></div>`,
    quizId: `os-q${i + 13}`
  })),
  l21
];
