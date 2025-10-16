import { ReactNode } from 'react'

interface LinkButtonProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function LinkButton({ 
  href, 
  children, 
  variant = 'primary', 
  size = 'md',
  className = "" 
}: LinkButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 md:px-8 py-3 md:py-4 text-sm md:text-base',
    lg: 'px-8 md:px-10 py-4 md:py-5 text-base md:text-lg'
  }

  const variantStyles = {
    primary: {
      backgroundColor: '#C4A484',
      color: 'white'
    },
    secondary: {
      backgroundColor: 'var(--card)',
      border: '1px solid var(--border)',
      color: 'var(--foreground)'
    }
  }

  return (
    <a 
      href={href}
      className={`${sizeClasses[size]} rounded-2xl font-poppins font-medium transition-all duration-300 hover:scale-[1.05] inline-block text-center ${className}`}
      style={variantStyles[variant]}
    >
      {children}
    </a>
  )
}
