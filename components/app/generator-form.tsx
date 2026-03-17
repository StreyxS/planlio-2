'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

interface Platform {
  id: string
  name: string
  enabled: boolean
  soon?: boolean
}

interface GeneratorFormProps {
  onGeneratePlan: () => void
}

export function GeneratorForm({ onGeneratePlan }: GeneratorFormProps) {
  const searchParams = useSearchParams()
  const selectedChannelParam = searchParams.get('selectedChannel')

  const [platforms, setPlatforms] = useState<Platform[]>([
    { id: 'instagram', name: 'Instagram', enabled: true },
    { id: 'facebook', name: 'Facebook', enabled: true },
    { id: 'youtube', name: 'YouTube', enabled: true },
    { id: 'tiktok', name: 'TikTok', enabled: false, soon: true },
    { id: 'linkedin', name: 'LinkedIn', enabled: false, soon: true },
  ])

  const [contentType, setContentType] = useState('mixed')
  const [customContentTypeText, setCustomContentTypeText] = useState('')
  const [loading, setLoading] = useState(false)

  // Nastavit jen vybraný kanál pokud přijde z query parametru
  useEffect(() => {
    if (selectedChannelParam) {
      setPlatforms((prev) =>
        prev.map((p) => ({
          ...p,
          enabled: p.id === selectedChannelParam,
        }))
      )
    }
  }, [selectedChannelParam])

  const handlePlatformChange = (id: string) => {
    setPlatforms(platforms.map((p) => (p.id === id ? { ...p, enabled: !p.enabled } : p)))
  }

  const handleGenerate = async () => {
    setLoading(true)
    // Simulate AI generation
    await new Promise((resolve) => setTimeout(resolve, 2000))
    onGeneratePlan()
    setLoading(false)
  }

  const enabledPlatforms = platforms.filter((p) => p.enabled)
  const isCustomContentType = contentType === 'custom'

  return (
    <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/30 hover:border-primary/60 transition-colors">
      <div className="max-w-2xl">
        <h2 className="font-sans text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
          Generátor Obsahu
        </h2>

        {/* Platforms Selection */}
        <div className="mb-8">
          <Label className="font-sans text-lg font-semibold mb-4 block">
            Vyberte platformy
          </Label>
          <div className="grid gap-4 sm:grid-cols-2">
            {platforms.map((platform) => (
              <div key={platform.id} className="relative">
                <div className="flex items-center gap-3">
                  <Checkbox
                    id={platform.id}
                    checked={platform.enabled}
                    onCheckedChange={() => handlePlatformChange(platform.id)}
                    disabled={platform.soon}
                  />
                  <Label htmlFor={platform.id} className="font-sans cursor-pointer flex-1">
                    {platform.name}
                  </Label>
                  {platform.soon && (
                    <span className="inline-flex items-center rounded-full bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                      Již Brzy
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Type Selection */}
        <div className="mb-8">
          <Label htmlFor="content-type" className="font-sans text-lg font-semibold mb-4 block">
            Typ obsahu
          </Label>
          <Select value={contentType} onValueChange={setContentType}>
            <SelectTrigger id="content-type" className="font-sans">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mixed" className="font-sans">
                Smíšený obsah
              </SelectItem>
              <SelectItem value="educational" className="font-sans">
                Vzdělávací obsah
              </SelectItem>
              <SelectItem value="promotional" className="font-sans">
                Propagační obsah
              </SelectItem>
              <SelectItem value="engaging" className="font-sans">
                Zábavný obsah
              </SelectItem>
              <SelectItem value="tips" className="font-sans">
                Tipy a triky
              </SelectItem>
              <SelectItem value="custom" className="font-sans">
                Vlastní (napíšu si sám)
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Custom Content Type Instructions */}
        {isCustomContentType && (
          <div className="mb-8">
            <Label htmlFor="custom-instructions" className="font-sans text-lg font-semibold mb-2 block">
              Co přesně chceš, aby to AI dělalo?
            </Label>
            <Textarea
              id="custom-instructions"
              placeholder="Např. 'krátké captiony do 200 znaků', 'víc meme/vtipné', 'méně emoji, více profi', 'zaměřit na recenze zákazníků', 'jen reels captiony'"
              value={customContentTypeText}
              onChange={(e) => setCustomContentTypeText(e.target.value)}
              className="font-sans resize-none"
              rows={4}
            />
            <p className="font-sans text-xs text-muted-foreground mt-2">
              Čím konkrétnější zadání, tím lepší výstup.
            </p>
          </div>
        )}

        {/* Info */}
        <div className="mb-8 rounded-lg bg-muted/50 p-4">
          <p className="font-sans text-sm text-muted-foreground">
            {enabledPlatforms.length > 0
              ? `Budete generovat obsah pro: ${enabledPlatforms.map((p) => p.name).join(', ')}`
              : 'Vyberte alespoň jednu platformu pro generování'}
          </p>
        </div>

        {/* Generate Button */}
        <Button
          onClick={handleGenerate}
          disabled={enabledPlatforms.length === 0 || loading || (isCustomContentType && !customContentTypeText.trim())}
          size="lg"
          className="font-sans w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 disabled:opacity-50"
        >
          {loading ? 'Generování...' : 'Generovat Měsíční Plán'}
        </Button>
      </div>
    </Card>
  )
}
