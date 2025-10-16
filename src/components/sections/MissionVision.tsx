"use client"

import { motion } from 'framer-motion'
import { Container } from "@/components/ui"
import { staggerContainer, staggerItem, animationPresets } from '@/hooks/useMotion'
import { Building2, BookOpen, Users, Globe, Target, Star } from 'lucide-react'

export function MissionVision() {
  const missionValues = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Gebed & Spiritualiteit",
      description: "Een veilige ruimte voor dagelijkse gebeden en spirituele groei"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Onderwijs & Kennis",
      description: "Islamitisch onderwijs voor alle leeftijden en niveaus"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Gemeenschap & Verbinding",
      description: "Het samenbrengen van mensen uit diverse achtergronden"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Da'wah & Dialoog",
      description: "Het delen van kennis en bevorderen van begrip"
    }
  ]

  return (
    <motion.section 
      id="missie-visie" 
      className="py-20" 
      style={{ backgroundColor: 'var(--card)' }}
      {...animationPresets.fadeIn}
    >
      <Container>
        <div className="max-w-6xl mx-auto space-y-20">
          
          {/* Header */}
          <motion.div 
            className="text-center"
            {...animationPresets.slideUp}
          >
            <h2 className="font-marcellus text-3xl md:text-4xl font-light mb-4" 
                style={{ color: 'var(--foreground)' }}>
              Onze Missie & Visie
            </h2>
            <div className="w-16 h-0.5 mx-auto mb-8" 
                 style={{ backgroundColor: '#C4A484' }}></div>
            <p className="font-poppins text-lg font-light max-w-3xl mx-auto leading-relaxed" 
               style={{ color: 'var(--foreground)', opacity: 0.7 }}>
              Een gemeenschap van geloof, kennis en verbinding waar iedereen welkom is
            </p>
          </motion.div>

          {/* Mission & Vision Cards */}
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 lg:gap-20"
            {...staggerContainer}
          >
            
            {/* Missie */}
            <motion.div 
              className="space-y-8 p-8 rounded-2xl"
              style={{ 
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)'
              }}
              variants={staggerItem}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div style={{ color: '#C4A484' }}>
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="font-marcellus text-2xl md:text-3xl font-light" 
                      style={{ color: 'var(--foreground)' }}>
                    Onze Missie
                  </h3>
                </div>
                <div className="w-12 h-0.5" 
                     style={{ backgroundColor: '#C4A484' }}></div>
              </div>
              
              <div className="space-y-6">
                <p className="font-poppins text-base md:text-lg font-light leading-relaxed" 
                   style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                  Het creëren van gelegenheid voor moslims om hun geloof te praktiseren door gebed, onderwijs en gemeenschapsactiviteiten volgens de Qoraan en Soennah.
                </p>
                
                <div className="p-4 rounded-xl" 
                     style={{ backgroundColor: 'var(--background)' }}>
                  <p className="font-poppins text-sm font-medium text-center" 
                     style={{ color: '#C4A484' }}>
                    "De deuren staan voor iedereen open"
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Visie */}
            <motion.div 
              className="space-y-8 p-8 rounded-2xl"
              style={{ 
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)'
              }}
              variants={staggerItem}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div style={{ color: '#C4A484' }}>
                    <Star className="w-8 h-8" />
                  </div>
                  <h3 className="font-marcellus text-2xl md:text-3xl font-light" 
                      style={{ color: 'var(--foreground)' }}>
                    Onze Visie
                  </h3>
                </div>
                <div className="w-12 h-0.5" 
                     style={{ backgroundColor: '#C4A484' }}></div>
              </div>
              
              <div className="space-y-6">
                <p className="font-poppins text-base md:text-lg font-light leading-relaxed" 
                   style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                  Een open stichting voor moslims en niet-moslims die kennis verspreidt, saamhorigheid bevordert en wederzijds respect stimuleert in de Nederlandse samenleving.
                </p>
                
                <div className="p-4 rounded-xl" 
                     style={{ backgroundColor: 'var(--background)' }}>
                  <p className="font-poppins text-sm font-medium text-center" 
                     style={{ color: '#C4A484' }}>
                    "Voor mannen en vrouwen, jong en oud"
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Core Values */}
          <motion.div 
            className="space-y-12"
            {...animationPresets.fadeIn}
          >
            <div className="text-center">
              <h3 className="font-marcellus text-2xl md:text-3xl font-light mb-4" 
                  style={{ color: 'var(--foreground)' }}>
                Onze Kernwaarden
              </h3>
              <div className="w-12 h-0.5 mx-auto mb-8" 
                   style={{ backgroundColor: '#C4A484' }}></div>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              {...staggerContainer}
            >
              {missionValues.map((value, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-xl"
                  style={{ 
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)'
                  }}
                  variants={staggerItem}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="mb-4" style={{ color: '#C4A484' }}>{value.icon}</div>
                  <h4 className="font-marcellus text-lg font-medium mb-3" 
                      style={{ color: 'var(--foreground)' }}>
                    {value.title}
                  </h4>
                  <p className="font-poppins text-sm font-light leading-relaxed" 
                     style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-center"
            {...animationPresets.fadeIn}
          >
            <div className="max-w-2xl mx-auto space-y-8">
              <p className="font-poppins text-base font-light leading-relaxed" 
                 style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Wilt u meer weten over onze stichting of deel uitmaken van onze gemeenschap? 
                Bezoek ons tijdens de gebedstijden of neem contact met ons op.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/onze-stichting"
                  className="px-8 py-4 rounded-2xl font-poppins text-base font-medium"
                  style={{ 
                    backgroundColor: '#C4A484',
                    color: 'white'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Meer Over Ons
                </motion.a>
                <motion.a
                  href="/contact"
                  className="px-8 py-4 rounded-2xl font-poppins text-base font-medium"
                  style={{ 
                    backgroundColor: 'var(--background)',
                    border: '1px solid var(--border)',
                    color: 'var(--foreground)'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Opnemen
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  )
}