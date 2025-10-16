import { ReactNode } from 'react'

interface InfoCardProps {
  icon?: ReactNode
  title: string
  description: string
  className?: string
  variant?: 'default' | 'centered' | 'horizontal' | 'minimal'
  onClick?: () => void
  bordered?: boolean
}

export function InfoCard({ 
  icon, 
  title, 
  description, 
  className = "", 
  variant = 'default',
  onClick,
  bordered = true
}: InfoCardProps) {
  const baseClasses = variant === 'minimal' 
    ? "p-4 md:p-6 transition-all duration-300"
    : "p-6 md:p-8 rounded-2xl md:rounded-3xl transition-all duration-300"
  
  const hoverClasses = onClick ? "hover:scale-[1.02] cursor-pointer" : ""
  
  const variantClasses = {
    default: "space-y-6",
    centered: "space-y-6 text-center",
    horizontal: "flex items-start gap-4",
    minimal: "space-y-4 text-center"
  }

  const cardStyle = variant === 'minimal' && !bordered
    ? {}
    : {
        backgroundColor: 'var(--card)',
        border: bordered ? '1px solid var(--border)' : 'none'
      }

  if (variant === 'horizontal') {
    return (
      <div 
        className={`${baseClasses} ${hoverClasses} ${variantClasses[variant]} ${className}`}
        style={cardStyle}
        onClick={onClick}
      >
        {icon && (
          <div className="flex-shrink-0 p-3 rounded-2xl" 
               style={{ backgroundColor: '#C4A484', color: 'white' }}>
            {icon}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-marcellus text-lg md:text-xl xl:text-2xl font-light mb-2" 
              style={{ color: 'var(--foreground)' }}>
            {title}
          </h3>
          <p className="font-poppins text-sm md:text-base font-light leading-relaxed" 
             style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            {description}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div 
      className={`${baseClasses} ${hoverClasses} ${variantClasses[variant]} ${className}`}
      style={cardStyle}
      onClick={onClick}
    >
      {icon && (
        <div className={`${variant === 'centered' ? 'w-12 h-12 md:w-16 md:h-16 mx-auto' : 'w-12 h-12'} rounded-full flex items-center justify-center flex-shrink-0`} 
             style={{ backgroundColor: '#C4A484', color: 'white' }}>
          {icon}
        </div>
      )}
      <div>
        <h3 className="font-marcellus text-lg md:text-xl xl:text-2xl font-light mb-2 md:mb-4" 
            style={{ color: 'var(--foreground)' }}>
          {title}
        </h3>
        <p className="font-poppins text-sm md:text-base font-light leading-relaxed" 
           style={{ color: 'var(--foreground)', opacity: 0.8 }}>
          {description}
        </p>
      </div>
    </div>
  )
}
