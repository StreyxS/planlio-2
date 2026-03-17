'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

interface HeroProps {
  user?: any
}

export function Hero({ user }: HeroProps) {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-background via-background/98 to-background"></div>
      
      {/* Decorative blur elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-h-96 bg-gradient-to-b from-primary/10 via-secondary/5 to-transparent blur-3xl -z-10"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/8 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/8 rounded-full blur-3xl -z-10"></div>

      {/* Left mockup - positioned absolutely */}
      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 -z-10">
        <div className="relative w-72 h-80">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-3xl blur-2xl opacity-60"></div>
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/40 transform hover:scale-105 transition-transform duration-300">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2017.%203.%202026%2016_37_56-4z48H8CqgP6woCv4lbqBO9eXdJhhDN.png"
              alt="Planlio app preview"
              width={320}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Right mockup - positioned absolutely */}
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 -z-10">
        <div className="relative w-72 h-80">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/20 rounded-3xl blur-2xl opacity-60"></div>
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/40 transform hover:scale-105 transition-transform duration-300">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CDe0P1I8kEWcKiQkpWTj5Tm0fnzFeV.png"
              alt="Planlio dashboard preview"
              width={320}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Center content */}
      <div className="mx-auto max-w-4xl relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 mb-6 backdrop-blur-sm hover:border-primary/50 transition-colors">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="font-sans text-sm font-medium text-primary">AI-Powered Planning</span>
          </div>

          {/* Heading */}
          <h1 className="font-sans text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            <span className="text-balance bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              AI Plánování Obsahu
            </span>
            <br />
            <span className="text-balance bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
              Pro Sociální Sítě
            </span>
          </h1>

          {/* Description */}
          <p className="font-sans mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            Automatizujte plánování vašeho obsahu. Použijte AI k vytváření nápadů, plánujte týdny obsahu a spravujte vše na jednom místě.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            {user ? (
              <Link href="/app">
                <Button 
                  size="lg" 
                  className="font-sans w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg text-white border-0"
                >
                  Generátor Obsahu
                </Button>
              </Link>
            ) : (
              <>
                <Link href="/auth/sign-up">
                  <Button 
                    size="lg" 
                    className="font-sans w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg text-white border-0"
                  >
                    Začít 14-denní zkušební lhůtu
                  </Button>
                </Link>
                <Link href="#features">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="font-sans w-full sm:w-auto border-foreground/20 hover:bg-foreground/5 bg-background/40 backdrop-blur-sm"
                  >
                    Zjistit více
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Floating decorative cards */}
      <div className="hidden lg:block">
        {/* Bottom left card - Try posting at 18:00 */}
        <div className="absolute bottom-32 left-1/4 -translate-x-1/2 bg-white rounded-2xl shadow-lg p-4 border border-white/50 backdrop-blur-sm animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
          <div className="flex items-center gap-3 whitespace-nowrap">
            <span className="text-3xl">🌅</span>
            <p className="text-sm font-medium text-foreground">Try posting at 18:00</p>
          </div>
        </div>

        {/* Bottom right card - emoji icons */}
        <div className="absolute bottom-40 right-1/4 translate-x-1/2 bg-white rounded-2xl shadow-lg p-4 border border-white/50 backdrop-blur-sm animate-bounce" style={{ animationDelay: '0.2s', animationDuration: '3s' }}>
          <div className="flex items-center gap-3">
            <span className="text-4xl">😊</span>
            <span className="text-3xl">💬</span>
          </div>
        </div>

        {/* Sparkles and decorative elements */}
        <div className="absolute top-1/3 left-1/4 text-3xl animate-pulse">✨</div>
        <div className="absolute top-2/3 right-1/4 text-2xl animate-pulse" style={{ animationDelay: '0.5s' }}>✨</div>
        <div className="absolute top-1/2 left-1/3 text-lg animate-pulse text-primary/30" style={{ animationDelay: '1s' }}>+</div>
      </div>
    </section>
  )
}

