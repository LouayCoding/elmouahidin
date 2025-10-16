'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui'
import { Button } from '@/components/ui'
import { staggerContainer, staggerItem, animationPresets } from '@/hooks/useMotion'
import { CreditCard, Building2, GraduationCap, Users, Heart, Calendar, Utensils } from 'lucide-react'

export function Donate() {
  const donationMethods = [
    {
      title: "Bankoverschrijving",
      description: "Maak een donatie via bankoverschrijving",
      details: [
        { label: "Rekeningnummer", value: "NL91 ABNA 0417 1643 00" },
        { label: "Ten name van", value: "Stichting El Mouahidin" },
        { label: "Plaats", value: "Den Haag" },
        { label: "BIC/SWIFT", value: "ABNANL2A" }
      ],
      icon: <CreditCard className="w-8 h-8" />,
      primary: true
    }
  ]

  const donationPurposes = [
    {
      icon: <Building2 className="w-5 h-5" />,
      text: "Onderhoud en verbetering van de moskee"
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      text: "Islamitisch onderwijs en educatie"
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: "Da'wah activiteiten en evenementen"
    },
    {
      icon: <Heart className="w-5 h-5" />,
      text: "Ondersteuning van behoeftige gemeenschapsleden"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      text: "Jeugdprogramma's en activiteiten"
    },
    {
      icon: <Utensils className="w-5 h-5" />,
      text: "Ramadan iftar-maaltijden"
    }
  ]

  return (
    <motion.section 
      id="doneren" 
      className="py-12 md:py-20" 
      style={{ backgroundColor: 'var(--card)' }}
      {...animationPresets.fadeIn}
    >
      <Container>
        <div className="max-w-6xl mx-auto space-y-12 md:space-y-20">
          
          {/* Header */}
          <motion.div 
            className="text-center"
            {...animationPresets.slideUp}
          >
            <h2 className="font-marcellus text-3xl md:text-4xl font-light mb-4" 
                style={{ color: 'var(--foreground)' }}>
              Doneren
            </h2>
            <div className="w-16 h-0.5 mx-auto mb-8" 
                 style={{ backgroundColor: '#C4A484' }}></div>
            <p className="font-poppins text-lg font-light max-w-3xl mx-auto leading-relaxed" 
               style={{ color: 'var(--foreground)', opacity: 0.7 }}>
              Steun onze gemeenschap en help ons onze missie voort te zetten
            </p>
          </motion.div>

          {/* Donation Method - Apple Style */}
          <motion.div 
            className="max-w-2xl mx-auto"
            {...staggerContainer}
          >
            {donationMethods.map((method, index) => (
              <motion.div 
                key={index} 
                className="space-y-6 md:space-y-8"
                variants={staggerItem}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                
                {/* Header */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div style={{ color: '#C4A484' }}>{method.icon}</div>
                    <h3 className="font-marcellus text-2xl md:text-3xl font-light" 
                        style={{ color: 'var(--foreground)' }}>
                      {method.title}
                    </h3>
                  </div>
                  <div className="w-12 h-0.5" 
                       style={{ backgroundColor: '#C4A484' }}></div>
                  <p className="font-poppins text-base md:text-lg font-light leading-relaxed" 
                     style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                    {method.description}
                  </p>
                </div>

                {/* Details */}
                <div className="space-y-2 md:space-y-4">
                  {method.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 md:py-3 border-b border-opacity-20" 
                         style={{ borderColor: 'var(--border)' }}>
                      <span className="font-poppins text-xs md:text-sm font-medium mb-1 sm:mb-0" 
                            style={{ color: 'var(--foreground)', opacity: 0.6 }}>
                        {detail.label}
                      </span>
                      <span className="font-poppins text-sm md:text-base font-light" 
                            style={{ color: 'var(--foreground)' }}>
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                {method.primary && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      className="w-full py-4 rounded-2xl font-poppins text-base font-medium"
                      style={{ 
                        backgroundColor: '#C4A484',
                        color: 'white',
                        border: 'none'
                      }}
                    >
                      Doneer Nu
                    </Button>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Donation Purposes */}
          <motion.div 
            className="text-center space-y-8 md:space-y-12"
            {...animationPresets.fadeIn}
          >
            <div>
              <h3 className="font-marcellus text-xl md:text-2xl lg:text-3xl font-light mb-4" 
                  style={{ color: 'var(--foreground)' }}>
                Waarvoor worden donaties gebruikt?
              </h3>
              <div className="w-12 h-0.5 mx-auto mb-6 md:mb-8" 
                   style={{ backgroundColor: '#C4A484' }}></div>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto"
              {...staggerContainer}
            >
              {donationPurposes.map((purpose, index) => (
                <motion.div
                  key={index}
                  className="p-4 md:p-6 rounded-xl text-center"
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
                  <div className="flex justify-center mb-3 md:mb-4" style={{ color: '#C4A484' }}>
                    {purpose.icon}
                  </div>
                  <p className="font-poppins text-xs md:text-sm font-light leading-relaxed" 
                     style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                    {purpose.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="max-w-2xl mx-auto"
              {...animationPresets.slideUp}
            >
              <p className="font-poppins text-base font-light leading-relaxed mb-8" 
                 style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                Elke donatie, groot of klein, helpt ons om onze gemeenschap te dienen en onze islamitische waarden uit te dragen. 
                Moge Allah uw bijdrage zegenen.
              </p>
              <p className="font-poppins text-sm font-light italic" 
                 style={{ color: 'var(--foreground)', opacity: 0.6 }}>
                "Wie een goede daad verricht, krijgt tien keer de beloning ervoor." - Qoraan 6:160
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  )
}