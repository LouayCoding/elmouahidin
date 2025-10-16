import { Header, Footer, WorkConditions, JobDescription, ApplicationProcess } from "@/components/sections"
import { PageHeader, InfoCard, Section, SectionHeader, Tabs, LinkButton } from "@/components/ui"
import { generateMetadata as genMeta, generateStructuredData } from "@/lib/metadata"
import { StructuredData } from "@/components/StructuredData"

export const metadata = genMeta('vacatures')

// Icons
const UserIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
)

const BookOpenIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0118 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
)

const AcademicCapIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
  </svg>
)

const ClockIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const CurrencyEuroIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const DocumentTextIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5-3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
)

export default function VacaturesPage() {
  const structuredData = generateStructuredData('vacatures')
  const responsibilities = [
    { text: "Leiding geven aan de vijf dagelijkse gebeden, het vrijdaggebed (khoeṭbah) en religieuze diensten tijdens Ramadan en andere hoogtijdagen" },
    { text: "Onderwijzen van islamitische wetenschappen, waaronder Qoraan, Tajwied, Fiqh, Oesoel al-Fiqh, ʿAqiedah en Arabisch" },
    { text: "Begeleiden van studenten en opzetten van educatieve programma's voor jongeren en volwassenen" },
    { text: "Beantwoorden van fiqh-vraagstukken en het bieden van geestelijke begeleiding aan de gemeenschap" },
    { text: "Vertegenwoordigen van de moskee in religieuze en maatschappelijke contexten" },
    { text: "Samenwerken met het bestuur en vrijwilligers voor de ontwikkeling van religieuze en sociale activiteiten" }
  ]

  const requirements = [
    { text: "Hafidh van de gehele Qoraan en in het bezit van een ijāzah in de recitatie volgens Warsh ʿan Nāfiʿ" },
    { text: "Afgeronde academische opleiding in de islamitische wetenschappen" },
    { text: "Grondige kennis van de Mālikiy fiqh, Oesoel al-Fiqh, Hadiethwetenschappen en Arabische grammatica" },
    { text: "Beheersing van de klassieke islamitische bronnen en poëzie, met aantoonbare memorisatie en ijāzāt behaald bij erkende geleerden" },
    { text: "Bekwaam in het doceren van zowel basisonderwijs als gevorderde islamitische wetenschappen" },
    { text: "Taalvaardigheid in: klassiek Arabisch, Marokkaans Arabisch (Darija), Marokkaans Amazigh (Tamazight), en Nederlands (basis of bereidheid dit te leren)" }
  ]

  const preferences = [
    { text: "Ervaring als imam of docent in een grote moskee of islamitisch instituut" },
    { text: "Vermogen om fiqh-vraagstukken en maatschappelijke kwesties deskundig te behandelen" },
    { text: "Representatief, integer en in staat om leiding te geven aan een grote gemeenschap" }
  ]

  const applicationRequirements = [
    { text: "Een motivatiebrief" },
    { text: "Curriculum Vitae (CV)" },
    { text: "Kopieën van diploma's en certificaten (waaronder ijāzah in Warsh)" },
    { text: "Referenties van eerdere functies als imam of docent" }
  ]

  return (
    <>
      {structuredData && <StructuredData data={structuredData} />}
      <Header />
      <main>
        <PageHeader 
          title="Vacature: Imam"
          subtitle="Geestelijk bedienaar voor een van de grootste moskeeën in Den Haag"
          compact
        />

        {/* Publication Date */}
        <Section background="transparent" maxWidth="xl" padding="sm">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-poppins text-sm font-medium" 
               style={{ color: 'var(--foreground)', opacity: 0.6 }}>
              Gepubliceerd op 20 mei 2025
            </p>
          </div>
        </Section>

        {/* Job Overview */}
        <Section background="transparent" maxWidth="xl" padding="md">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <p className="font-poppins text-lg md:text-xl font-light leading-relaxed" 
               style={{ color: 'var(--foreground)', opacity: 0.8 }}>
              Stichting el Mouahidin is één van de grootste moskeeën in Den Haag met meer dan 750 regelmatige bezoekers. 
              De moskee vervult een centrale rol in het religieuze, educatieve en maatschappelijke leven van de gemeenschap. 
              Wij zijn op zoek naar een hooggekwalificeerde imam (shaykh) die niet alleen leiding geeft aan de dagelijkse gebeden, 
              maar ook fungeert als geestelijk leider, docent in islamitische wetenschappen en raadgever voor de gemeenschap.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
            <InfoCard
              icon={<UserIcon />}
              title="750+ Bezoekers"
              description="Gemeenschap"
              variant="minimal"
              bordered={false}
            />
            <InfoCard
              icon={<ClockIcon />}
              title="36 uur/week"
              description="Werktijd"
              variant="minimal"
              bordered={false}
            />
            <InfoCard
              icon={<CurrencyEuroIcon />}
              title="Marktconform"
              description="Salaris"
              variant="minimal"
              bordered={false}
            />
            <InfoCard
              icon={<DocumentTextIcon />}
              title="1 jaar"
              description="Contract"
              variant="minimal"
              bordered={false}
            />
          </div>
        </Section>

        {/* Tabbed Content */}
        <Section background="default" maxWidth="xl">
          <Tabs
            defaultTab="functie"
            tabs={[
              {
                id: "functie",
                label: "Functieomschrijving",
                content: (
                  <JobDescription 
                    responsibilities={responsibilities}
                    requirements={requirements}
                  />
                )
              },
              {
                id: "voorwaarden",
                label: "Arbeidsvoorwaarden",
                content: (
                  <WorkConditions 
                    preferences={preferences}
                  />
                )
              },
              {
                id: "solliciteren",
                label: "Solliciteren",
                content: (
                  <ApplicationProcess 
                    applicationRequirements={applicationRequirements}
                  />
                )
              }
            ]}
          />
        </Section>

        {/* Call to Action */}
        <Section background="default" maxWidth="md">
          <SectionHeader 
            title="Interesse?"
            subtitle="Neem contact op voor meer informatie of om uw sollicitatie in te dienen"
          />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LinkButton 
              href="mailto:info@elmouahidin.nl?subject=Sollicitatie Imam&body=Geachte heer/mevrouw,%0D%0A%0D%0AIk ben geïnteresseerd in de vacature voor Imam bij Stichting el Mouahidin."
              variant="primary"
            >
              Solliciteer Nu
            </LinkButton>
            <LinkButton 
              href="/contact"
              variant="secondary"
            >
              Meer Informatie
            </LinkButton>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
