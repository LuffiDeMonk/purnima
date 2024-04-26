'use client'

import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MotionDiv } from './MotionImport'
import { cn } from '@/lib/utils'

const items = [
    {
        id: crypto.randomUUID(),
        text: 'design'
    },
    {
        id: crypto.randomUUID(),
        text: 'research',
        textColor: 'text-yellow-400'
    },
    {
        id: crypto.randomUUID(),
        text: 'market',
        textColor: 'text-purple-800'
    },
    {
        id: crypto.randomUUID(),
        text: 'lead',
        textColor: 'text-purple-300'
    }

]

const variants = {
    initial: {
        opacity: 0,
        y: -30
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [0.45, 0, 0.55, 1],
            duration: 0.7
        }
    },
    exit: {
        opacity: 0,
        y: 30,
        transition: {
            ease: [0.45, 0, 0.55, 1],
            duration: 0.3
        }
    }
}

export default function ScrollText() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const id = setInterval(() => {
            setIndex((state) => {
                if (state >= items.length - 1) return 0;
                return state + 1
            })
        }, 2000)
        return () => {
            clearInterval(id)
        }
    }, [index])


    return (
        <>
            <AnimatePresence mode='wait'>
                <motion.span className={cn('ml-2 lg:ml-6 absolute', `${items[index].textColor}`)} variants={variants} initial='initial' animate='animate' exit='exit' key={index}>{items[index].text}</motion.span>
            </AnimatePresence>
        </>
    )
}
