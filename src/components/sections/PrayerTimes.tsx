"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { Sunrise, Sun, CloudSun, Sunset, Moon } from "lucide-react"
import { usePrayerTimes } from "@/contexts/PrayerTimesContext"
import { staggerContainer, staggerItem, animationPresets } from "@/hooks/useMotion"

interface PrayerTime {
  name: string
  time: string
  icon: React.ReactNode
  isNext?: boolean
}

export function PrayerTimes() {
  const { prayerData, loading } = usePrayerTimes()
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (loading) {
    return (
      <section 
        id="gebedstijden" 
        className="py-20 hero-background" 
        style={{ backgroundColor: 'var(--card)' }}
      >
        <Container>
          <motion.div 
            className="text-center"
            {...animationPresets.fadeIn}
          >
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-96 mx-auto mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-32 bg-gray-300 rounded-xl"></div>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    )
  }

  if (!prayerData) {
    return (
      <section 
        id="gebedstijden" 
        className="py-20 hero-background" 
        style={{ backgroundColor: 'var(--card)' }}
      >
        <Container>
          <motion.div 
            className="text-center"
            {...animationPresets.fadeIn}
          >
            <h2 className="font-marcellus text-3xl md:text-4xl font-light mb-4" 
                style={{ color: 'var(--foreground)' }}>
              Gebedstijden
            </h2>
            <p className="font-poppins text-lg font-light" 
               style={{ color: 'var(--foreground)', opacity: 0.7 }}>
              Gebedstijden kunnen momenteel niet worden geladen.
            </p>
          </motion.div>
        </Container>
      </section>
    )
  }

  const prayers: PrayerTime[] = [
    { name: "Fajr", time: prayerData.fajr, icon: <Sunrise className="w-6 h-6" /> },
    { name: "Dhuhr", time: prayerData.dhuhr, icon: <Sun className="w-6 h-6" /> },
    { name: "Asr", time: prayerData.asr, icon: <CloudSun className="w-6 h-6" /> },
    { name: "Maghrib", time: prayerData.maghrib, icon: <Sunset className="w-6 h-6" /> },
    { name: "Isha", time: prayerData.isha, icon: <Moon className="w-6 h-6" /> }
  ]

  const formatTime = (timeString: string) => {
    try {
      const [hours, minutes] = timeString.split(':')
      const date = new Date()
      date.setHours(parseInt(hours), parseInt(minutes))
      return date.toLocaleTimeString('nl-NL', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      })
    } catch {
      return timeString
    }
  }

  return (
    <section 
      id="gebedstijden" 
      className="py-20 hero-background" 
      style={{ backgroundColor: 'var(--card)' }}
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
              Gebedstijden
            </h2>
            <div className="w-16 h-0.5 mx-auto mb-8" 
                 style={{ backgroundColor: '#C4A484' }}></div>
            <p className="font-poppins text-lg font-light leading-relaxed max-w-3xl mx-auto" 
               style={{ color: 'var(--foreground)', opacity: 0.7 }}>
              Actuele gebedstijden voor vandaag in Den Haag
            </p>
          </motion.div>

          {/* Desktop Prayer Cards */}
          <motion.div 
            className="hidden md:grid grid-cols-5 gap-6 mb-12"
            {...staggerContainer}
          >
            {prayers.map((prayer, index) => (
              <motion.div
                key={prayer.name}
                className="text-center p-6 rounded-2xl"
                style={{ 
                  backgroundColor: 'var(--background)',
                  border: '1px solid var(--border)'
                }}
                variants={staggerItem}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex justify-center mb-4" style={{ color: '#C4A484' }}>
                  {prayer.icon}
                </div>
                <h3 className="font-marcellus text-lg font-medium mb-2" 
                    style={{ color: 'var(--foreground)' }}>
                  {prayer.name}
                </h3>
                <p className="font-mono text-xl font-light" 
                   style={{ color: 'var(--foreground)' }}>
                  {formatTime(prayer.time)}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Prayer Cards */}
          <motion.div 
            className="md:hidden space-y-4"
            {...staggerContainer}
          >
            {prayers.map((prayer, index) => (
              <motion.div
                key={prayer.name}
                className="flex items-center justify-between p-4 rounded-xl"
                style={{ 
                  backgroundColor: 'var(--background)',
                  border: '1px solid var(--border)'
                }}
                variants={staggerItem}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex items-center gap-4">
                  <div style={{ color: '#C4A484' }}>
                    {prayer.icon}
                  </div>
                  <h3 className="font-marcellus text-lg font-medium" 
                      style={{ color: 'var(--foreground)' }}>
                    {prayer.name}
                  </h3>
                </div>
                <p className="font-mono text-lg font-light" 
                   style={{ color: 'var(--foreground)' }}>
                  {formatTime(prayer.time)}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Current Time Display */}
          <motion.div 
            className="text-center mt-12"
            {...animationPresets.fadeIn}
          >
            <p className="font-poppins text-sm font-light mb-2" 
               style={{ color: 'var(--foreground)', opacity: 0.6 }}>
              Huidige tijd
            </p>
            <p className="font-mono text-2xl font-light" 
               style={{ color: '#C4A484' }}>
              {currentTime.toLocaleTimeString('nl-NL', { 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit',
                hour12: false 
              })}
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}