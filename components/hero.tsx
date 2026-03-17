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
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-b from-pink-100 via-purple-200 to-blue-200"></div>
      
      {/* Soft overlay for depth */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-br from-pink-200/30 via-transparent to-blue-300/20 pointer-events-none"></div>

      {/* Soft animated blur circles for atmosphere */}
      <div className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-pink-300/15 rounded-full blur-3xl -z-20 animate-pulse" style={{ animationDuration: '6s' }}></div>
      <div className="absolute top-1/3 -right-1/4 w-80 h-80 bg-purple-300/10 rounded-full blur-3xl -z-20 animate-pulse" style={{ animationDuration: '7s', animationDelay: '1s' }}></div>
      <div className="absolute -bottom-1/4 left-1/3 w-96 h-96 bg-blue-300/15 rounded-full blur-3xl -z-20 animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>

      {/* Left Mockup - Large and prominent */}
      <div className="hidden 2xl:block absolute left-0 top-1/2 -translate-y-1/2 -z-10 2xl:-left-8">
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-br from-primary/40 via-secondary/20 to-transparent rounded-3xl blur-3xl opacity-80"></div>
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/60 w-80 h-96 transform hover:scale-105 transition-transform duration-500">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2017.%203.%202026%2016_37_56-4z48H8CqgP6woCv4lbqBO9eXdJhhDN.png"
              alt="Planlio content creation"
              width={320}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Right Mockup - Large and prominent */}
      <div className="hidden 2xl:block absolute right-0 top-1/2 -translate-y-1/2 -z-10 2xl:-right-8">
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-br from-accent/35 via-primary/15 to-transparent rounded-3xl blur-3xl opacity-70"></div>
          <div className="relative bg-white/95 rounded-3xl shadow-2xl overflow-hidden border border-white/70 w-80 h-96 transform hover:scale-105 transition-transform duration-500 backdrop-blur-sm">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CDe0P1I8kEWcKiQkpWTj5Tm0fnzFeV.png"
              alt="Planlio dashboard"
              width={320}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Fallback for smaller screens - smaller mockups on XL */}
      <div className="hidden xl:block 2xl:hidden absolute left-8 top-1/2 -translate-y-1/2 -z-10">
        <div className="relative">
          <div className="absolute -inset-3 bg-gradient-to-br from-primary/30 to-secondary/15 rounded-2xl blur-xl opacity-60"></div>
          <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-white/50 w-56 h-64">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2017.%203.%202026%2016_37_56-4z48H8CqgP6woCv4lbqBO9eXdJhhDN.png"
              alt="Planlio"
              width={224}
              height={280}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className="hidden xl:block 2xl:hidden absolute right-8 top-1/2 -translate-y-1/2 -z-10">
        <div className="relative">
          <div className="absolute -inset-3 bg-gradient-to-br from-accent/30 to-primary/15 rounded-2xl blur-xl opacity-60"></div>
          <div className="relative bg-white/90 rounded-2xl shadow-lg overflow-hidden border border-white/50 w-56 h-64 backdrop-blur-sm">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CDe0P1I8kEWcKiQkpWTj5Tm0fnzFeV.png"
              alt="Planlio dashboard"
              width={224}
              height={280}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex flex-col justify-center items-center px-4 py-20 sm:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/70 border border-white/80 mb-8 backdrop-blur-md shadow-lg hover:bg-white/80 transition-all">
            <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AI-Powered Planning
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight mb-6">
            <span className="text-balance bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-lg">
              AI Plánování Obsahu
            </span>
            <br />
            <span className="text-balance bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent drop-shadow-lg">
              Pro Sociální Sítě
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-foreground/75 max-w-2xl mx-auto mb-12 leading-relaxed">
            Automatizujte plánování vašeho obsahu. Použijte AI k vytváření nápadů, plánujte týdny obsahu a spravujte vše na jednom místě.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {user ? (
              <Link href="/app">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-xl">
                  Generátor Obsahu
                </Button>
              </Link>
            ) : (
              <>
                <Link href="/auth/sign-up">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-xl">
                    Začít 14-denní zkušební lhůtu
                  </Button>
                </Link>
                <Link href="#features">
                  <Button size="lg" variant="outline" className="border-2 border-white/50 hover:border-white/70 hover:bg-white/30 bg-white/20 backdrop-blur-md shadow-lg">
                    Zjistit více
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Decorative Floating Elements */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none -z-5">
        {/* Scattered sparkles with varied timing */}
        <div className="absolute top-1/4 left-1/3 text-5xl animate-pulse opacity-75" style={{ animationDuration: '2.5s' }}>✨</div>
        <div className="absolute top-3/4 right-1/4 text-3xl animate-pulse opacity-60" style={{ animationDelay: '0.7s', animationDuration: '3s' }}>✨</div>
        <div className="absolute top-2/5 right-1/3 text-4xl animate-pulse opacity-70" style={{ animationDelay: '1.2s', animationDuration: '2.8s' }}>✨</div>
        <div className="absolute bottom-1/3 left-1/4 text-3xl animate-pulse opacity-60" style={{ animationDelay: '0.3s', animationDuration: '3.2s' }}>✨</div>
        <div className="absolute top-1/2 right-20 text-2xl animate-pulse opacity-50" style={{ animationDelay: '1.5s', animationDuration: '3s' }}>✨</div>

        {/* Emoji floating card - bottom right */}
        <div className="absolute bottom-32 right-32 -z-5">
          <div className="bg-white rounded-2xl shadow-2xl p-6 border border-white/70 backdrop-blur-sm animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.2s' }}>
            <div className="flex items-center gap-4">
              <span className="text-6xl">😊</span>
              <span className="text-5xl">💬</span>
            </div>
          </div>
        </div>

        {/* Optional: Small decorative accent dots */}
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-secondary/30 rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '3.5s' }}></div>
      </div>
    </section>
  )
}




