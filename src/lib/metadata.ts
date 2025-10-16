import { Metadata } from 'next'

export interface PageMetadata {
  title: string
  description: string
  keywords?: string[]
  openGraph?: {
    title?: string
    description?: string
    images?: string[]
  }
  structuredData?: object
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://elmouahidin.nl'
const siteName = 'Stichting El Mouahidin'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`
  },
  description: 'Islamitische stichting in Den Haag - Da\'wah, Onderwijs, Gebedsdiensten en Gemeenschapsactiviteiten volgens de Qoraan en Soennah',
  keywords: ['islam', 'moskee', 'den haag', 'dawah', 'onderwijs', 'gebed', 'stichting', 'moslim', 'gemeenschap'],
  authors: [{ name: 'Stichting El Mouahidin' }],
  creator: 'Stichting El Mouahidin',
  publisher: 'Stichting El Mouahidin',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: baseUrl,
    siteName,
    title: siteName,
    description: 'Islamitische stichting in Den Haag - Da\'wah, Onderwijs, Gebedsdiensten en Gemeenschapsactiviteiten',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Stichting El Mouahidin - Islamitische stichting in Den Haag',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: 'Islamitische stichting in Den Haag - Da\'wah, Onderwijs en Gemeenschapsactiviteiten',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      'nl-NL': baseUrl,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
}

export const pageMetadata = {
  home: {
    title: 'Home',
    description: 'Welkom bij Stichting El Mouahidin - Een islamitische gemeenschap in Den Haag gewijd aan gebed, onderwijs en da\'wah volgens de Qoraan en Soennah.',
    keywords: ['home', 'welkom', 'islamitische gemeenschap', 'den haag', 'moskee'] as string[],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Stichting El Mouahidin",
      "alternateName": "El Mouahidin",
      "url": baseUrl,
      "logo": `${baseUrl}/logo.png`,
      "description": "Islamitische stichting in Den Haag gewijd aan gebed, onderwijs en da'wah",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Deimanstraat 7",
        "addressLocality": "Den Haag",
        "postalCode": "2522 BB",
        "addressCountry": "NL"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+31-70-395-24-64",
        "contactType": "customer service",
        "email": "info@elmouahidin.nl"
      },
      "sameAs": [
        "https://www.facebook.com/elmouahidin",
        "https://www.youtube.com/channel/elmouahidin"
      ]
    }
  },
  dawah: {
    title: 'Da\'wah - Verspreiden van Islamitische Kennis',
    description: 'Ontdek onze Da\'wah activiteiten georganiseerd door al-Ghofraan: jongerenavonden, ouderenavonden, lezingen en begeleiding voor bekeerlingen.',
    keywords: ['dawah', 'islamitische kennis', 'al-ghofraan', 'jongeren', 'lezingen', 'bekeerlingen'] as string[],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Da'wahCommissie al-Ghofraan",
      "parentOrganization": {
        "@type": "Organization",
        "name": "Stichting El Mouahidin"
      },
      "description": "Da'wah commissie gewijd aan het verspreiden van islamitische kennis en begrip",
      "educationalCredentialAwarded": "Islamitische kennis en begrip"
    }
  },
  onderwijs: {
    title: 'Islamitisch Onderwijs voor Alle Leeftijden',
    description: 'Islamitisch onderwijs programma\'s voor kinderen (7-12 jaar) en vrouwen. Arabische taal, geloofsleer, jurisprudentie en meer.',
    keywords: ['islamitisch onderwijs', 'kinderen', 'vrouwen', 'arabisch', 'geloofsleer', 'fiqh'] as string[],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Islamitisch Onderwijs Programma",
      "description": "Uitgebreid islamitisch onderwijsprogramma voor verschillende leeftijdsgroepen",
      "provider": {
        "@type": "Organization",
        "name": "Stichting El Mouahidin"
      },
      "courseMode": "blended",
      "inLanguage": ["nl", "ar"]
    }
  },
  contact: {
    title: 'Contact & Locatie',
    description: 'Neem contact op met Stichting El Mouahidin. Bezoek ons op Deimanstraat 7, Den Haag of bel (070) 395 24 64.',
    keywords: ['contact', 'adres', 'telefoon', 'locatie', 'den haag', 'deimanstraat'] as string[],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "mainEntity": {
        "@type": "Organization",
        "name": "Stichting El Mouahidin",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Deimanstraat 7",
          "addressLocality": "Den Haag",
          "postalCode": "2522 BB",
          "addressCountry": "NL"
        },
        "telephone": "+31-70-395-24-64",
        "email": "info@elmouahidin.nl"
      }
    }
  },
  vacatures: {
    title: 'Vacature: Imam / Geestelijk Bedienaar',
    description: 'Stichting El Mouahidin zoekt een gekwalificeerde imam voor een van de grootste moskeeën in Den Haag. Solliciteer nu!',
    keywords: ['vacature', 'imam', 'geestelijk bedienaar', 'moskee', 'den haag', 'solliciteren'] as string[],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      "title": "Imam / Geestelijk Bedienaar",
      "description": "Geestelijk bedienaar voor een van de grootste moskeeën in Den Haag",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Stichting El Mouahidin",
        "sameAs": baseUrl
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Den Haag",
          "addressCountry": "NL"
        }
      },
      "employmentType": "FULL_TIME",
      "workHours": "36 uur per week"
    }
  },
  'onze-stichting': {
    title: 'Over Onze Stichting',
    description: 'Leer meer over Stichting El Mouahidin: onze missie, visie, organisatie en ANBI-status. Een gemeenschap van geloof, kennis en verbinding.',
    keywords: ['over ons', 'missie', 'visie', 'anbi', 'organisatie', 'bestuur'] as string[],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "mainEntity": {
        "@type": "Organization",
        "name": "Stichting El Mouahidin",
        "foundingDate": "2010",
        "nonprofitStatus": "NonprofitANBI",
        "mission": "Het creëren van gelegenheid voor moslims om Allah te aanbidden volgens de Qoraan en Soennah"
      }
    }
  },
  doneren: {
    title: 'Doneren - Steun Onze Stichting',
    description: 'Steun Stichting El Mouahidin met uw donatie. Als ANBI-erkende organisatie zijn donaties fiscaal aftrekbaar.',
    keywords: ['doneren', 'steun', 'anbi', 'fiscaal aftrekbaar', 'donatie'] as string[],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "DonateAction",
      "recipient": {
        "@type": "Organization",
        "name": "Stichting El Mouahidin"
      }
    }
  },
  shabapp: {
    title: 'Shabapp - Islamitische App',
    description: 'Ontdek Shabapp, de islamitische app voor gebedstijden, Qibla richting en meer. Download nu voor iOS en Android.',
    keywords: ['shabapp', 'islamitische app', 'gebedstijden', 'qibla', 'ios', 'android'] as string[]
  },
  gebedstijden: {
    title: 'Gebedstijden Den Haag',
    description: 'Actuele gebedstijden voor Den Haag. Fajr, Dhuhr, Asr, Maghrib en Isha tijden voor vandaag en deze week.',
    keywords: ['gebedstijden', 'den haag', 'fajr', 'dhuhr', 'asr', 'maghrib', 'isha'] as string[]
  }
} as const

export function generateMetadata(page: keyof typeof pageMetadata): Metadata {
  const meta = pageMetadata[page]
  
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: (meta as any).openGraph?.title || meta.title,
      description: (meta as any).openGraph?.description || meta.description,
      images: (meta as any).openGraph?.images || ['/og-image.jpg'],
    },
    alternates: {
      canonical: `${baseUrl}/${page === 'home' ? '' : page}`,
    },
  }
}

export function generateStructuredData(page: keyof typeof pageMetadata) {
  const meta = pageMetadata[page]
  return (meta as any).structuredData ? JSON.stringify((meta as any).structuredData) : null
}
