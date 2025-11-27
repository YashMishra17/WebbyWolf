import { z } from 'zod';

export const newsletterSchema = z.object({
  email: z.string().email()
});

export const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(10)
});
