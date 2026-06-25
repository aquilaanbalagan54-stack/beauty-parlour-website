"use client"

import { motion } from 'framer-motion'
import { 
  Sparkles, 
  Scissors, 
  Droplets, 
  Palette, 
  Heart,
  Sun,
  Flower2,
  Hand,
  Eye
} from 'lucide-react'

const services = [
  { 
    icon: Sparkles, 
    name: 'Bridal Makeup', 
    description: 'Stunning bridal looks for your special day with HD makeup techniques' 
  },
  { 
    icon: Palette, 
    name: 'Party Makeup', 
    description: 'Glamorous makeup for parties, events, and special occasions' 
  },
  { 
    icon: Scissors, 
    name: 'Hair Styling', 
    description: 'Trendy haircuts, styling, and updos by expert stylists' 
  },
  { 
    icon: Droplets, 
    name: 'Hair Spa', 
    description: 'Rejuvenating hair spa treatments for healthy, shiny hair' 
  },
  { 
    icon: Palette, 
    name: 'Hair Coloring', 
    description: 'Professional hair coloring with premium international products' 
  },
  { 
    icon: Sun, 
    name: 'Facials', 
    description: 'Luxury facials for glowing, radiant skin' 
  },
  { 
    icon: Heart, 
    name: 'Cleanup', 
    description: 'Deep cleansing treatments for fresh, clear skin' 
  },
  { 
    icon: Flower2, 
    name: 'Waxing', 
    description: 'Gentle and effective waxing services' 
  },
  { 
    icon: Eye, 
    name: 'Threading', 
    description: 'Precision threading for perfectly shaped brows' 
  },
  { 
    icon: Hand, 
    name: 'Manicure', 
    description: 'Luxurious manicure with nail art options' 
  },
  { 
    icon: Hand, 
    name: 'Pedicure', 
    description: 'Relaxing pedicure treatments for beautiful feet' 
  },
  { 
    icon: Sparkles, 
    name: 'Saree Draping', 
    description: 'Expert saree draping for weddings and functions' 
  },
  { 
    icon: Flower2, 
    name: 'Mehendi', 
    description: 'Beautiful henna designs for all occasions' 
  },
  { 
    icon: Sun, 
    name: 'Skin Care', 
    description: 'Customized skincare treatments for all skin types' 
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-soft-pink/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-lavender/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase mb-4 font-sans">Our Services</p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-foreground mb-6">
            Premium Beauty Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            From bridal makeup to everyday beauty care, we offer a complete range of professional services
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-lavender/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="relative mb-4">
                <div className="w-14 h-14 bg-soft-pink rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-2 relative">
                {service.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 relative font-sans">
                {service.description}
              </p>

              {/* Book button */}
              <a
                href="#booking"
                className="inline-flex items-center text-primary font-medium text-sm hover:gap-2 transition-all duration-300 relative font-sans"
              >
                Book Now <span className="ml-1">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
