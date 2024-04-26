type ContainerProps = {
    children: React.ReactNode,
    classname?: string,
}

type ServiceCardProps = {
    title: string,
    description: string,
    image: string,
    custom?: number
}

interface FeatureCardProps extends ServiceCardProps {
    className?: string
}

type BlogCardProps = {
    title: string,
    category: string,
    pill_color: string,
    published_date: string,
    image: string
}