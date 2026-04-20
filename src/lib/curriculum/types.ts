
export type TheoryLesson = {
  id: string;
  title: string;
  content: string;
  youtubeVideoId?: string;
  quizId: string;
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
};

export type Quiz = {
  id: string;
  title: string;
  questions: QuizQuestion[];
  passingScore: number;
};

export type Objective = {
  id: string;
  description: string;
  hint?: string;
  test: string;
};

export type PracticeExercise = {
  id: string;
  language: string;
  title: string;
  description: string;
  statement: string;
  template: string;
  detailedExplanation: string;
  objectives: Objective[];
};

export type KnowledgeArea = {
  id: string;
  title: string;
  description: string;
  load: string;
  iconName: string;
  theory: TheoryLesson[];
  practice: {
    [key: string]: PracticeExercise[];
  };
  quizzes: Quiz[];
};

export type Level = {
  id: number;
  title: string;
  description: string;
  knowledgeAreas: KnowledgeArea[];
};
