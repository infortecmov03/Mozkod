import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-mq7",
  title: "Quiz Master: PDO e Segurança de Dados",
  passingScore: 85,
  questions: [
    {
      id: "q7_1",
      question: "Por que deves preferir Prepared Statements sobre concatenação de strings em SQL?",
      options: [
        "Porque o código fica mais curto",
        "Para prevenir ataques de SQL Injection separando a lógica da query dos dados do utilizador",
        "Porque o MySQL obriga",
        "Para aumentar o brilho do monitor"
      ],
      correctAnswer: 1
    },
    {
      id: "q7_2",
      question: "O que o modo 'PDO::FETCH_ASSOC' retorna?",
      options: [
        "Um objeto da classe stdClass",
        "Um array indexado pelo nome da coluna",
        "Um ficheiro XML",
        "Uma string formatada"
      ],
      correctAnswer: 1
    },
    {
      id: "q7_3",
      question: "Para que servem as Transações (beginTransaction/commit) no PDO?",
      options: [
        "Para acelerar o download",
        "Para garantir a atomicidade (ACID) de múltiplas operações na base de dados",
        "Para mudar a senha do banco",
        "Para encriptar a conexão"
      ],
      correctAnswer: 1
    },
    {
      id: "q7_4",
      question: "Qual a vantagem de usar o PDO sobre o driver específico mysqli?",
      options: [
        "É mais rápido",
        "Fornece uma camada de abstração que permite trocar de base de dados (ex: MySQL para Postgres) mudando apenas o DSN",
        "Não precisa de internet",
        "É compatível com PHP 4"
      ],
      correctAnswer: 1
    },
    {
      id: "q7_5",
      question: "Como se limpa uma conexão PDO manualmente?",
      options: ["pdo_close()", "$pdo = null;", "die();", "unset($_DB);"],
      correctAnswer: 1
    },
    {
      id: "q7_6",
      question: "O atributo 'PDO::ATTR_EMULATE_PREPARES' deve ser definido como false porquê?",
      options: [
        "Para poupar bateria",
        "Para forçar o uso de prepared statements nativos do banco de dados, aumentando a segurança",
        "Para permitir o uso de emojis no banco",
        "Para desativar o firewall"
      ],
      correctAnswer: 1
    }
  ]
};
