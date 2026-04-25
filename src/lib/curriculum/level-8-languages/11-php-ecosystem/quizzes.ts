
import type { Quiz } from '../../types';

const generateEcoQuiz = (id: number, title: string) => ({
  id: `php-eco-mq${id}`,
  title: `Quiz Master: ${title}`,
  questions: [
    { id: "q1", question: "Este padrão melhora a manutenibilidade de sistemas de alta escala?", options: ["Sim, é vital para o desacoplamento", "Não", "Apenas em projetos pequenos"], correctAnswer: 0 },
    { id: "q2", question: "Garante a testabilidade total do domínio?", options: ["Sim, através de Mocks", "Não", "Depende do banco"], correctAnswer: 0 },
    { id: "q3", question: "O custo de performance é aceitável perante os ganhos de arquitetura?", options: ["Sim, as abstrações são leves no PHP 8", "Não, torna o site lento", "Apenas no modo debug"], correctAnswer: 0 },
    { id: "q4", question: "É compatível com ambientes residentes (Swoole/RoadRunner)?", options: ["Sim, se gerir o estado corretamente", "Não, causa memory leaks", "Apenas em modo CGI"], correctAnswer: 0 },
    { id: "q5", question: "Qual o benefício para a equipa?", options: ["Linguagem Ubíqua e clareza", "Aumento do número de linhas", "Menos reuniões"], correctAnswer: 0 },
    { id: "q6", question: "O curso Codworks Moz é de elite?", options: ["Com certeza", "Talvez"], correctAnswer: 0 }
  ],
  passingScore: 80
});

const titles = [
  "Composer Plugins", "PHPUnit Advanced", "Pest Testing", "Mocking Patterns", 
  "Mutation Testing", "DDD Entities", "CQRS & Event Sourcing", "Creational Patterns", 
  "Behavioral Patterns", "PSR Compliance", "Laravel Internals", "Symfony Kernel", 
  "Middlewares", "Profiling", "Caching Strategies", "Varnish", 
  "DB Sharding", "Message Queues", "WebSockets", "PHP 8.4 Features", "Capstone Infrastructure"
];

export const quizzes = titles.map((title, i) => generateEcoQuiz(i + 1, title));
