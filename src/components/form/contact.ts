import {z} from 'zod';

export const contactSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().nonempty(),
  message: z.string().nonempty(),
});

export type TContactSchema = z.infer<typeof contactSchema>;