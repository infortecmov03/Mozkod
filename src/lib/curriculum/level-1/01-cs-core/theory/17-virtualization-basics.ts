import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t17",
  title: "Fundamentos de Virtualização: Máquinas dentro de Máquinas",
  content: `
    <div class="space-y-8">
      <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-indigo-400 flex items-center gap-2">
          🖥️ Abstraindo o Hardware
        </h2>
        <p class="text-lg leading-relaxed">
          A virtualização é a tecnologia que permite criar uma camada de abstração sobre o hardware físico, dividindo os recursos de um único computador (CPU, RAM, Disco) em múltiplos computadores virtuais independentes, conhecidos como <strong>Virtual Machines (VMs)</strong>.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. O Hypervisor: O Maestro do Sistema</h3>
        <p>O componente mais crítico da virtualização é o <strong>Hypervisor</strong> (ou Virtual Machine Monitor - VMM). Ele é o software que gere as VMs e decide como o hardware físico é repartido entre elas, garantindo que uma VM não interfira na outra.</p>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div class="p-6 bg-card border rounded-2xl border-white/5 shadow-xl">
            <h4 class="font-bold text-accent mb-3 flex items-center gap-2">🏗️ Tipo 1: Bare Metal</h4>
            <p class="text-xs text-muted-foreground leading-relaxed">
              Instalado diretamente sobre o hardware físico. É extremamente eficiente e performático, pois não tem um sistema operativo "hospedeiro" a consumir recursos.
              <br/><br/>
              <strong>Exemplos:</strong> VMware ESXi, Microsoft Hyper-V, Xen, KVM.
            </p>
          </div>
          <div class="p-6 bg-card border rounded-2xl shadow-lg border-white/5">
            <h4 class="font-bold text-primary mb-3 flex items-center gap-2">💻 Tipo 2: Hosted</h4>
            <p class="text-xs text-muted-foreground leading-relaxed">
              Corre como uma aplicação dentro de um sistema operativo comum (Windows, Linux, macOS). É ideal para desenvolvimento e testes em computadores pessoais.
              <br/><br/>
              <strong>Exemplos:</strong> VirtualBox, VMware Workstation, Parallels.
            </p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Pilares da Virtualização</h3>
        <ul class="space-y-4">
          <li class="flex gap-4">
            <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">🛡️</div>
            <div>
              <p class="font-bold">Isolamento:</p>
              <p class="text-sm text-muted-foreground">Se uma VM sofrer um ataque de vírus ou um erro fatal (BSOD), o hardware físico e as outras VMs continuam a funcionar perfeitamente.</p>
            </div>
          </li>
          <li class="flex gap-4">
            <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">📦</div>
            <div>
              <p class="font-bold">Encapsulamento:</p>
              <p class="text-sm text-muted-foreground">Uma VM inteira é apenas um conjunto de ficheiros no disco. Podes movê-la de um servidor em Maputo para um na Beira apenas copiando ficheiros.</p>
            </div>
          </li>
        </ul>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h3 class="text-xl font-bold font-headline text-indigo-400 mb-4">☁️ O Motor da Cloud</h3>
          <p class="text-sm leading-relaxed">
            Sem a virtualização, não existiria a AWS, o Azure ou a Google Cloud. Ela permite a <strong>Elasticidade</strong>: se o teu site receber milhares de visitas, o orquestrador pode subir 10 novas máquinas virtuais em segundos para aguentar a carga, e apagá-las quando não forem mais precisas.
          </p>
        </div>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6">
          <h4 class="font-bold text-green-500 mb-2">🚀 Diferença de Elite: VMs vs Containers</h4>
          <p class="text-sm leading-relaxed">
            Uma <strong>VM</strong> virtualiza o <strong>hardware</strong> (inclui o seu próprio Kernel e SO completo). Um <strong>Container</strong> (Docker) virtualiza o <strong>Sistema Operativo</strong> (partilha o Kernel do hospedeiro). No nível master, o engenheiro usa VMs para isolamento total e segurança, e Containers para agilidade e microserviços.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "cs-t17-quiz"
};