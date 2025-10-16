interface PageHeaderProps {
  title: string
  subtitle: string
  className?: string
  compact?: boolean
}

export function PageHeader({ title, subtitle, className = "", compact = false }: PageHeaderProps) {
  return (
    <section 
      className={`${compact ? 'pt-24 pb-12 md:pt-32 md:pb-16' : 'pt-24 pb-16 md:pt-32 md:pb-20'} ${className}`} 
      style={{ backgroundColor: 'var(--background)' }}
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className={`font-marcellus ${compact ? 'text-2xl md:text-3xl lg:text-4xl' : 'text-3xl md:text-4xl lg:text-5xl'} font-light mb-4 md:mb-6`}
            style={{ color: 'var(--foreground)' }}>
          {title}
        </h1>
        <div className="w-12 md:w-16 h-0.5 mx-auto mb-4 md:mb-6" 
             style={{ backgroundColor: '#C4A484' }}></div>
        <p className={`font-poppins ${compact ? 'text-sm md:text-base' : 'text-base md:text-lg'} font-light leading-relaxed max-w-2xl mx-auto`}
           style={{ color: 'var(--foreground)', opacity: 0.7 }}>
          {subtitle}
        </p>
      </div>
    </section>
  )
}