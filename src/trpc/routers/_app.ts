import prisma from "@/lib/db";
import { createTRPCRouter, protectedProcedure } from "../init";
import { inngest } from "@/inngest/client";
import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import { TRPCError } from "@trpc/server";
import { workFlowsRouter } from "@/feature/workflows/server/routers";

export const appRouter = createTRPCRouter({
  workflows: workFlowsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
