import { z } from "zod";
export const registerUserSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  email: z.string().trim().min(5, "Invalid email address"),
  password: z.string().trim().min(6, "Password must be at least 6 characters"),

  role: z
    .enum(["user", "admin"], {
      error: "Role must be either 'user' or 'admin'",
    })
    .default("user"),
});

