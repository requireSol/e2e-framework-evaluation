import { z } from "zod";

import {
  authedProcedure,
  createTRPCRouter,
  publicProcedure
} from "@evaluation-app/server/api/trpc";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: authedProcedure
    .input(z.object({ text: z.string().min(1), userName: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.create({
        data: {
          text: input.text,
          userName: input.userName,
          createdById: ctx.user.id
        },
      });
    }),

  getLatest: authedProcedure.query(async ({ ctx }) => {
    const post = await ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
      where: { createdById: ctx.user.id  },
    });

    return post ?? null;
  }),

  getAll: authedProcedure.query(async ({ ctx }) => {
    const posts = await ctx.db.post.findMany({
      orderBy: { createdAt: "desc" },
    });

    return posts ?? null;
  }),

  getSecretMessage: authedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
