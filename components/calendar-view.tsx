'use client'

import { useState } from 'react'
import { Post } from '@/lib/plan-utils'
import { Button } from '@/components/ui/button'
import { PLATFORM_CONFIG } from '@/lib/plan-utils'

interface CalendarViewProps {
  posts: Post[]
  onPostClick: (post: Post) => void
}

export function CalendarView({ posts, onPostClick }: CalendarViewProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const daysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const firstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const monthString = currentMonth.toISOString().slice(0, 7)
  const postsMap = new Map<string, Post[]>()

  posts.forEach((post) => {
    const key = post.date
    if (!postsMap.has(key)) {
      postsMap.set(key, [])
    }
    postsMap.get(key)!.push(post)
  })

  const days: (number | null)[] = []
  for (let i = 0; i < firstDayOfMonth(currentMonth); i++) {
    days.push(null)
  }
  for (let i = 1; i <= daysInMonth(currentMonth); i++) {
    days.push(i)
  }

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  const monthName = currentMonth.toLocaleDateString('cs-CZ', { month: 'long', year: 'numeric' })

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-sans text-2xl font-bold text-foreground">{monthName}</h2>
        <div className="flex gap-2">
          <Button
            onClick={previousMonth}
            variant="outline"
            size="sm"
            className="font-sans"
          >
            ← Předchozí
          </Button>
          <Button
            onClick={nextMonth}
            variant="outline"
            size="sm"
            className="font-sans"
          >
            Následující →
          </Button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="space-y-2">
        {/* Day headers */}
        <div className="grid grid-cols-7 gap-2 mb-2">
          {['Po', 'Út', 'St', 'Čt', 'Pá', 'So', 'Ne'].map((day) => (
            <div key={day} className="font-sans text-center text-xs font-semibold text-muted-foreground py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 gap-2">
          {days.map((day, index) => {
            const dateString = day
              ? `${monthString}-${String(day).padStart(2, '0')}`
              : null
            const dayPosts = dateString ? postsMap.get(dateString) || [] : []

            return (
              <div
                key={index}
                className={`min-h-24 rounded-lg border p-2 flex flex-col gap-1 ${
                  day
                    ? 'border-border bg-background'
                    : 'border-transparent bg-muted/20'
                }`}
              >
                {day && (
                  <div className="font-sans text-sm font-semibold text-foreground">
                    {day}
                  </div>
                )}
                <div className="space-y-1 flex-1 overflow-y-auto">
                  {dayPosts.map((post) => {
                    const config = PLATFORM_CONFIG[post.platform]
                    return (
                      <button
                        key={post.id}
                        onClick={() => onPostClick(post)}
                        className="w-full rounded px-2 py-1 text-xs font-sans text-white truncate hover:opacity-80 transition-opacity"
                        style={{ backgroundColor: config.color }}
                        title={post.platform}
                      >
                        {post.platform}
                      </button>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
