import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "css-mq21",
  title: "Quiz: Espaços de Cor Modernos",
  passingScore: 80,
  questions: [
    {
      id: "q21_1",
      question: "Qual a vantagem do OKLCH sobre o RGB/HSL?",
      options: [
        "É mais antigo e compatível",
        "É perceptualmente uniforme, garantindo contraste consistente independente da cor",
        "Usa apenas números binários",
        "Não permite cores vibrantes"
      ],
      correctAnswer: 1
    },
    {
      id: "q21_2",
      question: "O que a função 'color-mix()' permite?",
      options: [
        "Misturar duas cores nativamente no CSS",
        "Mudar a cor da pele de fotos",
        "Criar gradientes infinitos",
        "Substituir o Photoshop"
      ],
      correctAnswer: 0
    }
  ]
};