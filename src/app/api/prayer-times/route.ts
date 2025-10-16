import { NextResponse } from 'next/server'
import { getCurrentPrayerTimes } from '@/lib/mawaqit-data'

export async function GET() {
  try {
    // Get current prayer times from Mawaqit data
    const currentTimes = getCurrentPrayerTimes();
    
    if (!currentTimes) {
      throw new Error('Could not get current prayer times');
    }

    // Get current date in Dutch timezone (Europe/Amsterdam)
    const today = new Date()
    const dutchDate = new Date(today.toLocaleString("en-US", {timeZone: "Europe/Amsterdam"}))
    
    const dateString = dutchDate.toLocaleDateString('nl-NL', {
      weekday: 'long',
      year: 'numeric', 
      month: 'long',
      day: 'numeric'
    })
    
    console.log(`Server date: ${today.toISOString().split('T')[0]}`)
    console.log(`Dutch date: ${dutchDate.toISOString().split('T')[0]} (Month: ${dutchDate.getMonth() + 1}, Day: ${dutchDate.getDate()})`)

    const result = {
      fajr: currentTimes.fajr,
      dhuhr: currentTimes.dhuhr, 
      asr: currentTimes.asr,
      maghrib: currentTimes.maghrib,
      isha: currentTimes.isha,
      date: dateString,
      shuruq: currentTimes.shuruq,
      iqama: {
        fajr: "+25",
        dhuhr: "+10",
        asr: "+10",
        maghrib: "+5",
        isha: "+10"
      }
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error('Error loading prayer times:', error)
    
    // Return error response
    return NextResponse.json(
      { error: 'Kon gebedstijden niet laden' },
      { status: 500 }
    )
  }
}