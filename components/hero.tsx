'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

interface HeroProps {
  user?: any
}

export function Hero({ user }: HeroProps) {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/95 to-background">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-b from-primary/20 via-secondary/10 to-transparent blur-3xl"></div>
      </div>

      {/* Decorative blur elements */}
      <div className="absolute -top-40 left-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl -z-10 opacity-60"></div>
      <div className="absolute -bottom-40 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl -z-10 opacity-60"></div>
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10 opacity-40"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Mockup - Hidden on mobile, visible on lg */}
          <div className="hidden lg:flex justify-end">
            <div className="relative w-80 h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/50 transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2017.%203.%202026%2016_37_56-4z48H8CqgP6woCv4lbqBO9eXdJhhDN.png"
                  alt="Planlio app preview"
                  width={320}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
                {/* Floating card indicator */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-lg px-3 py-2 shadow-lg">
                  <p className="text-xs font-medium text-red-500">❤ 240</p>
                </div>
              </div>
            </div>
          </div>

          {/* Center Content */}
          <div className="text-center lg:col-span-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 mb-6 backdrop-blur-sm hover:border-primary/50 transition-colors">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="font-sans text-sm font-medium text-primary">AI-Powered Planning</span>
            </div>

            {/* Heading */}
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              <span className="text-balance">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  AI Plánování
                </span>
              </span>
              <span className="block text-balance">
                <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
                  Obsahu
                </span>
              </span>
              <span className="block text-balance text-foreground">
                Pro Sociální Sítě
              </span>
            </h1>

            {/* Description */}
            <p className="font-sans mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-md mx-auto">
              Automatizujte plánování vašeho obsahu. Použijte AI k vytváření nápadů, plánujte týdny obsahu a spravujte vše na jednom místě.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
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

          {/* Right Mockup - Hidden on mobile, visible on lg */}
          <div className="hidden lg:flex justify-start">
            <div className="relative w-80 h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/50 transform hover:scale-105 transition-transform duration-300">
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
        </div>

        {/* Decorative floating elements - visible on lg */}
        <div className="hidden lg:block">
          {/* Floating card - bottom left */}
          <div className="absolute bottom-20 left-20 bg-white rounded-xl shadow-lg p-4 border border-white/50 animate-bounce" style={{ animationDelay: '0s' }}>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌅</span>
              <p className="text-sm font-medium text-foreground">Try posting at 18:00</p>
            </div>
          </div>

          {/* Floating card - bottom right */}
          <div className="absolute bottom-32 right-20 bg-white rounded-xl shadow-lg p-3 border border-white/50 animate-bounce" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-2">
              <span className="text-3xl">😊</span>
              <span className="text-2xl">💬</span>
            </div>
          </div>

          {/* Sparkles */}
          <div className="absolute top-40 left-1/4 text-2xl animate-pulse">✨</div>
          <div className="absolute top-60 right-1/4 text-xl animate-pulse" style={{ animationDelay: '0.5s' }}>✨</div>
          <div className="absolute bottom-40 left-1/3 text-lg animate-pulse" style={{ animationDelay: '1s' }}>+</div>
        </div>
      </div>
    </section>
  )
}
