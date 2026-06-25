"use client"

import { motion } from 'framer-motion'
import { Award, Sparkles, Heart, Shield, Users } from 'lucide-react'

const features = [
  { icon: Users, text: 'Experienced Beauticians' },
  { icon: Sparkles, text: 'Premium Beauty Products' },
  { icon: Shield, text: 'Hygienic Environment' },
  { icon: Award, text: 'Bridal Specialists' },
  { icon: Heart, text: 'Personalized Beauty Care' },
]

export function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-soft-pink/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-lavender/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-lavender/20" />
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80"
                alt="Beauty salon interior"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl border border-border"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-soft-pink rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-semibold text-foreground">10+</p>
                  <p className="text-muted-foreground font-sans">Years Experience</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-medium tracking-widest uppercase mb-4 font-sans"
              >
                About Us
              </motion.p>
              <h2 className="text-4xl sm:text-5xl font-semibold text-foreground leading-tight mb-6">
                Where Beauty Meets Excellence
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-sans">
                Kala&apos;s Beauty Parlour is one of Hosur&apos;s trusted beauty destinations offering professional beauty care, bridal makeup, skincare, hair styling, facials, and grooming services. With experienced beauticians, premium products, and personalized beauty solutions, we help every client feel confident, radiant, and beautiful.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-soft-pink/50 rounded-xl"
                >
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground font-sans">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#services"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300 font-sans"
            >
              Explore Our Services
              <span>→</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
