import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/common/Footer'
import React from 'react'

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
