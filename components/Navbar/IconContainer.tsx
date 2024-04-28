import { cn } from '@/lib/utils'
import { Linkedin, Mail } from 'lucide-react'
import React from 'react'

export default function IconContainer({ className }: { className?: string }) {
    return (
        <div className={cn(className, 'flex items-end gap-8')}>
            <Linkedin fill='white' className='size-5 cursor-pointer hover:text-gray-300 transition-colors duration-500' />
            <Mail className='size-5 cursor-pointer hover:text-gray-300 transition-colors duration-500' />
        </div>
    )
}
