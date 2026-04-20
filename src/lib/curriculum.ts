
export type Module = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  lessons: Lesson[];
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  progress: number;
};

export type Lesson = {
  id: string;
  title: string;
  type: 'theory' | 'lab' | 'quiz';
  content: string;
  code?: string;
  language?: string;
};

export const modules: Module[] = [
  {
    id: 'cs-basics',
    title: 'CS Core: Algorithms',
    category: 'CS Core',
    description: 'Master the fundamental building blocks of computing.',
    image: 'cs-core',
    level: 'Beginner',
    progress: 45,
    lessons: [
      {
        id: 'intro',
        title: 'What is an Algorithm?',
        type: 'theory',
        content: 'An algorithm is a step-by-step procedure for solving a problem.'
      },
      {
        id: 'lab-1',
        title: 'Sum of Two Numbers',
        type: 'lab',
        language: 'python',
        code: 'def sum_numbers(a, b):\n    return a + b\n\nprint(sum_numbers(5, 10))',
        content: 'Write a function that takes two numbers and returns their sum.'
      }
    ]
  },
  {
    id: 'web-foundations',
    title: 'Web Core: Modern HTML/CSS',
    category: 'Web Development',
    description: 'Build beautiful, responsive interfaces for the modern web.',
    image: 'web-dev',
    level: 'Beginner',
    progress: 100,
    lessons: []
  },
  {
    id: 'ai-intro',
    title: 'AI/ML Fundamentals',
    category: 'Data Science',
    description: 'Step into the world of intelligent systems.',
    image: 'ai-ml',
    level: 'Intermediate',
    progress: 10,
    lessons: []
  }
];
