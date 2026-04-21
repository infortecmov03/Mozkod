import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m1",
  title: "Prototypal Inheritance: A Alma do JavaScript",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
          🧬 Além das Classes
        </h2>
        <p class="text-lg leading-relaxed">
          Embora o JavaScript moderno use a keyword <code>class</code>, por baixo do capô tudo funciona através de <strong>Protótipos</strong>. Entender a Prototype Chain é vital para evitar memory leaks e otimizar a performance do motor V8.
        </p>
      </div>

      <div class="prose prose-invert max-w-none">
        <h3>Como funciona a Cadeia?</h3>
        <p>Quando acedes a uma propriedade de um objeto, o motor JS procura-a no próprio objeto. Se não encontrar, ele sobe para o protótipo (<code>__proto__</code>), e assim sucessivamente até chegar a <code>null</code>.</p>
        
        <div class="bg-card p-4 rounded-xl border font-code text-sm">
          const animal = { comer: true };<br/>
          const cao = { ladrar: true };<br/>
          Object.setPrototypeOf(cao, animal);<br/><br/>
          console.log(cao.comer); // true (Herdado via protótipo)
        </div>

        <h3 class="mt-6">Porquê masterizar isto?</h3>
        <ul class="list-disc ml-6 space-y-2">
          <li><strong>Eficiência de Memória:</strong> Métodos definidos no protótipo são partilhados por todas as instâncias, não duplicados.</li>
          <li><strong>Performance do V8:</strong> O motor otimiza o acesso a propriedades através de <i>Hidden Classes</i> baseadas nestes protótipos.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "js-mq1"
};
