import React from 'react'
import Container from '../common/Container'
import ContactForm from './ContactForm'

export default function Contact() {
    return (
        <section className='bg-[url("/banner.jpg")] h-full bg-fixed bg-cover object-left'>
            <Container classname='max-w-full bg-black/60 text-white py-32'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl text-center font-semibold mb-8'>React Out!</h1>
                <ContactForm />
            </Container>
        </section>
    )
}
