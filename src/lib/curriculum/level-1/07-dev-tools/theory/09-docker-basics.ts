import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "dt-t9",
  title: "Docker: Contentores e Isolamento de Ambientes",
  content: `
    <div class="space-y-8">
      <div class="bg-blue-500/10 p-6 rounded-2xl border border-blue-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-blue-400 flex items-center gap-2">
          🐳 "Na minha máquina funciona" acabou!
        </h2>
        <p class="text-lg leading-relaxed"><strong>Docker</strong> é a tecnologia que permite empacotar uma aplicação com todas as suas dependências (bibliotecas, SO, base de dados) num contentor isolado e leve.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Imagem vs Contentor</h3>
        <p class="text-sm">A <strong>Imagem</strong> é o disco rígido congelado (o molde). O <strong>Contentor</strong> é a imagem a ser executada em tempo real na memória.</p>
        
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Dockerfile e Docker Compose</h3>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong>Dockerfile:</strong> A receita passo-a-passo para construir a tua imagem (ex: "instala Python -> copia código -> corre app").
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong>Docker Compose:</strong> Orquestra múltiplos contentores de uma vez (ex: "sobe a API E a base de dados Postgres juntas").
          </li>
        </ul>

        <div class="bg-green-500/5 p-6 rounded-2xl border border-green-500/20 mt-6 shadow-inner">
          <h4 class="font-bold text-green-500 mb-2">💎 Vantagem Master: Reprodutibilidade</h4>
          <p class="text-sm leading-relaxed">Com Docker, garantimos que o ambiente onde o código é desenvolvido é EXACTAMENTE igual ao servidor de produção, eliminando 90% dos erros de infraestrutura.</p>
        </div>
      </div>
    </div>
  `,
  quizId: "dt-q9"
};