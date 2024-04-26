import Image from "next/image"

export default function Logo({ image }: { image: string }) {
    return (
        <div className="size-24 relative">
            <Image
                src={image}
                width={500}
                height={500}
                alt="Logo"
                className="object-cover w-full h-full"
            />
        </div>
    )
}
