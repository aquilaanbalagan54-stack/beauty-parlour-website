"use client"

import { motion } from 'framer-motion'
import { Star, Users, Award, ThumbsUp, Clock, Sparkles, Heart, CheckCircle } from 'lucide-react'

const stats = [
  { icon: Star, value: '4.9', label: 'Star Rating', suffix: '' },
  { icon: Users, value: '273', label: 'Happy Customers', suffix: '+' },
  { icon: Award, value: '10', label: 'Years Experience', suffix: '+' },
  { icon: ThumbsUp, value: '100', label: 'Satisfaction Rate', suffix: '%' },
]

const features = [
  { icon: Award, title: 'Experienced Professionals', description: 'Skilled beauticians with years of expertise' },
  { icon: Sparkles, title: 'Premium Products', description: 'Only the best international beauty brands' },
  { icon: Heart, title: 'Affordable Luxury', description: 'High-end services at reasonable prices' },
  { icon: CheckCircle, title: 'Hygienic Environment', description: 'Clean, sanitized, and comfortable salon' },
  { icon: Users, title: 'Friendly Service', description: 'Warm, welcoming, and professional staff' },
  { icon: Clock, title: 'Latest Trends', description: 'Up-to-date with modern beauty techniques' },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-soft-pink/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase mb-4 font-sans">Why Choose Us</p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-foreground mb-6">
            The Best Beauty Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            Discover why hundreds of clients trust us for their beauty needs
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-soft-pink to-lavender/30 rounded-2xl p-6 text-center border border-border hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-4xl font-bold text-foreground mb-1">
                  {stat.value}{stat.suffix}
                </p>
                <p className="text-muted-foreground font-sans">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 p-6 bg-background rounded-2xl border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-soft-pink rounded-xl flex items-center justify-center shrink-0">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm font-sans">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
