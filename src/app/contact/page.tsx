"use client"

import { useState } from "react"
import { Container, PageHeader } from "@/components/ui"
import { Header, Footer } from "@/components/sections"
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle } from "lucide-react"
import { generateStructuredData } from "@/lib/metadata"
import { ClientPageWrapper } from "@/components/ClientPageWrapper"

// Metadata handled by ClientPageWrapper

export default function ContactPage() {
  const structuredData = generateStructuredData('contact')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Naam is verplicht'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail is verplicht'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Voer een geldig e-mailadres in'
    }

    if (!formData.subject) {
      newErrors.subject = 'Selecteer een onderwerp'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Bericht is verplicht'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Bericht moet minimaal 10 karakters bevatten'
    }

    if (formData.phone && !/^[\+]?[0-9\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Voer een geldig telefoonnummer in'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would normally send the data to your backend
      console.log('Form submitted:', formData)
      
      setSubmitStatus('success')
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
      
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <ClientPageWrapper structuredData={structuredData || undefined}>
      <Header />
      <PageHeader 
        title="Contact"
        subtitle="Neem contact met ons op"
      />
      
      <main className="min-h-screen py-20" style={{ backgroundColor: 'var(--background)' }}>
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 lg:gap-24">
            
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="font-marcellus text-3xl md:text-4xl font-light mb-4" 
                    style={{ color: 'var(--foreground)' }}>
                  Contactgegevens
                </h2>
                <div className="w-16 h-0.5 mb-12" 
                     style={{ backgroundColor: '#C4A484' }}></div>
              </div>
              
              <div className="space-y-10">
                {/* Address */}
                <div className="group">
                  <div className="flex items-start gap-6">
                    <div className="mt-1">
                      <MapPin className="w-5 h-5" style={{ color: '#C4A484' }} />
                    </div>
                    <div>
                      <h3 className="font-poppins font-medium text-lg mb-2" 
                          style={{ color: 'var(--foreground)' }}>
                        Adres
                      </h3>
                      <div className="font-poppins font-light text-base leading-relaxed" 
                           style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                        <p>Deimanstraat 7</p>
                        <p>2531 RZ Den Haag</p>
                        <p>Nederland</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="group">
                  <div className="flex items-start gap-6">
                    <div className="mt-1">
                      <Phone className="w-5 h-5" style={{ color: '#C4A484' }} />
                    </div>
                    <div>
                      <h3 className="font-poppins font-medium text-lg mb-2" 
                          style={{ color: 'var(--foreground)' }}>
                        Telefoon
                      </h3>
                      <p className="font-poppins font-light text-base" 
                         style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                        +31 70 123 4567
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="group">
                  <div className="flex items-start gap-6">
                    <div className="mt-1">
                      <Mail className="w-5 h-5" style={{ color: '#C4A484' }} />
                    </div>
                    <div>
                      <h3 className="font-poppins font-medium text-lg mb-2" 
                          style={{ color: 'var(--foreground)' }}>
                        E-mail
                      </h3>
                      <p className="font-poppins font-light text-base" 
                         style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                        info@elmouahidin.nl
                      </p>
                    </div>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="group">
                  <div className="flex items-start gap-6">
                    <div className="mt-1">
                      <Clock className="w-5 h-5" style={{ color: '#C4A484' }} />
                    </div>
                    <div className="w-full">
                      <h3 className="font-poppins font-medium text-lg mb-4" 
                          style={{ color: 'var(--foreground)' }}>
                        Openingstijden
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="font-poppins font-light text-base" 
                                style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                            Maandag - Donderdag
                          </span>
                          <span className="font-poppins font-medium text-base" 
                                style={{ color: '#C4A484' }}>
                            09:00 - 22:00
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-poppins font-light text-base" 
                                style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                            Vrijdag
                          </span>
                          <span className="font-poppins font-medium text-base" 
                                style={{ color: '#C4A484' }}>
                            09:00 - 23:00
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-poppins font-light text-base" 
                                style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                            Zaterdag
                          </span>
                          <span className="font-poppins font-medium text-base" 
                                style={{ color: '#C4A484' }}>
                            09:00 - 22:00
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-poppins font-light text-base" 
                                style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                            Zondag
                          </span>
                          <span className="font-poppins font-medium text-base" 
                                style={{ color: '#C4A484' }}>
                            09:00 - 22:00
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-12">
              <div>
                <h2 className="font-marcellus text-3xl md:text-4xl font-light mb-4" 
                    style={{ color: 'var(--foreground)' }}>
                  Stuur een bericht
                </h2>
                <div className="w-16 h-0.5 mb-12" 
                     style={{ backgroundColor: '#C4A484' }}></div>
              </div>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-lg flex items-center gap-3" 
                     style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)' }}>
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="font-poppins text-sm text-green-700">
                    Uw bericht is succesvol verzonden! We nemen zo spoedig mogelijk contact met u op.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 rounded-lg flex items-center gap-3" 
                     style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <p className="font-poppins text-sm text-red-700">
                    Er is een fout opgetreden bij het verzenden van uw bericht. Probeer het opnieuw.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block font-poppins font-medium text-base mb-3" 
                         style={{ color: 'var(--foreground)' }}>
                    Naam *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg font-poppins font-light text-base transition-all duration-200 focus:outline-none focus:ring-2 ${
                      errors.name ? 'ring-2 ring-red-500 border-red-500' : 'focus:ring-[#C4A484]'
                    }`}
                    style={{ 
                      backgroundColor: 'var(--background)', 
                      color: 'var(--foreground)',
                      border: errors.name ? '1px solid rgb(239, 68, 68)' : '1px solid var(--border)'
                    }}
                    placeholder="Uw volledige naam"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 font-poppins">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block font-poppins font-medium text-base mb-3" 
                         style={{ color: 'var(--foreground)' }}>
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg font-poppins font-light text-base transition-all duration-200 focus:outline-none focus:ring-2 ${
                      errors.email ? 'ring-2 ring-red-500 border-red-500' : 'focus:ring-[#C4A484]'
                    }`}
                    style={{ 
                      backgroundColor: 'var(--background)', 
                      color: 'var(--foreground)',
                      border: errors.email ? '1px solid rgb(239, 68, 68)' : '1px solid var(--border)'
                    }}
                    placeholder="uw.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 font-poppins">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block font-poppins font-medium text-base mb-3" 
                         style={{ color: 'var(--foreground)' }}>
                    Telefoon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg font-poppins font-light text-base transition-all duration-200 focus:outline-none focus:ring-2 ${
                      errors.phone ? 'ring-2 ring-red-500 border-red-500' : 'focus:ring-[#C4A484]'
                    }`}
                    style={{ 
                      backgroundColor: 'var(--background)', 
                      color: 'var(--foreground)',
                      border: errors.phone ? '1px solid rgb(239, 68, 68)' : '1px solid var(--border)'
                    }}
                    placeholder="+31 6 12345678"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600 font-poppins">{errors.phone}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block font-poppins font-medium text-base mb-3" 
                         style={{ color: 'var(--foreground)' }}>
                    Onderwerp *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg font-poppins font-light text-base transition-all duration-200 focus:outline-none focus:ring-2 ${
                      errors.subject ? 'ring-2 ring-red-500 border-red-500' : 'focus:ring-[#C4A484]'
                    }`}
                    style={{ 
                      backgroundColor: 'var(--background)', 
                      color: 'var(--foreground)',
                      border: errors.subject ? '1px solid rgb(239, 68, 68)' : '1px solid var(--border)'
                    }}
                  >
                    <option value="">Selecteer een onderwerp</option>
                    <option value="algemeen">Algemene vraag</option>
                    <option value="gebedstijden">Gebedstijden</option>
                    <option value="onderwijs">Onderwijs & Lessen</option>
                    <option value="evenementen">Evenementen</option>
                    <option value="donaties">Donaties</option>
                    <option value="vrijwilligerswerk">Vrijwilligerswerk</option>
                    <option value="anders">Anders</option>
                  </select>
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600 font-poppins">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block font-poppins font-medium text-base mb-3" 
                         style={{ color: 'var(--foreground)' }}>
                    Bericht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg font-poppins font-light text-base transition-all duration-200 focus:outline-none focus:ring-2 resize-vertical ${
                      errors.message ? 'ring-2 ring-red-500 border-red-500' : 'focus:ring-[#C4A484]'
                    }`}
                    style={{ 
                      backgroundColor: 'var(--background)', 
                      color: 'var(--foreground)',
                      border: errors.message ? '1px solid rgb(239, 68, 68)' : '1px solid var(--border)'
                    }}
                    placeholder="Typ hier uw bericht..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 font-poppins">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full md:w-auto px-8 py-4 rounded-lg font-marcellus text-lg font-normal transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitting 
                      ? 'opacity-70 cursor-not-allowed' 
                      : 'hover:shadow-lg transform hover:-translate-y-1'
                  }`}
                  style={{ 
                    backgroundColor: '#C4A484', 
                    color: 'white',
                    border: 'none'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Bezig met verzenden...
                    </>
                  ) : (
                    'Bericht Versturen'
                  )}
                </button>
              </form>
            </div>
          </div>
          </div>
        </Container>
      </main>
      <Footer />
    </ClientPageWrapper>
  )
}
