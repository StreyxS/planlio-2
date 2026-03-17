'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { GeneratorForm } from '@/components/app/generator-form'
import { PlanCalendarView } from '@/components/app/plan-calendar-view'
import { PlanListView } from '@/components/app/plan-list-view'
import { SubscriptionDashboard } from '@/components/app/subscription-dashboard'
import { useAuth } from '@/hooks/use-auth'
import { generateMockPlans, type Plan } from '@/lib/mock-data'

export default function AppPage() {
  const { user, loading } = useAuth()
  const [plans, setPlans] = useState<Plan[]>(() => {
    if (user?.id) {
      return generateMockPlans(user.id, 3)
    }
    return []
  })
  const [viewMode, setViewMode] = useState<'calendar' | 'list'>('calendar')
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(plans[0] || null)

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="font-sans text-muted-foreground">Načítání...</p>
        </div>
      </div>
    )
  }

  const handleGeneratePlan = () => {
    if (!user?.id) return

    const now = new Date()
    const newPlan = generateMockPlans(user.id, 1)[0]
    setPlans([newPlan, ...plans])
    setSelectedPlan(newPlan)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 border-b border-primary/20 pb-8">
          <h1 className="font-sans text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Obsah Plánování
          </h1>
          <p className="font-sans mt-2 text-muted-foreground">
            Spravujte a plánujte váš obsah na všech platformách.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="generator" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 bg-secondary/10 border border-secondary/30">
            <TabsTrigger value="generator" className="font-sans data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Generátor
            </TabsTrigger>
            <TabsTrigger value="plans" className="font-sans data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Moje Plány
            </TabsTrigger>
            <TabsTrigger value="dashboard" className="font-sans data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Dashboard
            </TabsTrigger>
          </TabsList>

          {/* Generator Tab */}
          <TabsContent value="generator">
            <GeneratorForm onGeneratePlan={handleGeneratePlan} />
          </TabsContent>

          {/* Plans Tab */}
          <TabsContent value="plans" className="space-y-6">
            {/* View Mode Selector */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'calendar' ? 'default' : 'outline'}
                onClick={() => setViewMode('calendar')}
                className={`font-sans ${viewMode === 'calendar' ? 'bg-primary hover:bg-primary/90' : 'border-primary/30'}`}
              >
                Kalendář
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                onClick={() => setViewMode('list')}
                className={`font-sans ${viewMode === 'list' ? 'bg-primary hover:bg-primary/90' : 'border-primary/30'}`}
              >
                Seznam
              </Button>
            </div>

            {/* Plans List Selector */}
            {plans.length > 0 && (
              <div className="space-y-4">
                <h3 className="font-sans text-lg font-semibold text-foreground">Vaše plány:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {plans.map((plan) => (
                    <button
                      key={plan.id}
                      onClick={() => setSelectedPlan(plan)}
                      className={`text-left p-4 rounded-lg border-2 transition-all ${
                        selectedPlan?.id === plan.id
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="space-y-2">
                        <h4 className="font-sans font-bold text-foreground">{plan.name}</h4>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span>📅 {new Date(plan.startDate).toLocaleDateString('cs-CZ')}</span>
                          <span>📝 {plan.posts?.length || 0} postů</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Views */}
            {selectedPlan ? (
              <>
                {viewMode === 'calendar' ? (
                  <PlanCalendarView plan={selectedPlan} />
                ) : (
                  <PlanListView plan={selectedPlan} />
                )}
              </>
            ) : (
              <div className="rounded-lg border border-border bg-card p-12 text-center">
                <p className="font-sans text-muted-foreground">
                  Nejdříve generujte plán obsahu pomocí generátoru.
                </p>
              </div>
            )}
          </TabsContent>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard">
            <SubscriptionDashboard />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
