import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p1",
  language: "html",
  title: "Projeto Master: Fundação do Documento",
  description: "Construa a estrutura base seguindo os padrões W3C passo a passo.",
  statement: "Siga o guia de construção para montar o esqueleto HTML5 perfeito.",
  isProjectPart: true,
  youtubeVideoId: "8ME9u065vD4",
  template: `<!-- Inicie a construção na linha 1 -->\n`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔨 Manual do Arquiteto: Linha por Linha</h3>
      <p class="text-sm">Construa o seu documento seguindo esta sequência exata para garantir a conformidade master:</p>
      
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Linha 1:</strong> Declare o tipo do documento: <code>&lt;!DOCTYPE html&gt;</code></p>
        <p><strong>Linha 2:</strong> Abra a tag raiz com o idioma: <code>&lt;html lang="pt-MZ"&gt;</code></p>
        <p><strong>Linha 3:</strong> Abra o cabeçalho técnico: <code>&lt;head&gt;</code></p>
        <p><strong>Linha 4:</strong> Defina o mapa de caracteres: <code>&lt;meta charset="UTF-8"&gt;</code></p>
        <p><strong>Linha 5:</strong> Configure o viewport mobile: <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></p>
        <p><strong>Linha 6:</strong> Defina o título da aba: <code>&lt;title&gt;Codworks Master Studio&lt;/title&gt;</code></p>
        <p><strong>Linha 7:</strong> Ligue o ficheiro de estilos: <code>&lt;link rel="stylesheet" href="style.css"&gt;</code></p>
        <p><strong>Linha 8:</strong> Feche o cabeçalho: <code>&lt;/head&gt;</code></p>
        <p><strong>Linha 9:</strong> Abra o corpo visível: <code>&lt;body&gt;</code></p>
        <p><strong>Linha 10:</strong> Adicione o título principal: <code>&lt;h1&gt;Bem-vindo ao Nível Master&lt;/h1&gt;</code></p>
        <p><strong>Linha 11:</strong> Adicione a confirmação: <code>&lt;p&gt;A estrutura está validada.&lt;/p&gt;</code></p>
        <p><strong>Linha 12:</strong> Feche o corpo: <code>&lt;/body&gt;</code></p>
        <p><strong>Linha 13:</strong> Feche o documento: <code>&lt;/html&gt;</code></p>
      </div>

      <div class="bg-blue-500/5 p-4 rounded-xl border border-blue-500/20 text-xs italic">
        <strong>Nota Técnica:</strong> O motor de auditoria verificará a presença exata destes elementos e atributos. Certifique-se de que não existem erros de digitação.
      </div>
    </div>
  `,
  objectives: [
    { 
      id: "doctype", 
      description: "Linha 1: Declarar <!DOCTYPE html>", 
      test: "<!DOCTYPE html>" 
    },
    { 
      id: "html_lang", 
      description: "Linha 2: Tag html com lang='pt-MZ'", 
      test: "<html lang=\"pt-MZ\">" 
    },
    { 
      id: "meta_charset", 
      description: "Linha 4: Meta charset UTF-8", 
      test: "<meta charset=\"UTF-8\">" 
    },
    { 
      id: "meta_viewport", 
      description: "Linha 5: Meta viewport configurada", 
      test: "name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"" 
    },
    { 
      id: "title_master", 
      description: "Linha 6: Título 'Codworks Master Studio'", 
      test: "<title>Codworks Master Studio</title>" 
    },
    { 
      id: "link_css", 
      description: "Linha 7: Link para style.css", 
      test: "<link rel=\"stylesheet\" href=\"style.css\">" 
    },
    { 
      id: "content_h1", 
      description: "Linha 10: H1 'Bem-vindo ao Nível Master'", 
      test: "<h1>Bem-vindo ao Nível Master</h1>" 
    },
    { 
      id: "content_p", 
      description: "Linha 11: Parágrafo de validação", 
      test: "<p>A estrutura está validada.</p>" 
    }
  ]
};