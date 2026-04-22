import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t17",
  title: "Virtualização: A Abstração do Silício",
  content: `
    <div class="space-y-8">
      <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-indigo-400 flex items-center gap-2">
          🖥️ Máquinas dentro de Máquinas
        </h2>
        <p class="text-lg leading-relaxed">
          A virtualização é a tecnologia que permite criar uma camada de software entre o hardware físico e os sistemas operativos. Esta camada, o <strong>Hypervisor</strong>, engana os sistemas operativos fazendo-os acreditar que têm hardware exclusivo, quando na verdade estão a partilhar recursos de forma isolada.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Tipos de Hypervisors (VMM)</h3>
        <p>A arquitetura do gestor de máquinas virtuais dita a performance e o isolamento do sistema:</p>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div class="p-6 bg-card border rounded-2xl border-white/5 shadow-xl">
            <h4 class="font-bold text-accent mb-3 flex items-center gap-2">🏗️ Tipo 1: Bare Metal</h4>
            <p class="text-xs text-muted-foreground leading-relaxed">Instalado diretamente sobre o hardware. É o padrão em Data Centers (AWS, Azure). Tem performance quase nativa.</p>
            <div class="mt-4 bg-black/20 p-2 rounded text-[9px] font-mono">Ex: VMware ESXi, Xen, Proxmox, Hyper-V.</div>
          </div>
          <div class="p-6 bg-card border rounded-2xl shadow-lg border-white/5">
            <h4 class="font-bold text-primary mb-3 flex items-center gap-2">💻 Tipo 2: Hosted</h4>
            <p class="text-xs text-muted-foreground leading-relaxed">Corre como uma aplicação dentro de um SO (Windows/Linux). Útil para desenvolvimento e testes rápidos.</p>
            <div class="mt-4 bg-black/20 p-2 rounded text-[9px] font-mono">Ex: VirtualBox, VMware Workstation.</div>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Porquê Virtualizar? (Os 3 Pilares)</h3>
        <ul class="space-y-4">
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">🛡️</div>
            <div>
              <p class="font-bold text-sm">Isolamento Total:</p>
              <p class="text-xs text-muted-foreground">Um crash ou vírus na VM 1 não afeta a VM 2 nem o hardware principal. É a base da segurança na Cloud.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">📦</div>
            <div>
              <p class="font-bold text-sm">Encapsulamento:</p>
              <p class="text-xs text-muted-foreground">Uma máquina virtual é apenas um conjunto de ficheiros. Podes mover um servidor inteiro de Maputo para Londres apenas copiando um ficheiro .vmdk.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">📈</div>
            <div>
              <p class="font-bold text-sm">Consolidação:</p>
              <p class="text-xs text-muted-foreground">Em vez de ter 10 servidores físicos com 10% de uso, tens 1 servidor potente com 10 VMs a 90%, poupando energia e espaço.</p>
            </div>
          </li>
        </ul>

        <div class="bg-yellow-500/5 p-6 rounded-2xl border border-yellow-500/20 mt-6">
          <h4 class="font-bold text-yellow-500 mb-2 flex items-center gap-2">
            🚀 Diferença Master: VM vs Container
          </h4>
          <p class="text-sm leading-relaxed">
            Uma <strong>VM</strong> virtualiza o hardware (inclui um Kernel completo). É pesada (GBs). Um <strong>Container</strong> (Docker) virtualiza apenas o Sistema Operativo e partilha o Kernel do hospedeiro. É leve (MBs) e sobe em milissegundos. No nível Master, usamos VMs para isolamento forte e Containers para microserviços ágeis.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-t17-quiz"
};