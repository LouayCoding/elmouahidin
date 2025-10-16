"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { usePrayerTimes } from "@/contexts/PrayerTimesContext"

export function Header() {
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMenuClosing, setIsMenuClosing] = useState(false)
  const { prayerData, nextPrayerIndex } = usePrayerTimes()

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])


  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    
    if (newTheme) {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
      localStorage.setItem('theme', 'light')
    }
  }

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Gebedstijden', href: '/gebedstijden' },
    { name: 'Da\'wah', href: '/dawah' },
    { name: 'Onderwijs', href: '/onderwijs' },
    { name: 'Shabapp', href: '/shabapp' },
    { name: 'Onze Stichting', href: '/onze-stichting' },
    { name: 'Vacatures', href: '/vacatures' },
    { name: 'Doneren', href: '/doneren' },
    { name: 'Contact', href: '/contact' },
  ]

  const closeMenu = () => {
    setIsMenuClosing(true)
    setTimeout(() => {
      setIsMenuOpen(false)
      setIsMenuClosing(false)
    }, 300) // Match the fade-out animation duration
  }

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Handle home link - navigate to root
    if (href === '#home') {
      e.preventDefault()
      window.location.href = '/'
      closeMenu()
      return
    }

    // If it's an external link (starts with /), let it navigate normally
    if (href.startsWith('/')) {
      closeMenu()
      return
    }

    // Handle anchor links
    e.preventDefault()
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      const headerHeight = 80 // Approximate header height
      const elementPosition = targetElement.offsetTop - headerHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
      closeMenu()
    }
  }

  const getNextPrayerInfo = () => {
    if (!prayerData) return null
    
    const prayerNames = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha']
    const prayerTimes = [prayerData.fajr, prayerData.dhuhr, prayerData.asr, prayerData.maghrib, prayerData.isha]
    
    return {
      name: prayerNames[nextPrayerIndex],
      time: prayerTimes[nextPrayerIndex]
    }
  }

  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" 
            style={{ 
              backgroundColor: 'var(--nav)', 
              backdropFilter: 'blur(10px)'
            }}>
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h2 className="font-marcellus text-xl md:text-2xl font-normal" 
                style={{ color: 'var(--foreground)' }}>
              <span style={{ color: '#C4A484' }}>El Mouahidin</span>
            </h2>
          </div>


          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-colors"
              style={{ 
                backgroundColor: 'var(--nav)',
                border: '1px solid var(--border)'
              }}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#C4A484' }}>
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#C4A484' }}>
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* Hamburger Menu Button - Desktop & Mobile */}
            <button
              onClick={() => isMenuOpen ? closeMenu() : setIsMenuOpen(true)}
              className="p-2 rounded-lg transition-colors"
              style={{ 
                backgroundColor: 'var(--nav)',
                border: '1px solid var(--border)'
              }}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--foreground)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--foreground)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

      </Container>
    </header>

    {/* Full Screen Modal Menu */}
    {isMenuOpen && (
      <div className={`fixed inset-0 z-50 flex items-center justify-center ${isMenuClosing ? 'animate-fade-out' : 'animate-fade-in'}`}
           style={{ backgroundColor: 'var(--background)' }}>
        {/* Close button */}
        <button
          onClick={closeMenu}
          className="absolute top-8 right-8 p-2 transition-colors duration-200 rounded-lg animate-slide-down"
          style={{ 
            backgroundColor: '#C4A484',
            color: 'white'
          }}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center px-8">
          <div className="space-y-4 md:space-y-6">
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`block font-marcellus text-lg md:text-2xl font-normal transition-colors duration-200 py-1 ${isMenuClosing ? 'animate-slide-down-out' : 'animate-slide-up'}`}
                style={{ 
                  animationDelay: isMenuClosing ? `${(menuItems.length - index - 1) * 0.05}s` : `${index * 0.1}s`,
                  color: 'var(--foreground)'
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#C4A484'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--foreground)'}
                onClick={(e) => handleSmoothScroll(e, item.href)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    )}
  </>
  )
}
