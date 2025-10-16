import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  background?: 'default' | 'card' | 'transparent'
  padding?: 'sm' | 'md' | 'lg'
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  fullWidth?: boolean
}

export function Section({ 
  children, 
  className = "", 
  background = 'default',
  padding = 'lg',
  maxWidth = 'lg',
  fullWidth = false
}: SectionProps) {
  const backgroundStyles = {
    default: { backgroundColor: 'var(--background)' },
    card: { backgroundColor: 'var(--card)' },
    transparent: {}
  }

  const paddingClasses = {
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-20'
  }

  const maxWidthClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl', 
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-none'
  }

  const containerClasses = fullWidth 
    ? 'px-4 md:px-6 lg:px-8' 
    : `${maxWidthClasses[maxWidth]} mx-auto px-4 md:px-6 lg:px-8`

  return (
    <section 
      className={`${paddingClasses[padding]} ${className}`}
      style={backgroundStyles[background]}
    >
      <div className={containerClasses}>
        {children}
      </div>
    </section>
  )
}
