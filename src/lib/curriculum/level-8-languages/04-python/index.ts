
import type { KnowledgeArea, TheoryLesson } from '../../types';

const lessons: TheoryLesson[] = [
  { id: "py-m1", title: "Interpretador Python e GIL", content: "<p>Entendendo a execução interna e o Global Interpreter Lock.</p>", quizId: "py-mq1" },
  { id: "py-m2", title: "Metaprogramação e Decoradores", content: "<p>Escrevendo código que modifica código em runtime.</p>", quizId: "py-mq2" },
  { id: "py-m3", title: "AsyncIO e Concorrência Moderna", content: "<p>Sistemas de alta escala com programação assíncrona.</p>", quizId: "py-mq3" },
  { id: "py-m4", title: "Gestão de Memória e Garbage Collection", content: "<p>Como o Python lida com objetos e contagem de referências.</p>", quizId: "py-mq4" },
  { id: "py-m5", title: "Arquiteturas Escaláveis com FastAPI/Django", content: "<p>Padrões de design para backends robustos.</p>", quizId: "py-mq5" },
  { id: "py-m6", title: "Data Science Stack Internals", content: "<p>Performance numérica com extensões em C.</p>", quizId: "py-mq6" },
  { id: "py-m7", title: "Testes com Pytest e Mocks", content: "<p>Garantindo 100% de cobertura e qualidade.</p>", quizId: "py-mq7" },
  { id: "py-m8", title: "Segurança e Criptografia em Python", content: "<p>Implementando hashes e comunicações seguras.</p>", quizId: "py-mq8" },
  { id: "py-m9", title: "Micro-serviços e Dockerização", content: "<p>Isolando e escalando apps Python na nuvem.</p>", quizId: "py-mq9" },
  { 
    id: "py-m10", 
    title: "Projeto Final: API de Dados e Deploy no Render", 
    youtubeVideoId: "mNst8vX-u8E",
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">🐍 Backend de Elite com Python</h2>
        <p>Constrói uma API RESTful usando FastAPI que processa dados reais e faz o deploy no <strong>Render.com</strong>.</p>
        <div class="bg-card p-6 rounded-2xl border space-y-4">
          <h3 class="font-bold text-primary">1. Git & Requirements</h3>
          <p class="text-sm text-muted-foreground">Organiza o repositório com <code>main.py</code> e <code>requirements.txt</code>. Faz o commit inicial.</p>
          <h3 class="font-bold text-primary">2. Docker (Opcional mas Master)</h3>
          <p class="text-sm text-muted-foreground">Cria um <code>Dockerfile</code> para garantir portabilidade total.</p>
          <h3 class="font-bold text-primary">3. Deploy Cloud</h3>
          <p class="text-sm text-muted-foreground">Conecta o GitHub ao Render. O deploy será feito automaticamente a cada push na main.</p>
        </div>
      </div>
    `, 
    quizId: "py-mq10" 
  }
];

export const pythonMaster: KnowledgeArea = {
  id: 'lang-python-master',
  title: '04. Python Master',
  description: 'Especialização em arquitetura, performance e sistemas de dados.',
  load: '50h',
  iconName: 'Code2',
  theory: lessons,
  practice: {
    python: [
      {
        id: 'py-master-p1',
        language: 'python',
        title: 'Laboratório: Decoradores Master',
        description: 'Implementando lógica de logging com decoradores.',
        statement: 'Crie um decorador "log" que imprime "Executando" antes da função.',
        template: 'def log(func):\n    def wrapper(*args, **kwargs):\n        print("Executando")\n        return func(*args, **kwargs)\n    return wrapper',
        detailedExplanation: '<p>Decoradores permitem estender o comportamento de funções de forma limpa.</p>',
        objectives: [{ id: 'obj1', description: 'Usar wrapper e print', test: 'wrapper' }]
      }
    ]
  },
  quizzes: [
    {
      id: "py-mq10",
      title: "Quiz: Python Master Final",
      passingScore: 80,
      questions: [
        {
          id: "q1",
          question: "Qual o papel do GIL (Global Interpreter Lock) no CPython?",
          options: ["Acelerar o processamento paralelo", "Garantir que apenas uma thread execute bytecode por vez", "Criptografar o código", "Gerir o banco de dados"],
          correctAnswer: 1
        }
      ]
    }
  ]
};
