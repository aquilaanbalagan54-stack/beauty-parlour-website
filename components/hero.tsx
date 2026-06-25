"use client"

import { motion } from 'framer-motion'
import { Calendar, Phone, Star, MapPin, Clock } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-soft-pink via-background to-nude-beige" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-lavender/20 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Rating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg"
          >
            <Star className="w-5 h-5 text-warm-gold fill-warm-gold" />
            <span className="text-foreground font-medium">4.9 Rating</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">273+ Happy Customers</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-foreground leading-tight"
          >
            <span className="block">Reveal Your</span>
            <span className="block bg-gradient-to-r from-primary via-deep-rose to-warm-gold bg-clip-text text-transparent">
              True Beauty
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-sans"
          >
            Luxury Beauty Care, Bridal Makeovers & Professional Salon Services in Hosur
          </motion.p>

          {/* Location info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground font-sans"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Hosur, Tamil Nadu</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span>Open Daily 9AM - 9PM</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a
              href="#booking"
              className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Book Appointment
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-deep-rose to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="tel:+918667005075"
              className="flex items-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm text-foreground rounded-full text-lg font-medium shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 border border-border"
            >
              <Phone className="w-5 h-5 text-primary" />
              +91 86670 05075
            </a>
          </motion.div>
        </motion.div>

        {/* Decorative sparkles */}
        <motion.div
          className="absolute top-1/4 left-10 text-warm-gold"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          ✦
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 right-10 text-primary text-2xl"
          animate={{ rotate: -360, scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          ✦
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
