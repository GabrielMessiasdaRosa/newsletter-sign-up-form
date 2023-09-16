import { z } from "zod";

const NewsletterFormSchema = z.object({
  email: z.string().nonempty("Valid email is required").email("Invalid email"),
});

export default NewsletterFormSchema;
