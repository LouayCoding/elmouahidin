'use client'

import { useState } from 'react'
import { Header, Footer } from "@/components/sections"
import { PageHeader, FeatureList } from "@/components/ui"
import { generateStructuredData } from "@/lib/metadata"
import { ClientPageWrapper } from "@/components/ClientPageWrapper"

// Metadata handled by ClientPageWrapper

// Icons
const BookIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
)

const UsersIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  </svg>
)

const ClockIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
)


export default function OnderwijsPage() {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    program: '',
    experience: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const programs = [
    {
      id: 'kinderen',
      title: 'Kinderen (7-12 jaar)',
      description: 'Islamitisch onderwijs speciaal ontworpen voor kinderen',
      features: [
        'Arabische taal lessen',
        'Basis geloofsleer (Aqiedah)',
        'Qoraan lezen en reciteren',
        'Islamitische verhalen en geschiedenis',
        'Praktische islamitische waarden'
      ],
      schedule: 'Zaterdags 10:00 - 12:00',
      duration: '2 uur per week',
      price: 'Gratis'
    },
    {
      id: 'vrouwen',
      title: 'Vrouwen',
      description: 'Uitgebreid islamitisch onderwijs voor vrouwen van alle leeftijden',
      features: [
        'Arabische taal (beginner tot gevorderd)',
        'Tafsier (Qoraan uitleg)',
        'Fiqh (Islamitische jurisprudentie)',
        'Sierah (Leven van de Profeet)',
        'Praktische islamitische kennis'
      ],
      schedule: 'Donderdags 19:00 - 21:00',
      duration: '2 uur per week',
      price: 'Gratis'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitStatus('success')
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        age: '',
        program: '',
        experience: '',
        message: ''
      })
      setSelectedProgram(null)
      setSubmitStatus('idle')
    }, 3000)
  }

  return (
    <>
      <Header />
      <main>
        <PageHeader 
          title="Onderwijs"
          subtitle="Islamitisch onderwijs voor alle leeftijden. Ontdek onze programma's voor kinderen en vrouwen, ontworpen om kennis en geloof te verdiepen."
          compact
        />

        {/* Programs Section */}
        <section className="py-20" style={{ backgroundColor: 'var(--background)' }}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-marcellus text-3xl md:text-4xl font-light mb-4" 
                  style={{ color: 'var(--foreground)' }}>
                Onze Programma's
              </h2>
              <div className="w-16 h-0.5 mx-auto mb-8" 
                   style={{ backgroundColor: '#C4A484' }}></div>
              <p className="font-poppins text-lg font-light leading-relaxed max-w-3xl mx-auto" 
                 style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                Kies het programma dat het beste bij jou past en begin je reis naar meer islamitische kennis
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {programs.map((program) => (
                <div 
                  key={program.id}
                  className="p-8 rounded-3xl transition-all duration-300 hover:scale-[1.02]"
                  style={{ 
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)'
                  }}
                >
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h3 className="font-marcellus text-2xl md:text-3xl font-light" 
                          style={{ color: 'var(--foreground)' }}>
                        {program.title}
                      </h3>
                      <div className="w-12 h-0.5" 
                           style={{ backgroundColor: '#C4A484' }}></div>
                      <p className="font-poppins text-base font-light leading-relaxed" 
                         style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                        {program.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-4">
                      <h4 className="font-poppins text-lg font-medium" 
                          style={{ color: 'var(--foreground)' }}>
                        Wat je leert:
                      </h4>
                      <div className="space-y-3">
                        {program.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0" 
                                 style={{ backgroundColor: '#C4A484' }}>
                              <CheckIcon />
                            </div>
                            <span className="font-poppins text-sm font-light leading-relaxed" 
                                  style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Schedule Info */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center gap-3 p-3 rounded-lg" 
                           style={{ backgroundColor: 'var(--background)' }}>
                        <ClockIcon />
                        <div>
                          <p className="font-poppins text-xs font-medium" 
                             style={{ color: 'var(--foreground)', opacity: 0.6 }}>
                            Schema
                          </p>
                          <p className="font-poppins text-sm font-light" 
                             style={{ color: 'var(--foreground)' }}>
                            {program.schedule}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg" 
                           style={{ backgroundColor: 'var(--background)' }}>
                        <BookIcon />
                        <div>
                          <p className="font-poppins text-xs font-medium" 
                             style={{ color: 'var(--foreground)', opacity: 0.6 }}>
                            Duur
                          </p>
                          <p className="font-poppins text-sm font-light" 
                             style={{ color: 'var(--foreground)' }}>
                            {program.duration}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg" 
                           style={{ backgroundColor: 'var(--background)' }}>
                        <UsersIcon />
                        <div>
                          <p className="font-poppins text-xs font-medium" 
                             style={{ color: 'var(--foreground)', opacity: 0.6 }}>
                            Kosten
                          </p>
                          <p className="font-poppins text-sm font-light" 
                             style={{ color: 'var(--foreground)' }}>
                            {program.price}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={() => {
                        setSelectedProgram(program.id)
                        setFormData(prev => ({ ...prev, program: program.title }))
                      }}
                      className="w-full py-4 px-6 rounded-2xl font-poppins text-base font-medium transition-all duration-300 hover:scale-[1.02]"
                      style={{ 
                        backgroundColor: '#C4A484',
                        color: 'white'
                      }}
                    >
                      Aanmelden voor {program.title}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Form */}
        {selectedProgram && (
          <section className="py-20" style={{ backgroundColor: 'var(--card)' }}>
            <div className="max-w-4xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="font-marcellus text-3xl md:text-4xl font-light mb-4" 
                    style={{ color: 'var(--foreground)' }}>
                  Aanmelden
                </h2>
                <div className="w-16 h-0.5 mx-auto mb-8" 
                     style={{ backgroundColor: '#C4A484' }}></div>
                <p className="font-poppins text-lg font-light leading-relaxed" 
                   style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  Vul het formulier in om je aan te melden voor het onderwijsprogramma
                </p>
              </div>

              <div className="p-8 rounded-3xl" 
                   style={{ 
                     backgroundColor: 'var(--background)',
                     border: '1px solid var(--border)'
                   }}>
                
                {submitStatus === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" 
                         style={{ backgroundColor: '#10B981' }}>
                      <CheckIcon />
                    </div>
                    <h3 className="font-marcellus text-2xl font-light mb-4" 
                        style={{ color: 'var(--foreground)' }}>
                      Aanmelding Verzonden!
                    </h3>
                    <p className="font-poppins text-base font-light leading-relaxed" 
                       style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                      Bedankt voor je aanmelding. We nemen binnen 24 uur contact met je op.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-poppins text-sm font-medium mb-2" 
                               style={{ color: 'var(--foreground)' }}>
                          Volledige naam *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl font-poppins text-base transition-all duration-300 focus:outline-none focus:ring-2"
                          style={{ 
                            backgroundColor: 'var(--card)',
                            border: '1px solid var(--border)',
                            color: 'var(--foreground)'
                          }}
                          placeholder="Je volledige naam"
                        />
                      </div>
                      <div>
                        <label className="block font-poppins text-sm font-medium mb-2" 
                               style={{ color: 'var(--foreground)' }}>
                          E-mailadres *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl font-poppins text-base transition-all duration-300 focus:outline-none focus:ring-2"
                          style={{ 
                            backgroundColor: 'var(--card)',
                            border: '1px solid var(--border)',
                            color: 'var(--foreground)'
                          }}
                          placeholder="je@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-poppins text-sm font-medium mb-2" 
                               style={{ color: 'var(--foreground)' }}>
                          Telefoonnummer
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl font-poppins text-base transition-all duration-300 focus:outline-none focus:ring-2"
                          style={{ 
                            backgroundColor: 'var(--card)',
                            border: '1px solid var(--border)',
                            color: 'var(--foreground)'
                          }}
                          placeholder="06 12345678"
                        />
                      </div>
                      <div>
                        <label className="block font-poppins text-sm font-medium mb-2" 
                               style={{ color: 'var(--foreground)' }}>
                          Leeftijd *
                        </label>
                        <input
                          type="number"
                          name="age"
                          value={formData.age}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl font-poppins text-base transition-all duration-300 focus:outline-none focus:ring-2"
                          style={{ 
                            backgroundColor: 'var(--card)',
                            border: '1px solid var(--border)',
                            color: 'var(--foreground)'
                          }}
                          placeholder="Leeftijd"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-poppins text-sm font-medium mb-2" 
                             style={{ color: 'var(--foreground)' }}>
                        Programma *
                      </label>
                      <select
                        name="program"
                        value={formData.program}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl font-poppins text-base transition-all duration-300 focus:outline-none focus:ring-2"
                        style={{ 
                          backgroundColor: 'var(--card)',
                          border: '1px solid var(--border)',
                          color: 'var(--foreground)'
                        }}
                      >
                        <option value="">Selecteer een programma</option>
                        <option value="Kinderen (7-12 jaar)">Kinderen (7-12 jaar)</option>
                        <option value="Vrouwen">Vrouwen</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-poppins text-sm font-medium mb-2" 
                             style={{ color: 'var(--foreground)' }}>
                        Ervaring met Arabisch/Islamitisch onderwijs
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl font-poppins text-base transition-all duration-300 focus:outline-none focus:ring-2"
                        style={{ 
                          backgroundColor: 'var(--card)',
                          border: '1px solid var(--border)',
                          color: 'var(--foreground)'
                        }}
                      >
                        <option value="">Selecteer je niveau</option>
                        <option value="Beginner">Beginner - Geen ervaring</option>
                        <option value="Basis">Basis - Beetje ervaring</option>
                        <option value="Gemiddeld">Gemiddeld - Redelijke ervaring</option>
                        <option value="Gevorderd">Gevorderd - Veel ervaring</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-poppins text-sm font-medium mb-2" 
                             style={{ color: 'var(--foreground)' }}>
                        Aanvullende informatie
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl font-poppins text-base transition-all duration-300 focus:outline-none focus:ring-2 resize-none"
                        style={{ 
                          backgroundColor: 'var(--card)',
                          border: '1px solid var(--border)',
                          color: 'var(--foreground)'
                        }}
                        placeholder="Vertel ons meer over je motivatie of specifieke vragen..."
                      />
                    </div>

                    <div className="flex gap-4 pt-4">
                      <button
                        type="button"
                        onClick={() => setSelectedProgram(null)}
                        className="flex-1 py-4 px-6 rounded-2xl font-poppins text-base font-medium transition-all duration-300 hover:scale-[1.02]"
                        style={{ 
                          backgroundColor: 'var(--card)',
                          border: '1px solid var(--border)',
                          color: 'var(--foreground)'
                        }}
                      >
                        Annuleren
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 py-4 px-6 rounded-2xl font-poppins text-base font-medium transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{ 
                          backgroundColor: '#C4A484',
                          color: 'white'
                        }}
                      >
                        {isSubmitting ? 'Verzenden...' : 'Aanmelding Verzenden'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Info Section */}
        <section className="py-20" style={{ backgroundColor: 'var(--background)' }}>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-marcellus text-3xl md:text-4xl font-light mb-4" 
                style={{ color: 'var(--foreground)' }}>
              Waarom Onderwijs bij El Mouahidin?
            </h2>
            <div className="w-16 h-0.5 mx-auto mb-8" 
                 style={{ backgroundColor: '#C4A484' }}></div>
            <div className="space-y-8">
              <p className="font-poppins text-lg font-light leading-relaxed" 
                 style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Onze onderwijsprogramma's zijn ontworpen om een solide basis te leggen in islamitische kennis. 
                We combineren traditionele leermetoden met moderne pedagogische benaderingen.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <BookIcon />
                  <h3 className="font-poppins text-lg font-medium mt-4 mb-2" 
                      style={{ color: 'var(--foreground)' }}>
                    Kwaliteitsonderwijs
                  </h3>
                  <p className="font-poppins text-sm font-light leading-relaxed" 
                     style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                    Ervaren docenten met diepgaande kennis van de islamitische wetenschappen
                  </p>
                </div>
                <div className="text-center">
                  <UsersIcon />
                  <h3 className="font-poppins text-lg font-medium mt-4 mb-2" 
                      style={{ color: 'var(--foreground)' }}>
                    Kleine Groepen
                  </h3>
                  <p className="font-poppins text-sm font-light leading-relaxed" 
                     style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                    Persoonlijke aandacht en begeleiding voor elke leerling
                  </p>
                </div>
                <div className="text-center">
                  <ClockIcon />
                  <h3 className="font-poppins text-lg font-medium mt-4 mb-2" 
                      style={{ color: 'var(--foreground)' }}>
                    Flexibele Tijden
                  </h3>
                  <p className="font-poppins text-sm font-light leading-relaxed" 
                     style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                    Lessen op momenten die passen bij jouw schema
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
