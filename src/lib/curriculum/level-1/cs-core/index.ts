import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quiz';

export const kaCS: KnowledgeArea = {
    id: "ka-cs-core",
    title: "Computer Science Core",
    description: "Sistemas binários, lógica booleana, representação de dados.",
    load: "40h",
    iconName: "Cpu",
    theory,
    practice,
    quizzes
};
