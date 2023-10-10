import { z } from "zod";

export const Schema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  followers: z.number().min(0).optional(),
  isActive: z.boolean().optional(),
  size: z.string(),
});
