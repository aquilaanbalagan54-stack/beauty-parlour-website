"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, User, Phone, Clock, MessageSquare, Sparkles, Check } from 'lucide-react'

const services = [
  'Bridal Makeup',
  'Party Makeup',
  'Hair Styling',
  'Hair Spa',
  'Hair Coloring',
  'Facial',
  'Cleanup',
  'Waxing',
  'Threading',
  'Manicure',
  'Pedicure',
  'Saree Draping',
  'Mehendi',
  'Skin Care Treatment',
]

export function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to a backend
    console.log('[v0] Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="booking" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-soft-pink/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-lavender/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <p className="text-primary font-medium tracking-widest uppercase mb-4 font-sans">Book Now</p>
              <h2 className="text-4xl sm:text-5xl font-semibold text-foreground leading-tight mb-6">
                Schedule Your{' '}
                <span className="bg-gradient-to-r from-primary to-deep-rose bg-clip-text text-transparent">
                  Beauty Session
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-sans">
                Book your appointment today and let our expert beauticians pamper you with our premium beauty services.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {[
                'Easy online booking',
                'Flexible scheduling',
                'Personalized consultation',
                'Premium beauty experience'
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-sans">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Contact info */}
            <div className="bg-soft-pink/50 rounded-2xl p-6 space-y-4">
              <p className="font-semibold text-foreground">Prefer to call?</p>
              <a
                href="tel:+918667005075"
                className="flex items-center gap-3 text-primary hover:text-deep-rose transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="text-xl font-medium">+91 86670 05075</span>
              </a>
              <p className="text-sm text-muted-foreground font-sans">Open Daily: 9:00 AM - 9:00 PM</p>
            </div>
          </motion.div>

          {/* Form side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-background rounded-3xl p-8 shadow-xl border border-border">
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2 font-sans">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-sans"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2 font-sans">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="tel"
                      required
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-sans"
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2 font-sans">
                    Select Service
                  </label>
                  <div className="relative">
                    <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none font-sans"
                    >
                      <option value="">Choose a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2 font-sans">
                      Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-sans"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2 font-sans">
                      Time
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="time"
                        required
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-sans"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2 font-sans">
                    Message (Optional)
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                    <textarea
                      rows={3}
                      placeholder="Any special requests..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none font-sans"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-primary to-deep-rose text-white rounded-xl font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitted ? (
                    <>
                      <Check className="w-5 h-5" />
                      Booking Requested!
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Book My Appointment
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
