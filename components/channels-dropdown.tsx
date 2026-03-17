'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/use-auth'

interface Channel {
  name: string
  label: string
  icon: string
  disabled?: boolean
  badge?: string
}

const CHANNELS: Channel[] = [
  { name: 'instagram', label: 'Instagram', icon: '📷', disabled: false },
  { name: 'instagramstories', label: 'Instagram Stories', icon: '📱', disabled: false },
  { name: 'facebook', label: 'Facebook', icon: 'f', disabled: false },
  { name: 'youtube', label: 'YouTube', icon: '▶️', disabled: false },
  { name: 'tiktok', label: 'TikTok', icon: '♪', disabled: false },
]

export function ChannelsDropdown() {
  const [open, setOpen] = React.useState(false)
  const { user } = useAuth()
  const router = useRouter()

  const handleChannelClick = (channelName: string) => {
    if (!user) {
      // Pokud není přihlášen, přesměruj na přihlášení
      router.push('/auth/login')
    } else {
      // Pokud je přihlášen, jdi na generátor s vybraným kanálem
      router.push(`/app?selectedChannel=${channelName}`)
    }
    setOpen(false)
  }

  return (
    <div className="relative group">
      <Button
        variant="ghost"
        className="font-sans text-sm font-medium text-foreground hover:text-primary"
      >
        Kanály
        <svg
          className={`ml-2 h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </Button>

      {/* Dropdown Mega Menu */}
      <div className="absolute left-0 top-full mt-0 hidden group-hover:block w-96 bg-white rounded-lg shadow-lg border border-border p-6 z-50">
        <div className="grid grid-cols-2 gap-4">
          {CHANNELS.map((channel) => (
            <button
              key={channel.name}
              onClick={() => handleChannelClick(channel.name)}
              disabled={channel.disabled}
              className={`flex items-center gap-3 p-3 rounded-lg transition-all text-left ${
                channel.disabled
                  ? 'opacity-50 cursor-not-allowed bg-muted/30'
                  : 'cursor-pointer hover:bg-primary/10'
              }`}
            >
              <div className="text-2xl">{channel.icon}</div>
              <div className="flex-1">
                <div className="font-sans font-medium text-foreground">{channel.label}</div>
                {channel.badge && (
                  <span className="inline-block mt-1 text-xs px-2 py-1 bg-accent text-accent-foreground rounded-full font-medium">
                    {channel.badge}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
