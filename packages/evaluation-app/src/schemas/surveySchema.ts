import { z } from "zod";

// Definieren eines flexiblen Schemas für die Survey-Antworten
// Es erlaubt beliebige String-Keys mit Arrays von Strings als Werte
const SurveyResponseSchema = z.object({
  // Erlaubt dynamische Felder mit Array-Werten
  responseData: z.record(z.string(), z.array(z.string())),
});

export default SurveyResponseSchema;
