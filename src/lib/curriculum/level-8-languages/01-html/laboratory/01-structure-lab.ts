
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p1",
  language: "html",
  title: "Laboratório Master: Arquitetura de Documento",
  description: "Construa a fundação de um projeto real começando do zero absoluto.",
  statement: "Declare o tipo de documento, configure o head completo e inicie o body com identificadores de elite.",
  isProjectPart: true,
  template: `<!-- Inicie a construção na linha 1 -->\n`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔨 Manual do Arquiteto</h3>
      <p>Nesta fase Master, não recebes código base. Deves escrever toda a estrutura <strong>HTML5</strong> sozinho. O terminal irá realizar uma auditoria estática ao teu código para validar a conformidade.</p>
    </div>
  `,
  objectives: [
    {
      id: "doctype",
      description: "Declarar <!DOCTYPE html> na linha 1.",
      test: "<!DOCTYPE html>"
    },
    {
      id: "html_tag",
      description: "Abrir a tag <html> com o idioma pt-MZ.",
      test: "<html lang=\"pt-MZ\">"
    },
    {
      id: "head_meta",
      description: "Configurar charset UTF-8 e viewport no <head>.",
      test: "charset=\"UTF-8\""
    },
    {
      id: "body_hooks",
      description: "No <body>, criar um <h1> com id='app-header' e uma <div> com classe='content-container'.",
      test: "id=\"app-header\""
    }
  ]
};
