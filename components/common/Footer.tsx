import React from 'react'
import Container from './Container'
import Image from 'next/image'
import IconContainer from '../Navbar/IconContainer'
import { cn } from '@/lib/utils'
import { open_sans } from '../fonts/Fonts'

export default function Footer() {
    return (
        <footer className='py-20 md:py-40'>
            <Container classname='text-white max-w-5xl grid grid-cols-1 md:grid-cols-2 items-start px-4 gap-4'>
                <div className='space-y-4 col-span-1'>
                    <Image
                        src='/logo-2.svg'
                        alt='footer'
                        width={170}
                        height={95}
                    />
                    <p className='text-gray-300'>Emi is a holistic UX Designer and Digital Strategist from Detroit, Michigan.</p>
                </div>
                <div className={cn(open_sans.className, 'flex flex-col md:items-end justify-evenly h-full gap-4')}>
                    <IconContainer className='order-3 md:order-1' />
                    <p className='text-lg text-gray-300 md:order-2'>emi@occurdesign.com</p>
                    <p className='text-lg text-gray-300 md:order-3'>9804902664</p>
                </div>
            </Container>
        </footer>
    )
}
