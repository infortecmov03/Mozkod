import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t17",
  title: "Fundamentos de Virtualização",
  content: `
    <div class="space-y-8">
      <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-indigo-400">🖥️ Máquinas dentro de Máquinas</h2>
        <p class="text-lg leading-relaxed">
          A virtualização permite que um único hardware físico corra múltiplos sistemas operativos independentes. É a tecnologia que sustenta toda a <strong>Nuvem (Cloud Computing)</strong> moderna.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">O Hypervisor (VMM)</h3>
        <p>O Hypervisor é o software que gere as máquinas virtuais e reparte o hardware (CPU, RAM, Disco) entre elas.</p>
        <ul class="list-disc ml-6 space-y-3">
          <li><strong>Tipo 1 (Bare Metal):</strong> Corre diretamente no hardware. Ex: VMware ESXi, Xen.</li>
          <li><strong>Tipo 2 (Hosted):</strong> Corre em cima de outro SO. Ex: VirtualBox, VMware Workstation.</li>
        </ul>

        <h3 class="text-xl font-bold font-headline text-primary">Vantagem de Engenharia</h3>
        <p class="text-sm">Isolamento e Segurança. Se uma máquina virtual for atacada por um vírus, o hardware físico e as outras VMs continuam seguras dentro das suas "caixas" isoladas.</p>
      </div>
    </div>
  `,
  quizId: "cs-t17-quiz"
};