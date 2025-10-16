import { FeatureList } from "@/components/ui"

interface ApplicationProcessProps {
  applicationRequirements: { text: string }[]
}

export function ApplicationProcess({ applicationRequirements }: ApplicationProcessProps) {
  return (
    <div className="space-y-12">
      
      {/* Required Documents */}
      <div>
        <h3 className="font-marcellus text-2xl md:text-3xl font-light mb-8 text-center" 
            style={{ color: 'var(--foreground)' }}>
          Vereiste Documenten
        </h3>
        <div className="max-w-4xl mx-auto">
          <FeatureList 
            features={applicationRequirements}
            variant="numbers"
          />
        </div>
      </div>
      
      {/* Contact Information */}
      <div className="max-w-2xl mx-auto">
        <div className="p-8 rounded-xl text-center" 
             style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
          
          <p className="font-poppins text-base font-light leading-relaxed mb-8" 
             style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            Na een eerste selectie worden kandidaten uitgenodigd voor een gesprek met het bestuur en de selectiecommissie.
          </p>
          
          <div className="space-y-6">
            <div>
              <p className="font-poppins text-sm font-medium mb-2" 
                 style={{ color: 'var(--foreground)', opacity: 0.6 }}>
                Sollicitaties sturen naar:
              </p>
              <p className="font-poppins text-lg font-light" 
                 style={{ color: 'var(--foreground)' }}>
                Info@elmouahidin.nl
              </p>
            </div>
            <div>
              <p className="font-poppins text-sm font-medium mb-2" 
                 style={{ color: 'var(--foreground)', opacity: 0.6 }}>
                T.a.v.:
              </p>
              <p className="font-poppins text-base font-light" 
                 style={{ color: 'var(--foreground)' }}>
                Het bestuur van Stichting el Mouahidin
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
