'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useAuth } from '@/hooks/use-auth'
import { Hero } from '@/components/hero'

export default function LandingPage() {
  const { user } = useAuth()
  return (
    <main className="min-h-screen bg-background">
      <Hero user={user} />

      {/* Features Section */}
      <section id="features" className="px-4 py-20 sm:px-6 lg:px-8 border-t border-border">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-sans text-center text-3xl font-bold text-foreground sm:text-4xl">
            Vše, co potřebujete
          </h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'AI Generátor',
                description: 'Nechte AI vygenerovat nápady na obsah optimalizované pro vaše cílové publikum.',
                color: 'from-primary/20 to-primary/5',
              },
              {
                title: 'Plánování Kalendáře',
                description: 'Vizualizujte svůj obsah v měsíčním kalendáři a snadno přetahujte k úpravám.',
                color: 'from-secondary/20 to-secondary/5',
              },
              {
                title: 'Správa Více Platforem',
                description: 'Spravujte Instagram, Facebook, YouTube a více na jednom místě.',
                color: 'from-accent/20 to-accent/5',
              },
              {
                title: 'Úpravy v Reálném Čase',
                description: 'Upravujte obsah, obrázky a časy zveřejnění bez opuštění aplikace.',
                color: 'from-primary/20 to-primary/5',
              },
              {
                title: 'Návrhy Doby Zveřejnění',
                description: 'Dostávejte AI návrhy nejlepších časů pro zveřejnění vašeho obsahu.',
                color: 'from-secondary/20 to-secondary/5',
              },
              {
                title: '14-denní Zdarma Zkušební Lhůta',
                description: 'Vyzkoušejte Planlio zdarma po dobu 14 dní bez nutnosti zadávat kreditní kartu.',
                color: 'from-accent/20 to-accent/5',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className={`rounded-lg border border-border bg-gradient-to-br ${feature.color} p-6 hover:border-primary/50 transition-colors`}
              >
                <h3 className="font-sans text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="font-sans mt-2 text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-t border-border">
        <div className="mx-auto max-w-2xl text-center">
          {user ? (
            <>
              <h2 className="font-sans text-3xl font-bold text-foreground">
                Začněte s tvorbou obsahu
              </h2>
              <p className="font-sans mt-4 text-lg text-muted-foreground">
                Máte 14 dní zdarma. Začněte tvořit svůj obsah hned nyní.
              </p>
              <Link href="/app">
                <Button size="lg" className="font-sans mt-8 bg-primary hover:bg-primary/90">
                  Jít do Generátoru
                </Button>
              </Link>
            </>
          ) : (
            <>
              <h2 className="font-sans text-3xl font-bold text-foreground">
                Připraveni začít?
              </h2>
              <p className="font-sans mt-4 text-lg text-muted-foreground">
                Připojte se k tvůrcům obsahu, kteří již používají Planlio.
              </p>
              <Link href="/auth/sign-up">
                <Button size="lg" className="font-sans mt-8 bg-primary hover:bg-primary/90">
                  Začít 14-denní zkušební lhůtu
                </Button>
              </Link>
            </>
          )}
        </div>
      </section>
    </main>
  )
}
