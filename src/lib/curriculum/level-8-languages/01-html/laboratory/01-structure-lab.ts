
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p1",
  language: "html",
  title: "Projeto Master: Fundação do Documento",
  description: "Construa a estrutura base seguindo os padrões W3C.",
  statement: "Declare o DOCTYPE, configure o head com charset UTF-8 e defina o título da página.",
  isProjectPart: true,
  youtubeVideoId: "8ME9u065vD4",
  template: `<!-- Inicie a construção na linha 1 -->\n`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔨 Manual do Arquiteto</h3>
      <p>Nesta fase Master, deves escrever toda a estrutura <strong>HTML5</strong> sozinho. O motor de auditoria irá validar se os padrões de compatibilidade moderna foram aplicados.</p>
    </div>
  `,
  objectives: [
    { id: "doctype", description: "Declarar <!DOCTYPE html>", test: "<!DOCTYPE html>" },
    { id: "lang", description: "Definir lang='pt-MZ' na tag html", test: "lang=\"pt-MZ\"" },
    { id: "charset", description: "Configurar <meta charset='UTF-8'>", test: "charset=\"UTF-8\"" }
  ]
};
