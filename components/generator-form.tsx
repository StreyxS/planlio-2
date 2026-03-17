'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { generateContentPlan, PLATFORM_CONFIG, Post } from '@/lib/plan-utils'

interface GeneratorFormProps {
  onPlanGenerated: (posts: Post[]) => void
  isLoading?: boolean
}

export function GeneratorForm({ onPlanGenerated, isLoading = false }: GeneratorFormProps) {
  const [formData, setFormData] = useState({
    topic: '',
    month: new Date().toISOString().slice(0, 7),
    platforms: ['instagram'],
    tone: 'profesionální',
    frequency: 'each-week',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Generate mock plan
    const posts = generateContentPlan(formData.month)
    onPlanGenerated(posts)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-lg border border-border bg-card p-6">
      <h2 className="font-sans text-2xl font-bold text-foreground">AI Generátor Obsahu</h2>

      {/* Topic */}
      <div>
        <label className="font-sans block text-sm font-medium text-foreground mb-2">
          Téma obsahu
        </label>
        <input
          type="text"
          placeholder="Např. Digitální marketing, fitness, vaření..."
          value={formData.topic}
          onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
          className="w-full rounded-md border border-input bg-background px-3 py-2 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Month */}
      <div>
        <label className="font-sans block text-sm font-medium text-foreground mb-2">
          Měsíc plánování
        </label>
        <input
          type="month"
          value={formData.month}
          onChange={(e) => setFormData({ ...formData, month: e.target.value })}
          className="w-full rounded-md border border-input bg-background px-3 py-2 font-sans text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Platforms */}
      <div>
        <label className="font-sans block text-sm font-medium text-foreground mb-3">
          Platformy
        </label>
        <div className="space-y-2">
          {Object.entries(PLATFORM_CONFIG).map(([key, config]) => (
            <label key={key} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.platforms.includes(key)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFormData({
                      ...formData,
                      platforms: [...formData.platforms, key],
                    })
                  } else {
                    setFormData({
                      ...formData,
                      platforms: formData.platforms.filter((p) => p !== key),
                    })
                  }
                }}
                disabled={!config.enabled}
                className="h-4 w-4 rounded border border-input accent-primary disabled:opacity-50"
              />
              <span className={`font-sans text-sm ${!config.enabled ? 'text-muted-foreground line-through' : 'text-foreground'}`}>
                {config.label}
                {!config.enabled && ' (Brzy dostupné)'}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Tone */}
      <div>
        <label className="font-sans block text-sm font-medium text-foreground mb-2">
          Tón obsahu
        </label>
        <select
          value={formData.tone}
          onChange={(e) => setFormData({ ...formData, tone: e.target.value })}
          className="w-full rounded-md border border-input bg-background px-3 py-2 font-sans text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="profesionální">Profesionální</option>
          <option value="přátelský">Přátelský</option>
          <option value="zábavný">Zábavný</option>
          <option value="inspirující">Inspirující</option>
        </select>
      </div>

      {/* Frequency */}
      <div>
        <label className="font-sans block text-sm font-medium text-foreground mb-2">
          Frekvence zveřejňování
        </label>
        <select
          value={formData.frequency}
          onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
          className="w-full rounded-md border border-input bg-background px-3 py-2 font-sans text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="each-day">Každý den</option>
          <option value="each-week">Každý týden</option>
          <option value="3-times-week">3x týdně</option>
          <option value="2-times-week">2x týdně</option>
        </select>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        disabled={!formData.topic || isLoading}
        className="w-full font-sans"
      >
        {isLoading ? 'Generuji...' : 'Generovat plán'}
      </Button>
    </form>
  )
}
