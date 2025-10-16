'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui'
import { staggerContainer, staggerItem, animationPresets } from '@/hooks/useMotion'
import { Smartphone, Download } from 'lucide-react'

export function Shabapp() {
  const features = [
    {
      title: "Gebedstijden",
      description: "Actuele gebedstijden voor jouw locatie",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "Qibla Richting",
      description: "Vind de juiste richting voor gebed",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    {
      title: "Islamitische Kalender",
      description: "Belangrijke islamitische data en evenementen",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Dhikr & Du'a",
      description: "Dagelijkse dhikr en du'a collectie",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Moskee Locaties",
      description: "Vind moskeeën in jouw buurt",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Ramadan Tracker",
      description: "Iftar tijden en Ramadan kalender",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )
    }
  ]

  const benefits = [
    "Altijd actuele gebedstijden bij de hand",
    "Offline beschikbaar - werkt zonder internet",
    "Meldingen voor gebedstijden",
    "Eenvoudig en gebruiksvriendelijk",
    "Gratis te downloaden en gebruiken",
    "Regelmatige updates met nieuwe functies"
  ]

  return (
    <motion.section 
      id="shabapp" 
      className="py-20" 
      style={{ backgroundColor: 'var(--card)' }}
      {...animationPresets.fadeIn}
    >
      <Container>
        {/* Header */}
        <motion.div 
          className="mb-16"
          {...animationPresets.slideUp}
        >
          <h2 className="font-marcellus text-2xl md:text-3xl font-normal mb-6" 
              style={{ color: 'var(--foreground)' }}>
            Shabapp - Jouw Islamitische Companion
          </h2>
          <div className="w-16 h-0.5 mb-8" 
               style={{ backgroundColor: '#C4A484' }}></div>
          <p className="font-poppins text-base md:text-lg font-light leading-relaxed max-w-3xl" 
             style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            Download onze gratis mobiele app voor alle essentiële islamitische tools en informatie die je dagelijks nodig hebt.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Features Grid */}
          <motion.div 
            className="space-y-12"
            {...staggerContainer}
          >
            <div>
              <h3 className="font-marcellus text-xl md:text-2xl font-light mb-8" 
                  style={{ color: 'var(--foreground)' }}>
                App Functies
              </h3>
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                {...staggerContainer}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="p-6 rounded-xl"
                    style={{ 
                      backgroundColor: 'var(--background)',
                      border: '1px solid var(--border)'
                    }}
                    variants={staggerItem}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="flex justify-center mb-4" style={{ color: '#C4A484' }}>
                      {feature.icon}
                    </div>
                    <h4 className="font-marcellus text-base font-medium mb-2 text-center" 
                        style={{ color: 'var(--foreground)' }}>
                      {feature.title}
                    </h4>
                    <p className="font-poppins text-sm font-light text-center leading-relaxed" 
                       style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Benefits & Download */}
          <motion.div 
            className="space-y-12"
            {...animationPresets.slideInRight}
          >
            <div>
              <h3 className="font-marcellus text-xl md:text-2xl font-light mb-8" 
                  style={{ color: 'var(--foreground)' }}>
                Waarom Shabapp?
              </h3>
              <motion.div 
                className="space-y-4"
                {...staggerContainer}
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    variants={staggerItem}
                  >
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" 
                         style={{ backgroundColor: '#C4A484' }}></div>
                    <p className="font-poppins text-sm font-light leading-relaxed" 
                       style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                      {benefit}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Download Buttons */}
            <motion.div 
              className="space-y-6"
              {...animationPresets.fadeIn}
            >
              <h4 className="font-marcellus text-lg font-medium" 
                  style={{ color: 'var(--foreground)' }}>
                Download Nu
              </h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#"
                  className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-poppins text-sm font-medium"
                  style={{ 
                    backgroundColor: '#C4A484',
                    color: 'white'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Smartphone className="w-6 h-6" />
                  App Store
                </motion.a>
                <motion.a
                  href="#"
                  className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-poppins text-sm font-medium"
                  style={{ 
                    backgroundColor: 'var(--background)',
                    border: '1px solid var(--border)',
                    color: 'var(--foreground)'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-6 h-6" />
                  Google Play
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  )
}