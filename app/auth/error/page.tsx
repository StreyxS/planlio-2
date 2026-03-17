import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; description?: string }>
}) {
  const params = await searchParams

  const getErrorMessage = (error?: string, description?: string) => {
    if (description) return description
    
    const messages: Record<string, string> = {
      access_denied: 'Přístup byl odepřen. Zkuste znovu.',
      otp_expired: 'Potvrzovací odkaz vypršel. Zaregistrujte se prosím znovu.',
      invalid_grant: 'Neplatné přihlašovací údaje.',
      user_not_found: 'Uživatel nenalezen.',
      exchange_failed: 'Autentizace se nezdařila. Zkuste znovu.',
    }
    
    return messages[error || ''] || 'Došlo k chybě při autentizaci. Zkuste prosím znovu.'
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-red-600">
                Chyba při přihlašování
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {getErrorMessage(params?.error, params?.description)}
              </p>
              <div className="flex flex-col gap-2">
                <Link href="/auth/sign-up">
                  <Button className="w-full font-sans bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                    Zaregistrovat se znovu
                  </Button>
                </Link>
                <Link href="/auth/login">
                  <Button variant="outline" className="w-full font-sans border-primary/30">
                    Zpět na přihlášení
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
