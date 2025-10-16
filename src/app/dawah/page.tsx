import { Header, Footer } from "@/components/sections"
import { Container } from "@/components/ui"
import { generateStructuredData } from "@/lib/metadata"
import { StructuredData } from "@/components/StructuredData"
import { BookOpen, Users, MessageCircle, Heart, GraduationCap, Globe } from 'lucide-react'
import Link from 'next/link'

export { metadata } from './metadata'

export default function DawahPage() {
  const structuredData = generateStructuredData('dawah')
  
  const activities = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Jongerenavonden",
      description: "Regelmatige avonden in het Nederlands voor jongeren om te leren en discussiëren over islamitische thema's"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Ouderenavonden", 
      description: "Avonden in het Arabisch en Tamazight voor onze oudere leden met wijsheid en ervaring"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Vertaling Vrijdagpreken",
      description: "Wekelijkse vertaling van vrijdagpreken zodat iedereen de boodschap kan begrijpen"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Wekelijkse Lessen",
      description: "Lessen in Fiqh, 'Aqiedah, Tafsier, Arabisch en Sierah voor alle niveaus"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Begeleiding Bekeerlingen",
      description: "Boekenpakket en persoonlijke begeleiding voor nieuwe moslims in hun geloofsreis"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Gemeenschapsondersteuning",
      description: "Ondersteuning en begeleiding voor alle leden van onze diverse gemeenschap"
    }
  ]

  const alGhofraan = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Onze Missie",
      description: "Het delen van zuivere kennis, gebaseerd op de Qoraan en de Soennah, met het begrip van de vrome voorgangers."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Onze Filosofie", 
      description: "Wij geloven dat kennis de basis is voor een sterke gemeenschap en streven ernaar onze broeders en zusters te ondersteunen."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Onze Toewijding",
      description: "Gewijd aan het verspreiden van kennis en begrip van de Islaam binnen en buiten onze gemeenschap."
    }
  ]

  return (
    <>
      {structuredData && <StructuredData data={structuredData} />}
      <Header />
      
      <main className="min-h-screen pt-8 pb-20" style={{ backgroundColor: 'var(--background)' }}>
        {/* Hero Section */}
        <section 
          className="py-12 md:py-20"
          style={{ backgroundColor: 'var(--card)' }}
        >
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <div>
                <h1 className="font-marcellus text-3xl md:text-4xl lg:text-5xl font-light mb-6" 
                    style={{ color: 'var(--foreground)' }}>
                  Da&apos;wah & Kennisverspreiding
                </h1>
                <div className="w-20 h-0.5 mx-auto mb-8" 
                     style={{ backgroundColor: '#C4A484' }}></div>
                <p className="font-poppins text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto" 
                   style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                  Verspreiden van kennis en begrip van de Islaam door 
                  <span className="font-medium" style={{ color: '#C4A484' }}> Da&apos;wahCommissie al-Ghofraan</span>
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Al-Ghofraan Section */}
        <section 
          className="py-16 md:py-20"
          style={{ backgroundColor: 'var(--background)' }}
        >
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-marcellus text-2xl md:text-3xl lg:text-4xl font-light mb-4" 
                    style={{ color: 'var(--foreground)' }}>
                  Da&apos;wahCommissie al-Ghofraan
                </h2>
                <div className="w-16 h-0.5 mx-auto mb-8" 
                     style={{ backgroundColor: '#C4A484' }}></div>
                <p className="font-poppins text-lg font-light leading-relaxed max-w-3xl mx-auto" 
                   style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                  Een essentiële afdeling binnen Stichting el Mouahidin, gewijd aan het verspreiden van kennis en begrip van de Islaam.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {alGhofraan.map((item, index) => (
                  <div 
                    key={index}
                    className="p-8 rounded-3xl text-center"
                    style={{ 
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border)'
                    }}
                  >
                    <div className="flex justify-center mb-6">
                      <div className="p-4 rounded-2xl" 
                           style={{ backgroundColor: '#C4A484', color: 'white' }}>
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="font-marcellus text-xl md:text-2xl font-light mb-4" 
                        style={{ color: 'var(--foreground)' }}>
                      {item.title}
                    </h3>
                    <p className="font-poppins text-base font-light leading-relaxed" 
                       style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Activities Section */}
        <section 
          className="py-16 md:py-20"
          style={{ backgroundColor: 'var(--card)' }}
        >
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-marcellus text-2xl md:text-3xl lg:text-4xl font-light mb-4" 
                    style={{ color: 'var(--foreground)' }}>
                  Onze Activiteiten
                </h2>
                <div className="w-16 h-0.5 mx-auto mb-8" 
                     style={{ backgroundColor: '#C4A484' }}></div>
                <p className="font-poppins text-lg font-light leading-relaxed max-w-3xl mx-auto" 
                   style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                  Deze activiteiten zijn een schim van wat al-Ghofraan binnen de stichting en daarbuiten organiseert.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {activities.map((activity, index) => (
                  <div 
                    key={index}
                    className="p-6 rounded-3xl"
                    style={{ 
                      backgroundColor: 'var(--background)',
                      border: '1px solid var(--border)'
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-2xl flex-shrink-0" 
                           style={{ backgroundColor: '#C4A484', color: 'white' }}>
                        {activity.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-marcellus text-lg md:text-xl font-light mb-3" 
                            style={{ color: 'var(--foreground)' }}>
                          {activity.title}
                        </h3>
                        <p className="font-poppins text-sm md:text-base font-light leading-relaxed" 
                           style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                          {activity.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Contact Section */}
        <section 
          className="py-16 md:py-20"
          style={{ backgroundColor: 'var(--background)' }}
        >
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <div>
                <h2 className="font-marcellus text-2xl md:text-3xl lg:text-4xl font-light mb-4" 
                    style={{ color: 'var(--foreground)' }}>
                  Meer Informatie
                </h2>
                <div className="w-16 h-0.5 mx-auto mb-8" 
                     style={{ backgroundColor: '#C4A484' }}></div>
                <p className="font-poppins text-lg font-light leading-relaxed mb-8" 
                   style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                  De website van de Da&apos;wahCommissie al-Ghofraan is momenteel nog onder constructie, 
                  maar we kijken ernaar uit om deze binnenkort online te lanceren.
                </p>
                <p className="font-poppins text-base font-light leading-relaxed mb-12" 
                   style={{ color: 'var(--foreground)', opacity: 0.6 }}>
                  Houd onze aankondigingen in de gaten voor meer informatie!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="px-8 py-4 rounded-2xl font-poppins text-base font-medium inline-block transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: '#C4A484',
                      color: 'white'
                    }}
                  >
                    Contact Opnemen
                  </Link>
                  <Link
                    href="/"
                    className="px-8 py-4 rounded-2xl font-poppins text-base font-medium inline-block transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: 'var(--background)',
                      border: '1px solid var(--border)',
                      color: 'var(--foreground)'
                    }}
                  >
                    Terug naar Home
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      
      <Footer />
    </>
  )
}