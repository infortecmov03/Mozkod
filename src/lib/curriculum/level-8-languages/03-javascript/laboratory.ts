import type { PracticeExercise } from '../../types';

export const practice = {
  javascript: [
    {
      id: "js-p1",
      language: "javascript",
      title: "Lab Master: Microtasks e Event Loop",
      description: "Controle a ordem de execução assíncrona.",
      statement: "Utilize queueMicrotask para imprimir 'Fim' logo após o bloco síncrono, mas antes do próximo frame.",
      template: `console.log('Início');

queueMicrotask(() => {
  // Escreve aqui
});

console.log('Processando...');`,
      detailedExplanation: "<h3>⚙️ Microtasks</h3><p>Diferente de setTimeout, a Microtask Queue é processada imediatamente após a Call Stack esvaziar, garantindo que o código corra antes do browser renderizar ou processar eventos.</p>",
      objectives: [{ id: "obj1", description: "Usar queueMicrotask", test: "queueMicrotask" }, { id: "obj2", description: "Imprimir Fim", test: "console.log('Fim')" }]
    },
    {
      id: "js-p2",
      language: "javascript",
      title: "Lab Master: Proxies e Interceção",
      description: "Crie um objeto que valida propriedades.",
      statement: "Crie um Proxy que lance um erro se tentarem definir uma propriedade que não seja um número.",
      template: `const validator = {
  set(obj, prop, value) {
    if (typeof value !== 'number') {
      throw new Error('Deve ser número');
    }
    obj[prop] = value;
    return true;
  }
};

const proxy = new Proxy({}, validator);`,
      detailedExplanation: "<h3>🎭 Metaprogramação</h3><p>Proxies permitem 'embrulhar' objetos e intercetar operações como leitura, escrita e deleção, sendo a base de sistemas de reatividade modernos (como no Vue.js).</p>",
      objectives: [{ id: "obj1", description: "Implementar handler set", test: "set(obj, prop, value)" }]
    }
  ]
};
