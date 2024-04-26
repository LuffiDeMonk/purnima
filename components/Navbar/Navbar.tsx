import React from 'react'
import AnimatedNavbar from './AnimatedNavbar'
import Container from '../common/Container'
import Logo from './Logo'
import IconContainer from './IconContainer'

export default function Navbar() {
    return (
        <AnimatedNavbar>
            <Container classname='text-white flex items-center justify-between px-4 lg:pr-10'>
                <Logo
                    image='/logo-1.png'
                />
                <IconContainer />
            </Container>
        </AnimatedNavbar>
    )
}
