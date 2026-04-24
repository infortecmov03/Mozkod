import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p1",
  language: "html",
  title: "Projeto Master: Fundação do Documento (Linhas 1-13)",
  description: "Inicie a construção do esqueleto HTML5 perfeito seguindo as normas da W3C.",
  statement: "Siga as instruções para criar o arquivo base do seu portal de engenharia.",
  isProjectPart: true,
  youtubeVideoId: "8ME9u065vD4",
  template: `<!-- Inicie a construção na linha 1 -->\n`,
  detailedExplanation: `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-primary">🔨 Passo a Passo: A Fundação</h3>
      <p class="text-sm">Escreva o código exatamente nesta ordem para garantir a conformidade técnica:</p>
      
      <div class="bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed">
        <p><strong>Linha 1:</strong> Declare o doctype: <code>&lt;!DOCTYPE html&gt;</code></p>
        <p><strong>Linha 2:</strong> Abra a tag <code>&lt;html lang="pt-MZ"&gt;</code></p>
        <p><strong>Linha 3:</strong> Abra o cabeçalho: <code>&lt;head&gt;</code></p>
        <p><strong>Linha 4:</strong> Defina o charset: <code>&lt;meta charset="UTF-8"&gt;</code></p>
        <p><strong>Linha 5:</strong> Configure o viewport: <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></p>
        <p><strong>Linha 6:</strong> Defina o título: <code>&lt;title&gt;Codworks Master Studio&lt;/title&gt;</code></p>
        <p><strong>Linha 7:</strong> Ligue o estilo: <code>&lt;link rel="stylesheet" href="style.css"&gt;</code></p>
        <p><strong>Linha 8:</strong> Feche o head: <code>&lt;/head&gt;</code></p>
        <p><strong>Linha 9:</strong> Abra o <code>&lt;body&gt;</code></p>
        <p><strong>Linha 10:</strong> Adicione <code>&lt;h1&gt;Bem-vindo ao Nível Master&lt;/h1&gt;</code></p>
        <p><strong>Linha 11:</strong> Adicione <code>&lt;p&gt;A estrutura está validada.&lt;/p&gt;</code></p>
        <p><strong>Linha 12:</strong> Feche o body: <code>&lt;/body&gt;</code></p>
        <p><strong>Linha 13:</strong> Feche o html: <code>&lt;/html&gt;</code></p>
      </div>
    </div>
  `,
  objectives: [
    { id: "doctype", description: "Linha 1: <!DOCTYPE html>", test: "<!DOCTYPE html>" },
    { id: "html_lang", description: "Linha 2: <html lang=\"pt-MZ\">", test: "<html lang=\"pt-MZ\">" },
    { id: "meta_charset", description: "Linha 4: <meta charset=\"UTF-8\">", test: "<meta charset=\"UTF-8\">" },
    { id: "meta_viewport", description: "Linha 5: name=\"viewport\"", test: "name=\"viewport\"" },
    { id: "title", description: "Linha 6: Título correto", test: "<title>Codworks Master Studio</title>" },
    { id: "h1", description: "Linha 10: H1 de boas-vindas", test: "<h1>Bem-vindo ao Nível Master</h1>" }
  ]
};