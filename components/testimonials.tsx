"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya Sharma',
    service: 'Bridal Makeup',
    rating: 5,
    text: "Amazing bridal makeup and very professional service. They made me feel like a princess on my wedding day. Highly recommended!",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80'
  },
  {
    name: 'Anitha Kumar',
    service: 'Hair Styling',
    rating: 5,
    text: "Best beauty parlour in Hosur with friendly staff. The hair spa treatment was so relaxing and my hair feels amazing!",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80'
  },
  {
    name: 'Meera Reddy',
    service: 'Facial Treatment',
    rating: 5,
    text: "Loved the ambience and glowing skin treatment. The facial was so refreshing and my skin looks radiant!",
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&q=80'
  },
  {
    name: 'Lakshmi Devi',
    service: 'Party Makeup',
    rating: 5,
    text: "Perfect place for bridal and party makeovers. The team is so talented and they understand exactly what you want.",
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80'
  },
  {
    name: 'Divya Krishnan',
    service: 'Hair Coloring',
    rating: 5,
    text: "Excellent hair coloring service! They used premium products and the color came out exactly as I wanted. Will definitely come back!",
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&q=80'
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const next = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  }

  return (
    <section className="py-24 bg-gradient-to-br from-soft-pink/30 via-background to-lavender/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-6xl text-primary/10">
        <Quote className="w-24 h-24" />
      </div>
      <div className="absolute bottom-10 right-10 text-6xl text-primary/10 rotate-180">
        <Quote className="w-24 h-24" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase mb-4 font-sans">Testimonials</p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-foreground">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Testimonial carousel */}
        <div className="relative">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-border"
            >
              <div className="flex flex-col items-center text-center">
                {/* Quote icon */}
                <Quote className="w-12 h-12 text-primary/30 mb-6" />
                
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-warm-gold fill-warm-gold" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-light italic">
                  &quot;{testimonials[current].text}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-foreground">{testimonials[current].name}</p>
                    <p className="text-sm text-muted-foreground font-sans">{testimonials[current].service}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-soft-pink transition-all duration-300 border border-border"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={next}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-soft-pink transition-all duration-300 border border-border"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1)
                  setCurrent(index)
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current ? 'w-8 bg-primary' : 'bg-primary/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
