import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { open_sans } from '../fonts/Fonts'

type TestimonialProps = {
    image: string,
    name: string,
    designation: string,
    testimonial: string,
}

export default function TestimonialCard() {
    return (
        <div className='space-y-5'>
            <div className='flex justify-center mx-4'>
                <Image
                    src='/banner.jpg'
                    width={150}
                    height={150}
                    alt='testimonial'
                    className='size-40 rounded-full shadow-md shadow-black/60'
                />
            </div>
            <p className={cn('text-center text-base', open_sans.className)}>The timeliness, professionality, organization, and most importantly - the communication, were above and beyond. Her work led to to a number of crucial findings.</p>
            <div className='text-center'>
                <h3 className='font-semibold antialiased text-[17px]'>Jason Sauers, gnuMob</h3>
                <p className={cn('text-sm text-gray-300', open_sans.className)}>Founder and CEO</p>
            </div>
        </div>
    )
}
