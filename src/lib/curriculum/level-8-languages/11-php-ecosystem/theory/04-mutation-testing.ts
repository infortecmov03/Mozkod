import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "php-eco-t4",
  title: "Fase 1: Mutation Testing: Auditoria com Infection",
  enableInteractive: true,
  quizId: "php-eco-mq4",
  content: `
    <div class="space-y-12">
      <div class="bg-red-500/5 p-8 rounded-[2.5rem] border border-red-500/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-red-400">🦠 Quem Testa os Testadores?</h2>
        <p class="text-lg">Ter 100% de cobertura de código (<button>Code Coverage</button>) não garante qualidade. O <button>Infection</button> realiza <button>Mutation Testing</button>, alterando o teu código e verificando se os teus testes detetam a mudança.</p>
      </div>
      <p class="text-sm leading-relaxed">Se o código mudou e os testes continuam a passar, tens um <strong>Mutante Sobrevivente</strong>. Isso indica que os teus testes são frágeis ou incompletos.</p>
    </div>
  `
};