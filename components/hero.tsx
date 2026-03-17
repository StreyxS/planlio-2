'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

interface HeroProps {
  user?: any
}

export function Hero({ user }: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-pink-100 via-purple-100 to-blue-100"></div>

      {/* Left Mockup - Background decoration */}
      <div className="hidden xl:block absolute left-0 top-1/2 -translate-y-1/2 -z-10 xl:left-6">
        <div className="relative w-64 h-80">
          <div className="absolute -inset-3 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-white/50">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2017.%203.%202026%2016_37_56-4z48H8CqgP6woCv4lbqBO9eXdJhhDN.png"
              alt="Planlio content"
              width={256}
              height={320}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>

      {/* Right Mockup - Background decoration */}
      <div className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 -z-10 xl:right-6">
        <div className="relative w-64 h-80">
          <div className="absolute -inset-3 bg-gradient-to-br from-accent/30 to-primary/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-white/50">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CDe0P1I8kEWcKiQkpWTj5Tm0fnzFeV.png"
              alt="Planlio dashboard"
              width={256}
              height={320}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>

      {/* Main Content - Clean and Centered */}
      <div className="relative min-h-screen flex flex-col justify-center items-center px-4 py-20 sm:py-24 lg:py-32 z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/40 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-primary">AI-Powered Planning</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
            <span className="text-balance bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              AI Plánování Obsahu
            </span>
            <br />
            <span className="text-balance bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
              Pro Sociální Sítě
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Automatizujte plánování vašeho obsahu. Použijte AI k vytváření nápadů, plánujte týdny obsahu a spravujte vše na jednom místě.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {user ? (
              <Link href="/app">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg">
                  Generátor Obsahu
                </Button>
              </Link>
            ) : (
              <>
                <Link href="/auth/sign-up">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg">
                    Začít 14-denní zkušební lhůtu
                  </Button>
                </Link>
                <Link href="#features">
                  <Button size="lg" variant="outline" className="border-foreground/30 hover:bg-foreground/5 bg-background/50 backdrop-blur-sm">
                    Zjistit více
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none -z-5">
        {/* Sparkles */}
        <div className="absolute top-1/4 left-1/3 text-4xl animate-pulse opacity-70">✨</div>
        <div className="absolute top-2/3 right-1/4 text-3xl animate-pulse opacity-60" style={{ animationDelay: '0.5s' }}>✨</div>
        <div className="absolute top-1/3 right-1/3 text-2xl animate-pulse opacity-50" style={{ animationDelay: '1s' }}>✨</div>
        <div className="absolute bottom-1/3 left-1/4 text-3xl animate-pulse opacity-60" style={{ animationDelay: '1.5s' }}>✨</div>

        {/* Emoji floating card */}
        <div className="absolute bottom-24 right-20">
          <div className="bg-white rounded-2xl shadow-lg p-5 border border-white/60 backdrop-blur-sm animate-bounce">
            <div className="flex items-center gap-4">
              <span className="text-5xl">😊</span>
              <span className="text-4xl">💬</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



