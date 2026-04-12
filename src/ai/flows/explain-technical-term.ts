'use server';
/**
 * @fileOverview An AI assistant flow that explains technical terms or error messages.
 *
 * - explainTechnicalTerm - A function that provides clear, simplified explanations of technical terms or error messages.
 * - ExplainTechnicalTermInput - The input type for the explainTechnicalTerm function.
 * - ExplainTechnicalTermOutput - The return type for the explainTechnicalTerm function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExplainTechnicalTermInputSchema = z.object({
  termOrError: z
    .string()
    .describe('The technical term or error message to be explained.'),
  targetLanguage: z
    .string()
    .describe(
      'The language for the explanation (e.g., "Technical English", "Portuguese").'
    ),
});
export type ExplainTechnicalTermInput = z.infer<
  typeof ExplainTechnicalTermInputSchema
>;

const ExplainTechnicalTermOutputSchema = z.object({
  explanation: z.string().describe('The simplified explanation.'),
});
export type ExplainTechnicalTermOutput = z.infer<
  typeof ExplainTechnicalTermOutputSchema
>;

export async function explainTechnicalTerm(
  input: ExplainTechnicalTermInput
): Promise<ExplainTechnicalTermOutput> {
  return explainTechnicalTermFlow(input);
}

const explainTechnicalTermPrompt = ai.definePrompt({
  name: 'explainTechnicalTermPrompt',
  input: {schema: ExplainTechnicalTermInputSchema},
  output: {schema: ExplainTechnicalTermOutputSchema},
  prompt: `You are an expert technical explainer for programming concepts and error messages.
Your goal is to provide clear, concise, and simplified explanations, tailored for a learner.

Explain the following technical term or error message in a way that is easy to understand, using the specified target language:

Term or Error Message: {{{termOrError}}}
Target Language for Explanation: {{{targetLanguage}}}

Ensure the explanation avoids excessive jargon and focuses on core concepts relevant to a programmer.`,
});

const explainTechnicalTermFlow = ai.defineFlow(
  {
    name: 'explainTechnicalTermFlow',
    inputSchema: ExplainTechnicalTermInputSchema,
    outputSchema: ExplainTechnicalTermOutputSchema,
  },
  async (input) => {
    const {output} = await explainTechnicalTermPrompt(input);
    return output!;
  }
);
