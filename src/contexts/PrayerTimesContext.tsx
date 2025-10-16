"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'
import { fetchPrayerTimes, getNextPrayerIndex, type MawaqitPrayerTimes } from '@/lib/mawaqit-api'

interface PrayerTimesContextType {
  prayerData: MawaqitPrayerTimes | null
  nextPrayerIndex: number
  loading: boolean
  error: string | null
}

const PrayerTimesContext = createContext<PrayerTimesContextType | undefined>(undefined)

export function PrayerTimesProvider({ children }: { children: React.ReactNode }) {
  const [prayerData, setPrayerData] = useState<MawaqitPrayerTimes | null>(null)
  const [nextPrayerIndex, setNextPrayerIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadPrayerTimes = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchPrayerTimes()
        if (data) {
          setPrayerData(data)
          setNextPrayerIndex(getNextPrayerIndex(data))
        }
      } catch (error) {
        console.error('Failed to load prayer times:', error)
        setError('Failed to load prayer times')
      } finally {
        setLoading(false)
      }
    }

    // Load prayer times once
    loadPrayerTimes()
    
    // Update next prayer index every minute
    const interval = setInterval(() => {
      if (prayerData) {
        setNextPrayerIndex(getNextPrayerIndex(prayerData))
      }
    }, 60000)

    return () => clearInterval(interval)
  }, []) // Only run once on mount

  return (
    <PrayerTimesContext.Provider value={{ prayerData, nextPrayerIndex, loading, error }}>
      {children}
    </PrayerTimesContext.Provider>
  )
}

export function usePrayerTimes() {
  const context = useContext(PrayerTimesContext)
  if (context === undefined) {
    throw new Error('usePrayerTimes must be used within a PrayerTimesProvider')
  }
  return context
}
