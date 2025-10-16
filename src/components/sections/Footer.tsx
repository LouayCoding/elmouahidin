'use client'

import { Container } from '@/components/ui'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Gebedstijden', href: '#gebedstijden' },
    { name: 'Onze Activiteiten', href: '#activiteiten' },
    { name: 'Doneren', href: '#doneren' }
  ]

  const services = [
    { name: 'Da\'wah', href: '#dawah' },
    { name: 'Onderwijs', href: '#onderwijs' },
    { name: 'Shabapp', href: '#shabapp' }
  ]

  const openingHours = [
    { day: "Maandag - Donderdag", time: "09:00 - 22:00" },
    { day: "Vrijdag", time: "09:00 - 23:00" },
    { day: "Zaterdag", time: "09:00 - 22:00" },
    { day: "Zondag", time: "09:00 - 22:00" }
  ]

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      const headerHeight = 80
      const elementPosition = targetElement.offsetTop - headerHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className="py-16" style={{ backgroundColor: 'var(--background)', borderTop: '1px solid var(--border)' }}>
      <Container>
        <div className="w-full max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
            {/* About Section */}
            <div className="lg:col-span-2">
              <h3 className="font-marcellus text-2xl font-normal mb-4" 
                  style={{ color: 'var(--foreground)' }}>
                <span style={{ color: '#C4A484' }}>El Mouahidin</span>
              </h3>
              <p className="font-poppins text-base mb-6 leading-relaxed" 
                 style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Islamitische gemeenschap in Den Haag voor kennis, begrip en ondersteuning van moslims.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} style={{ color: '#C4A484' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-poppins text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                    Deimanstraat 7, 2521 XC Den Haag
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} style={{ color: '#C4A484' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-poppins text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                    info@elmouahidin.nl
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} style={{ color: '#C4A484' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-poppins text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                    +31 (0)70 123 4567
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-marcellus text-lg font-normal mb-4" 
                  style={{ color: 'var(--foreground)' }}>
                Snelle Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="font-poppins text-sm transition-colors hover:opacity-80"
                      style={{ color: 'var(--foreground)', opacity: 0.7 }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-marcellus text-lg font-normal mb-4" 
                  style={{ color: 'var(--foreground)' }}>
                Diensten
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href={service.href}
                      onClick={(e) => handleSmoothScroll(e, service.href)}
                      className="font-poppins text-sm transition-colors hover:opacity-80"
                      style={{ color: 'var(--foreground)', opacity: 0.7 }}
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 className="font-marcellus text-lg font-normal mb-4" 
                  style={{ color: 'var(--foreground)' }}>
                Openingstijden
              </h4>
              <div className="space-y-2">
                {openingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-poppins text-sm" 
                          style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                      {schedule.day}
                    </span>
                    <span className="font-poppins text-sm" 
                          style={{ color: '#C4A484' }}>
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Social Media & Apps */}
          <div className="border-t pt-8 mb-8" style={{ borderColor: 'var(--border)' }}>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              {/* Social Media */}
              <div>
                <h4 className="font-marcellus text-lg font-normal mb-4" 
                    style={{ color: 'var(--foreground)' }}>
                  Volg Ons
                </h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-md"
                    style={{ backgroundColor: 'rgba(196, 164, 132, 0.1)' }}
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#C4A484' }}>
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-md"
                    style={{ backgroundColor: 'rgba(196, 164, 132, 0.1)' }}
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#C4A484' }}>
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.73-3.016-1.804C4.851 14.539 4.55 13.543 4.55 12.5s.301-2.039.883-2.684c.567-1.074 1.719-1.804 3.016-1.804s2.448.73 3.016 1.804c.582.645.883 1.641.883 2.684s-.301 2.039-.883 2.684c-.568 1.074-1.719 1.804-3.016 1.804zm7.101 0c-1.297 0-2.448-.73-3.016-1.804-.582-.645-.883-1.641-.883-2.684s.301-2.039.883-2.684c.568-1.074 1.719-1.804 3.016-1.804s2.448.73 3.016 1.804c.582.645.883 1.641.883 2.684s-.301 2.039-.883 2.684c-.568 1.074-1.719 1.804-3.016 1.804z"/>
                    </svg>
                  </a>
                  
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-md"
                    style={{ backgroundColor: 'rgba(196, 164, 132, 0.1)' }}
                    aria-label="YouTube"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#C4A484' }}>
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* App Downloads */}
              <div>
                <h4 className="font-marcellus text-lg font-normal mb-4" 
                    style={{ color: 'var(--foreground)' }}>
                  Download Shabapp
                </h4>
                <div className="flex space-x-3">
                  <a 
                    href="https://apps.apple.com/nl/app/shabapp/id1465640749"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-poppins text-xs font-medium transition-all duration-300 hover:shadow-md"
                    style={{
                      backgroundColor: 'rgba(196, 164, 132, 0.1)',
                      color: '#C4A484',
                      textDecoration: 'none',
                      border: '1px solid rgba(196, 164, 132, 0.3)'
                    }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <span>iOS</span>
                  </a>
                  
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.nl.shabapp.mobile&hl=nl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-poppins text-xs font-medium transition-all duration-300 hover:shadow-md"
                    style={{
                      backgroundColor: 'rgba(196, 164, 132, 0.1)',
                      color: '#C4A484',
                      textDecoration: 'none',
                      border: '1px solid rgba(196, 164, 132, 0.3)'
                    }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <span>Android</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t pt-6" style={{ borderColor: 'var(--border)' }}>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="font-poppins text-sm" 
                 style={{ color: 'var(--foreground)', opacity: 0.6 }}>
                © {currentYear} Stichting El Mouahidin. Alle rechten voorbehouden.
              </p>
              
              <div className="flex space-x-6">
                <a 
                  href="#" 
                  className="font-poppins text-sm transition-colors hover:opacity-80"
                  style={{ color: 'var(--foreground)', opacity: 0.6 }}
                >
                  Privacy
                </a>
                <a 
                  href="#" 
                  className="font-poppins text-sm transition-colors hover:opacity-80"
                  style={{ color: 'var(--foreground)', opacity: 0.6 }}
                >
                  Voorwaarden
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}