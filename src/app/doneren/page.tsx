'use client'

import { useState } from 'react'
import { Header, Footer } from "@/components/sections"
import { PageHeader, InfoCard, Section, SectionHeader } from "@/components/ui"

// Icons
const HeartIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
)

const CreditCardIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
  </svg>
)

const BanknotesIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const BuildingIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m2.25-18v18m13.5-18v18m2.25-18v18M6.75 9h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.75m-.75 3h.75m-.75 3h.75m-3.75-16.5h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75" />
  </svg>
)

const UsersIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
)

const BookOpenIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0118 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
)

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
)


export default function DonerenPage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState('')
  const [donationType, setDonationType] = useState<'eenmalig' | 'maandelijks'>('eenmalig')
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null)

  const predefinedAmounts = [10, 25, 50, 100, 250, 500]

  const donationMethods = [
    {
      id: 'ideal',
      name: 'iDEAL',
      icon: <CreditCardIcon />,
      description: 'Veilig betalen via je eigen bank'
    },
    {
      id: 'bankoverschrijving',
      name: 'Bankoverschrijving',
      icon: <BanknotesIcon />,
      description: 'Direct overmaken naar onze rekening'
    },
    {
      id: 'contant',
      name: 'Contant',
      icon: <BuildingIcon />,
      description: 'Donatie in de moskee'
    }
  ]


  const bankDetails = {
    iban: "NL91 ABNA 0417 1643 00",
    bic: "ABNANL2A",
    name: "Stichting El Mouahidin",
    city: "Den Haag"
  }

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount)
    setCustomAmount('')
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value)
    setSelectedAmount(null)
  }

  const getCurrentAmount = () => {
    return selectedAmount || parseFloat(customAmount) || 0
  }

  return (
    <>
      <Header />
      <main>
        <PageHeader 
          title="Doneren"
          subtitle="Steun onze stichting en help ons bij het realiseren van onze missie. Elke bijdrage, groot of klein, maakt een verschil."
          compact
        />

        {/* Why Donate Section */}
        <section className="py-20" style={{ backgroundColor: 'var(--card)' }}>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-marcellus text-3xl md:text-4xl font-light mb-4" 
                style={{ color: 'var(--foreground)' }}>
              Waarom Doneren?
            </h2>
            <div className="w-16 h-0.5 mx-auto mb-8" 
                 style={{ backgroundColor: '#C4A484' }}></div>
            <p className="font-poppins text-lg font-light leading-relaxed mb-8" 
               style={{ color: 'var(--foreground)', opacity: 0.8 }}>
              Stichting El Mouahidin is volledig afhankelijk van donaties van onze gemeenschap. 
              Uw steun stelt ons in staat om onze religieuze, educatieve en sociale activiteiten 
              voort te zetten en uit te breiden.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="text-left">
                <h3 className="font-poppins text-xl font-medium mb-4" 
                    style={{ color: 'var(--foreground)' }}>
                  ANBI Status
                </h3>
                <p className="font-poppins text-base font-light leading-relaxed" 
                   style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  Als ANBI-instelling zijn uw donaties fiscaal aftrekbaar. 
                  Dit betekent dat u uw donatie kunt aftrekken van uw belastbaar inkomen.
                </p>
              </div>
              <div className="text-left">
                <h3 className="font-poppins text-xl font-medium mb-4" 
                    style={{ color: 'var(--foreground)' }}>
                  Transparantie
                </h3>
                <p className="font-poppins text-base font-light leading-relaxed" 
                   style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  We publiceren jaarlijks onze financiële verslagen zodat u precies kunt zien 
                  hoe uw donaties worden besteed.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Donation Form */}
        <section className="py-20" style={{ backgroundColor: 'var(--card)' }}>
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-marcellus text-3xl md:text-4xl font-light mb-4" 
                  style={{ color: 'var(--foreground)' }}>
                Doneer Nu
              </h2>
              <div className="w-16 h-0.5 mx-auto mb-8" 
                   style={{ backgroundColor: '#C4A484' }}></div>
              <p className="font-poppins text-lg font-light leading-relaxed" 
                 style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                Kies het bedrag en de manier waarop u wilt doneren
              </p>
            </div>

            <div className="p-8 rounded-3xl" 
                 style={{ 
                   backgroundColor: 'var(--background)',
                   border: '1px solid var(--border)'
                 }}>
              
              {/* Donation Type */}
              <div className="mb-8">
                <h3 className="font-poppins text-lg font-medium mb-4" 
                    style={{ color: 'var(--foreground)' }}>
                  Type donatie
                </h3>
                <div className="flex gap-4">
                  <button
                    onClick={() => setDonationType('eenmalig')}
                    className={`flex-1 py-3 px-6 rounded-xl font-poppins text-base font-medium transition-all duration-300 ${
                      donationType === 'eenmalig' ? 'scale-[1.02]' : ''
                    }`}
                    style={{ 
                      backgroundColor: donationType === 'eenmalig' ? '#C4A484' : 'var(--card)',
                      color: donationType === 'eenmalig' ? 'white' : 'var(--foreground)',
                      border: donationType === 'eenmalig' ? 'none' : '1px solid var(--border)'
                    }}
                  >
                    Eenmalig
                  </button>
                  <button
                    onClick={() => setDonationType('maandelijks')}
                    className={`flex-1 py-3 px-6 rounded-xl font-poppins text-base font-medium transition-all duration-300 ${
                      donationType === 'maandelijks' ? 'scale-[1.02]' : ''
                    }`}
                    style={{ 
                      backgroundColor: donationType === 'maandelijks' ? '#C4A484' : 'var(--card)',
                      color: donationType === 'maandelijks' ? 'white' : 'var(--foreground)',
                      border: donationType === 'maandelijks' ? 'none' : '1px solid var(--border)'
                    }}
                  >
                    Maandelijks
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-8">
                <h3 className="font-poppins text-lg font-medium mb-4" 
                    style={{ color: 'var(--foreground)' }}>
                  Bedrag
                </h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-4">
                  {predefinedAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => handleAmountSelect(amount)}
                      className={`py-3 px-4 rounded-xl font-poppins text-base font-medium transition-all duration-300 ${
                        selectedAmount === amount ? 'scale-[1.05]' : ''
                      }`}
                      style={{ 
                        backgroundColor: selectedAmount === amount ? '#C4A484' : 'var(--card)',
                        color: selectedAmount === amount ? 'white' : 'var(--foreground)',
                        border: selectedAmount === amount ? 'none' : '1px solid var(--border)'
                      }}
                    >
                      €{amount}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-poppins text-base" 
                        style={{ color: 'var(--foreground)' }}>
                    €
                  </span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    placeholder="Ander bedrag"
                    className="flex-1 px-4 py-3 rounded-xl font-poppins text-base transition-all duration-300 focus:outline-none focus:ring-2"
                    style={{ 
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border)',
                      color: 'var(--foreground)'
                    }}
                  />
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mb-8">
                <h3 className="font-poppins text-lg font-medium mb-4" 
                    style={{ color: 'var(--foreground)' }}>
                  Betaalmethode
                </h3>
                <div className="space-y-3">
                  {donationMethods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setSelectedMethod(method.id)}
                      className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                        selectedMethod === method.id ? 'scale-[1.02]' : ''
                      }`}
                      style={{ 
                        backgroundColor: selectedMethod === method.id ? '#C4A484' : 'var(--card)',
                        color: selectedMethod === method.id ? 'white' : 'var(--foreground)',
                        border: selectedMethod === method.id ? 'none' : '1px solid var(--border)'
                      }}
                    >
                      <div className="flex items-center gap-4">
                        {method.icon}
                        <div>
                          <h4 className="font-poppins text-base font-medium">{method.name}</h4>
                          <p className="font-poppins text-sm opacity-80">{method.description}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bank Details (if bank transfer selected) */}
              {selectedMethod === 'bankoverschrijving' && (
                <div className="mb-8 p-6 rounded-2xl" 
                     style={{ backgroundColor: 'var(--card)' }}>
                  <h4 className="font-poppins text-lg font-medium mb-4" 
                      style={{ color: 'var(--foreground)' }}>
                    Bankgegevens
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-poppins text-sm font-medium mb-1" 
                         style={{ color: 'var(--foreground)', opacity: 0.6 }}>
                        IBAN
                      </p>
                      <p className="font-poppins text-base font-light" 
                         style={{ color: 'var(--foreground)' }}>
                        {bankDetails.iban}
                      </p>
                    </div>
                    <div>
                      <p className="font-poppins text-sm font-medium mb-1" 
                         style={{ color: 'var(--foreground)', opacity: 0.6 }}>
                        BIC
                      </p>
                      <p className="font-poppins text-base font-light" 
                         style={{ color: 'var(--foreground)' }}>
                        {bankDetails.bic}
                      </p>
                    </div>
                    <div>
                      <p className="font-poppins text-sm font-medium mb-1" 
                         style={{ color: 'var(--foreground)', opacity: 0.6 }}>
                        Ten name van
                      </p>
                      <p className="font-poppins text-base font-light" 
                         style={{ color: 'var(--foreground)' }}>
                        {bankDetails.name}
                      </p>
                    </div>
                    <div>
                      <p className="font-poppins text-sm font-medium mb-1" 
                         style={{ color: 'var(--foreground)', opacity: 0.6 }}>
                        Plaats
                      </p>
                      <p className="font-poppins text-base font-light" 
                         style={{ color: 'var(--foreground)' }}>
                        {bankDetails.city}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Summary & Submit */}
              <div className="border-t pt-6" 
                   style={{ borderColor: 'var(--border)' }}>
                <div className="flex justify-between items-center mb-6">
                  <span className="font-poppins text-lg font-medium" 
                        style={{ color: 'var(--foreground)' }}>
                    Totaal {donationType === 'maandelijks' ? 'per maand' : ''}:
                  </span>
                  <span className="font-marcellus text-2xl font-light" 
                        style={{ color: '#C4A484' }}>
                    €{getCurrentAmount().toFixed(2)}
                  </span>
                </div>
                <button
                  disabled={getCurrentAmount() === 0 || !selectedMethod}
                  className="w-full py-4 px-6 rounded-2xl font-poppins text-base font-medium transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ 
                    backgroundColor: '#C4A484',
                    color: 'white'
                  }}
                >
                  {selectedMethod === 'bankoverschrijving' 
                    ? 'Bankgegevens Gekopieerd' 
                    : selectedMethod === 'contant'
                    ? 'Donatie Informatie Ontvangen'
                    : 'Doneer Nu'
                  }
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact for Questions */}
        <section className="py-20" style={{ backgroundColor: 'var(--background)' }}>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-marcellus text-3xl md:text-4xl font-light mb-4" 
                style={{ color: 'var(--foreground)' }}>
              Vragen over Doneren?
            </h2>
            <div className="w-16 h-0.5 mx-auto mb-8" 
                 style={{ backgroundColor: '#C4A484' }}></div>
            <p className="font-poppins text-lg font-light leading-relaxed mb-8" 
               style={{ color: 'var(--foreground)', opacity: 0.8 }}>
              Heeft u vragen over doneren, fiscale aftrek of onze projecten? 
              Neem gerust contact met ons op.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" 
                 className="px-8 py-4 rounded-2xl font-poppins text-base font-medium transition-all duration-300 hover:scale-[1.05] inline-block"
                 style={{ 
                   backgroundColor: '#C4A484',
                   color: 'white'
                 }}>
                Neem Contact Op
              </a>
              <a href="tel:070-395-24-64" 
                 className="px-8 py-4 rounded-2xl font-poppins text-base font-medium transition-all duration-300 hover:scale-[1.05] inline-block"
                 style={{ 
                   backgroundColor: 'var(--card)',
                   border: '1px solid var(--border)',
                   color: 'var(--foreground)'
                 }}>
                Bel Ons Direct
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
