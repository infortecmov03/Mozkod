import type { KnowledgeArea } from '../../types';
import { pythonExercises } from './practice/python';
import { javascriptExercises } from './practice/javascript';
import { typescriptExercises } from './practice/typescript';

export const practice: KnowledgeArea['practice'] = {
    python: pythonExercises,
    javascript: javascriptExercises,
    typescript: typescriptExercises,
};
