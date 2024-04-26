import React from 'react'
import Container from '../common/Container'
import BlogCard from './BlogCard'

const blogs = [
    {
        id: crypto.randomUUID(),
        title: 'Breaking Your Mentees Into Design',
        category: 'Diversity and Inclusion',
        published_date: 'September 22, 2022',
        pill_color: 'bg-purple-300',
        image: '/blogs/blog-1.png'
    },
    {
        id: crypto.randomUUID(),
        title: "Thoughts on Medium's User Flows",
        category: 'UX Design',
        published_date: 'September 3, 2019',
        pill_color: 'bg-yellow-400',
        image: '/blogs/blog-2.jpeg'
    },
    {
        id: crypto.randomUUID(),
        title: 'The Dark Patterns of Pinterest Ads',
        category: 'UX Design',
        published_date: 'December 25, 2020',
        pill_color: 'bg-yellow-400',
        image: '/blogs/blog-3.jpeg'
    },

]

export default function BlogContainer() {
    return (
        <main className='py-32 text-white'>
            <h1 className='text-center text-4xl lg:text-5xl font-bold'>Some Thoughts on Design</h1>
            <Container classname='text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 mt-5'>
                {
                    blogs.map((blog) => (
                        <BlogCard key={blog.id}
                            {...blog}
                        />
                    ))
                }
            </Container>
        </main>
    )
}
