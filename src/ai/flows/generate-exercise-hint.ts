'use server';
/**
 * @fileOverview An AI agent that generates hints for coding exercises based on user's current code and exercise details.
 *
 * - generateExerciseHint - A function that handles the hint generation process.
 * - GenerateExerciseHintInput - The input type for the generateExerciseHint function.
 * - GenerateExerciseHintOutput - The return type for the generateExerciseHint function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const TestSchema = z.object({
  name: z.string().describe('The name of the test case.'),
  input: z.string().describe('The input provided to the code for this test case.'),
  expected: z.string().describe('The expected output for this test case.'),
});

const GenerateExerciseHintInputSchema = z.object({
  exerciseTitle: z.string().describe('The title of the coding exercise.'),
  exerciseDescription: z.string().describe('The full description of the coding exercise.'),
  exerciseTemplate: z.string().describe('The initial code template provided to the user.'),
  userCode: z.string().describe('The user\'s current code for the exercise.'),
  existingHints: z.array(z.string()).describe('An array of hints previously provided to the user, to avoid repetition.').default([]),
  tests: z.array(TestSchema).describe('A list of test cases for the exercise, including input and expected output.'),
  programmingLanguage: z.string().describe('The programming language of the exercise (e.g., python, javascript).'),
  difficulty: z.string().describe('The difficulty level of the exercise (e.g., beginner, intermediate, advanced).'),
});
export type GenerateExerciseHintInput = z.infer<typeof GenerateExerciseHintInputSchema>;

const GenerateExerciseHintOutputSchema = z.object({
  hint: z.string().describe('A helpful, concise, and guiding hint for the learner.'),
});
export type GenerateExerciseHintOutput = z.infer<typeof GenerateExerciseHintOutputSchema>;

export async function generateExerciseHint(input: GenerateExerciseHintInput): Promise<GenerateExerciseHintOutput> {
  return generateExerciseHintFlow(input);
}

const generateExerciseHintPrompt = ai.definePrompt({
  name: 'generateExerciseHintPrompt',
  input: { schema: GenerateExerciseHintInputSchema },
  output: { schema: GenerateExerciseHintOutputSchema },
  prompt: `You are an encouraging and knowledgeable programming tutor for the Mozkod platform. Your goal is to help a student get unstuck on a coding exercise by providing a single, concise hint. Do NOT give them the direct solution.
Focus on guiding them towards problem-solving techniques, relevant concepts, or common pitfalls based on their current code.

Here is the exercise information:
Title: {{{exerciseTitle}}}
Description: {{{exerciseDescription}}}
Programming Language: {{{programmingLanguage}}}
Difficulty: {{{difficulty}}}
Initial Code Template:
${'```'}{{{programmingLanguage}}}
{{{exerciseTemplate}}}
${'```'}

Tests:
{{#each tests}}
- Test Name: {{{this.name}}}
  Input: {{{this.input}}}
  Expected Output: {{{this.expected}}}
{{/each}}

Hints already given (avoid repeating these concepts or similar suggestions):
{{#if existingHints.length}}
{{#each existingHints}}
- {{{this}}}
{{/each}}
{{else}}
None yet.
{{/if}}

Student's current code:
${'```'}{{{programmingLanguage}}}
{{{userCode}}}
${'```'}

Based on the exercise, the student's current code, and the hints already provided, provide a single, concise hint that helps them progress without revealing the direct solution. Focus on the next logical step or a concept they might be overlooking. If their code is very close, a small nudge is sufficient. If their code is far off, guide them to review fundamental concepts relevant to the problem. The hint should be encouraging and focus on a specific aspect that could lead them to the solution.

Example hint: "Consider how you are iterating through the array. Are you checking every necessary element?"

Hint: