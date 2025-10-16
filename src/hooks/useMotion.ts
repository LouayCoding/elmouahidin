'use client'

import { Variants } from 'framer-motion'

// Check for reduced motion preference
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Base animation variants
export const fadeInVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

export const slideUpVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

export const slideInLeftVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -50 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

export const slideInRightVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: 50 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

export const scaleVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1]
    }
  }
}

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export const staggerItemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

// Page transition variants
export const pageVariants: Variants = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  in: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
  out: { 
    opacity: 0, 
    y: -20,
    transition: {
      duration: 0.4,
      ease: [0.55, 0.085, 0.68, 0.53]
    }
  }
}

// Scroll-triggered animation variants
export const scrollVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

// Hover animation variants
export const hoverVariants: Variants = {
  rest: { 
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
  hover: { 
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

// Card hover variants
export const cardHoverVariants: Variants = {
  rest: { 
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
  hover: { 
    scale: 1.02,
    y: -5,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

// Get viewport configuration for scroll animations
export const getViewportConfig = (once: boolean = false) => ({
  once,
  margin: "-50px 0px -50px 0px",
  amount: 0.1
})

// Animation presets for common use cases
export const animationPresets = {
  fadeIn: {
    variants: fadeInVariants,
    initial: "hidden",
    whileInView: "visible",
    viewport: getViewportConfig()
  },
  slideUp: {
    variants: slideUpVariants,
    initial: "hidden",
    whileInView: "visible",
    viewport: getViewportConfig()
  },
  slideInLeft: {
    variants: slideInLeftVariants,
    initial: "hidden",
    whileInView: "visible",
    viewport: getViewportConfig()
  },
  slideInRight: {
    variants: slideInRightVariants,
    initial: "hidden",
    whileInView: "visible",
    viewport: getViewportConfig()
  },
  scale: {
    variants: scaleVariants,
    initial: "hidden",
    whileInView: "visible",
    viewport: getViewportConfig()
  },
  scroll: {
    variants: scrollVariants,
    initial: "hidden",
    whileInView: "visible",
    viewport: getViewportConfig()
  }
}

// Stagger container preset
export const staggerContainer = {
  variants: staggerContainerVariants,
  initial: "hidden",
  whileInView: "visible",
  viewport: getViewportConfig()
}

// Stagger item preset  
export const staggerItem = staggerItemVariants
