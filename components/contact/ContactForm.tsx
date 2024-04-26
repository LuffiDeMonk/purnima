'use client'

import React from 'react'
import Container from '../common/Container'
import { Form, FormControl, FormField, FormItem } from '../ui/form'
import { useForm } from 'react-hook-form'
import { Input } from '../ui/input'
import { ContactFormValidation, IContactForm } from '@/validation/ContactFormValidation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'

export default function ContactForm() {
    const form = useForm<IContactForm>({
        resolver: zodResolver(ContactFormValidation),
        defaultValues: {
            name: '',
            email: '',
            message: ''
        }
    })
    return (
        <Container classname='max-w-xl px-4'>
            <Form {...form}>
                <form className='space-y-6'>
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
                    <Button
                        variant='outline'
                        size='lg'
                    >
                        Send
                    </Button>
                </form>
            </Form>
        </Container>
    )
}
