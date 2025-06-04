import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import SurveyResponseSchema from "@evaluation-app/schemas/surveySchema";

export const surveyRouter = createTRPCRouter({
  // Speichern einer neuen Survey-Antwort
  submitResponse: publicProcedure
    .input(SurveyResponseSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.db.surveyResponse.create({
          data: {
            responseData: input.responseData,
          },
        });

      } catch (error) {
        console.error("Error submitting survey response:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to submit survey response",
        });
      }
    }),

  // Alle Survey-Antworten abrufen
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

  // Eine bestimmte Survey-Antwort nach ID abrufen
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
        const uniqueIPs = await ctx.db.surveyResponse.findMany({
          select: { ipAddress: true },
          distinct: ['ipAddress'],
        });
        
        const lastSubmission = await ctx.db.surveyResponse.findFirst({
          orderBy: { createdAt: "desc" },
        });

        return {
          totalResponses: totalCount,
          uniqueRespondents: uniqueIPs.length,
          lastSubmissionDate: lastSubmission?.createdAt || null,
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
