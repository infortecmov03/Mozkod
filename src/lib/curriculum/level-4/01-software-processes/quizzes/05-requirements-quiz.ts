import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "se-q5-master",
  title: "Quiz: Engenharia de Requisitos de Elite",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual destes é um exemplo clássico de um Requisito Não-Funcional?",
      options: ["O utilizador deve poder mudar a senha", "O sistema deve processar o pagamento em menos de 2 segundos", "O sistema deve enviar um email de boas-vindas", "O administrador pode banir utilizadores"],
      correctAnswer: 1,
      explanation: "Performance, tempo de resposta e escalabilidade são atributos de qualidade, logo, são requisitos não-funcionais."
    },
    {
      id: "q2",
      question: "O que caracteriza uma 'Restrição' de projeto?",
      options: ["Um desejo do utilizador final", "Um fator externo que limita as escolhas da equipa técnica (ex: linguagem obrigatória)", "Um erro no código", "Uma funcionalidade opcional"],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "Diferença entre Verificação e Validação?",
      options: ["Nenhuma", "Verificação foca no processo técnico; Validação foca nas necessidades do negócio", "Validação é feita por máquinas; Verificação por humanos", "Verificação é para backend; Validação para frontend"],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "Um requisito 'ambíguo' é perigoso porquê?",
      options: ["Gasta mais RAM", "Pode ser interpretado de formas diferentes pelo programador e pelo cliente", "Torna o site mais lento", "Não pode ser traduzido para inglês"],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "Onde residem os requisitos num projeto Scrum?",
      options: ["No código-fonte", "No Product Backlog", "Apenas na cabeça do PO", "No manual do utilizador"],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "Requisitos de 'Segurança' e 'Privacidade' são geralmente:",
      options: ["Funcionais", "Não-Funcionais", "Opcionais", "Bugs"],
      correctAnswer: 1
    }
  ]
};