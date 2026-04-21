
import type { TheoryLesson } from '../../types';

// Fase 3: Avançado
const advancedLessons: TheoryLesson[] = [
  {
    id: "py-f3-t1",
    title: "Fase 3: Decoradores e Context Managers",
    content: "<div class='space-y-4'><h2 class='text-2xl font-bold'>🎭 Metaprogramação</h2><p>Aprenda a criar decoradores com parâmetros e gestores de contexto personalizados para gerir recursos.</p></div>",
    quizId: "py-mq13"
  },
  {
    id: "py-f3-t2",
    title: "Fase 3: Concorrência e Paralelismo",
    content: "<div class='space-y-4'><h2 class='text-2xl font-bold'>🚀 Threads vs Multiprocessing</h2><p>Entenda o GIL e quando usar cada modelo de execução paralela no Python.</p></div>",
    quizId: "py-mq3"
  },
  {
    id: "py-f3-t3",
    title: "Fase 3: Async/Await (AsyncIO)",
    content: "<div class='space-y-4'><h2 class='text-2xl font-bold'>⚡ I/O Não-Bloqueante</h2><p>Domine o loop de eventos para criar servidores de alta performance.</p></div>",
    quizId: "py-mq3"
  }
];

// Fase 4: Especialização
const specializationLessons: TheoryLesson[] = [
  {
    id: "py-f4-t1",
    title: "Fase 4: Desenvolvimento Web (FastAPI/Django)",
    content: "<div class='space-y-4'><h2 class='text-2xl font-bold'>🌐 Construindo APIs Modernas</h2><p>Arquitetura de sistemas web, autenticação e integração com bases de dados.</p></div>",
    quizId: "py-mq5"
  },
  {
    id: "py-f4-t2",
    title: "Fase 4: Ciência de Dados (NumPy/Pandas)",
    content: "<div class='space-y-4'><h2 class='text-2xl font-bold'>📊 Análise e Processamento</h2><p>Manipulação de grandes volumes de dados e visualização estatística.</p></div>",
    quizId: "py-mq6"
  },
  {
    id: "py-f4-t3",
    title: "Fase 4: Automação e Bot Design",
    content: "<div class='space-y-4'><h2 class='text-2xl font-bold'>🤖 Scripts de Produtividade</h2><p>Web scraping, automação de tarefas e criação de bots para Telegram/Discord.</p></div>",
    quizId: "py-mq18"
  }
];

const internalsLessons: TheoryLesson[] = [
  {
    id: "py-m-int-1",
    title: "Internals: CPython, GIL e Bytecode",
    content: "<p>Como o Python funciona no nível do silício.</p>",
    quizId: "py-mq1"
  },
  {
    id: "py-m-int-2",
    title: "Internals: Gestão de Memória e GC",
    content: "<p>Profiling e otimização de memória no Heap.</p>",
    quizId: "py-mq4"
  }
];

export const lessons = [
  ...advancedLessons,
  ...specializationLessons,
  ...internalsLessons,
  {
    id: "py-m21",
    title: "Fase 4: Capstone Milestone - Produção",
    content: "<p>Finalização e deploy do projeto de especialização.</p>",
    quizId: "py-mq21"
  }
];
