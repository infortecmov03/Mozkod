'use server';
/**
 * @fileOverview A Genkit flow for generating draft lesson content (MDX) and exercise skeletons.
 *
 * - generateLessonContent - A function that handles the generation process.
 * - GenerateLessonContentInput - The input type for the generateLessonContent function.
 * - GenerateLessonContentOutput - The return type for the generateLessonContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateLessonContentInputSchema = z.object({
  topic: z.string().describe('The main topic for which to generate lesson content and exercise.'),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']).describe('The difficulty level of the lesson and exercise.'),
  programmingLanguage: z.string().optional().describe('Optional: The programming language for the exercise (e.g., python, javascript, java, cpp, typescript). If not provided, a general concept will be generated.'),
  knowledgeArea: z.string().optional().describe('Optional: The knowledge area the topic belongs to (e.g., algorithms, programming-fundamentals, english-technical).'),
  curriculumLevel: z.number().int().min(1).max(7).optional().describe('Optional: The curriculum level (1-7) the topic is intended for.'),
});

export type GenerateLessonContentInput = z.infer<typeof GenerateLessonContentInputSchema>;

const ExerciseTestsSchema = z.object({
  name: z.string().describe('Name of the test case.'),
  input: z.string().describe('Input for the test case, typically a JSON string or literal.'),
  expected: z.string().describe('Expected output for the test case, typically a JSON string or literal.'),
}).array().describe('An array of test cases for the exercise.');

const ExerciseSkeletonSchema = z.object({
  id: z.string().describe('Unique identifier for the exercise, typically derived from title and language.'),
  title: z.string().describe('Title of the exercise in English.'),
  title_pt: z.string().describe('Title of the exercise in Portuguese.'),
  title_it: z.string().describe('Title of the exercise in Italian.'),
  language: z.string().optional().describe('The programming language of the exercise, if applicable. Can be \'general\' if not programming-specific.'),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']).describe('Difficulty level of the exercise.'),
  estimatedTime: z.number().int().describe('Estimated time in minutes to complete the exercise.'),
  description: z.string().describe('A brief description of what the user needs to implement or solve.'),
  theory: z.string().describe('The full lesson content in MDX format, explaining the topic.'),
  template: z.string().describe('The initial code template for the exercise.'),
  solution: z.string().describe('A basic working solution for the exercise. Can be a simplified version.'),
  tests: ExerciseTestsSchema,
  hints: z.string().array().describe('A list of helpful hints for the user.'),
  tags: z.string().array().describe('Relevant tags for the exercise (e.g., algorithms, sorting, beginner).'),
  ka: z.string().describe('The knowledge area the exercise belongs to (e.g., algorithms, programming-fundamentals).'),
  level: z.number().int().min(1).max(7).describe('The curriculum level (1-7) the exercise is intended for.'),
  prerequisites: z.string().array().describe('A list of prerequisite topics for this exercise.'),
});

const GenerateLessonContentOutputSchema = z.object({
  lessonContentMdx: z.string().describe('The generated lesson content in MDX format.'),
  exerciseFileContent: ExerciseSkeletonSchema.describe('The JSON content for the .exercise file.'),
});

export type GenerateLessonContentOutput = z.infer<typeof GenerateLessonContentOutputSchema>;

export async function generateLessonContent(input: GenerateLessonContentInput): Promise<GenerateLessonContentOutput> {
  return generateLessonContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateLessonContentPrompt',
  input: { schema: GenerateLessonContentInputSchema },
  output: { schema: GenerateLessonContentOutputSchema },
  prompt: `You are an expert curriculum developer for a coding education platform. Your task is to generate comprehensive lesson content in MDX format and a corresponding exercise skeleton in JSON format for a given topic.

The platform focuses on "Technical English" as a Knowledge Area and uses Git as an essential tool. Exercises have a custom '.exercise' extension and a specific JSON structure.

Based on the following input:
Topic: {{{topic}}}
Difficulty: {{{difficulty}}}
{{#if programmingLanguage}}Programming Language: {{{programmingLanguage}}}{{/if}}
{{#if knowledgeArea}}Knowledge Area (KA): {{{knowledgeArea}}}{{/if}}
{{#if curriculumLevel}}Curriculum Level: {{{curriculumLevel}}}{{/if}}

Please generate a JSON object with two top-level fields:
1.  \
lessonContentMdx\
: A string containing the comprehensive lesson theory in MDX format. It should be well-structured with headings, code blocks, bullet points, and explanations. Focus on explaining the core concepts related to the topic.
2.  \
exerciseFileContent\
: A JSON object representing the exercise skeleton, adhering to the '.exercise' file format described below.

Ensure that the \
theory\
 field within \
exerciseFileContent\
 is identical to the content of \
lessonContentMdx\
.

**Guidelines for generating 'lessonContentMdx' (MDX content):**
-   Start with a clear heading for the topic.
-   Provide detailed explanations, examples, and potentially small code snippets (if programming language is specified).
-   Structure it logically with subheadings.
-   Use Markdown for formatting (e.g., # for headings, - for lists, \`\`\` for code blocks).

**Guidelines for generating 'exerciseFileContent' (JSON for .exercise file):**
-   \
id\
: Generate a unique ID (e.g., convert title and language to kebab-case). If no language, use the title only.
-   \
title\
: The English title of the exercise.
-   \
title_pt\
: Translate the title to Portuguese.
-   \
title_it\
: Translate the title to Italian.
-   \
language\
: If 'programmingLanguage' is provided, use it. Otherwise, use 'general' or infer based on the topic.
-   \
difficulty\
: Use the provided difficulty.
-   \
estimatedTime\
: Estimate a reasonable time in minutes (e.g., 15, 30, 45, 60).
-   \
description\
: A clear and concise instruction for the user.
-   \
theory\
: This MUST be exactly the same as the generated \
lessonContentMdx\
 content.
-   \
template\
: Provide a starting code snippet. If no programming language is given, provide a conceptual pseudo-code template or relevant text/example for the topic. Include comments like "// Your code here" or "<!-- Your content here -->".
-   \
solution\
: Provide a basic, correct solution for the exercise. It should be functional but not necessarily highly optimized. If no programming language is given, provide a conceptual solution or a correct example for the topic.
-   \
tests\
: Generate 3-5 diverse test cases. Each test case should have a \
name\
, \
input\
 (as a string, e.g., for array input use "[1, 2, 3]"), and \
expected\
 output (as a string). The input and expected output should be in a format suitable for direct use in code execution (e.g., JSON.stringify for complex types). If not programming-specific, provide scenario-based tests.
-   \
hints\
: Provide 2-3 helpful hints that guide the user without giving away the direct solution.
-   \
tags\
: Generate 2-4 relevant tags.
-   \
ka\
: Use the provided 'knowledgeArea' if available, otherwise infer a suitable one (e.g., 'algorithms', 'programming-fundamentals', 'english-technical', 'git-version-control').
-   \
level\
: Use the provided 'curriculumLevel' if available, otherwise infer a suitable level (1-7).
-   \
prerequisites\
: List 1-3 essential prerequisite topics.

Ensure the entire output is a single, valid JSON object that strictly adheres to the 'GenerateLessonContentOutputSchema' structure.
`,
});

const generateLessonContentFlow = ai.defineFlow(
  {
    name: 'generateLessonContentFlow',
    inputSchema: GenerateLessonContentInputSchema,
    outputSchema: GenerateLessonContentOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);

    if (!output) {
      throw new Error('Failed to generate lesson content and exercise skeleton.');
    }

    // Ensure lessonContentMdx and exerciseFileContent.theory are consistent as per prompt instructions.
    // This also acts as a safeguard if the model slightly diverges.
    output.exerciseFileContent.theory = output.lessonContentMdx;

    // Post-processing for ID generation and other fields if the AI's output needs refinement
    const titleSlug = output.exerciseFileContent.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const langSuffix = input.programmingLanguage ? `-${input.programmingLanguage.toLowerCase().replace(/[^a-z0-9]/g, '-')}` : '';
    output.exerciseFileContent.id = `${titleSlug}${langSuffix}`;

    if (!output.exerciseFileContent.language) {
      output.exerciseFileContent.language = input.programmingLanguage || 'general';
    }

    if (!output.exerciseFileContent.ka) {
      output.exerciseFileContent.ka = input.knowledgeArea || 'general';
    }

    if (!output.exerciseFileContent.level) {
      output.exerciseFileContent.level = input.curriculumLevel || 1;
    }

    return output;
  }
);
