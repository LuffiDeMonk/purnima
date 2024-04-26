import React from 'react'
import Container from '../common/Container'
import ServiceCard from './ServiceCard'

const services = [
    {
        id: crypto.randomUUID(),
        title: 'Claritas',
        description: 'Audience Research',
        image: '/services/claritas.png'
    },
    {
        id: crypto.randomUUID(),
        title: 'Atlassian',
        description: 'Project Management',
        image: '/services/atlassian.svg'
    },
    {
        id: crypto.randomUUID(),
        title: 'Figma',
        description: 'UI/UX prototyping',
        image: '/services/figma.svg'
    },
    {
        id: crypto.randomUUID(),
        title: 'Maze',
        description: 'User Testing',
        image: '/services/maze.png'
    }
]

export default function Services() {
    return (
        <Container classname='max-w-5xl pb-32 px-4 md:px-8 lg:px-0 text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9'>
            {
                services.map((service, index) => (
                    <ServiceCard
                        key={service.id}
                        title={service.title}
                        description={service.description}
                        image={service.image}
                        custom={index}
                    />
                ))
            }
        </Container>
    )
}
