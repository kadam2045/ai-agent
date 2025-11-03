//Ai Providers
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createOpenAI } from "@ai-sdk/openai";
import { createPerplexity } from "@ai-sdk/perplexity";

import { generateText } from "ai";
import { inngest } from "./client";

const google = createGoogleGenerativeAI();
const openai = createOpenAI();
const perplexity = createPerplexity();

export const execute = inngest.createFunction(
  { id: "execute-ai" },
  { event: "execute/ai" },
  async ({ event, step }) => {
    const { steps: geminiSteps } = await step.ai.wrap(
      "gemini-generate-text",
      generateText,
      {
        model: google("gemini-2.5-flash"),
        system: "You are a helpful assistant.",
        prompt:
          "give me info about this https://www.linkedin.com/in/yash-mevada-433a0b215/.",
      }
    );

    const { steps: openaiSteps } = await step.ai.wrap(
      "openai-generate-text",
      generateText,
      {
        model: openai("gpt-4"),
        system: "You are a helpful assistant.",
        prompt:
          "give me info about this https://www.linkedin.com/in/yash-mevada-433a0b215/.",
      }
    );

    const { steps: perplexitySteps } = await step.ai.wrap(
      "perplexity-generate-text",
      generateText,
      {
        model: perplexity("sonar"),
        system: "You are a helpful assistant.",
        prompt:
          "give me info about this https://www.linkedin.com/in/yash-mevada-433a0b215/.",
      }
    );

    return {
      geminiSteps,
      openaiSteps,
      perplexitySteps,
    };
  }
);
