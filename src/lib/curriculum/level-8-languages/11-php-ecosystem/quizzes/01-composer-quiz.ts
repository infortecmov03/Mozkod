import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-eco-mq1",
  title: "Quiz Master: Composer & Autoloading",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Qual comando gera o mapa de classes otimizado para produção?",
      options: ["composer update", "composer dump-autoload -o", "composer install", "composer clean"],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "O que a flag --classmap-authoritative faz?",
      options: ["Impede o download de pacotes", "Garante que o PHP só procure classes no mapa gerado, sem olhar para o disco", "Muda a versão do PHP", "Nada, é opcional"],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "Para que serve a seção 'scripts' no composer.json?",
      options: ["Para mudar a cor do terminal", "Para automatizar tarefas de build e qualidade", "Para instalar bibliotecas", "Para documentar o código"],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "O ficheiro composer.lock deve ser enviado para o repositório?",
      options: ["Apenas no desenvolvimento", "Sim, para garantir versões idênticas em toda a equipa", "Não, é um ficheiro pessoal", "Apenas se usar Docker"],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "O comando 'composer audit' verifica o quê?",
      options: ["A velocidade do código", "Vulnerabilidades conhecidas (CVEs) nas dependências", "Erros de sintaxe", "O tamanho das imagens"],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "Qual o padrão de autoloading mais usado atualmente no PHP?",
      options: ["PSR-0", "PSR-4", "PSR-7", "PSR-11"],
      correctAnswer: 1
    }
  ]
};