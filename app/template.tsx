import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/common/Footer'
import ScrollToTop from '@/components/common/ScrollToTop'
import { Toaster } from '@/components/ui/sonner'
import React from 'react'

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
            <Toaster
                richColors
                position='bottom-right'
                closeButton
                expand
            />
        </>
    )
}
