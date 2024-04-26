import Banner from "@/components/Landing/Banner";
import About from "@/components/about/About";
import BlogContainer from "@/components/blogs/BlogContainer";
import Contact from "@/components/contact/Contact";
import Features from "@/components/features/Features";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import Services from "@/components/services/Services";
import TestimonialContainer from "@/components/testimonial/TestimonialContainer";


export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <Services />
      <Features />
      <FeaturedProjects />
      <TestimonialContainer />
      <BlogContainer />
      <Contact />
    </main>
  );
}
