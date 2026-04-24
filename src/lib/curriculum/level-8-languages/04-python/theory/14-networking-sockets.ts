
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "py-m14",
  title: "Fase 3: Networking: Sockets e Protocolos Binários",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📡 Comunicação de Baixo Nível</h2>
        <p class="text-lg leading-relaxed">Dominar o módulo <code>socket</code> permite criar os seus próprios protocolos sobre TCP ou UDP. Num monitor de sistema, isto é vital para enviar telemetria em tempo real para um servidor central sem o overhead do HTTP.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/5 pb-2">1. O Fluxo de Conexão</h3>
        <p class="text-sm">O ciclo master envolve criar o socket, ligar ao endereço (bind), escutar (listen) e aceitar conexões.</p>
        <div class="bg-black/40 p-5 rounded-xl border font-code text-xs text-accent">
          import socket<br/>
          s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)<br/>
          s.bind(('0.0.0.0', 9000))<br/>
          s.listen(5)
        </div>

        <h3 class="text-xl font-bold font-headline">2. Serialização Binária (struct)</h3>
        <p class="text-sm">Enviar texto é ineficiente. Engenheiros master usam o módulo <code>struct</code> para empacotar dados em binário puro, economizando 70% de banda de rede.</p>
      </div>
    </div>
  `,
  quizId: "py-mq14"
};
