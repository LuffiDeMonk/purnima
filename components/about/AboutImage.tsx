import Image from 'next/image'
import React from 'react'

export default function AboutImage() {
    return (
        <div className="col-span-1 hidden xs:block w-full">
            <div className="h-[300px] lg:h-[500px] w-[250%] lg:w-[200%] rounded-l-full bg-gradient-to-b from-yellow-500 to-yellow-900 ml-36 flex justify-center items-start relative">
                <Image
                    src='/skills/about.png'
                    width={500}
                    height={500}
                    alt='about'
                    className='-mt-[40px]'
                />
            </div>
        </div>
    )
}
