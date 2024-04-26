import React from 'react'
import { dm_sans } from '../fonts/Fonts'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const skills = [
    {
        id: crypto.randomUUID(),
        title: 'UX Design',
        image: '/skills/ux_design.svg'
    },
    {
        id: crypto.randomUUID(),
        title: 'Digital Stratergy',
        image: '/skills/digital_stratergy.svg'
    },
    {
        id: crypto.randomUUID(),
        title: 'Research',
        image: '/skills/research.svg'
    },
    {
        id: crypto.randomUUID(),
        title: 'Branding',
        image: '/skills/branding.svg'
    },
    {
        id: crypto.randomUUID(),
        title: 'Product Stratergy',
        image: '/skills/product_stratergy.svg'
    },
    {
        id: crypto.randomUUID(),
        title: 'Marketing',
        image: '/skills/marketing.svg'
    },
]

export default function SkillContainer() {
    return (
        <div className="flex flex-wrap gap-2 sm:w-[80%]">
            {
                skills.map(skill => (
                    <div
                        key={skill.id}
                        className={cn(dm_sans.className, "py-4 px-5 rounded-[30px] bg-stone-950 flex items-center justify-center gap-3 hover:scale-110 transition-transform duration-300")}>
                        <Image
                            src={skill.image}
                            alt={skill.title}
                            width={28}
                            height={28}
                        />
                        <p className='text-sm text-gray-300'>{skill.title}</p>
                    </div>
                ))
            }
        </div>
    )
}
