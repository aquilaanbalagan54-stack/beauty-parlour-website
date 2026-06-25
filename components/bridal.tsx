"use client"

import { motion } from 'framer-motion'
import { Sparkles, Crown, Heart, Star } from 'lucide-react'

const bridalServices = [
  { icon: Crown, name: 'Bridal Makeup', description: 'Flawless HD bridal looks' },
  { icon: Sparkles, name: 'Reception Look', description: 'Glamorous evening styling' },
  { icon: Heart, name: 'Engagement Makeup', description: 'Perfect pre-wedding glow' },
  { icon: Star, name: 'Saree Draping', description: 'Traditional & modern styles' },
  { icon: Sparkles, name: 'Hair Styling', description: 'Stunning bridal updos' },
]

export function Bridal() {
  return (
    <section id="bridal" className="py-24 relative overflow-hidden">
      {/* Premium golden gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-nude-beige via-soft-pink/50 to-warm-gold/20" />
      
      {/* Shimmer overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-10 left-10 text-warm-gold text-4xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        ✦
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-10 text-primary text-3xl"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        ✦
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-6"
              >
                <Crown className="w-5 h-5 text-warm-gold" />
                <span className="text-foreground font-medium font-sans">Bridal Special</span>
              </motion.div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
                Make Your Special Day{' '}
                <span className="bg-gradient-to-r from-warm-gold via-primary to-deep-rose bg-clip-text text-transparent">
                  Truly Magical
                </span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed font-sans">
                Your wedding day deserves nothing but perfection. Our expert bridal makeup artists create stunning looks that capture your unique beauty and make you feel like royalty on your special day.
              </p>
            </div>

            {/* Bridal services */}
            <div className="space-y-4">
              {bridalServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 hover:bg-white/80 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-warm-gold/20 to-primary/20 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{service.name}</h3>
                    <p className="text-sm text-muted-foreground font-sans">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#booking"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-warm-gold to-primary text-white px-8 py-4 rounded-full text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <Crown className="w-5 h-5" />
              Book Bridal Package
            </motion.a>
          </motion.div>

          {/* Image grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80"
                  alt="Bridal makeup"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80"
                  alt="Hair styling"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>
            </div>
            <div className="space-y-4 pt-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80"
                  alt="Bridal look"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=600&q=80"
                  alt="Engagement makeup"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
