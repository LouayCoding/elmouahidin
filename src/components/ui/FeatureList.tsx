interface Feature {
  text: string
  icon?: 'bullet' | 'check' | 'number'
  index?: number
}

interface FeatureListProps {
  features: Feature[]
  className?: string
  variant?: 'bullets' | 'checks' | 'numbers'
}

const CheckIcon = () => (
  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
)

export function FeatureList({ features, className = "", variant = 'bullets' }: FeatureListProps) {
  return (
    <div className={`space-y-3 md:space-y-4 ${className}`}>
      {features.map((feature, index) => (
        <div key={index} className="flex items-start gap-3">
          {variant === 'bullets' && (
            <div className="w-1.5 h-1.5 rounded-full mt-2 md:mt-2.5 flex-shrink-0" 
                 style={{ backgroundColor: '#C4A484' }}></div>
          )}
          {variant === 'checks' && (
            <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0" 
                 style={{ backgroundColor: '#C4A484', color: 'white' }}>
              <CheckIcon />
            </div>
          )}
          {variant === 'numbers' && (
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" 
                 style={{ backgroundColor: '#C4A484', color: 'white' }}>
              <span className="font-poppins text-xs md:text-sm font-medium">
                {feature.index || index + 1}
              </span>
            </div>
          )}
          <span className="font-poppins text-sm md:text-base font-light leading-relaxed flex-1" 
                style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            {feature.text}
          </span>
        </div>
      ))}
    </div>
  )
}
