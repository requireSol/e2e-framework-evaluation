import { postRouter } from "@evaluation-app/server/api/routers/post";
import { createCallerFactory, createTRPCRouter } from "@evaluation-app/server/api/trpc";
import { emailRouter } from "@evaluation-app/server/api/routers/email";
import { surveyRouter } from "@evaluation-app/server/api/routers/survey";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  email: emailRouter,
  survey: surveyRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
