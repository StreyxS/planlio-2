'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

interface HeroProps {
  user?: any
}

export function Hero({ user }: HeroProps) {
  return (
    <section className="relative w-full bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/40 via-purple-100/20 to-blue-100/40 pointer-events-none"></div>
      
      {/* Subtle animated blur circles */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
      <div className="absolute top-1/3 -right-32 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '1s' }}></div>
      <div className="absolute -bottom-20 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>

      {/* Main content container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left mockup - hidden on small screens */}
          <div className="hidden lg:flex justify-end lg:col-span-1">
            <div className="relative w-64 h-72">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/35 to-secondary/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-white/60 hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2017.%203.%202026%2016_37_56-4z48H8CqgP6woCv4lbqBO9eXdJhhDN.png"
                  alt="Planlio content creation"
                  width={256}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Center content */}
          <div className="lg:col-span-1 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-white/80 mb-6 backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AI-Powered Planning
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                AI Plánování
              </span>
              <br />
              <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
                Obsahu Pro
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
                Sociální Sítě
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-foreground/70 max-w-md mx-auto mb-8 leading-relaxed">
              Automatizujte plánování vašeho obsahu. Použijte AI k vytváření nápadů, plánujte týdny obsahu a spravujte vše na jednom místě.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {user ? (
                <Link href="/app">
                  <Button size="sm" className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg">
                    Generátor Obsahu
                  </Button>
                </Link>
              ) : (
                <>
                  <Link href="/auth/sign-up">
                    <Button size="sm" className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg">
                      Začít zkušební lhůtu
                    </Button>
                  </Link>
                  <Link href="#features">
                    <Button size="sm" variant="outline" className="w-full sm:w-auto border-foreground/30 hover:bg-foreground/5">
                      Zjistit více
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Right mockup - hidden on small screens */}
          <div className="hidden lg:flex justify-start lg:col-span-1">
            <div className="relative w-64 h-72">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/35 to-primary/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-white/95 rounded-2xl shadow-xl overflow-hidden border border-white/70 hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CDe0P1I8kEWcKiQkpWTj5Tm0fnzFeV.png"
                  alt="Planlio dashboard"
                  width={256}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements - visible on lg screens */}
        <div className="hidden lg:block mt-12 relative">
          {/* Sparkles */}
          <div className="absolute top-0 left-1/4 text-4xl animate-pulse opacity-70" style={{ animationDuration: '2.5s' }}>✨</div>
          <div className="absolute top-1/2 right-1/4 text-3xl animate-pulse opacity-60" style={{ animationDelay: '0.7s', animationDuration: '3s' }}>✨</div>
          <div className="absolute bottom-0 right-1/3 text-3xl animate-pulse opacity-65" style={{ animationDelay: '1.2s', animationDuration: '2.8s' }}>✨</div>

          {/* Floating emoji card */}
          <div className="absolute -bottom-24 right-12">
            <div className="bg-white rounded-xl shadow-lg p-4 border border-white/70 backdrop-blur-sm animate-bounce" style={{ animationDuration: '3.5s' }}>
              <div className="flex items-center gap-3">
                <span className="text-4xl">😊</span>
                <span className="text-3xl">💬</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}






