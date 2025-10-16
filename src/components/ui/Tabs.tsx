'use client'

import { useState, ReactNode } from 'react'

interface Tab {
  id: string
  label: string
  content: ReactNode
}

interface TabsProps {
  tabs: Tab[]
  defaultTab?: string
  className?: string
}

export function Tabs({ tabs, defaultTab, className = "" }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)

  return (
    <div className={className}>
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-8 md:mb-12 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-xl font-poppins text-sm md:text-base font-medium transition-all duration-300 hover:scale-[1.02] ${
              activeTab === tab.id ? 'scale-[1.02]' : ''
            }`}
            style={{
              backgroundColor: activeTab === tab.id ? '#C4A484' : 'var(--card)',
              color: activeTab === tab.id ? 'white' : 'var(--foreground)',
              border: activeTab === tab.id ? 'none' : '1px solid var(--border)'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="transition-all duration-300">
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  )
}
