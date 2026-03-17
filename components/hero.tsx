'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

interface HeroProps {
  user?: any
}

export function Hero({ user }: HeroProps) {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-pink-100 via-purple-150 to-blue-150">
      {/* Strong gradient background layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200/50 via-purple-200/30 to-blue-200/50 pointer-events-none"></div>

      {/* Animated blur elements */}
      <div className="absolute -top-1/3 -left-1/4 w-screen h-96 bg-pink-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-300/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '1s' }}></div>
      <div className="absolute -bottom-1/4 left-1/3 w-screen h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>

      {/* Left Mockup - Visible on large screens */}
      <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 z-10" style={{ left: '-60px' }}>
        <div className="relative">
          <div className="absolute -inset-8 bg-gradient-to-br from-primary/50 to-secondary/30 rounded-3xl blur-3xl opacity-90"></div>
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/70 w-72 h-80 transform hover:scale-110 transition-all duration-500">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2017.%203.%202026%2016_37_56-4z48H8CqgP6woCv4lbqBO9eXdJhhDN.png"
              alt="Planlio content creation interface"
              width={288}
              height={320}
              className="w-full h-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Right Mockup - Visible on large screens */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 z-10" style={{ right: '-60px' }}>
        <div className="relative">
          <div className="absolute -inset-8 bg-gradient-to-br from-accent/50 to-primary/30 rounded-3xl blur-3xl opacity-90"></div>
          <div className="relative bg-white/97 rounded-3xl shadow-2xl overflow-hidden border border-white/80 w-72 h-80 transform hover:scale-110 transition-all duration-500 backdrop-blur-sm">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CDe0P1I8kEWcKiQkpWTj5Tm0fnzFeV.png"
              alt="Planlio dashboard interface"
              width={288}
              height={320}
              className="w-full h-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Main Content - Always visible and centered */}
      <div className="relative z-20 h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/80 border border-white/90 mb-8 backdrop-blur-lg shadow-lg hover:bg-white/90 transition-all duration-300">
            <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AI-Powered Planning
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight mb-8 text-balance">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-lg">
              AI Plánování Obsahu
            </span>
            <br />
            <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent drop-shadow-lg">
              Pro Sociální Sítě
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Automatizujte plánování vašeho obsahu. Použijte AI k vytváření nápadů, plánujte týdny obsahu a spravujte vše na jednom místě.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {user ? (
              <Link href="/app">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-xl hover:shadow-2xl transition-all rounded-lg px-8">
                  Generátor Obsahu
                </Button>
              </Link>
            ) : (
              <>
                <Link href="/auth/sign-up">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-xl hover:shadow-2xl transition-all rounded-lg px-8">
                    Začít 14-denní zkušební lhůtu
                  </Button>
                </Link>
                <Link href="#features">
                  <Button size="lg" variant="outline" className="border-2 border-white/60 hover:border-white/80 hover:bg-white/50 bg-white/40 backdrop-blur-lg rounded-lg px-8 shadow-lg transition-all">
                    Zjistit více
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Decorative Floating Elements - visible on large screens */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {/* Sparkles scattered around */}
        <div className="absolute top-1/4 left-1/3 text-5xl animate-pulse opacity-80" style={{ animationDuration: '2.5s' }}>✨</div>
        <div className="absolute bottom-1/3 right-1/4 text-4xl animate-pulse opacity-70" style={{ animationDelay: '0.7s', animationDuration: '3s' }}>✨</div>
        <div className="absolute top-2/5 right-1/3 text-4xl animate-pulse opacity-75" style={{ animationDelay: '1.2s', animationDuration: '2.8s' }}>✨</div>
        <div className="absolute bottom-1/4 left-1/4 text-3xl animate-pulse opacity-70" style={{ animationDelay: '0.3s', animationDuration: '3.2s' }}>✨</div>
        <div className="absolute top-1/3 right-1/4 text-3xl animate-pulse opacity-65" style={{ animationDelay: '1.5s', animationDuration: '3s' }}>✨</div>

        {/* Floating emoji card */}
        <div className="absolute bottom-32 right-24 z-20">
          <div className="bg-white rounded-2xl shadow-2xl p-6 border border-white/80 backdrop-blur-sm animate-bounce hover:shadow-3xl transition-shadow" style={{ animationDuration: '3.5s', animationDelay: '0.2s' }}>
            <div className="flex items-center gap-5">
              <span className="text-6xl hover:scale-110 transition-transform">😊</span>
              <span className="text-5xl hover:scale-110 transition-transform">💬</span>
            </div>
          </div>
        </div>

        {/* Subtle accent dots */}
        <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-primary/50 rounded-full animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-secondary/40 rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '3.5s' }}></div>
      </div>
    </section>
  )
}





