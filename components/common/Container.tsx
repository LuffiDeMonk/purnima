import { cn } from '@/lib/utils'
import React from 'react'

export default function Container({ children, classname }: ContainerProps) {
    return (
        <section className={cn('max-w-7xl mx-auto', classname)}>
            {children}
        </section>
    )
}
