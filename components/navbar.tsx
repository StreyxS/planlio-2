'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/use-auth'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { ChannelsDropdown } from './channels-dropdown'

export function Navbar() {
  const { user } = useAuth()
  const router = useRouter()

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-primary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="font-sans text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Planlio
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden gap-8 md:flex items-center">
          {!user && (
            <>
              <ChannelsDropdown />
              <Link href="/pricing" className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">
                Ceník
              </Link>
              <a href="#contact" className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">
                Kontakt
              </a>
            </>
          )}
          {user && (
            <>
              <Link href="/app" className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">
                Generátor Obsahu
              </Link>
              <ChannelsDropdown />
              <Link href="/pricing" className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">
                Ceník
              </Link>
            </>
          )}
        </div>

        {/* Auth Buttons */}
        <div className="flex gap-3 items-center">
          {!user ? (
            <>
              <Link href="/auth/login">
                <Button variant="ghost" className="font-sans hidden sm:inline-flex text-foreground hover:text-primary">
                  Přihlásit se
                </Button>
              </Link>
              <Link href="/auth/sign-up">
                <Button className="font-sans bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                  Začít 14-denní zkušební lhůtu
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/app">
                <Button className="font-sans bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                  Generátor Obsahu
                </Button>
              </Link>
              <Button 
                onClick={handleLogout} 
                variant="outline"
                className="font-sans border-primary/30 hover:bg-primary/10"
              >
                Odhlásit se
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
