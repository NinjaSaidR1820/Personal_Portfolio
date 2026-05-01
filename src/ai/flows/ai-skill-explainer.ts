'use server';
/**
 * @fileOverview A GenAI tool that generates a concise explanation for a given skill.
 *
 * - explainSkill - A function that generates an explanation for a skill.
 * - ExplainSkillInput - The input type for the explainSkill function.
 * - ExplainSkillOutput - The return type for the explainSkill function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExplainSkillInputSchema = z.object({
  skillName: z.string().describe('The name of the skill to explain.'),
});
export type ExplainSkillInput = z.infer<typeof ExplainSkillInputSchema>;

const ExplainSkillOutputSchema = z.object({
  explanation: z
    .string()
    .describe(
      'A concise and relevant explanation of the skill, suitable for a portfolio context.'
    ),
});
export type ExplainSkillOutput = z.infer<typeof ExplainSkillOutputSchema>;

export async function explainSkill(
  input: ExplainSkillInput
): Promise<ExplainSkillOutput> {
  return explainSkillFlow(input);
}

const explainSkillPrompt = ai.definePrompt({
  name: 'explainSkillPrompt',
  input: {schema: ExplainSkillInputSchema},
  output: {schema: ExplainSkillOutputSchema},
  prompt: `As an expert in software development and technology, provide a concise and relevant explanation for the following skill, suitable for a professional portfolio. Focus on its core purpose and common applications, keeping the explanation to a maximum of 50 words.

Skill: {{{skillName}}}`,
});

const explainSkillFlow = ai.defineFlow(
  {
    name: 'explainSkillFlow',
    inputSchema: ExplainSkillInputSchema,
    outputSchema: ExplainSkillOutputSchema,
  },
  async input => {
    const {output} = await explainSkillPrompt(input);
    return output!;
  }
);
