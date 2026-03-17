'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { createClient } from '@/lib/supabase/client'
import { useAuth } from '@/hooks/use-auth'

interface Subscription {
  id: string
  user_id: string
  plan_type: string
  is_trial: boolean
  trial_start_date: string
  trial_end_date: string
  billing_status: string
}

interface PlanLimits {
  name: string
  price: number
  maxPosts: number | 'unlimited'
  maxChannels: number
  aiCredits: number
  maxUsers: number
}

const PLAN_LIMITS: Record<string, PlanLimits> = {
  individual: {
    name: 'Individuální',
    price: 199,
    maxPosts: 100,
    maxChannels: 4,
    aiCredits: 100,
    maxUsers: 1,
  },
  team: {
    name: 'Tým',
    price: 990,
    maxPosts: 'unlimited',
    maxChannels: 8,
    aiCredits: 500,
    maxUsers: 4,
  },
  agency: {
    name: 'Agentura',
    price: 1990,
    maxPosts: 'unlimited',
    maxChannels: 16,
    aiCredits: 1000,
    maxUsers: 8,
  },
}

export function SubscriptionDashboard() {
  const { user } = useAuth()
  const [subscription, setSubscription] = useState<Subscription | null>(null)
  const [loading, setLoading] = useState(true)
  const [usedCredits, setUsedCredits] = useState(0)
  const [usedPosts, setUsedPosts] = useState(0)
  const supabase = createClient()

  useEffect(() => {
    if (user?.id) {
      fetchSubscription()
      // Mock usage data - v realu by se tahalo z databaze
      // Simulujeme reálné hodnoty - například 77 z 100 kreditů použito
      setUsedCredits(Math.floor(Math.random() * 100))
      setUsedPosts(Math.floor(Math.random() * 100))
    }
  }, [user?.id])

  const fetchSubscription = async () => {
    if (!user?.id) return

    const { data, error } = await supabase
      .from('subscriptions')
      .select('*')
      .eq('user_id', user.id)
      .single()

    if (data) {
      setSubscription(data)
    }
    setLoading(false)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  const planLimits = subscription?.plan_type 
    ? PLAN_LIMITS[subscription.plan_type] 
    : PLAN_LIMITS.individual

  const trialDaysLeft = subscription?.trial_end_date
    ? Math.max(0, Math.ceil((new Date(subscription.trial_end_date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)))
    : 0

  const creditsPercentage = (usedCredits / planLimits.aiCredits) * 100
  const postsPercentage = planLimits.maxPosts === 'unlimited' 
    ? 0 
    : (usedPosts / planLimits.maxPosts) * 100

  return (
    <div className="space-y-6">
      {/* Plan Status Card */}
      <Card className="border-primary/20">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="font-sans text-2xl">
                Plan: <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{planLimits.name}</span>
              </CardTitle>
              <CardDescription className="font-sans mt-1">
                {subscription?.is_trial ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Zkušební lhůta - zbývá {trialDaysLeft} dní
                  </span>
                ) : (
                  <span>{planLimits.price} Kč/měsíc</span>
                )}
              </CardDescription>
            </div>
            {subscription?.is_trial && (
              <div className="text-right">
                <div className="text-3xl font-bold text-primary">{trialDaysLeft}</div>
                <div className="text-xs text-muted-foreground">dní zbývá</div>
              </div>
            )}
          </div>
        </CardHeader>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* AI Credits */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="font-sans text-sm font-medium text-muted-foreground">
              AI Kredity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-foreground">{usedCredits}</span>
                <span className="text-sm text-muted-foreground">/ {planLimits.aiCredits}</span>
              </div>
              <Progress value={creditsPercentage} className="h-2" />
              <p className="text-xs text-muted-foreground">
                Zbývá {planLimits.aiCredits - usedCredits} kreditů
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Posts */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="font-sans text-sm font-medium text-muted-foreground">
              Naplánované posty
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-foreground">{usedPosts}</span>
                <span className="text-sm text-muted-foreground">
                  / {planLimits.maxPosts === 'unlimited' ? 'neomezeno' : planLimits.maxPosts}
                </span>
              </div>
              {planLimits.maxPosts !== 'unlimited' && (
                <Progress value={postsPercentage} className="h-2" />
              )}
              <p className="text-xs text-muted-foreground">
                {planLimits.maxPosts === 'unlimited' 
                  ? 'Neomezené plánování' 
                  : `Zbývá ${planLimits.maxPosts - usedPosts} postů`}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Channels */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="font-sans text-sm font-medium text-muted-foreground">
              Propojené kanály
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-foreground">0</span>
                <span className="text-sm text-muted-foreground">/ {planLimits.maxChannels}</span>
              </div>
              <Progress value={0} className="h-2" />
              <p className="text-xs text-muted-foreground">
                Možnost propojit {planLimits.maxChannels} kanálů
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Users */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="font-sans text-sm font-medium text-muted-foreground">
              Členové týmu
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-foreground">1</span>
                <span className="text-sm text-muted-foreground">/ {planLimits.maxUsers}</span>
              </div>
              <Progress value={(1 / planLimits.maxUsers) * 100} className="h-2" />
              <p className="text-xs text-muted-foreground">
                {planLimits.maxUsers === 1 ? 'Individuální plán' : `Možnost přidat ${planLimits.maxUsers - 1} členů`}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="font-sans text-lg">Co můžete dělat</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18"/><path d="M5 12h14"/></svg>
              </div>
              <div>
                <p className="font-sans font-medium text-foreground">Vytvořit plán</p>
                <p className="font-sans text-xs text-muted-foreground">Generujte obsah s AI</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/5 border border-accent/20">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
              </div>
              <div>
                <p className="font-sans font-medium text-foreground">Plánovat</p>
                <p className="font-sans text-xs text-muted-foreground">Spravujte kalendář</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/5 border border-secondary/20">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <div>
                <p className="font-sans font-medium text-foreground">Nastavení</p>
                <p className="font-sans text-xs text-muted-foreground">Upravit profil</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
