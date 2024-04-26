'use client'

import React, { useState } from 'react'
import { MotionNav } from '../animations/MotionImport'
import { Variants, useMotionValueEvent, useScroll } from 'framer-motion'

type AnimatedNavbarProps = {
    children: React.ReactNode
}


const variants: Variants = {
    initial: {
        y: 0,
        transition: {
            ease: [0.45, 0, 0.55, 1]
        }
    },
    animate: {
        y: '-100%',
        transition: {
            ease: [0.45, 0, 0.55, 1]
        }
    }
}

export default function AnimatedNavbar({ children }: AnimatedNavbarProps) {
    const [hideNav, setHideNav] = useState(false)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, 'change', (latestScrollValue) => {
        const previousScrollValue = scrollY.getPrevious() as number

        if (latestScrollValue > previousScrollValue && latestScrollValue > 150) {
            setHideNav(true)
        }
        if (latestScrollValue === 0) {
            setHideNav(false)
        }
    })

    return (
        <MotionNav
            variants={variants}
            animate={hideNav ? 'animate' : 'initial'}
            className='fixed top-0 left-0 w-full bg-black z-[999]'
        >
            {children}
        </MotionNav>
    )
}
