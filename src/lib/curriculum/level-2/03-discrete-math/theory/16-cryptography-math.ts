import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "math-t16",
  title: "Matemática da Criptografia: Chaves e Primos",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🔐 A Segurança nos Números</h2>
        <p class="text-lg leading-relaxed">
          A criptografia moderna não depende de algoritmos secretos, mas de problemas matemáticos <strong>computacionalmente intratáveis</strong>, como a fatoração de números primos gigantes.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Aritmética Modular</h3>
        <p class="text-sm">A "Matemática do Relógio". Usamos o operador MOD para garantir que os cálculos fiquem dentro de um intervalo finito, essencial para chaves públicas e privadas.</p>

        <h3 class="text-xl font-bold font-headline">2. O Algoritmo RSA</h3>
        <p class="text-sm">Baseia-se no Pequeno Teorema de Fermat e na dificuldade de encontrar os dois números primos que geraram um produto N massivo. É o que protege o teu banco e as tuas mensagens hoje.</p>

        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner mt-6">
          <h4 class="font-bold text-indigo-400 mb-2">Funções One-way</h4>
          <p class="text-sm leading-relaxed">Uma função fácil de calcular num sentido, mas impossível de inverter sem a "chave mestre" (Trapdoor function).</p>
        </div>
      </div>
    </div>
  `,
  quizId: "math-q16"
};