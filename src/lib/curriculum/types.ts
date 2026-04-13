export type TheoryLesson = {
  id: string;
  title: string;
  content: string;
  youtubeVideoId?: string;
};

export type PracticeExercise = {
  id: string;
  title: string;
  statement: string;
  template: string;
  detailedExplanation?: string;
  youtubeVideoId?: string;
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
};

export type Quiz = {
  id: string;
  title: string;
  questions: QuizQuestion[];
}

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
