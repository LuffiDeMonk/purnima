'use client'
import React, { useState } from 'react'
import Slider, { Settings } from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from '../common/Container';
import { cn } from '@/lib/utils';
import TestimonialCard from './TestimonialCard';



export default function Carousel() {
    const [slide, setSlide] = useState(1)
    const settings: Settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        speed: 500,
        customPaging: (i: number) => {
            return (
                <div
                    key={i}
                    className={cn('size-1.5 md:size-3 my-6 mx-auto flex items-center rounded-full hover:bg-white', `${slide === i ? 'bg-white' : 'bg-white/10'}`)
                    }
                />
            )
        },
        afterChange: (currentSlide) => {
            setSlide(prev => prev = currentSlide)
        }
    }
    return (
        <Container classname='max-w-3xl px-4'>
            <Slider {...settings}>
                {
                    Array(6).fill(1).map((_, idx) => (
                        <TestimonialCard
                            key={idx}
                        />
                    ))
                }
            </Slider>
        </Container>

    )
}
