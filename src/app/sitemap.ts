import { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://elmouahidin.nl'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/dawah',
    '/onderwijs', 
    '/contact',
    '/vacatures',
    '/onze-stichting',
    '/doneren',
    '/shabapp',
    '/gebedstijden'
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : route === '/gebedstijden' ? 'daily' : 'weekly' as const,
    priority: route === '' ? 1 : route === '/contact' ? 0.9 : 0.8,
  }))
}
