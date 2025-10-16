"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { usePrayerTimes } from "@/contexts/PrayerTimesContext"
import { staggerContainer, staggerItem } from "@/hooks/useMotion"
import { Building2, BookOpen, Users } from "lucide-react"

export function Hero() {
  const { prayerData, nextPrayerIndex } = usePrayerTimes()

  const getNextPrayerInfo = () => {
    if (!prayerData) return null
    
    const prayerNames = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha']
    const prayerTimes = [prayerData.fajr, prayerData.dhuhr, prayerData.asr, prayerData.maghrib, prayerData.isha]
    const prayerIcons = ['🌅', '☀️', '🌤️', '🌅', '🌙']
    
    return {
      name: prayerNames[nextPrayerIndex],
      time: prayerTimes[nextPrayerIndex],
      icon: prayerIcons[nextPrayerIndex]
    }
  }

  const services = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Gebedsdiensten",
      description: "Dagelijkse gebeden en vrijdagdiensten voor de gemeenschap"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Islamitisch Onderwijs",
      description: "Onderwijs in Arabisch, Qoraan en islamitische wetenschappen"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Da'wah Activiteiten",
      description: "Verspreiden van kennis en begrip van de Islaam"
    }
  ]

  return (
    <motion.section 
      className="h-screen w-full flex items-center justify-center relative overflow-hidden"
      style={{ maxWidth: '100vw' }}
      initial="hidden"
      animate="visible"
      variants={staggerContainer.variants}
    >
      {/* Clean background */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundColor: 'var(--background)'
        }}
      />

      <Container className="relative z-10 flex items-center justify-center min-h-full w-full max-w-full">
        <div className="text-center max-w-4xl mx-auto space-y-8 md:space-y-16 w-full">
          
          {/* Next Prayer Info - Minimal */}
          <motion.div variants={staggerItem}>
            {getNextPrayerInfo() && (
              <div className="flex items-center justify-center gap-3">
                <div style={{ color: '#C4A484' }}>
                  {getNextPrayerInfo()?.icon}
                </div>
                <span className="font-poppins text-base font-medium" style={{ color: '#C4A484' }}>
                  {getNextPrayerInfo()?.name}
                </span>
                <span className="font-mono text-base font-light" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                  {getNextPrayerInfo()?.time}
                </span>
              </div>
            )}
          </motion.div>

          {/* Main Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Title */}
            <motion.div variants={staggerItem}>
              <h1 className="font-marcellus text-4xl md:text-5xl lg:text-6xl font-light leading-tight" 
                  style={{ color: 'var(--foreground)' }}>
                Stichting El Mouahidin
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={staggerItem}>
              <p className="font-poppins text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto" 
                 style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Een islamitische gemeenschap gewijd aan gebed, onderwijs en da'wah volgens de Qoraan en Soennah
              </p>
            </motion.div>

            {/* Location */}
            <motion.div variants={staggerItem}>
              <p className="font-poppins text-base font-light" 
                 style={{ color: 'var(--foreground)', opacity: 0.6 }}>
                Deimanstraat 7, Den Haag
              </p>
            </motion.div>
          </div>

          {/* Services Grid - Clean - Hidden on mobile */}
          <motion.div 
            className="hidden md:grid md:grid-cols-3 gap-8 max-w-3xl mx-auto"
            variants={staggerContainer.variants}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="text-center space-y-3"
                variants={staggerItem}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <div style={{ color: '#C4A484' }}>
                  {service.icon}
                </div>
                <h3 className="font-marcellus text-lg font-medium" 
                    style={{ color: 'var(--foreground)' }}>
                  {service.title}
                </h3>
                <p className="font-poppins text-sm font-light leading-relaxed" 
                   style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </motion.section>
  )
}