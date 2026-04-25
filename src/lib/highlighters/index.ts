import { highlightPHP } from './php';
import { highlightJS } from './javascript';
import { highlightJVM } from './java';
import { highlightPython } from './python';
import { highlightHTML } from './html';

/**
 * @fileOverview Dispatcher central de Syntax Highlighting.
 */
export const getHighlighter = (language: string) => {
  const lang = language.toLowerCase();

  if (lang === 'php') return highlightPHP;
  if (['javascript', 'typescript', 'js', 'ts'].includes(lang)) return highlightJS;
  if (['java', 'kotlin', 'kt'].includes(lang)) return highlightJVM;
  if (lang === 'python' || lang === 'py') return highlightPython;
  if (['html', 'xml'].includes(lang)) return highlightHTML;

  return (line: string) => line; // Fallback: sem highlight
};
