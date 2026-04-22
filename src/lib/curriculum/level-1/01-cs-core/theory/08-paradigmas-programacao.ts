import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "cs-t8",
  title: "Paradigmas de Programação: Estilos de Pensamento",
  youtubeVideoId: "mNst8vX-u8E",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🎨 Estilos de Codificação</h2>
        <p class="text-lg leading-relaxed">
          Um paradigma é uma forma de pensar e organizar a lógica do software. Linguagens como JavaScript e Python são <strong>multi-paradigma</strong>, permitindo misturar estes estilos.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">1. Paradigma Imperativo</h3>
        <p class="text-sm">Foca no <strong>COMO</strong> fazer. Vais dando ordens passo-a-passo ao computador, mudando o estado da memória a cada linha.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs text-accent">
          // Exemplo: Percorrer e somar<br/>
          let total = 0;<br/>
          for(let i=0; i<arr.length; i++) { total += arr[i]; }
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Paradigma Declarativo (Funcional)</h3>
        <p class="text-sm">Foca no <strong>O QUE</strong> queres. Descreves o resultado final sem te preocupares com os loops internos do motor.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs text-green-400">
          // Exemplo: Usando reduce<br/>
          const total = arr.reduce((acc, val) => acc + val, 0);
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">3. Programação Orientada a Objetos (POO)</h3>
        <p class="text-sm">Organiza o código em "Objetos" que contêm dados (atributos) e ações (métodos). É a base de sistemas empresariais em Java, C# e C++.</p>
      </div>
    </div>
  `,
  quizId: "cs-t8-quiz"
};