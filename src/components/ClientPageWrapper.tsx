'use client'

import { StructuredData } from './StructuredData'

interface ClientPageWrapperProps {
  children: React.ReactNode
  structuredData?: string
}

export function ClientPageWrapper({ children, structuredData }: ClientPageWrapperProps) {
  return (
    <>
      {structuredData && <StructuredData data={structuredData} />}
      {children}
    </>
  )
}
