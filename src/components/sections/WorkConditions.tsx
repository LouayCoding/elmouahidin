import { InfoCard, FeatureList } from "@/components/ui"

// Icons
const DocumentTextIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5-3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
)

const CurrencyEuroIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const UserIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
)

const ClockIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

interface WorkConditionsProps {
  preferences?: { text: string }[]
}

export function WorkConditions({ preferences = [] }: WorkConditionsProps) {
  const workConditions = [
    {
      icon: <DocumentTextIcon />,
      title: "Dienstverband",
      description: "1 jaar contract, met optie tot verlening"
    },
    {
      icon: <CurrencyEuroIcon />,
      title: "Salaris",
      description: "Marktconform, afhankelijk van opleiding en ervaring"
    },
    {
      icon: <UserIcon />,
      title: "Standplaats",
      description: "Den Haag in de moskee"
    },
    {
      icon: <ClockIcon />,
      title: "Werktijden",
      description: "Gemiddeld 36 uur per week, inclusief gebedstijden, avonden en weekenden"
    }
  ]

  return (
    <div className="space-y-12">
      {/* Primary Work Conditions */}
      <div>
        <h3 className="font-marcellus text-2xl md:text-3xl font-light mb-8 text-center" 
            style={{ color: 'var(--foreground)' }}>
          Arbeidsvoorwaarden
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {workConditions.map((condition, index) => (
            <div key={index} className="p-6 rounded-xl text-center" 
                 style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
              <div className="flex justify-center mb-4" style={{ color: '#C4A484' }}>
                {condition.icon}
              </div>
              <h4 className="font-marcellus text-lg font-medium mb-2" 
                  style={{ color: 'var(--foreground)' }}>
                {condition.title}
              </h4>
              <p className="font-poppins text-sm leading-relaxed" 
                 style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                {condition.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Qualifications */}
      {preferences.length > 0 && (
        <div className="max-w-4xl mx-auto">
          <h3 className="font-marcellus text-2xl md:text-3xl font-light mb-8 text-center" 
              style={{ color: 'var(--foreground)' }}>
            Aanvullende Kwalificaties
          </h3>
          <FeatureList 
            features={preferences}
            variant="checks"
          />
        </div>
      )}
    </div>
  )
}
