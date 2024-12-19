import { z } from "zod";

export const demoSchema = z.object({
  workEmail: z.string().email("Invalid email"),
  firstName: z.string().min(2, "First name is too short"),
  lastName: z.string().min(2, "Last name is too short"),
  title: z.string().min(2, "Title is too short"),
  companyName: z.string().min(2, "Company name is too short"),
  details: z.string().optional(),
});

export type TDemoSchema = z.infer<typeof demoSchema>;

