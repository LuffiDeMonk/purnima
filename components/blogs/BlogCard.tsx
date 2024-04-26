import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { open_sans } from '../fonts/Fonts'


export default function BlogCard({ title, category, image, pill_color, published_date }: BlogCardProps) {
    return (
        <div className={cn("rounded-t-3xl rounded-b-md bg-stone-900", open_sans.className)}>
            <Image
                src={image}
                width={500}
                height={500}
                alt={title}
                className='rounded-3xl w-full max-h-[75%] h-40 shadow-2xl shadow-black'
            />
            <div className="pb-20 pt-6 lg:pt-12 px-6 lg:px-8 space-y-4">
                <div className={cn('px-4 py-1.5 rounded-full w-fit text-base font-semibold', pill_color)}>
                    {category}
                </div>
                <h1 className='text-[22px]'>{title}</h1>
                <p className='pt-12 text-gray-300'>{published_date}</p>
            </div>
        </div>
    )
}
