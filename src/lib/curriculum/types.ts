
export type LessonType = 'theory' | 'exercise';

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
};

export type TheoryLesson = {
  id: string;
  title: string;
  content: string;
  beginnerExplanation: string;
  videoUrl?: string;
  quiz: QuizQuestion[];
};

export type PracticeObjective = {
  id: string;
  title: string;
  description: string;
  explanation: string;
  hint: string;
  validationRegex: string;
};

export type PracticeExercise = {
  id: string;
  title: string;
  description: string;
  beginnerGuide: string;
  objectives: PracticeObjective[];
  starterCode: Record<string, string>;
};

export type KnowledgeArea = {
  id: string;
  title: string;
  description: string;
  theoryLessons: TheoryLesson[];
  practiceExercises: PracticeExercise[];
  supportedLanguages: string[];
};

export type Module = {
  id: string;
  title: string;
  level: string;
  description: string;
  image: string;
  knowledgeAreas: KnowledgeArea[];
};
