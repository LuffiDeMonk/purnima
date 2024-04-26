import { z } from 'zod'

export const ContactFormValidation = z.object(
    {
        name: z.string().min(1),
        email: z.string().email(),
        message: z.string().min(1)
    }
)

export type IContactForm = z.infer<typeof ContactFormValidation>