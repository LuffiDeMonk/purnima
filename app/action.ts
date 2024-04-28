'use server'

import { ContactFormValidation, IContactForm } from "@/validation/ContactFormValidation"
import nodemailer from 'nodemailer'

export const SendEmail = async (formData: IContactForm) => {
    const validatedFields = ContactFormValidation.safeParse(formData)
    if (validatedFields.success) {
        const { email, message, name } = validatedFields.data
        const transport = nodemailer.createTransport(
            {
                service: 'gmail',
                auth: {
                    user: process.env.SMTP_EMAIL,
                    pass: process.env.SMTP_PASSWORD
                }
            }
        )
        try {
            const testResults = await transport.verify()
        } catch (error) {
            console.log(error)
            return {
                type: 'error',
                message: 'An error occured while verifying SMTP server'
            }
        }
        try {
            await transport.sendMail(
                {
                    from: email,
                    to: process.env.SMTP_EMAIL,
                    subject: "Email from portfolio",
                    html:
                        `
                        <body>
                        <h3>Email sent by: ${name}</h3>
                        <p>Address:${email}</p>
                        <p>${message}</p>
                        </body>
            `
                })
            return {
                type: 'success',
                message: 'Email sent successfully'
            }
        } catch (error) {
            console.log(error)
            return {
                type: 'error',
                message: 'An error occured while sending email'
            }
        }
    }
}