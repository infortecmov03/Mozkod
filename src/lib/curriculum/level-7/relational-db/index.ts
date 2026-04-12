import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quizzes';

export const fccRDB: KnowledgeArea = {
    id: "fcc-relational-db",
    title: "Relational Database",
    description: "5 projetos com SQL.",
    load: "40h",
    iconName: "Database",
    theory,
    practice,
    quizzes,
};
