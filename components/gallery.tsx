"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Instagram } from 'lucide-react'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
    alt: 'Salon interior',
    category: 'Ambience'
  },
  {
    src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    alt: 'Bridal makeup',
    category: 'Bridal'
  },
  {
    src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80',
    alt: 'Hair styling',
    category: 'Hair'
  },
  {
    src: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80',
    alt: 'Makeup look',
    category: 'Makeup'
  },
  {
    src: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=800&q=80',
    alt: 'Beauty treatment',
    category: 'Treatment'
  },
  {
    src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80',
    alt: 'Facial treatment',
    category: 'Facial'
  },
  {
    src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
    alt: 'Skincare',
    category: 'Skincare'
  },
  {
    src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80',
    alt: 'Nail art',
    category: 'Nails'
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-background to-soft-pink/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-6">
            <Instagram className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium font-sans">Our Work</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-semibold text-foreground mb-6">
            Beauty Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            Explore our stunning transformations and salon ambience
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedImage(image)}
              className={`relative cursor-pointer group overflow-hidden rounded-2xl shadow-lg ${
                index === 0 || index === 5 ? 'md:row-span-2' : ''
              }`}
            >
              <div className={`relative ${index === 0 || index === 5 ? 'aspect-[3/4]' : 'aspect-square'}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium">{image.category}</p>
                  </div>
                </div>
                {/* Glowing border on hover */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-2xl transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300 font-sans"
          >
            <Instagram className="w-5 h-5" />
            Follow us on Instagram
            <span>→</span>
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
