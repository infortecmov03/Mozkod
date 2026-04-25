import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-m5",
  title: "Fase 2: Zend Engine: Opcodes, AST e o Ciclo de Vida",
  enableInteractive: true,
  quizId: "php-mq5",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          ⚙️ Por dentro da Zend VM
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O PHP não é apenas um script; ele é compilado para <strong>Opcodes</strong> que correm na Zend Virtual Machine. Entender este processo é a chave para otimizar a performance de sistemas de alta escala.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Do Texto ao Bit</h3>
        <ul class="space-y-4 text-sm">
          <li><strong>Lexing:</strong> O código é quebrado em tokens.</li>
          <li><strong>Parsing:</strong> Criação da AST (Abstract Syntax Tree).</li>
          <li><strong>Compilação:</strong> Geração de Opcodes na memória.</li>
        </ul>
      </section>

      <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
        <h4 class="font-bold text-indigo-400 mb-2">⚡ O Papel do OpCache</h4>
        <p class="text-sm">O OpCache armazena os Opcodes na RAM, eliminando as fases de Lexing e Parsing em cada request subsequente, acelerando o tempo de resposta em até 300%.</p>
      </div>
    </div>
  `
};
