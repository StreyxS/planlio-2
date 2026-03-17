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
      {/* Beautiful Gradient Background */}
      <div className="absolute inset-0 -z-20">
        {/* Primary gradient: pink → purple → blue */}
        <div className="absolute inset-0 bg-gradient-to-b from-pink-100 via-purple-100 to-blue-100"></div>
        
        {/* Secondary overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200/40 via-purple-200/20 to-blue-200/40"></div>
      </div>

      {/* Animated blur elements for premium feel */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-pink-300/25 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-300/25 rounded-full blur-3xl"></div>
      </div>

      <div className="relative min-h-screen flex flex-col justify-center items-center px-4 py-20 sm:py-24 lg:py-32">
        {/* Left Mockup - Desktop only (hidden on smaller screens) */}
        <div className="hidden xl:block absolute left-0 top-1/2 -translate-y-1/2 xl:left-4 2xl:left-16 -z-10">
          <div className="relative">
            {/* Glowing shadow effect */}
            <div className="absolute -inset-6 bg-gradient-to-br from-primary/40 to-secondary/25 rounded-3xl blur-3xl opacity-70"></div>
            
            {/* Card with shine */}
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/70 backdrop-blur-xl w-80 transform hover:scale-110 transition-transform duration-500 ease-out">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2017.%203.%202026%2016_37_56-4z48H8CqgP6woCv4lbqBO9eXdJhhDN.png"
                alt="Planlio content creation interface"
                width={320}
                height={420}
                className="w-full h-auto"
                priority
              />
              {/* Glass shine overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Right Mockup - Desktop only */}
        <div className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 xl:right-4 2xl:right-16 -z-10">
          <div className="relative">
            {/* Glowing shadow effect */}
            <div className="absolute -inset-6 bg-gradient-to-br from-accent/40 to-primary/25 rounded-3xl blur-3xl opacity-70"></div>
            
            {/* Card with shine */}
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/70 backdrop-blur-xl w-80 transform hover:scale-110 transition-transform duration-500 ease-out">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CDe0P1I8kEWcKiQkpWTj5Tm0fnzFeV.png"
                alt="Planlio dashboard interface"
                width={320}
                height={420}
                className="w-full h-auto"
                priority
              />
              {/* Glass shine overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Center Content - Main Hero Text */}
        <div className="max-w-4xl mx-auto text-center z-20 relative">
          {/* Badge with premium styling */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/70 border border-white/90 mb-8 backdrop-blur-lg shadow-lg hover:bg-white/80 transition-all duration-300 group">
            <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse group-hover:scale-125 transition-transform"></span>
            <span className="font-semibold text-sm bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              AI-Powered Planning
            </span>
          </div>

          {/* Main Heading - Premium Typography */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-tight mb-8 text-balance">
            <span className="inline-block">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-xl">
                AI Plánování Obsahu
              </span>
            </span>
            <br />
            <span className="inline-block">
              <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent drop-shadow-xl">
                Pro Sociální Sítě
              </span>
            </span>
          </h1>

          {/* Description - Refined Typography */}
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Automatizujte plánování vašeho obsahu. Použijte AI k vytváření nápadů, plánujte týdny obsahu a spravujte vše na jednom místě.
          </p>

          {/* CTA Buttons - Premium Styling */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {user ? (
              <Link href="/app" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/95 hover:to-secondary/95 text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full px-8 text-base font-semibold"
                >
                  Generátor Obsahu
                </Button>
              </Link>
            ) : (
              <>
                <Link href="/auth/sign-up" className="w-full sm:w-auto">
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/95 hover:to-secondary/95 text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full px-8 text-base font-semibold"
                  >
                    Začít 14-denní zkušební lhůtu
                  </Button>
                </Link>
                <Link href="#features" className="w-full sm:w-auto">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full border-2 border-white/60 hover:border-white/80 hover:bg-white/50 bg-white/30 backdrop-blur-lg rounded-full px-8 text-base font-semibold shadow-lg transition-all duration-300"
                  >
                    Zjistit více
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Decorative Floating Elements - Desktop only */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          {/* Scattered sparkles with staggered animations */}
          <div className="absolute top-1/4 left-1/3 text-5xl animate-pulse opacity-80" style={{ animationDuration: '2.5s' }}>✨</div>
          <div className="absolute top-2/3 right-1/3 text-4xl animate-pulse opacity-60" style={{ animationDelay: '0.7s', animationDuration: '3s' }}>✨</div>
          <div className="absolute top-1/3 right-1/4 text-3xl animate-pulse opacity-70" style={{ animationDelay: '1.2s', animationDuration: '2.5s' }}>✨</div>
          <div className="absolute bottom-1/3 left-1/4 text-3xl animate-pulse opacity-60" style={{ animationDelay: '0.3s', animationDuration: '3s' }}>✨</div>

          {/* Floating emoji card - bottom right corner */}
          <div className="absolute bottom-24 right-20 -z-5">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-white/70 backdrop-blur-xl animate-bounce" style={{ animationDelay: '0.3s', animationDuration: '3.5s' }}>
              <div className="flex items-center gap-5">
                <span className="text-6xl">😊</span>
                <span className="text-5xl">💬</span>
              </div>
            </div>
          </div>

          {/* Optional subtle decorative dots */}
          <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
          <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-secondary/30 rounded-full animate-pulse" style={{ animationDelay: '1.2s', animationDuration: '3.5s' }}></div>
        </div>
      </div>
    </section>
  )
}


