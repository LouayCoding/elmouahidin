interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
  centered?: boolean
}

export function SectionHeader({ 
  title, 
  subtitle, 
  className = "", 
  centered = true 
}: SectionHeaderProps) {
  const alignmentClass = centered ? 'text-center' : 'text-left'

  return (
    <div className={`mb-12 md:mb-16 ${alignmentClass} ${className}`}>
      <h2 className="font-marcellus text-2xl md:text-3xl xl:text-4xl font-light mb-4" 
          style={{ color: 'var(--foreground)' }}>
        {title}
      </h2>
      <div className={`w-12 md:w-16 h-0.5 mb-6 md:mb-8 ${centered ? 'mx-auto' : ''}`} 
           style={{ backgroundColor: '#C4A484' }}></div>
      {subtitle && (
        <p className="font-poppins text-base md:text-lg font-light leading-relaxed max-w-3xl mx-auto" 
           style={{ color: 'var(--foreground)', opacity: 0.7 }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
