
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p21",
  language: "html",
  title: "Projeto Master Final: Auditoria e Cookies",
  description: "Garanta a conformidade final do projeto.",
  statement: "Defina a política de cookies segura usando strings de comentário 'HttpOnly; Secure; SameSite=Strict'.",
  isProjectPart: true,
  youtubeVideoId: "8aGhZQkoFbQ",
  template: `<!-- Protocolo de Segurança Final -->\n`,
  detailedExplanation: `
    <h3>🔒 Blindagem de Estado</h3>
    <p>Chegaste ao fim. O último passo é garantir que o rasto de dados deixado no browser do utilizador é imune a ataques de roubo de sessão.</p>
  `,
  objectives: [
    { id: "secure", description: "Flags de segurança de cookies presentes", test: "HttpOnly; Secure; SameSite=Strict" }
  ]
};
