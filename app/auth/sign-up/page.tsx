'use client'

import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { GoogleAuthButton } from '@/components/auth/google-auth-button'

export default function Page() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createClient()
    setIsLoading(true)
    setError(null)

    if (password !== repeatPassword) {
      setError('Hesla se neshodují')
      setIsLoading(false)
      return
    }

    if (password.length < 6) {
      setError('Heslo musí mít alespoň 6 znaků')
      setIsLoading(false)
      return
    }

    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
          data: {
            email,
          },
        },
      })

      if (signUpError) {
        throw signUpError
      }

      // Pokud je uživatel vytvořen, naviguj na výběr plánu
      // Supabase pošle potvrzovací email
      router.push('/auth/select-plan')
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Došlo k chybě'
      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="font-sans text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Registrace
              </CardTitle>
              <CardDescription className="font-sans">
                Vytvořte si nový účet v Planlio
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignUp}>
                <div className="flex flex-col gap-6">
                  <GoogleAuthButton />
                  
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">Nebo emailem</span>
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="email" className="font-sans">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="vase@email.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="font-sans"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password" className="font-sans">
                      Heslo
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="font-sans"
                      placeholder="Alespoň 6 znaků"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="repeat-password" className="font-sans">
                      Potvrzení hesla
                    </Label>
                    <Input
                      id="repeat-password"
                      type="password"
                      required
                      value={repeatPassword}
                      onChange={(e) => setRepeatPassword(e.target.value)}
                      className="font-sans"
                      placeholder="Zopakujte heslo"
                    />
                  </div>
                  {error && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200">
                      <p className="font-sans text-sm text-red-800">{error}</p>
                    </div>
                  )}
                  <Button 
                    type="submit" 
                    className="font-sans w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Vytváření účtu...' : 'Zaregistrovat se'}
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm font-sans">
                  Již máte účet?{' '}
                  <Link
                    href="/auth/login"
                    className="text-primary hover:underline"
                  >
                    Přihlásit se
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
