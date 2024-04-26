import React from 'react'
import Container from './Container'
import Image from 'next/image'
import IconContainer from '../Navbar/IconContainer'

export default function Footer() {
    return (
        <footer className='py-40'>
            <Container classname='text-white max-w-5xl grid grid-cols-1 lg:grid-cols-2 items-start'>
                <div className='space-y-4 col-span-1'>
                    <Image
                        src='/logo-2.svg'
                        alt='footer'
                        width={170}
                        height={95}
                    />
                    <p className='text-gray-300'>Emi is a holistic UX Designer and Digital Strategist from Detroit, Michigan.</p>
                </div>
                <div className='flex flex-col items-end'>
                    <IconContainer />
                </div>
            </Container>
        </footer>
    )
}
