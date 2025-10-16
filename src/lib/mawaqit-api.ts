export interface MawaqitPrayerTimes {
  fajr: string
  dhuhr: string
  asr: string
  maghrib: string
  isha: string
  date: string
  shuruq?: string
  iqama?: {
    fajr: string
    dhuhr: string
    asr: string
    maghrib: string
    isha: string
  }
}

// Extend window interface for logging
declare global {
  interface Window {
    lastLogTime?: number
  }
}

export async function fetchPrayerTimes(): Promise<MawaqitPrayerTimes | null> {
  try {
    console.log('Fetching prayer times from local DATA.JSON...')
    
    const response = await fetch('/api/prayer-times', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    console.log('Prayer times loaded from DATA.JSON:', data)
    
    return data
  } catch (error) {
    console.error('Error loading prayer times from DATA.JSON:', error)
    
    // Return null to indicate error - no fallback times
    return null
  }
}

export function getNextPrayerIndex(times: MawaqitPrayerTimes): number {
  const now = new Date()
  const currentHour = now.getHours()
  const currentMinute = now.getMinutes()
  const currentTime = currentHour * 60 + currentMinute

  const prayerTimes = [
    times.fajr,
    times.dhuhr,
    times.asr,
    times.maghrib,
    times.isha
  ]

  const prayerNames = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha']

  // Only log once per minute to avoid spam
  const shouldLog = currentMinute === 0 || !window.lastLogTime || (Date.now() - window.lastLogTime) > 60000
  
  if (shouldLog) {
    console.log(`Current time: ${currentHour}:${currentMinute.toString().padStart(2, '0')} (${currentTime} minutes)`)
    window.lastLogTime = Date.now()
  }
  
  // Check if we're after Isha (prayer times are for tomorrow)
  const ishaTime = 20 * 60 + 21 // 20:21 in minutes
  if (currentTime > ishaTime) {
    // After Isha, all displayed times are for tomorrow, so Fajr is next
    if (shouldLog) {
      console.log('After Isha - tomorrow\'s Fajr is next prayer')
    }
    return 0
  }
  
  for (let i = 0; i < prayerTimes.length; i++) {
    const [hour, minute] = prayerTimes[i].split(':').map(Number)
    const prayerTime = hour * 60 + minute
    
    if (shouldLog) {
      console.log(`${prayerNames[i]}: ${prayerTimes[i]} (${prayerTime} minutes) - ${currentTime < prayerTime ? 'NEXT' : 'passed'}`)
    }
    
    if (currentTime < prayerTime) {
      if (shouldLog) {
        console.log(`Next prayer is: ${prayerNames[i]} at ${prayerTimes[i]}`)
      }
      return i
    }
  }
  
  // If all prayers have passed, next prayer is Fajr tomorrow
  if (shouldLog) {
    console.log('All prayers have passed, next prayer is Fajr tomorrow')
  }
  return 0
}
