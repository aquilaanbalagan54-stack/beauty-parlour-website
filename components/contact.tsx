"use client"

import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Mail, MessageCircle } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-soft-pink/20 via-background to-lavender/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase mb-4 font-sans">Get In Touch</p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-foreground mb-6">
            Visit Our Salon
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            We&apos;d love to welcome you to our salon. Stop by or give us a call!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Business name card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Kala&apos;s Beauty Parlour</h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-soft-pink rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Address</p>
                    <p className="text-muted-foreground font-sans">
                      Hosur - Malur Rd NH 207, Teachers Colony,<br />
                      Avalapalli Hudco, Tamil Nadu 635109, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-soft-pink rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Phone</p>
                    <a href="tel:+918667005075" className="text-primary hover:text-deep-rose transition-colors font-sans">
                      +91 86670 05075
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-soft-pink rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Opening Hours</p>
                    <p className="text-muted-foreground font-sans">
                      Open Daily: 9:00 AM - 9:00 PM
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-soft-pink rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Email</p>
                    <a href="mailto:contact@kalasbeauty.com" className="text-primary hover:text-deep-rose transition-colors font-sans">
                      contact@kalasbeauty.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="tel:+918667005075"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-xl font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="https://wa.me/918667005075"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-4 rounded-xl font-medium hover:bg-green-600 transition-all duration-300 shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-border h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.7694!2d77.8253!3d12.7372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDQ0JzE0LjAiTiA3N8KwNDknMzEuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kala's Beauty Parlour Location"
              />
            </div>
            {/* Map overlay with address */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <p className="font-medium text-foreground text-sm">
                📍 Teachers Colony, Avalapalli Hudco, Hosur
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
