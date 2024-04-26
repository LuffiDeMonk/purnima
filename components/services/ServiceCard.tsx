'use client'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { open_sans } from '../fonts/Fonts'
import { MotionDiv } from '../animations/MotionImport'

const variants = {
    initial: {
        opacity: 0,
        y: 40
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: index * 0.1,
            ease: 'easeInOut'
        }
    })
}

export default function ServiceCard({ title, description, image, custom }: ServiceCardProps) {
    return (
        <MotionDiv
            variants={variants}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true, amount: 0.5 }}
            custom={custom}
            className='flex items-center sm:justify-center lg:justify-start gap-4 lg:hover:scale-110 transition-transform duration-300'
        >
            <div className="h-16">
                <Image
                    src={image}
                    width={70}
                    height={70}
                    alt={title}
                    className='h-full'
                />
            </div>
            <div className="space-y-2">
                <h1 className='text-[32px] sm:text-2xl font-semibold'>{title}</h1>
                <p className={cn(open_sans.className, "text-sm")}>{description}</p>
            </div>
        </MotionDiv>
    )
}
