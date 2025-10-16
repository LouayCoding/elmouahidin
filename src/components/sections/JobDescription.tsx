import { FeatureList } from "@/components/ui"

interface JobDescriptionProps {
  responsibilities: { text: string }[]
  requirements: { text: string }[]
}

export function JobDescription({ responsibilities, requirements }: JobDescriptionProps) {
  return (
    <div className="space-y-12">
      
      {/* Responsibilities */}
      <div>
        <h3 className="font-marcellus text-2xl md:text-3xl font-light mb-8 text-center" 
            style={{ color: 'var(--foreground)' }}>
          Taken & Verantwoordelijkheden
        </h3>
        <div className="max-w-4xl mx-auto">
          <FeatureList 
            features={responsibilities}
            variant="bullets"
          />
        </div>
      </div>

      {/* Requirements */}
      <div>
        <h3 className="font-marcellus text-2xl md:text-3xl font-light mb-8 text-center" 
            style={{ color: 'var(--foreground)' }}>
          Vereisten
        </h3>
        <div className="max-w-4xl mx-auto">
          <FeatureList 
            features={requirements}
            variant="checks"
          />
        </div>
      </div>
    </div>
  )
}
