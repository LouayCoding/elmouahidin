"use client"

import { Container, PageHeader } from "@/components/ui"
import { Header, Footer } from "@/components/sections"
import { Clock, Navigation, Calendar, BookOpen, MapPin, Moon, Download, Smartphone } from "lucide-react"

export default function ShabappPage() {
  const features = [
    {
      title: "Gebedstijden",
      description: "Actuele gebedstijden voor jouw locatie",
      icon: <Clock className="w-6 h-6" style={{ color: '#C4A484' }} />
    },
    {
      title: "Qibla Richting",
      description: "Vind altijd de juiste richting naar Mekka",
      icon: <Navigation className="w-6 h-6" style={{ color: '#C4A484' }} />
    },
    {
      title: "Islamitische Kalender",
      description: "Hijri kalender met belangrijke data",
      icon: <Calendar className="w-6 h-6" style={{ color: '#C4A484' }} />
    },
    {
      title: "Dhikr & Du'a",
      description: "Dagelijkse adhkar en du'a collectie",
      icon: <BookOpen className="w-6 h-6" style={{ color: '#C4A484' }} />
    },
    {
      title: "Moskee Locaties",
      description: "Vind moskeeën in jouw buurt",
      icon: <MapPin className="w-6 h-6" style={{ color: '#C4A484' }} />
    },
    {
      title: "Ramadan Tracker",
      description: "Iftar tijden en Ramadan kalender",
      icon: <Moon className="w-6 h-6" style={{ color: '#C4A484' }} />
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
    <>
      <Header />
      <PageHeader 
        title="Shabapp"
        subtitle="De islamitische app voor Nederlandse moslims"
      />
      
      <main className="min-h-screen py-20" style={{ backgroundColor: 'var(--background)' }}>
        <Container>
          <div className="max-w-6xl mx-auto space-y-20">
            
            {/* App Features */}
            <section>
              <div className="mb-16">
                <h2 className="font-marcellus text-3xl md:text-4xl font-light mb-4" 
                    style={{ color: 'var(--foreground)' }}>
                  Functies
                </h2>
                <div className="w-16 h-0.5 mb-8" 
                     style={{ backgroundColor: '#C4A484' }}></div>
                <p className="font-poppins text-lg leading-relaxed max-w-3xl" 
                   style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  Shabapp biedt alle essentiële tools die je nodig hebt als moslim in Nederland.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                {features.map((feature, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start gap-6">
                      <div className="mt-1">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-poppins font-medium text-lg mb-2" 
                            style={{ color: 'var(--foreground)' }}>
                          {feature.title}
                        </h3>
                        <p className="font-poppins font-light text-base leading-relaxed" 
                           style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Choose Shabapp */}
            <section>
              <div className="mb-16">
                <h2 className="font-marcellus text-3xl md:text-4xl font-light mb-4" 
                    style={{ color: 'var(--foreground)' }}>
                  Waarom Shabapp?
                </h2>
                <div className="w-16 h-0.5 mb-8" 
                     style={{ backgroundColor: '#C4A484' }}></div>
                <p className="font-poppins text-lg leading-relaxed max-w-3xl" 
                   style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  Ontworpen specifiek voor moslims in Nederland, met alle functies die je dagelijks nodig hebt.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" 
                         style={{ backgroundColor: '#C4A484' }}></div>
                    <span className="font-poppins font-light text-base leading-relaxed" 
                          style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Download Section */}
            <section>
              <div className="text-center">
                <div className="mb-12">
                  <div className="w-20 h-20 mx-auto mb-8 rounded-2xl flex items-center justify-center" 
                       style={{ backgroundColor: 'rgba(196, 164, 132, 0.1)' }}>
                    <Smartphone className="w-10 h-10" style={{ color: '#C4A484' }} />
                  </div>
                  
                  <h2 className="font-marcellus text-3xl md:text-4xl font-light mb-4" 
                      style={{ color: 'var(--foreground)' }}>
                    Download Shabapp
                  </h2>
                  
                  <p className="font-poppins text-lg leading-relaxed max-w-2xl mx-auto" 
                     style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                    Beschikbaar voor iOS en Android. Gratis te downloaden en gebruiken.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <a 
                    href="https://apps.apple.com/nl/app/shabapp/id1465640749"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 px-8 py-4 rounded-xl font-poppins text-base font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                    style={{
                      backgroundColor: 'var(--card)',
                      color: 'var(--foreground)',
                      textDecoration: 'none',
                      border: '1px solid var(--border)'
                    }}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <span>App Store</span>
                  </a>
                  
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.nl.shabapp.mobile&hl=nl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 px-8 py-4 rounded-xl font-poppins text-base font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                    style={{
                      backgroundColor: 'var(--card)',
                      color: 'var(--foreground)',
                      textDecoration: 'none',
                      border: '1px solid var(--border)'
                    }}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <span>Google Play</span>
                  </a>
                </div>
              </div>
            </section>

            {/* Support Section */}
            <section className="text-center">
              <div className="max-w-2xl mx-auto">
                <h3 className="font-poppins font-medium text-lg mb-3" 
                    style={{ color: 'var(--foreground)' }}>
                  Hulp nodig?
                </h3>
                <p className="font-poppins font-light text-base leading-relaxed" 
                   style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  Vragen over de app? Neem contact met ons op voor ondersteuning en feedback.
                </p>
              </div>
            </section>

          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}

