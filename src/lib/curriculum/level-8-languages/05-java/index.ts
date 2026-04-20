
import type { KnowledgeArea, TheoryLesson } from '../../types';

const lessons: TheoryLesson[] = [
  { id: "jv-m1", title: "JVM Internals e Bytecode", content: "<p>Como a Máquina Virtual executa e otimiza o código Java.</p>", quizId: "jv-mq1" },
  { id: "jv-m2", title: "Garbage Collection Tuning", content: "<p>Otimizando G1, ZGC e Shenandoah.</p>", quizId: "jv-mq2" },
  { id: "jv-m3", title: "Multithreading JUC", content: "<p>Uso avançado do pacote java.util.concurrent.</p>", quizId: "jv-mq3" },
  { id: "jv-m4", title: "Spring Boot Internals", content: "<p>Proxy dinâmico e gestão de contextos.</p>", quizId: "jv-mq4" },
  { id: "jv-m5", title: "Micro-serviços com Spring Cloud", content: "<p>Gateway e Service Discovery.</p>", quizId: "jv-mq5" },
  { id: "jv-m6", title: "Streams API Avançado", content: "<p>Processamento paralelo.</p>", quizId: "jv-mq6" },
  { id: "jv-m7", title: "Persistence API Performance", content: "<p>Hibernate Cache L2.</p>", quizId: "jv-mq7" },
  { id: "jv-m8", title: "Spring Security e OAuth2", content: "<p>Fluxos de autenticação segura.</p>", quizId: "jv-mq8" },
  { id: "jv-m9", title: "GraalVM e Native Images", content: "<p>Compilação AOT.</p>", quizId: "jv-mq9" },
  { 
    id: "jv-m10", 
    title: "Projeto Final: Micro-serviço e Deploy no Railway", 
    youtubeVideoId: "TQvD-Uq86oY",
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">☕ Java Enterprise Master</h2>
        <p>Cria um serviço de inventário com Spring Boot e PostgreSQL, publicando-o no <strong>Railway</strong>.</p>
        <div class="bg-card p-6 rounded-2xl border space-y-4">
          <h3 class="font-bold text-orange-500">1. Maven/Gradle & GitHub</h3>
          <p class="text-sm text-muted-foreground">Configura o repositório. Usa o <code>pom.xml</code> para gerir dependências de elite.</p>
          <h3 class="font-bold text-orange-500">2. Banco de Dados Cloud</h3>
          <p class="text-sm text-muted-foreground">Usa o Railway para subir um PostgreSQL e conecta a tua aplicação via JDBC.</p>
          <h3 class="font-bold text-orange-500">3. Cloud Launch</h3>
          <p class="text-sm text-muted-foreground">Faz o deploy e valida as métricas de saúde da JVM na nuvem.</p>
        </div>
      </div>
    `, 
    quizId: "jv-mq10" 
  }
];

export const javaMaster: KnowledgeArea = {
  id: 'lang-java-master',
  title: '05. Java Master',
  description: 'Arquitetura corporativa e sistemas críticos de alta escala.',
  load: '60h',
  iconName: 'Coffee',
  theory: lessons,
  practice: {
    java: [
      {
        id: 'jv-master-p1',
        language: 'java',
        title: 'Laboratório: Streams Paralelos',
        description: 'Otimização de processamento em massa.',
        statement: 'Use .parallelStream() para processar uma lista.',
        template: 'list.parallelStream().forEach(System.out::println);',
        detailedExplanation: '<p>Streams paralelos utilizam o ForkJoinPool para distribuir tarefas entre núcleos.</p>',
        objectives: [{ id: 'obj1', description: 'Usar parallelStream', test: 'parallelStream' }]
      }
    ]
  },
  quizzes: [
    {
      id: "jv-mq10",
      title: "Quiz: Java Master Final",
      passingScore: 80,
      questions: [
        {
          id: "q1",
          question: "Qual o benefício da GraalVM Native Image?",
          options: ["Usa mais memória", "Tempo de inicialização quase instantâneo e menor consumo de RAM", "Funciona apenas em Windows", "Não precisa de código Java"],
          correctAnswer: 1
        }
      ]
    }
  ]
};
