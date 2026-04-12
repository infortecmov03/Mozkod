import type { KnowledgeArea } from '../../types';
import { theory } from './theory';
import { practice } from './practice';
import { quizzes } from './quizzes';

export const kaSE: KnowledgeArea = {
    id: "ka-se",
    title: "Software Engineering",
    description: "Metodologias ágeis, Scrum, Kanban.",
    load: "40h",
    iconName: "Construction",
    theory,
    practice,
    quizzes
};
