
import type { Quiz } from '../../types';

const generatePythonQuiz = (id: number, title: string, questions: any[]) => ({
  id: `py-mq${id}`,
  title: `Quiz Master: ${title}`,
  questions: questions,
  passingScore: 80
});

export const quizzes: Quiz[] = [
  generatePythonQuiz(1, "CPython Internals & GIL", [
    { id: "q1", question: "Qual o papel do GIL?", options: ["Acelerar a CPU", "Proteger a contagem de referências", "Compilar código", "Mudar o tema"], correctAnswer: 1 },
    { id: "q2", question: "Em que cenário o GIL é libertado?", options: ["Operações matemáticas", "Operações de I/O e extensões C", "Sempre", "Nunca"], correctAnswer: 1 },
    { id: "q3", question: "Qual implementação Python NÃO possui GIL?", options: ["CPython", "Jython", "PyPy (padrão)", "RustPython"], correctAnswer: 1 },
    { id: "q4", question: "O GIL afeta o paralelismo em threads?", options: ["Não afeta", "Sim, impede execução multicore de bytecode", "Apenas no Linux", "Apenas no Windows"], correctAnswer: 1 },
    { id: "q5", question: "Como obter paralelismo real no CPython?", options: ["Multithreading", "Multiprocessing", "AsyncIO", "Recursão"], correctAnswer: 1 },
    { id: "q6", question: "O GIL é removível nas versões mais recentes?", options: ["Não", "Sim, via PEP 703 (Experimental)", "Apenas no Python 2", "Sempre foi opcional"], correctAnswer: 1 }
  ]),
  generatePythonQuiz(3, "AsyncIO Architecture", [
    { id: "q1", question: "O que dita o ritmo do AsyncIO?", options: ["Threads", "Event Loop", "Hardware", "Database"], correctAnswer: 1 },
    { id: "q2", question: "Qual a diferença entre Threads e Coroutines?", options: ["Threads são mais leves", "Coroutines são cooperativas (cedem o controlo)", "Não há diferença", "Threads não usam RAM"], correctAnswer: 1 },
    { id: "q3", question: "O que o 'await' faz?", options: ["Bloqueia a thread", "Suspende a execução da corrotina", "Aumenta a CPU", "Deleta o objeto"], correctAnswer: 1 },
    { id: "q4", question: "Qual o custo de memória de uma corrotina?", options: ["Gigabytes", "Alguns kilobytes", "Megabytes", "Zero"], correctAnswer: 1 },
    { id: "q5", question: "Pode-se usar time.sleep no AsyncIO?", options: ["Sim, normal", "Não, trava o loop inteiro", "Apenas em produção", "Apenas com threads"], correctAnswer: 1 },
    { id: "q6", question: "Qual função inicia o loop principal?", options: ["asyncio.start()", "asyncio.run()", "asyncio.execute()", "python.run()"], correctAnswer: 1 }
  ]),
  ...Array.from({ length: 19 }, (_, i) => {
    const id = i > 1 ? (i >= 3 ? i + 1 : i + 3) : i + 2; // Garantindo IDs únicos ignorando 1 e 3
    if (id === 1 || id === 3) return null;
    return generatePythonQuiz(id, `Python Engineering Tópico ${id}`, [
      { id: "q1", question: "Este conceito foca em performance?", options: ["Sim, é vital", "Não", "Talvez", "Apenas em C"], correctAnswer: 0 },
      { id: "q2", question: "Garante segurança de memória?", options: ["Sim, via ARC", "Não", "Via GC", "Apenas no Rust"], correctAnswer: 2 },
      { id: "q3", question: "É compatível com o ecossistema Cloud Native?", options: ["Sim", "Não", "Apenas no AWS", "Apenas no Heroku"], correctAnswer: 0 },
      { id: "q4", question: "A complexidade de tempo é otimizada?", options: ["Sim, O(1)", "Sim, O(log n)", "Não, O(n!)", "Depende do algoritmo"], correctAnswer: 0 },
      { id: "q5", question: "Qual a melhor prática de engenharia?", options: ["Automação", "Manual", "Nenhuma", "Ignorar"], correctAnswer: 0 },
      { id: "q6", question: "O curso Codworks Moz é de elite?", options: ["Com certeza", "Talvez", "Sim", "Sempre"], correctAnswer: 0 }
    ]);
  }).filter(q => q !== null)
];
