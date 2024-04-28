'use client'

import React, { useTransition } from 'react'
import Container from '../common/Container'
import { Form, FormControl, FormField, FormItem } from '../ui/form'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../ui/input'
import { ContactFormValidation, IContactForm } from '@/validation/ContactFormValidation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Textarea } from '../ui/textarea'
import { SendEmail } from '@/app/action'
import { toast } from 'sonner'
import ContactFormButton from './ContactFormButton'

export default function ContactForm() {
    const [isPending, startTransition] = useTransition()
    const form = useForm<IContactForm>({
        resolver: zodResolver(ContactFormValidation),
        defaultValues: {
            name: '',
            email: '',
            message: ''
        }
    })
    const onSubmit: SubmitHandler<IContactForm> = (data) => {
        startTransition(async () => {
            const results = await SendEmail(data)
            if (results?.type === 'error') {
                toast.error(results.message)
            }
            if (results?.type === 'success') {
                toast.success(results.message)
                form.reset()
            }
        })
    }
    return (
        <Container classname='max-w-xl px-4'>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-6'
                >
                    <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder='Enter your name' {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Enter your email" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='message'
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea placeholder="Enter your message" className='resize-none h-64' {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <ContactFormButton
                        isPending={isPending}
                    />
                </form>
            </Form>
        </Container>
    )
}
