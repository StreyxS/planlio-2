'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface PlanOption {
  id: string
  name: string
  description: string
  price: number
  features: string[]
  highlighted: boolean
}

const PLANS: PlanOption[] = [
  {
    id: 'individual',
    name: 'Individuální',
    description: 'Pro profesionály a podnikatele',
    price: 199,
    features: [
      'Plánování a generování obsahu',
      '100 naplánovaných postů / měsíc',
      '4 kanály (Instagram, IG Stories, Facebook, YouTube)',
      '1 uživatel',
      '100 AI kreditů / měsíc',
    ],
    highlighted: false,
  },
  {
    id: 'team',
    name: 'Tým',
    description: 'Ideální pro malé týmy',
    price: 990,
    features: [
      'Plánování a generování obsahu',
      'Neomezené plánování postů',
      '8 kanálů',
      '4 uživatelé',
      '500 AI kreditů / měsíc',
      'Role v týmu (Admin / Editor)',
    ],
    highlighted: true,
  },
  {
    id: 'agency',
    name: 'Agentura',
    description: 'Pro agentury s extra oprávněními',
    price: 1990,
    features: [
      'Plánování a generování obsahu',
      'Neomezené plánování postů',
      '16 kanálů',
      '8 uživatelů',
      '1000 AI kreditů / měsíc',
      'Pokročilé role a oprávnění',
    ],
    highlighted: false,
  },
]

export default function SelectPlanPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleSelectPlan = async (planId: string) => {
    setSelectedPlan(planId)
    setLoading(true)
    
    // Pro test: jen přesměr na /app bez DB operací
    setTimeout(() => {
      router.push('/app')
    }, 500)
  }

  return (
    <div className="min-h-svh bg-gradient-to-br from-background to-accent/5 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="font-sans text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Vyberte si svůj plán
          </h1>
          <p className="font-sans text-xl text-muted-foreground">
            Prvních 14 dní zcela zdarma. Žádná kreditní karta není potřeba.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {PLANS.map((plan) => (
            <Card
              key={plan.id}
              className={`relative p-8 flex flex-col transition-all ${
                plan.highlighted
                  ? 'ring-2 ring-primary shadow-xl scale-105'
                  : 'border-primary/20 hover:border-primary/60'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-bold font-sans">
                    Populární
                  </span>
                </div>
              )}

              <h3 className="font-sans text-2xl font-bold text-foreground mb-2">
                {plan.name}
              </h3>
              <p className="font-sans text-sm text-muted-foreground mb-6">
                {plan.description}
              </p>

              <div className="mb-8">
                <span className="font-sans text-5xl font-bold text-foreground">
                  {plan.price}
                </span>
                <span className="font-sans text-muted-foreground ml-2">Kč/měsíc</span>
                <p className="font-sans text-xs text-accent mt-2">
                  Po 14-denní zkušební lhůtě
                </p>
              </div>

              <Button
                onClick={() => handleSelectPlan(plan.id)}
                disabled={loading}
                className={cn(
                  'w-full font-sans mb-8',
                  plan.highlighted
                    ? 'bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90'
                    : 'border-primary/30 hover:bg-primary/10'
                )}
                variant={plan.highlighted ? 'default' : 'outline'}
              >
                {loading && selectedPlan === plan.id ? 'Nastavuji...' : 'Vybrat plán'}
              </Button>

              <ul className="space-y-3 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="font-sans text-sm text-foreground flex items-start gap-3">
                    <span className="text-primary mt-0.5">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="font-sans text-muted-foreground mb-4">
            Máte dotazy? <Link href="/" className="text-primary hover:underline">Kontaktujte nás</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
