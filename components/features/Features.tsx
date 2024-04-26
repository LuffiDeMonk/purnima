import React from 'react'
import Container from '../common/Container'
import FeatureCard from './FeatureCard'

const features = [
    {
        id: crypto.randomUUID(),
        title: "Research",
        description: 'Understand the market, define the audience, and ideate potential solutions.',
        image: '/icon/research.svg',
        className: 'bg-green-300'
    },
    {
        id: crypto.randomUUID(),
        title: "Product Design",
        description: 'Define the solution, create a roadmap, establish architecture and design the product.',
        image: '/icon/product_design.svg',
        className: 'bg-pink-400'
    },
    {
        id: crypto.randomUUID(),
        title: "Testing",
        description: 'Establish usability, meet accessibility needs and ensure a delightful solution.',
        image: '/icon/testing.svg',
        className: 'bg-purple-400'
    },

]

export default function Features() {
    return (
        <Container classname='text-white max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-12 px-4 md:px-8 lg:px-0'>
            {
                features.map(feature => (
                    <FeatureCard
                        key={feature.id}
                        title={feature.title}
                        description={feature.description}
                        image={feature.image}
                        className={feature.className}
                    />
                ))
            }

        </Container>
    )
}
