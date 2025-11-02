import { z } from "zod"

export const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^[\d\s\-+$$$$]+$/.test(val), "Invalid phone number"),
  projectType: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export const careerFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().refine((val) => /^[\d\s\-+$$$$]+$/.test(val), "Invalid phone number"),
  position: z.string().min(1, "Please select a position"),
  experience: z.string().min(1, "Please select experience level"),
  resume: z.instanceof(File).optional(),
  message: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
export type CareerFormData = z.infer<typeof careerFormSchema>
