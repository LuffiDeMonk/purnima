import React from 'react'
import Container from '../common/Container'
import { cn } from '@/lib/utils'
import { open_sans } from '../fonts/Fonts'
import SkillContainer from './SkillContainer'
import AboutImage from './AboutImage'

export default function About() {
    return (
        <main className='bg-black py-32 overflow-x-hidden'>
            <Container classname='text-white px-4 sm:px-6 grid grid-flow-column items-center lg:grid-flow-row grid-cols-1 lg:grid-cols-2 xl:grid-flow-row gap-12 lg:gap-0'>
                <div className='space-y-8 xl:pl-24'>
                    {/* heading */}
                    <h1 className='text-center sm:text-start text-4xl sm:text-5xl font-semibold'>{`Hi, I'm Emi and I approach design `}<span className='italic'>holistically</span>.</h1>
                    {/* description */}
                    <p className={cn(open_sans.className, 'text-base xl:text-lg text-center sm:text-start leading-relaxed text-gray-400')}>
                        {`Using a trans-disciplinary approach to design, I am able to leave behind the confines of a conventional method by combining UX fundamentals with years of experience in Product Marketing, Digital Analysis, Market Research, and Brand Management`}
                    </p>
                    {/* skills */}
                    <SkillContainer />
                </div>
                {/* about image */}
                <AboutImage />
            </Container>
        </main>
    )
}
