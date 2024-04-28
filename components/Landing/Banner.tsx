import Image from 'next/image'
import React from 'react'
import ScrollText from '../animations/ScrollText'
import { Button } from '../ui/button'

export default function Banner() {
    return (
        <section className='w-full min-h-screen h-full relative bg-[url("/banner.jpg")] object-cover object-left bg-fixed'>
            <div className='z-10 px-12 text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold antialiased max-w-screen-2xl w-full text-nowrap absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className="w-full flex flex-col justify-center">
                    <div className="flex justify-center">
                        <h1 className=''>{`Hi! I `}</h1>
                        <div className='relative shrink-0 basis-1/2 sm:basis-1/5'>
                            <ScrollText />
                        </div>
                    </div>
                    <h1 className='text-center pb-16'>{`products & brands.`}</h1>
                    <div className="flex justify-center">
                        <Button className='w-fit px-10 py-6 rounded-full text-xs font-semibold'>Download Resume</Button>
                    </div>
                </div>
            </div>
            <div className='absolute inset-0 bg-black bg-opacity-60' />
        </section >
    )
}
