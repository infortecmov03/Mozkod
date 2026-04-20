
import type { TheoryLesson } from '../../types';

export const lessons: TheoryLesson[] = [
  // PILAR 1: Paradigma e Expressividade (01-07)
  { id: "py-m1", title: "Duck Typing e Protocolos", content: "Domine a filosofia de tipos dinâmicos do Python e o uso de Abstract Base Classes (ABCs).", quizId: "py-mq1" },
  { id: "py-m2", title: "Decoradores Avançados", content: "Criação de wrappers complexos e preservação de metadados com functools.", quizId: "py-mq2" },
  { id: "py-m3", title: "Context Managers (with statement)", content: "Implementação de protocolos __enter__ e __exit__ para gestão de recursos.", quizId: "py-mq3" },
  { id: "py-m4", title: "Descriptors e Atributos Dinâmicos", content: "Como o Python gere o acesso a atributos através de __get__ e __set__.", quizId: "py-mq4" },
  { id: "py-m5", title: "Iteradores e Geradores de Alta Performance", content: "Consumo eficiente de memória com yield e protocolos de iteração.", quizId: "py-mq5" },
  { id: "py-m6", title: "Functional Programming em Python", content: "Map, filter, reduce e o uso estratégico de lambdas e closures.", quizId: "py-mq6" },
  { id: "py-m7", title: "Pattern Matching (Python 3.10+)", content: "O uso de 'match' e 'case' para desestruturação de dados complexos.", quizId: "py-mq7" },

  // PILAR 2: Concorrência e Performance (08-14)
  { id: "py-m8", title: "Entendendo o GIL (Global Interpreter Lock)", content: "Quando o Python é verdadeiramente paralelo e quando é apenas concorrente.", quizId: "py-mq8" },
  { id: "py-m9", title: "Multiprocessing para CPU-bound", content: "Contornando o GIL através de processos isolados e IPC.", quizId: "py-mq9" },
  { id: "py-m10", title: "Asyncio Event Loop Internals", content: "Como o motor assíncrono do Python gere milhares de conexões I/O.", quizId: "py-mq10" },
  { id: "py-m11", title: "Concurrent.futures e ThreadPools", content: "Abstrações de alto nível para execução paralela.", quizId: "py-mq11" },
  { id: "py-m12", title: "Profiling e Bottleneck Analysis", content: "Uso de cProfile e line_profiler para identificar gargalos.", quizId: "py-mq12" },
  { id: "py-m13", title: "Optimizing with Cython", content: "Transformando Python em C para performance de nível nativo.", quizId: "py-mq13" },
  { id: "py-m14", title: "Memory Management: Reference Counting", content: "Como o Python aloca e liberta objetos na RAM.", quizId: "py-mq14" },

  // PILAR 3: Internals e Metaprogramação (15-21)
  { id: "py-m15", title: "CPython Bytecode e a Stack Machine", content: "Desmontando código com o módulo 'dis' para ver as instruções da VM.", quizId: "py-mq15" },
  { id: "py-m16", title: "Metaclasses e a Criação de Classes", content: "Intercetando a construção de objetos com __new__ e metaclasses.", quizId: "py-mq16" },
  { id: "py-m17", title: "Dunder Methods Profundos", content: "A mágica por trás de __dict__, __slots__ e __init_subclass__.", quizId: "py-mq17" },
  { id: "py-m18", title: "C Extensions: Estendendo o Python", content: "Escrevendo módulos nativos para máxima integração com o hardware.", quizId: "py-mq18" },
  { id: "py-m19", title: "Introspeção e Reflexão de Código", content: "Manipulando o estado do programa em tempo de execução com inspect.", quizId: "py-mq19" },
  { id: "py-m20", title: "Abstrações de Frameworks (Pydantic/FastAPI)", content: "Como as bibliotecas modernas usam Type Hints para automação.", quizId: "py-mq20" },
  { id: "py-m21", title: "Projeto Final: Engine de Processamento", content: "Construção de um sistema distribuído real com deploy profissional.", quizId: "py-mq21" }
];
