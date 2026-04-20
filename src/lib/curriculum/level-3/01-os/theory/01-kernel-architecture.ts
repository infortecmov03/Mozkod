import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "os-t1",
  title: "Arquitetura de Kernels e Abstração de Hardware",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4">🏛️ O Núcleo do Sistema</h2>
        <p class="text-lg leading-relaxed">
          O Kernel é a parte do sistema operativo que corre no modo mais privilegiado do processador (Ring 0). Ele serve como a camada de abstração entre as aplicações e o hardware físico.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <div class="p-4 bg-card border rounded-xl">
          <h4 class="font-bold text-primary">Monolithic Kernel</h4>
          <p class="text-xs">Todos os serviços (gestão de memória, drivers, rede) correm no mesmo espaço de endereço do kernel. Ex: Linux.</p>
        </div>
        <div class="p-4 bg-card border rounded-xl">
          <h4 class="font-bold text-accent">Microkernel</h4>
          <p class="text-xs">Mantém apenas o mínimo no kernel e corre o resto como serviços no espaço de utilizador. Ex: Minix, L4.</p>
        </div>
      </div>
      
      <div class="prose prose-invert max-w-none">
        <h3>Funções Primordiais:</h3>
        <ul>
          <li><strong>Gestão de Recursos:</strong> CPU, RAM e dispositivos I/O.</li>
          <li><strong>Interrupções:</strong> Lidar com sinais de hardware.</li>
          <li><strong>System Calls:</strong> A interface para programas pedirem serviços ao hardware.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "os-q1"
};