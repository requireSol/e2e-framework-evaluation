import { type NextRequest, NextResponse } from "next/server";

/**
 * @deprecated Diese API-Route wurde zu einer tRPC-Prozedur migriert.
 * Bitte verwenden Sie stattdessen den tRPC-Client mit der Mutation 'email.sendEmail'.
 * Beispiel: trpc.email.sendEmail.mutate({ to, subject, text })
 */
export async function POST(req: NextRequest) {
  return NextResponse.json(
    { 
      message: "Diese API-Route ist veraltet. Bitte verwenden Sie den tRPC-Client mit der Mutation 'email.sendEmail'.",
      example: "trpc.email.sendEmail.mutate({ to, subject, text })"
    },
    { status: 410 } // 410 Gone
  );
}
