import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p7",
  language: "html",
  title: "Laboratório Master: Otimização de Rede",
  description: "Implemente técnicas de pre-connect.",
  statement: "Adicione um link de pre-connect para o domínio 'https://fonts.googleapis.com' para acelerar o carregamento de fontes externas.",
  template: `<head>
  <!-- Adicione o resource hint aqui -->
</head>`,
  detailedExplanation: `
    <h3>⚡ Antecipação de Latência</h3>
    <p>O <code>rel="preconnect"</code> informa ao browser que vamos precisar de recursos daquele domínio em breve, permitindo que ele inicie o handshake de rede em paralelo com o parsing do HTML.</p>
  `,
  objectives: [
    {
      id: "obj1",
      description: "Usar tag link com rel preconnect",
      test: "rel=\"preconnect\""
    },
    {
      id: "obj2",
      description: "Apontar para o domínio correto",
      test: "href=\"https://fonts.googleapis.com\""
    }
  ]
};
