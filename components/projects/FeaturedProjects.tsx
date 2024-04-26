import React from 'react'
import Container from '../common/Container'
import { cn } from '@/lib/utils'
import { open_sans } from '../fonts/Fonts'
import Image from 'next/image'
import { Button } from '../ui/button'

const projects = [
    {
        id: crypto.randomUUID(),
        title: 'Whisker',
        description: 'Leading the design of digital products that make life with your pet endlessly better.',
        category: 'UX/UI, Product Design, Branding',
        image: '/projects/whisker.png'
    },
    {
        id: crypto.randomUUID(),
        title: 'gnuMob',
        description: 'An augmented reality ad rewards platform that engages users to claim geo-located NFTs.',
        category: 'Research, UX/UI, Branding, Biz Dev',
        image: '/projects/gnu_mob.jpeg'
    },
    {
        id: crypto.randomUUID(),
        title: 'Vendavo',
        description: 'Website redesign, digital & event design, and CMS integration for a mid-level SaaS organization.',
        category: 'Web Design, Digital Design, Marketing',
        image: '/projects/vendavo.jpeg'
    },
    {
        id: crypto.randomUUID(),
        title: 'Verdigreen',
        description: 'An augmented reality eCommerce mobile app specifically for indoor plant parents.',
        category: 'UX Design, Branding, Testing',
        image: '/projects/verdigreen.jpeg'
    },
    {
        id: crypto.randomUUID(),
        title: 'Big Mood',
        description: 'Responsive website, branded apparel and products, and an eCommerce CMS for a professional band.',
        category: 'Branding, UX Design, Web Design',
        image: '/projects/big_mood.jpeg'
    },
    {
        id: crypto.randomUUID(),
        title: 'Colorado Technology',
        description: 'Marketing, event design, and website redesign testing for a technology non-profit in Colorado.',
        category: 'Marketing, Events, Testing',
        image: '/projects/colorado_technology.png'
    },

]

export default function FeaturedProjects() {
    return (
        <Container classname='text-white max-w-4xl py-20 px-4 md:px-8 lg:px-0'>
            <h1 className='text-3xl sm:text-5xl text-center font-bold'>Featured Products</h1>
            <p className={cn('text-lg text-center mt-6 mb-32 text-gray-300', open_sans.className)}>These are the tip of the iceberg, but I&apos;m proud of all of these projects.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-12">
                {projects.map((project, idx) => (
                    <div key={idx} className={cn("px-4 sm:px-6 py-6 bg-gray-700 hover:bg-gray-900 transition-colors duration-500 rounded-lg text-center sm:text-start", open_sans.className)}>
                        <Image
                            src={project.image}
                            width={800}
                            height={800}
                            alt={project.title}
                            className='h-80 sm:h-96 rounded-sm transition-transform duration-500 hover:scale-105 shadow-xl shadow-black/60'
                        />
                        <h1 className='text-2xl font-semibold mt-4'>{project.title}</h1>
                        <p className='text-base text-purple-500 my-4'>{project.category}</p>
                        <p className='text-sm text-gray-300 mb-7'>{project.description}</p>
                        <div className="flex justify-center sm:justify-start">
                            <Button
                                variant='outline'
                                size='lg'
                            >View Project</Button>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    )
}
