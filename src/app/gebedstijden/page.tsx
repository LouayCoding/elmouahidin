"use client"

import { useState, useEffect } from "react"
import { Container, PageHeader } from "@/components/ui"
import { Header, Footer } from "@/components/sections"
import { MapPin, Sunrise, Sun, CloudSun, Sunset, Moon } from "lucide-react"
import { getMonthData, getCurrentMonth, getCurrentDay, MONTH_NAMES, type MonthData } from "@/lib/calendar-data"

export default function GebedstijdenPage() {
  const [monthData, setMonthData] = useState<MonthData | null>(null)
  const [loading, setLoading] = useState(true)
  const currentMonth = getCurrentMonth()

  useEffect(() => {
    const data = getMonthData(currentMonth)
    setMonthData(data)
    setLoading(false)
  }, [])

  const isToday = (day: number) => {
    const today = new Date()
    return today.getMonth() === currentMonth && today.getDate() === day
  }


  if (loading) {
    return (
      <>
        <Header />
        <PageHeader 
          title="Gebedstijden"
          subtitle="Laden..."
        />
        <main className="min-h-screen pt-8 pb-20" style={{ backgroundColor: 'var(--card)' }}>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-64 mb-4"></div>
              <div className="w-24 h-1 mb-8 bg-gray-300"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mb-12"></div>
              <div className="grid gap-4">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="h-16 bg-gray-200 rounded-xl"></div>
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <PageHeader 
        title="Gebedstijden"
        subtitle={`${MONTH_NAMES[currentMonth]} ${new Date().getFullYear()}`}
      />
      
      <main className="min-h-screen pt-8 pb-20" style={{ backgroundColor: 'var(--card)' }}>
        {/* Prayer Times Table - Full width on mobile */}
        <div className="mb-16">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="md:overflow-visible overflow-x-auto pb-4 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8" style={{ scrollbarWidth: 'thin' }}>
              <div className="md:w-full min-w-max">
                {/* Table Header */}
                <div className="flex mb-0 rounded-t-xl" style={{ backgroundColor: 'var(--background)', border: '1px solid var(--border)' }}>
                  <div className="w-16 md:flex-1 flex-shrink-0 flex items-center justify-center py-5 font-marcellus font-normal text-sm"
                       style={{ color: 'var(--foreground)', opacity: 0.7, borderRight: '1px solid var(--border)' }}>
                    Dag
                  </div>
                  {[
                    { name: 'Fajr', icon: Sunrise },
                    { name: 'Dhuhr', icon: Sun },
                    { name: 'Asr', icon: CloudSun },
                    { name: 'Maghrib', icon: Sunset },
                    { name: 'Isha', icon: Moon }
                  ].map((prayer, index) => {
                    const IconComponent = prayer.icon;
                    return (
                      <div key={prayer.name} className="w-20 md:flex-1 flex-shrink-0 flex items-center justify-center py-5 font-marcellus font-normal text-sm"
                           style={{ 
                             color: 'var(--foreground)', 
                             opacity: 0.7,
                             borderRight: index < 4 ? '1px solid var(--border)' : 'none'
                           }}>
                        <div className="flex flex-col items-center gap-1">
                          <IconComponent className="w-4 h-4" style={{ color: '#C4A484' }} />
                          <span className="hidden md:block">{prayer.name}</span>
                          <span className="md:hidden text-xs">{prayer.name}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Table Rows */}
                <div className="space-y-0">
                  {monthData?.days.map((dayData, index) => (
                    <div key={dayData.day} className={`flex hover:scale-101 transition-transform duration-200 ${
                      index === monthData.days.length - 1 ? 'rounded-b-lg' : ''
                    }`}>
                      {/* Day Number */}
                      <div className={`w-16 md:flex-1 flex-shrink-0 flex items-center justify-center py-4 md:py-5 font-poppins font-normal text-sm md:text-base ${
                        isToday(dayData.day) ? 'text-white' : ''
                      }`}
                      style={{
                        backgroundColor: isToday(dayData.day) ? '#C4A484' : 'var(--card)',
                        borderBottom: `1px solid ${isToday(dayData.day) ? '#C4A484' : 'var(--border)'}`,
                        borderLeft: `1px solid ${isToday(dayData.day) ? '#C4A484' : 'var(--border)'}`,
                        borderRight: `1px solid ${isToday(dayData.day) ? '#C4A484' : 'var(--border)'}`
                      }}>
                        {dayData.day}
                      </div>

                      {/* Prayer Times */}
                      <div className="w-20 md:flex-1 flex-shrink-0 flex items-center justify-center py-3 md:py-4 font-mono text-xs md:text-sm font-normal"
                           style={{
                             backgroundColor: isToday(dayData.day) ? '#C4A484' : 'var(--card)',
                             color: isToday(dayData.day) ? 'white' : 'var(--foreground)',
                             borderBottom: `1px solid ${isToday(dayData.day) ? '#C4A484' : 'var(--border)'}`,
                             borderRight: `1px solid ${isToday(dayData.day) ? '#C4A484' : 'var(--border)'}`
                           }}>
                        {dayData.fajr}
                      </div>
                      <div className="w-20 md:flex-1 flex-shrink-0 flex items-center justify-center py-3 md:py-4 font-mono text-xs md:text-sm font-normal"
                           style={{
                             backgroundColor: isToday(dayData.day) ? '#C4A484' : 'var(--card)',
                             color: isToday(dayData.day) ? 'white' : 'var(--foreground)',
                             borderBottom: `1px solid ${isToday(dayData.day) ? '#C4A484' : 'var(--border)'}`,
                             borderRight: `1px solid ${isToday(dayData.day) ? '#C4A484' : 'var(--border)'}`
                           }}>
                        {dayData.dhuhr}
                      </div>
                      <div className="w-20 md:flex-1 flex-shrink-0 flex items-center justify-center py-3 md:py-4 font-mono text-xs md:text-sm font-normal"
                           style={{
                             backgroundColor: isToday(dayData.day) ? '#C4A484' : 'var(--card)',
                             color: isToday(dayData.day) ? 'white' : 'var(--foreground)',
                             borderBottom: `1px solid ${isToday(dayData.day) ? '#C4A484' : 'var(--border)'}`,
                             borderRight: `1px solid ${isToday(dayData.day) ? '#C4A484' : 'var(--border)'}`
                           }}>
                        {dayData.asr}
                      </div>
                      <div className="w-20 md:flex-1 flex-shrink-0 flex items-center justify-center py-3 md:py-4 font-mono text-xs md:text-sm font-normal"
                           style={{
                             backgroundColor: isToday(dayData.day) ? '#C4A484' : 'var(--card)',
                             color: isToday(dayData.day) ? 'white' : 'var(--foreground)',
                             borderBottom: `1px solid ${isToday(dayData.day) ? '#C4A484' : 'var(--border)'}`,
                             borderRight: `1px solid ${isToday(dayData.day) ? '#C4A484' : 'var(--border)'}`
                           }}>
                        {dayData.maghrib}
                      </div>
                      <div className="w-20 md:flex-1 flex-shrink-0 flex items-center justify-center py-3 md:py-4 font-mono text-xs md:text-sm font-normal"
                           style={{
                             backgroundColor: isToday(dayData.day) ? '#C4A484' : 'var(--card)',
                             color: isToday(dayData.day) ? 'white' : 'var(--foreground)',
                             borderBottom: `1px solid ${isToday(dayData.day) ? '#C4A484' : 'var(--border)'}`,
                             borderRight: `1px solid ${isToday(dayData.day) ? '#C4A484' : 'var(--border)'}`
                           }}>
                        {dayData.isha}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}