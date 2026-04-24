
import type { Quiz } from '../../types';

const generateJSQuiz = (id: number, title: string, questions: any[]) => ({
  id: `js-mq${id}`,
  title: `Quiz Master: ${title}`,
  questions: questions,
  passingScore: 80
});

export const quizzes: Quiz[] = [
  generateJSQuiz(1, "Prototypal Inheritance", [
    { id: "q1", question: "Onde o motor JS procura uma propriedade que não existe no objeto atual?", options: ["No servidor", "Na cadeia de protótipos (__proto__)", "No ficheiro HTML", "Na memória stack"], correctAnswer: 1 },
    { id: "q2", question: "Qual o objeto no topo de quase todas as cadeias de protótipos?", options: ["Function.prototype", "Object.prototype", "Array.prototype", "null"], correctAnswer: 1 },
    { id: "q3", question: "Qual método permite criar un objeto com um protótipo específico?", options: ["Object.assign()", "Object.create()", "Object.define()", "Object.prototype()"], correctAnswer: 1 },
    { id: "q4", question: "Propriedades no protótipo são copiadas para cada instância?", options: ["Sim", "Não, são partilhadas via referência", "Apenas se forem funções", "Depende do motor V8"], correctAnswer: 1 },
    { id: "q5", question: "O que é 'Prototype Pollution'?", options: ["Limpeza de cache", "Alteração maliciosa do Object.prototype que afeta todo o sistema", "Um erro de rede", "O fim da execução"], correctAnswer: 1 },
    { id: "q6", question: "A keyword 'class' no JS é:", options: ["Um sistema de tipos", "Açúcar sintático sobre protótipos", "Uma função de rede", "Exclusiva do Java"], correctAnswer: 1 }
  ]),
  generateJSQuiz(2, "Event Loop Internals", [
    { id: "q1", question: "Qual a ordem de prioridade no Event Loop?", options: ["Microtasks > Render > Macrotasks", "Macrotasks > Microtasks > Render", "Render > Macrotasks", "Indefinida"], correctAnswer: 0 },
    { id: "q2", question: "Qual destes é uma Microtask?", options: ["setTimeout", "setInterval", "Promise.then()", "requestAnimationFrame"], correctAnswer: 2 },
    { id: "q3", question: "O que acontece se uma microtask gerar outra recursivamente?", options: ["O browser ignora", "O site continua fluido", "A thread de renderização é bloqueada (Starvation)", "O PC reinicia"], correctAnswer: 2 },
    { id: "q4", question: "Onde corre o código do Event Loop?", options: ["No servidor", "Na thread principal (UI Thread)", "Num Web Worker", "Na GPU"], correctAnswer: 1 },
    { id: "q5", question: "Qual a função da Microtask Queue?", options: ["Processar cliques", "Executar código urgente logo após a call stack esvaziar", "Descarregar imagens", "Mudar o CSS"], correctAnswer: 1 },
    { id: "q6", question: "O requestAnimationFrame ocorre em qual fase?", options: ["Antes das Microtasks", "Após as Microtasks, mas antes da pintura (Paint)", "Depois do setTimeout", "No final de cada segundo"], correctAnswer: 1 }
  ]),
  generateJSQuiz(3, "Closures & Memory", [
    { id: "q1", question: "Uma closure 'lembra' de quê?", options: ["Do valor final da variável", "Do ambiente léxico onde foi criada", "Apenas das variáveis globais", "Nada"], correctAnswer: 1 },
    { id: "q2", question: "Qual o impacto de closures em Memory Leaks?", options: ["Nenhum", "Mantêm variáveis vivas no Heap impedindo a limpeza do GC", "Limpam a memória mais rápido", "Aumentam a Stack"], correctAnswer: 1 },
    { id: "q3", question: "Onde as variáveis capturadas por uma closure são armazenadas?", options: ["Stack", "Heap", "Disco Rígido", "L1 Cache"], correctAnswer: 1 },
    { id: "q4", question: "O Garbage Collector recolhe uma variável se uma closure ainda a referencia?", options: ["Sim", "Não", "Apenas se for nula", "Depende do tempo"], correctAnswer: 1 },
    { id: "q5", question: "Para libertar memória de uma closure pesada, deves:", options: ["Chamar a função novamente", "Definir a referência da função closure como null", "Reiniciar o browser", "Usar 'delete'"], correctAnswer: 1 },
    { id: "q6", question: "O motor V8 otimiza closures?", options: ["Sim, via Context Tracking", "Não, é impossível", "Apenas em modo estrito", "Apenas para números"], correctAnswer: 0 }
  ]),
  generateJSQuiz(14, "Streams API", [
    { id: "q1", question: "Qual a vantagem principal das Streams?", options: ["Criptografia", "Processamento com memória constante (O(1))", "Velocidade de download", "Design visual"], correctAnswer: 1 },
    { id: "q2", question: "O que é 'Backpressure'?", options: ["Pressão no teclado", "Controle de fluxo onde o destino avisa a fonte para abrandar", "Erro de rede", "Aceleração"], correctAnswer: 1 },
    { id: "q3", question: "Qual método encadeia Streams?", options: ["connect()", "pipeTo()", "link()", "flow()"], correctAnswer: 1 },
    { id: "q4", question: "Uma ReadableStream lida com pedaços chamados:", options: ["Bits", "Chunks", "Blocks", "Slices"], correctAnswer: 1 },
    { id: "q5", question: "Onde as Streams são mais úteis?", options: ["Somas simples", "Upload/Download de ficheiros gigantes", "Mudar cores", "Loops curtos"], correctAnswer: 1 },
    { id: "q6", question: "Qual objeto lê de uma ReadableStream?", options: ["Reader (getReader)", "Scanner", "Fetcher", "Parser"], correctAnswer: 0 }
  ]),
  // Placeholders para os restantes com 6 questões cada seguindo o padrão
  ...Array.from({ length: 17 }, (_, i) => {
    const id = i > 10 ? i + 1 : (i >= 3 ? i + 4 : i + 3); // Pulando os já definidos
    if (id === 14) return null; 
    return generateJSQuiz(id, `Tópico Master ${id}`, [
      { id: "q1", question: "Esta técnica é de elite?", options: ["Sim", "Não", "Talvez"], correctAnswer: 0 },
      { id: "q2", question: "Garante performance?", options: ["Sim", "Não"], correctAnswer: 0 },
      { id: "q3", question: "É seguro para produção?", options: ["Sim", "Não"], correctAnswer: 0 },
      { id: "q4", question: "É uma API nativa?", options: ["Sim", "Não"], correctAnswer: 0 },
      { id: "q5", question: "Reduz latência?", options: ["Sim", "Não"], correctAnswer: 0 },
      { id: "q6", question: "O curso é Elite?", options: ["Com certeza", "Talvez"], correctAnswer: 0 }
    ]);
  }).filter(q => q !== null)
];
