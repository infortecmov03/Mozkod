import type { Level, KnowledgeArea, TheoryLesson } from '../types';
import { htmlKA } from './01-html/index';
import { cssKA } from './02-css/index';
import { javascriptKA } from './03-javascript/index';

const pyMasterLessons: TheoryLesson[] = [
  { id: "py-m1", title: "Interpretador Python e GIL", content: "<p>Entendendo a execução interna e o Global Interpreter Lock.</p>", quizId: "py-mq1" },
  { id: "py-m2", title: "Metaprogramação e Decoradores", content: "<p>Escrevendo código que modifica código em runtime.</p>", quizId: "py-mq2" },
  { id: "py-m3", title: "AsyncIO e Concorrência Moderna", content: "<p>Sistemas de alta escala com programação assíncrona.</p>", quizId: "py-mq3" },
  { id: "py-m4", title: "Gestão de Memória e Garbage Collection", content: "<p>Como o Python lida com objetos e contagem de referências.</p>", quizId: "py-mq4" },
  { id: "py-m5", title: "Arquiteturas Escaláveis com FastAPI/Django", content: "<p>Padrões de design para backends robustos.</p>", quizId: "py-mq5" },
  { id: "py-m6", title: "Data Science Stack (Numpy/Pandas Internals)", content: "<p>Performance numérica com extensões em C.</p>", quizId: "py-mq6" },
  { id: "py-m7", title: "Testes com Pytest e Mocks", content: "<p>Garantindo 100% de cobertura e qualidade.</p>", quizId: "py-mq7" },
  { id: "py-m8", title: "Segurança e Criptografia em Python", content: "<p>Implementando hashes e comunicações seguras.</p>", quizId: "py-mq8" },
  { id: "py-m9", title: "Micro-serviços e Dockerização", content: "<p>Isolando e escalando apps Python na nuvem.</p>", quizId: "py-mq9" },
  { id: "py-m10", title: "O Futuro: Python 3.12+ e Performance", content: "<p>Novos tipos, otimizações e o fim do GIL.</p>", quizId: "py-mq10" }
];

const pythonMaster: KnowledgeArea = {
  id: 'lang-python-master',
  title: '04. Python Master',
  description: 'Especialização em arquitetura, performance e dados.',
  load: '50h',
  iconName: 'Code2',
  theory: pyMasterLessons,
  practice: {
    python: [
      {
        id: 'py-master-p1',
        language: 'python',
        title: 'Laboratório: Decoradores Master',
        description: 'Criação de um log de execução automático.',
        statement: 'Crie um decorador que imprima o nome da função antes de executá-la.',
        template: 'def log_exec(func):\n    pass',
        detailedExplanation: '<p>Decoradores permitem adicionar comportamento a funções sem alterá-las.</p>',
        objectives: [{ id: 'obj1', description: 'Definir wrapper', test: 'wrapper' }]
      }
    ]
  },
  quizzes: pyMasterLessons.map(l => ({ id: l.quizId, title: `Quiz: ${l.title}`, questions: [], passingScore: 80 }))
};

const javaMasterLessons: TheoryLesson[] = [
  { id: "jv-m1", title: "JVM Internals e Bytecode", content: "<p>Como a Máquina Virtual executa o código binário Java.</p>", quizId: "jv-mq1" },
  { id: "jv-m2", title: "Garbage Collection Tuning", content: "<p>Otimizando a limpeza de memória para aplicações sensíveis.</p>", quizId: "jv-mq2" },
  { id: "jv-m3", title: "Multithreading e Concorrência JUC", content: "<p>Uso avançado de java.util.concurrent.</p>", quizId: "jv-mq4" },
  { id: "jv-m4", title: "Spring Boot Internals", content: "<p>Dependency Injection e Inversion of Control a fundo.</p>", quizId: "jv-mq5" },
  { id: "jv-m5", title: "Micro-serviços com Spring Cloud", content: "<p>Descoberta de serviços, Config Server e Gateway.</p>", quizId: "jv-mq6" },
  { id: "jv-m6", title: "Streams API e Programação Funcional", content: "<p>Processamento paralelo e declarativo de coleções.</p>", quizId: "jv-mq7" },
  { id: "jv-m7", title: "Persistence API (JPA/Hibernate) Performance", content: "<p>Resolvendo problemas de N+1 e cache de 2º nível.</p>", quizId: "jv-mq8" },
  { id: "jv-m8", title: "Segurança com Spring Security", content: "<p>RBAC, JWT e proteção de endpoints corporativos.</p>", quizId: "jv-mq9" },
  { id: "jv-m9", title: "GraalVM e Native Images", content: "<p>Reduzindo o tempo de startup e footprint de memória.</p>", quizId: "jv-mq10" },
  { id: "jv-m10", title: "Project Loom e Virtual Threads", content: "<p>A nova era da concorrência leve no Java.</p>", quizId: "jv-mq11" }
];

const javaMaster: KnowledgeArea = {
  id: 'lang-java-master',
  title: '05. Java Master',
  description: 'Arquitetura corporativa e sistemas críticos de alta escala.',
  load: '60h',
  iconName: 'Coffee',
  theory: javaMasterLessons,
  practice: {
    java: [
      {
        id: 'java-master-p1',
        language: 'java',
        title: 'Laboratório: Streams Paralelos',
        description: 'Processamento massivo de dados.',
        statement: 'Use .parallelStream() para somar uma lista gigante.',
        template: 'lista.parallelStream().mapToInt(Integer::intValue).sum();',
        detailedExplanation: '<p>Streams paralelos usam múltiplos cores da CPU automaticamente.</p>',
        objectives: [{ id: 'obj1', description: 'Usar parallelStream', test: 'parallelStream' }]
      }
    ]
  },
  quizzes: javaMasterLessons.map(l => ({ id: l.quizId, title: `Quiz: ${l.title}`, questions: [], passingScore: 80 }))
};

export const level8: Level = {
  id: 8,
  title: 'Nível 8: Domínio de Linguagens',
  description: 'Especialização profunda para se tornar um mestre em tecnologias específicas.',
  knowledgeAreas: [htmlKA, cssKA, javascriptKA, pythonMaster, javaMaster]
};
