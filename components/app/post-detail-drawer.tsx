'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import type { Post } from '@/lib/mock-data'

interface PostDetailDrawerProps {
  post: Post | null
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export function PostDetailDrawer({ post, isOpen, onOpenChange }: PostDetailDrawerProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedPost, setEditedPost] = useState<Post | null>(null)

  const displayPost = isEditing && editedPost ? editedPost : post

  if (!displayPost) return null

  const scheduledDate = new Date(displayPost.scheduledTime)

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

  const handleEditStart = () => {
    setEditedPost({ ...displayPost })
    setIsEditing(true)
  }

  const handleEditChange = (field: string, value: any) => {
    if (editedPost) {
      setEditedPost({ ...editedPost, [field]: value })
    }
  }

  const handleSave = () => {
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
    setEditedPost(null)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50" onClick={() => onOpenChange(false)}>
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-gradient-to-b from-background via-background to-primary/5 shadow-2xl shadow-primary/20 animate-in slide-in-from-right"
        onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="border-b border-primary/20 bg-gradient-to-r from-primary/10 to-accent/10 px-6 py-4 flex items-center justify-between">
            <h2 className="font-sans font-semibold gradient-text-accent">Detaily Příspěvku</h2>
            <button 
              onClick={() => onOpenChange(false)}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
            {/* Platform & Type */}
            <div>
              <Label className="font-sans text-sm font-semibold mb-2 block">Platforma</Label>
              <div className="flex items-center gap-2">
                <Badge className={`${getPlatformColor(displayPost.platform)} font-sans text-sm`}>
                  {displayPost.platform.toUpperCase()}
                </Badge>
                <span className="font-sans text-sm text-muted-foreground">{displayPost.postType}</span>
              </div>
            </div>

            {/* Title */}
            <div>
              <Label className="font-sans text-sm font-semibold mb-2 block">Název</Label>
              {isEditing ? (
                <Input
                  value={editedPost?.title || ''}
                  onChange={(e) => handleEditChange('title', e.target.value)}
                  className="font-sans"
                />
              ) : (
                <p className="font-sans text-sm text-foreground">{displayPost.title}</p>
              )}
            </div>

            {/* Content */}
            <div>
              <Label className="font-sans text-sm font-semibold mb-2 block">Obsah</Label>
              {isEditing ? (
                <Textarea
                  value={editedPost?.content || ''}
                  onChange={(e) => handleEditChange('content', e.target.value)}
                  className="font-sans resize-none"
                  rows={5}
                />
              ) : (
                <p className="font-sans text-sm text-muted-foreground whitespace-pre-wrap">
                  {displayPost.content}
                </p>
              )}
            </div>

            {/* Hashtags */}
            <div>
              <Label className="font-sans text-sm font-semibold mb-2 block">Hashtagy</Label>
              {isEditing ? (
                <Input
                  value={editedPost?.hashtags.join(' ') || ''}
                  onChange={(e) => handleEditChange('hashtags', e.target.value.split(' '))}
                  className="font-sans"
                  placeholder="Oddělujte mezerou"
                />
              ) : (
                <div className="flex flex-wrap gap-2">
                  {displayPost.hashtags.map((tag) => (
                    <Badge key={tag} variant="outline" className="font-sans text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {/* Scheduled Time */}
            <div>
              <Label className="font-sans text-sm font-semibold mb-2 block">Naplánováno na</Label>
              {isEditing ? (
                <Input
                  type="datetime-local"
                  value={scheduledDate.toISOString().slice(0, 16)}
                  onChange={(e) => handleEditChange('scheduledTime', new Date(e.target.value))}
                  className="font-sans"
                />
              ) : (
                <div>
                  <p className="font-sans text-sm text-foreground">
                    {scheduledDate.toLocaleDateString('cs-CZ')}
                  </p>
                  <p className="font-sans text-sm text-muted-foreground">
                    {scheduledDate.toLocaleTimeString('cs-CZ', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="border-t border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5 px-6 py-4 flex gap-3">
            {isEditing ? (
              <>
                <Button
                  onClick={handleSave}
                  className="flex-1 font-sans btn-vibrant"
                >
                  Uložit
                </Button>
                <Button
                  variant="outline"
                  onClick={handleCancel}
                  className="flex-1 font-sans btn-vibrant-outline"
                >
                  Zrušit
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={handleEditStart}
                  className="flex-1 font-sans btn-vibrant"
                >
                  Upravit
                </Button>
                <Button
                  variant="outline"
                  onClick={() => onOpenChange(false)}
                  className="flex-1 font-sans btn-vibrant-outline"
                >
                  Zavřít
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
