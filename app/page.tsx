import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Bridal } from '@/components/bridal'
import { WhyChooseUs } from '@/components/why-choose-us'
import { Gallery } from '@/components/gallery'
import { Testimonials } from '@/components/testimonials'
import { Booking } from '@/components/booking'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { FloatingButtons } from '@/components/floating-buttons'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Bridal />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Booking />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
