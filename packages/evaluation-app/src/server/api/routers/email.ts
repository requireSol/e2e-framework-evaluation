import { z } from "zod";
import { Resend } from "resend";
import { createTRPCRouter, publicProcedure } from "../trpc";
import EmailSchema from "@evaluation-app/schemas/emailSchema";
import Email from "@evaluation-app/emails/email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const emailRouter = createTRPCRouter({
  sendEmail: publicProcedure
    .input(EmailSchema)
    .mutation(async ({ input }) => {
      const { to, subject, text } = input;

      try {
        const { data, error } = await resend.emails.send({
          from: process.env.RESEND_EMAIL_SENDER!,
          to: [to],
          subject: subject,
          react: Email({ text: text }),
        });

        if (error) throw new Error(error.message);

        return data;
      } catch (error) {
        console.error("Error sending email:", error);
        throw error;
      }
    }),
});
