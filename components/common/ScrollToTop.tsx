'use client'
import React, { useState } from 'react'
import { MotionDiv } from '../animations/MotionImport'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

const variants = {
    initial: {
        y: "100vh",
    },
    animate: {
        y: 0,
        transition: {
            ease: 'easeIn'
        }
    }
}

export default function ScrollToTop() {
    const [hide, setHide] = useState(false)
    const { scrollY } = useScroll()
    useMotionValueEvent(scrollY, 'change', (latest) => {
        const previous = scrollY.getPrevious() as number
        if (latest > previous && latest > 150) {
            setHide(true)
        }
        if (latest === 0) {
            setHide(false)
        }
    })

    const scrollToTop = () => {
        if (window !== undefined) {
            window.scroll(
                {
                    top: 0,
                    behavior: 'smooth'
                }
            )
        }
    }

    return (
        <MotionDiv
            variants={variants}
            animate={hide ? 'animate' : 'initial'}
            onClick={scrollToTop}
            className='p-4 rounded-full bg-stone-600 flex items-center justify-center text-gray-300 fixed cursor-pointer right-5 bottom-5'
        >
            <ChevronUp
                size={15}
            />
        </MotionDiv>
    )
}
