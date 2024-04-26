import React from 'react'
import { cn } from '@/lib/utils'
import { open_sans } from '../fonts/Fonts'
import Carousel from './Carousel'

export default function TestimonialContainer() {
    return (
        <section className='text-white bg-gradient-to-b from-purple-600 to-purple-900 py-32'>
            <h1 className='text-center text-4xl lg:text-5xl font-bold'>Testimonial</h1>
            <p className={cn('text-[23px] text-gray-300 text-center mt-2 mb-6', open_sans.className)}>Don&apos;t just take my word for it.</p>
            <Carousel />
        </section>
    )
}
