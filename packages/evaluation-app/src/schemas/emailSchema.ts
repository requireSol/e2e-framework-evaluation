import { z } from "zod";

const EmailSchema = z.object({
  to: z.string().email(),
  subject: z.string().min(1, "Subject cannot be empty"),
  text: z.string().min(1, "Message cannot be empty"),
});
export default EmailSchema;
