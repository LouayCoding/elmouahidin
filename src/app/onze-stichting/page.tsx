'use client'

import { Header, Footer } from "@/components/sections"
import { PageHeader, InfoCard, Section, SectionHeader } from "@/components/ui"

// Icons
const BuildingIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m2.25-18v18m13.5-18v18m2.25-18v18M6.75 9h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.75m-.75 3h.75m-.75 3h.75m-3.75-16.5h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75" />
  </svg>
)

const HeartIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
)

export default function OnzeStichtingPage() {
  const boardMembers = [
    { name: "Mostafa Belhaj", position: "Voorzitter" },
    { name: "Asbai Touzani", position: "Plaatsvervangend voorzitter" },
    { name: "Adil Taheri", position: "Secretaris" },
    { name: "Rabie Zarrou", position: "Penningmeester" },
    { name: "Chaib El Ousrouti", position: "Vice-penningmeester" },
    { name: "Ahmed Itayibi", position: "Algemeen bestuurslid" }
  ]

  return (
    <>
      <Header />
      <main>
        <PageHeader 
          title="Onze Stichting"
          subtitle="Een gemeenschap van geloof, kennis en verbinding"
          compact
        />

        {/* Mission & Vision */}
        <Section background="transparent" maxWidth="lg" padding="md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 max-w-6xl mx-auto">
            <InfoCard
              icon={<HeartIcon />}
              title="Missie"
              description="Een plek creëren waar moslims samen kunnen bidden, leren en groeien in hun geloof volgens de Qoraan en Soennah."
              variant="centered"
              bordered={false}
            />
            <InfoCard
              icon={<BuildingIcon />}
              title="Visie"
              description="Een open gemeenschap die kennis verspreidt, saamhorigheid bevordert en respect stimuleert tussen alle mensen."
              variant="centered"
              bordered={false}
            />
          </div>
        </Section>

        {/* Key Info */}
        <Section background="card" maxWidth="lg">
          <SectionHeader 
            title="Stichting El Mouahidin"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12 text-center">
            <div>
              <p className="font-poppins text-xs md:text-sm font-medium mb-2" 
                 style={{ color: 'var(--foreground)', opacity: 0.6 }}>
                Locatie
              </p>
              <p className="font-poppins text-base md:text-lg font-light" 
                 style={{ color: 'var(--foreground)' }}>
                Den Haag
              </p>
            </div>
            <div>
              <p className="font-poppins text-xs md:text-sm font-medium mb-2" 
                 style={{ color: 'var(--foreground)', opacity: 0.6 }}>
                Status
              </p>
              <p className="font-poppins text-base md:text-lg font-light" 
                 style={{ color: 'var(--foreground)' }}>
                ANBI Erkend
              </p>
            </div>
            <div>
              <p className="font-poppins text-xs md:text-sm font-medium mb-2" 
                 style={{ color: 'var(--foreground)', opacity: 0.6 }}>
                Gemeenschap
              </p>
              <p className="font-poppins text-base md:text-lg font-light" 
                 style={{ color: 'var(--foreground)' }}>
                20+ Vrijwilligers
              </p>
            </div>
          </div>

          <div className="space-y-2 text-center">
            <p className="font-poppins text-sm md:text-base font-light" 
               style={{ color: 'var(--foreground)' }}>
              Deimanstraat 7, 2522 BB Den Haag
            </p>
            <p className="font-poppins text-sm md:text-base font-light" 
               style={{ color: 'var(--foreground)', opacity: 0.7 }}>
              (070) 395 24 64 • info@elmouahidin.nl
            </p>
          </div>
        </Section>

        {/* Board Members */}
        <Section background="default" maxWidth="md">
          <SectionHeader title="Bestuur" />
          
          <div className="space-y-4 md:space-y-6">
            {boardMembers.map((member, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b gap-2" 
                   style={{ borderColor: 'var(--border)' }}>
                <span className="font-poppins text-sm md:text-base font-light" 
                      style={{ color: 'var(--foreground)' }}>
                  {member.name}
                </span>
                <span className="font-poppins text-xs md:text-sm font-light" 
                      style={{ color: 'var(--foreground)', opacity: 0.6 }}>
                  {member.position}
                </span>
              </div>
            ))}
          </div>
        </Section>

        {/* Financial Reports */}
        <Section background="default" maxWidth="md">
          <SectionHeader 
            title="Financiële Jaarverslagen"
            subtitle="Transparantie en verantwoording over onze financiën"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Jaarrekening 2024 - Nieuwste */}
            <a 
              href="/documents/Jaarrekening 2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] group"
              style={{ 
                backgroundColor: 'var(--card)',
                border: '2px solid #C4A484'
              }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl" style={{ backgroundColor: '#C4A484', color: 'white' }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-marcellus text-lg font-light" 
                        style={{ color: 'var(--foreground)' }}>
                      Jaarrekening 2024
                    </h3>
                    <span className="px-2 py-1 text-xs font-medium rounded-full" 
                          style={{ backgroundColor: '#C4A484', color: 'white' }}>
                      NIEUW
                    </span>
                  </div>
                  <p className="font-poppins text-sm font-light" 
                     style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                    Financiële jaarrekening 2024
                  </p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#C4A484' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Jaarverslag 2023 */}
            <a 
              href="/documents/jaarverslag-2023-stichting-el-mouahidin.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] group"
              style={{ 
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)'
              }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl" style={{ backgroundColor: '#C4A484', color: 'white' }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-marcellus text-lg font-light mb-1" 
                      style={{ color: 'var(--foreground)' }}>
                    Jaarverslag 2023
                  </h3>
                  <p className="font-poppins text-sm font-light" 
                     style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                    Financieel overzicht 2023
                  </p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#C4A484' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </a>
          </div>

          <div className="mt-8 p-4 rounded-xl" style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <p className="font-poppins text-sm font-light text-center" 
               style={{ color: 'var(--foreground)', opacity: 0.8 }}>
              Als ANBI-erkende stichting publiceren wij jaarlijks onze financiële verantwoording voor transparantie naar onze donateurs en de gemeenschap.
            </p>
          </div>
        </Section>

        {/* Simple CTA */}
        <Section background="card" maxWidth="md">
          <SectionHeader 
            title="Sluit Je Aan"
            subtitle="Ontdek onze activiteiten en word onderdeel van onze gemeenschap"
          />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/dawah" 
               className="px-6 md:px-8 py-3 md:py-4 rounded-2xl font-poppins text-sm md:text-base font-medium transition-all duration-300 hover:scale-[1.05] inline-block text-center"
               style={{ 
                 backgroundColor: '#C4A484',
                 color: 'white'
               }}>
              Bekijk Activiteiten
            </a>
            <a href="/contact" 
               className="px-6 md:px-8 py-3 md:py-4 rounded-2xl font-poppins text-sm md:text-base font-medium transition-all duration-300 hover:scale-[1.05] inline-block text-center"
               style={{ 
                 backgroundColor: 'var(--background)',
                 border: '1px solid var(--border)',
                 color: 'var(--foreground)'
               }}>
              Neem Contact Op
            </a>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
