import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import SurveyResponseSchema from "@evaluation-app/schemas/surveySchema";

export const surveyRouter = createTRPCRouter({
  submitResponse: publicProcedure
    .input(SurveyResponseSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        // IP-Adresse aus den Headers extrahieren
        const ipAddress = ctx.headers.get("x-forwarded-for") ??
                        ctx.headers.get("x-real-ip") ??
                        "unknown";

        // Neue Survey-Antwort in der Datenbank speichern
        const surveyResponse = await ctx.db.surveyResponse.create({
          data: {
            ipAddress,
            responseData: input.responseData,
          },
        });

        return surveyResponse;
      } catch (error) {
        console.error("Error submitting survey response:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to submit survey response",
        });
      }
    }),

  getAll: publicProcedure
    .query(async ({ ctx }) => {
      try {
        return await ctx.db.surveyResponse.findMany({
          orderBy: { createdAt: "desc" },
        });
      } catch (error) {
        console.error("Error fetching survey responses:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to fetch survey responses",
        });
      }
    }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      try {
        const response = await ctx.db.surveyResponse.findUnique({
          where: { id: input.id },
        });

        if (!response) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Survey response not found",
          });
        }

        return response;
      } catch (error) {
        if (error instanceof TRPCError) throw error;
        
        console.error("Error fetching survey response:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to fetch survey response",
        });
      }
    }),
    
  // Statistik über Survey-Antworten abrufen
  getStats: publicProcedure
    .query(async ({ ctx }) => {
      try {
        const totalCount = await ctx.db.surveyResponse.count();

        
        const lastSubmission = await ctx.db.surveyResponse.findFirst({
          orderBy: { createdAt: "desc" },
        });

        return {
          totalResponses: totalCount,
          lastSubmissionDate: lastSubmission?.createdAt ?? null,
        };
      } catch (error) {
        console.error("Error fetching survey stats:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to fetch survey statistics",
        });
      }
    }),
});
