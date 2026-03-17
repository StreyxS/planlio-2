'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PostDetailDrawer } from './post-detail-drawer'
import type { Plan, Post } from '@/lib/mock-data'

interface PlanCalendarViewProps {
  plan: Plan
}

export function PlanCalendarView({ plan }: PlanCalendarViewProps) {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const daysInMonth = new Date(plan.year, plan.month + 1, 0).getDate()
  const firstDayOfMonth = new Date(plan.year, plan.month, 1).getDay()

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const emptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => i)

  const getPostsForDay = (day: number): Post[] => {
    return plan.posts.filter((post) => {
      const postDate = new Date(post.scheduledTime)
      return postDate.getDate() === day
    })
  }

  const getPlatformColor = (platform: string) => {
    const colors: Record<string, string> = {
      instagram: 'badge-platform-instagram',
      facebook: 'badge-platform-facebook',
      youtube: 'badge-platform-youtube',
      tiktok: 'badge-platform-tiktok',
      linkedin: 'badge-platform-linkedin',
    }
    return colors[platform] || 'bg-gradient-to-r from-gray-400 to-gray-500'
  }

  const handlePostClick = (post: Post) => {
    setSelectedPost(post)
    setIsDrawerOpen(true)
  }

  return (
    <>
      <div className="card-vibrant rounded-lg p-6">
        {/* Month Header */}
        <h3 className="font-sans mb-6 text-2xl font-bold gradient-text-accent">
          {new Date(plan.year, plan.month).toLocaleDateString('cs-CZ', {
            month: 'long',
            year: 'numeric',
          })}
        </h3>

        {/* Day Headers */}
        <div className="mb-2 grid grid-cols-7 gap-2">
          {['Po', 'Út', 'St', 'Čt', 'Pá', 'So', 'Ne'].map((day) => (
            <div key={day} className="text-center font-sans text-sm font-semibold text-muted-foreground">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2">
          {/* Empty days before month starts */}
          {emptyDays.map((i) => (
            <div key={`empty-${i}`} className="min-h-24 rounded-lg bg-muted/20"></div>
          ))}

          {/* Days of month */}
          {days.map((day) => {
            const dayPosts = getPostsForDay(day)
            return (
              <div
                key={day}
                className="min-h-24 rounded-lg border border-border bg-background p-2 hover:bg-muted/50 transition-colors"
              >
                <div className="font-sans mb-1 text-sm font-semibold text-foreground">{day}</div>
                <div className="space-y-1">
                  {dayPosts.slice(0, 2).map((post) => (
                    <button
                      key={post.id}
                      onClick={() => handlePostClick(post)}
                      className="block w-full text-left"
                    >
                      <div className="flex items-center gap-1">
                        <Badge
                          className={`${getPlatformColor(post.platform)} font-sans text-xs font-semibold text-white cursor-pointer hover:opacity-80`}
                        >
                          {post.platform.slice(0, 3).toUpperCase()}
                        </Badge>
                      </div>
                      <p className="font-sans text-xs text-muted-foreground truncate">
                        {post.title}
                      </p>
                    </button>
                  ))}
                  {dayPosts.length > 2 && (
                    <p className="font-sans text-xs text-muted-foreground">
                      +{dayPosts.length - 2} více
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <PostDetailDrawer
        post={selectedPost}
        isOpen={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
      />
    </>
  )
}
