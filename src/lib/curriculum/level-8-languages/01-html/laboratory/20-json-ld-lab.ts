import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p20",
  language: "html",
  title: "Projeto Master: Dados Estruturados JSON-LD",
  description: "Fale diretamente com os algoritmos de busca usando semântica de dados.",
  statement: "Adicione um bloco de script com o tipo 'application/ld+json' para descrever o seu projeto como uma 'SoftwareApplication'.",
  isProjectPart: true,
  template: ``,
  detailedExplanation: `
    <h3>🏷️ Semântica Profunda</h3>
    <p>O JSON-LD é o formato preferido pelo Google para gerar Rich Snippets. Ele permite que o teu site apareça com estrelas, preços e descrições técnicas diretamente na página de resultados.</p>
  `,
  objectives: [
    {
      id: "json_ld_type",
      description: "Defina o type do script como 'application/ld+json'.",
      hint: "<script type=\"application/ld+json\"></script>",
      test: "application/ld+json"
    },
    {
      id: "schema_context",
      description: "Inclua o contexto schema.org dentro do objeto JSON.",
      hint: "\"@context\": \"https://schema.org\"",
      test: "schema.org"
    }
  ]
};
