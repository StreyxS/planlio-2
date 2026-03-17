'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PostDetailDrawer } from './post-detail-drawer'
import type { Plan, Post } from '@/lib/mock-data'

interface PlanListViewProps {
  plan: Plan
}

export function PlanListView({ plan }: PlanListViewProps) {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

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

  if (plan.posts.length === 0) {
    return (
      <Card className="card-vibrant p-12 text-center">
        <p className="font-sans text-muted-foreground">Není žádný obsah pro zobrazení.</p>
      </Card>
    )
  }

  return (
    <>
      <div className="space-y-4">
        {plan.posts.map((post) => {
          const scheduledDate = new Date(post.scheduledTime)
          const timeStr = scheduledDate.toLocaleTimeString('cs-CZ', {
            hour: '2-digit',
            minute: '2-digit',
          })
          const dateStr = scheduledDate.toLocaleDateString('cs-CZ')

          return (
            <Card
              key={post.id}
              className="p-4 hover:bg-muted/50 transition-colors cursor-pointer"
              onClick={() => handlePostClick(post)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={`${getPlatformColor(post.platform)} font-sans text-xs font-semibold text-white`}>
                      {post.platform.toUpperCase()}
                    </Badge>
                    <span className="font-sans text-xs text-muted-foreground">{post.postType}</span>
                  </div>
                  <h3 className="font-sans font-semibold text-foreground mb-2">{post.title}</h3>
                  <p className="font-sans text-sm text-muted-foreground line-clamp-2">{post.content}</p>
                </div>

                <div className="text-right flex-shrink-0">
                  <div className="font-sans text-sm font-semibold text-foreground">{timeStr}</div>
                  <div className="font-sans text-xs text-muted-foreground">{dateStr}</div>
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      <PostDetailDrawer
        post={selectedPost}
        isOpen={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
      />
    </>
  )
}
