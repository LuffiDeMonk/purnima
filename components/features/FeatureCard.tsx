import Image from 'next/image'
import React from 'react'
import { open_sans } from '../fonts/Fonts'
import { cn } from '@/lib/utils'



export default function FeatureCard({ title, description, image, className }: FeatureCardProps) {
    return (
        <div className="rounded-xl bg-gradient-to-b from-purple-800 to-purple-950 px-8 py-10 hover:scale-105 duration-500 transition-transform">
            {/* icon container */}
            <div className="flex justify-center">
                <div className={cn("rounded-full size-20 bg-green-400 shadow-xl shadow-black/60 flex items-center justify-center", className)}>
                    <Image
                        src={image}
                        width={80}
                        height={80}
                        alt={title}
                        className='shadow-lg'
                    />
                </div>
            </div>
            <h3 className={cn('text-lg font-semibold my-8 text-center', open_sans.className)}>{title}</h3>
            <p className={cn(open_sans.className, 'text-[15px] text-center')}>{description}</p>
        </div>
    )
}
