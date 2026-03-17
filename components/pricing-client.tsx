'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState } from 'react'

export function PricingClient() {
  const [isAnnual, setIsAnnual] = useState(false)

  // Měsíční ceny
  const monthlyPrices = {
    individual: 199,
    team: 990,
    agency: 1990,
  }

  // Roční ceny s 15% slevou (to je cena za měsíc při ročním čerpání)
  const annualPrices = {
    individual: Math.round(monthlyPrices.individual * 0.85),
    team: Math.round(monthlyPrices.team * 0.85),
    agency: Math.round(monthlyPrices.agency * 0.85),
  }

  const prices = isAnnual ? annualPrices : monthlyPrices

  const plans = [
    {
      name: 'Individuální',
      description: 'Pro profesionály a podnikatele',
      price: prices.individual,
      billing: isAnnual ? ' Kč/měsíc (fakturováno ročně)' : ' Kč/měsíc',
      features: [
        'Plánování a generování obsahu',
        '100 naplánovaných postů / měsíc',
        '4 kanály (Instagram, IG Stories, Facebook, YouTube)',
        '1 uživatel',
        '100 AI kreditů / měsíc',
        'Základní šablony + rychlé úpravy',
        'Export textů + kopírování jedním klikem',
      ],
      cta: 'Začít 14-denní zkušební lhůtu',
      href: `/auth/sign-up?plan=individual&billing=${isAnnual ? 'annual' : 'monthly'}`,
      highlighted: false,
      badge: null,
    },
    {
      name: 'Tým',
      description: 'Ideální pro malé týmy',
      price: prices.team,
      billing: isAnnual ? ' Kč/měsíc (fakturováno ročně)' : ' Kč/měsíc',
      features: [
        'Plánování a generování obsahu',
        'Neomezené plánování postů',
        '8 kanálů (včetně TikTok)',
        '4 uživatelé',
        '500 AI kreditů / měsíc',
        'Role v týmu (Admin / Editor)',
        'Pokročilé šablony + regenerace týdne',
        'Sdílený kalendář + schvalování (Draft → Ready)',
      ],
      cta: 'Začít 14-denní zkušební lhůtu',
      href: `/auth/sign-up?plan=team&billing=${isAnnual ? 'annual' : 'monthly'}`,
      highlighted: true,
      badge: 'Populární',
    },
    {
      name: 'Agentura',
      description: 'Pro agentury s extra oprávněními',
      price: prices.agency,
      billing: isAnnual ? ' Kč/měsíc (fakturováno ročně)' : ' Kč/měsíc',
      features: [
        'Plánování a generování obsahu',
        'Neomezené plánování postů',
        '16 kanálů (včetně TikTok)',
        '8 uživatelů',
        '1000 AI kreditů / měsíc',
        'Pokročilé role a oprávnění + klientský přístup',
        'Šablony pro více značek/klientů',
        'Prioritní podpora',
        'Volitelně: White-label / vlastní branding',
      ],
      cta: 'Začít 14-denní zkušební lhůtu',
      href: `/auth/sign-up?plan=agency&billing=${isAnnual ? 'annual' : 'monthly'}`,
      highlighted: false,
      badge: null,
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 border-b border-primary/20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Left Side - Info */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="font-sans text-sm font-medium text-primary">Najděte svůj ideální plán</span>
              </div>
              <h1 className="font-sans text-4xl font-bold text-foreground sm:text-5xl">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Jednoduchá a Transparentní Cena
                </span>
              </h1>
              <p className="font-sans mt-6 text-lg text-muted-foreground">
                Vyberte plán, který odpovídá vašim cílům a vaší přítomnosti na sociálních médiích s Planlio.
              </p>

              {/* Billing Cycle Toggle */}
              <div className="mt-8">
                <p className="font-sans text-sm font-medium text-foreground mb-3">Vyberte Fakturační Cyklus</p>
                <div className="inline-flex gap-2 bg-muted p-1 rounded-lg">
                  <button
                    onClick={() => setIsAnnual(false)}
                    className={`px-4 py-2 rounded-md font-sans font-medium transition-all ${
                      !isAnnual
                        ? 'bg-gradient-to-r from-primary to-secondary text-white'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Měsíčně
                  </button>
                  <button
                    onClick={() => setIsAnnual(true)}
                    className={`px-4 py-2 rounded-md font-sans font-medium transition-all ${
                      isAnnual
                        ? 'bg-gradient-to-r from-primary to-secondary text-white'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Ročně
                    {isAnnual && <span className="ml-2 text-xs font-bold">(-15%)</span>}
                  </button>
                </div>
              </div>

              {/* Enterprise */}
              <div className="mt-12 p-6 rounded-lg border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
                <h3 className="font-sans text-lg font-bold text-foreground">Podnikový plán</h3>
                <p className="font-sans text-sm text-muted-foreground mt-2">Vlastní cena</p>
                <p className="font-sans text-sm text-muted-foreground mt-3">Pokročilá podniková řešení</p>
                <Link href="/auth/sign-up?plan=enterprise">
                  <Button variant="outline" className="font-sans mt-4 border-primary/50 hover:bg-primary/10">
                    Zarezervovat demo
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Side - Pricing Cards */}
            <div className="space-y-6">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl border-2 p-6 transition-all duration-300 relative overflow-hidden ${
                    plan.highlighted
                      ? 'border-accent bg-gradient-to-br from-foreground/5 via-accent/10 to-accent/5 shadow-xl shadow-accent/20 ring-2 ring-accent'
                      : 'border-border bg-card hover:border-primary/50'
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute top-0 right-0 px-4 py-2 bg-gradient-to-r from-accent to-secondary text-white font-sans text-sm font-bold rounded-bl-lg">
                      {plan.badge}
                    </div>
                  )}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-sans text-2xl font-bold text-foreground">{plan.name}</h3>
                      <p className="font-sans text-sm text-muted-foreground mt-1">{plan.description}</p>
                      <div className="mt-4">
                        <span className="font-sans text-4xl font-bold text-foreground">{plan.price}</span>
                        <span className="font-sans text-muted-foreground ml-2">{plan.billing}</span>
                      </div>
                    </div>
                  </div>
                  <Link href={plan.href}>
                    <Button
                      className={`font-sans w-full mt-6 font-medium ${
                        plan.highlighted
                          ? 'bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90 text-white'
                          : 'border-primary/50 hover:bg-primary/10'
                      }`}
                      variant={plan.highlighted ? 'default' : 'outline'}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full Features List */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 border-b border-primary/20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-sans text-center text-3xl font-bold text-foreground mb-12">
            Porovnání Funkcí
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <div key={plan.name} className={`rounded-lg border p-6 ${plan.highlighted ? 'border-accent bg-accent/5' : 'border-border'}`}>
                <h3 className="font-sans text-xl font-bold text-foreground mb-6">{plan.name}</h3>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg className="h-5 w-5 flex-shrink-0 text-accent mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="font-sans text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-sans text-center text-3xl font-bold text-foreground mb-12">
            Často Kladené Otázky
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Mohu změnit svůj plán?',
                a: 'Ano, kdykoliv. Upgrade nebo downgrade vašeho plánu kdykoliv chcete bez penalizace.',
              },
              {
                q: 'Jaká je politika vrácení peněz?',
                a: '30 dní záruka vrácení peněz. Pokud nejste spokojeni, vrátíme vám 100% vašich peněz.',
              },
              {
                q: 'Co jsou AI kredity?',
                a: 'AI kredity se používají pro generování obsahu pomocí AI. Každý plán obsahuje měsíční přídělení.',
              },
              {
                q: 'Jaké je omezení počtu kanálů?',
                a: 'Individuální má 4 kanály, Tým má 8 kanálů a Agentura má přístup ke 16 kanálům.',
              },
              {
                q: 'Je dostupná podpora?',
                a: 'Ano, všechny plány obsahují email support. Tým a Agentura mají prioritní support.',
              },
              {
                q: 'Nabízíte API?',
                a: 'Ano, API je dostupné v Agentuře. Kontaktujte nás pro podnikové řešení.',
              },
            ].map((item, idx) => (
              <details key={idx} className="group rounded-lg border border-border bg-card p-6 hover:border-primary/50 transition-colors">
                <summary className="flex cursor-pointer items-center justify-between font-sans font-semibold text-foreground">
                  {item.q}
                  <span className="transition group-open:rotate-180">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </summary>
                <p className="font-sans text-muted-foreground mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-t border-primary/20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-sans text-3xl font-bold text-foreground">
            Připraveni začít?
          </h2>
          <p className="font-sans mt-4 text-lg text-muted-foreground">
            Připojte se k tvůrcům obsahu, kteří již používají Planlio. Žádná kreditní karta není potřeba.
          </p>
          <Link href="/auth/sign-up">
            <Button size="lg" className="font-sans mt-8 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              Začít 14-denní zkušební lhůtu
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
