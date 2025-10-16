'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui'
import { staggerContainer, staggerItem, animationPresets } from '@/hooks/useMotion'
import { BookOpen, GraduationCap, Users } from 'lucide-react'

export function Activities() {
  const activities = [
    {
      title: "Da'wah",
      description: "Verspreiden van kennis en begrip van de Islaam",
      items: [
        "Jongerenavonden in het Nederlands",
        "Ouderenavonden in Arabisch & Tamazight", 
        "Vertaling van Vrijdagpreken",
        "Wekelijkse lessen in Fiqh & 'Aqiedah",
        "Begeleiding voor bekeerlingen"
      ],
      icon: <BookOpen className="w-8 h-8" />,
      color: "#C4A484"
    },
    {
      title: "Onderwijs",
      description: "Islamitisch onderwijs voor alle leeftijden",
      items: [
        "Arabische taal lessen",
        "Qoraan memorisatie (Hifz)",
        "Islamitische geschiedenis",
        "Hadith studies",
        "Kinderonderwijs (7-12 jaar)"
      ],
      icon: <GraduationCap className="w-8 h-8" />,
      color: "#8B7355"
    },
    {
      title: "Gemeenschap",
      description: "Activiteiten die onze gemeenschap samenbrengen",
      items: [
        "Iftar maaltijden tijdens Ramadan",
        "Eid vieringen",
        "Gemeenschapsbijeenkomsten",
        "Hulp aan behoeftigen",
        "Interculturele dialoog"
      ],
      icon: <Users className="w-8 h-8" />,
      color: "#A68B5B"
    }
  ]

  return (
    <motion.section 
      id="activiteiten" 
      className="py-20" 
      style={{ backgroundColor: 'var(--background)' }}
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
              Onze Activiteiten
            </h2>
            <div className="w-16 h-0.5 mx-auto mb-8" 
                 style={{ backgroundColor: '#C4A484' }}></div>
            <p className="font-poppins text-lg font-light leading-relaxed max-w-3xl mx-auto" 
               style={{ color: 'var(--foreground)', opacity: 0.7 }}>
              Ontdek onze diverse programma's die kennis, gemeenschap en spirituele groei bevorderen
            </p>
          </motion.div>

          {/* Activities Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            {...staggerContainer}
          >
            {activities.map((activity, index) => (
              <motion.div 
                key={index} 
                className="p-8 rounded-2xl"
                style={{ 
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)'
                }}
                variants={staggerItem}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="space-y-8">
                  
                  {/* Activity Header */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div style={{ color: activity.color }}>
                        {activity.icon}
                      </div>
                      <h3 className="font-marcellus text-xl md:text-2xl font-light" 
                          style={{ color: 'var(--foreground)' }}>
                        {activity.title}
                      </h3>
                    </div>
                    <div className="w-12 h-0.5" 
                         style={{ backgroundColor: activity.color }}></div>
                    <p className="font-poppins text-base font-light leading-relaxed" 
                       style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                      {activity.description}
                    </p>
                  </div>

                  {/* Activity Items */}
                  <div className="space-y-3">
                    {activity.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          delay: itemIndex * 0.1,
                          duration: 0.4 
                        }}
                        viewport={{ once: false, margin: "-50px" }}
                      >
                        <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" 
                             style={{ backgroundColor: activity.color }}></div>
                        <p className="font-poppins text-sm font-light leading-relaxed" 
                           style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-16"
            {...animationPresets.fadeIn}
          >
            <p className="font-poppins text-base font-light leading-relaxed mb-8 max-w-2xl mx-auto" 
               style={{ color: 'var(--foreground)', opacity: 0.7 }}>
              Wilt u deelnemen aan onze activiteiten of meer informatie? 
              Neem contact met ons op of bezoek ons tijdens de gebedstijden.
            </p>
            <motion.a
              href="/contact"
              className="inline-block px-8 py-4 rounded-2xl font-poppins text-base font-medium"
              style={{ 
                backgroundColor: '#C4A484',
                color: 'white'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Opnemen
            </motion.a>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  )
}