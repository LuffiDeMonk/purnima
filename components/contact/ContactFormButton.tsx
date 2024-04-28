import React from 'react'
import { Button } from '../ui/button'
import Spinner from './Spinner'

export default function ContactFormButton({ isPending }: { isPending: boolean }) {
    return (
        <Button
            variant='outline'
            size='lg'
        >
            {
                isPending ? <Spinner /> : "Send"
            }
        </Button>
    )
}
