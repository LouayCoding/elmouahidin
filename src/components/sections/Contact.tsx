'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui'
import { staggerContainer, staggerItem, animationPresets } from '@/hooks/useMotion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export function Contact() {

  const contactInfo = [
    {
      title: "Bezoekadres",
      details: [
        "Deimanstraat 7",
        "2522 BB Den Haag",
        "Nederland"
      ],
      icon: <MapPin className="w-6 h-6" />
    },
    {
      title: "Telefoonnummer",
      details: [
        "(070) 395 24 64"
      ],
      icon: <Phone className="w-6 h-6" />
    },
    {
      title: "E-mailadres",
      details: [
        "info@elmouahidin.nl"
      ],
      icon: <Mail className="w-6 h-6" />
    },
    {
      title: "Openingstijden",
      details: [
        "Dagelijks geopend",
        "Gebedstijden variëren",
        "Zie gebedstijden pagina"
      ],
      icon: <Clock className="w-6 h-6" />
    }
  ]

  return (
    <motion.section 
      id="contact" 
      className="py-20 relative overflow-hidden" 
      style={{ backgroundColor: 'var(--card)' }}
      {...animationPresets.fadeIn}
    >
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            {...animationPresets.slideUp}
          >
            <h2 className="font-marcellus text-3xl md:text-4xl font-light mb-4" 
                style={{ color: 'var(--foreground)' }}>
              Contact & Locatie
            </h2>
            <div className="w-16 h-0.5 mx-auto mb-8" 
                 style={{ backgroundColor: '#C4A484' }}></div>
            <p className="font-poppins text-lg font-light leading-relaxed max-w-3xl mx-auto" 
               style={{ color: 'var(--foreground)', opacity: 0.8 }}>
              Bezoek ons voor gebed, onderwijs of vragen. Iedereen is welkom in onze gemeenschap.
            </p>
          </motion.div>

          {/* Contact Info Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            {...staggerContainer}
          >
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index} 
                className="text-center p-6 rounded-2xl"
                style={{ backgroundColor: 'var(--background)', border: '1px solid var(--border)' }}
                {...staggerItem}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="mb-4" style={{ color: '#C4A484' }}>{info.icon}</div>
                <h3 className="font-marcellus text-xl font-medium mb-4" 
                    style={{ color: 'var(--foreground)' }}>
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="font-poppins text-sm font-light" 
                       style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-16"
            {...animationPresets.fadeIn}
          >
            <div className="max-w-2xl mx-auto">
              <h3 className="font-marcellus text-2xl font-light mb-4" 
                  style={{ color: 'var(--foreground)' }}>
                Vragen of meer informatie?
              </h3>
              <p className="font-poppins text-base font-light leading-relaxed mb-8" 
                 style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Neem gerust contact met ons op. We helpen u graag verder met al uw vragen 
                over onze activiteiten, onderwijs of gemeenschap.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a 
                  href="tel:+31703952464" 
                  className="px-8 py-4 rounded-2xl font-poppins text-base font-medium inline-block"
                  style={{ 
                    backgroundColor: '#C4A484',
                    color: 'white'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Bel Ons
                </motion.a>
                <motion.a 
                  href="mailto:info@elmouahidin.nl" 
                  className="px-8 py-4 rounded-2xl font-poppins text-base font-medium inline-block"
                  style={{ 
                    backgroundColor: 'var(--background)',
                    border: '1px solid var(--border)',
                    color: 'var(--foreground)'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  E-mail Ons
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  )
}