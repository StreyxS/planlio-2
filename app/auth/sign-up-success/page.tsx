import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="font-sans text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Registrace dokončena!
              </CardTitle>
              <CardDescription className="font-sans">
                Zkontrolujte svůj email pro potvrzení
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-lg bg-accent/10 border border-accent/30">
                <p className="font-sans text-sm text-foreground font-medium">
                  ✓ Účet byl úspěšně vytvořen!
                </p>
              </div>
              <p className="font-sans text-sm text-muted-foreground">
                Na vaši emailovou adresu jsme poslali potvrzovací odkaz. Klikněte na něj pro aktivaci účtu.
              </p>
              <div className="space-y-2 pt-2">
                <p className="font-sans text-xs text-muted-foreground font-medium">Příští kroky:</p>
                <ul className="font-sans text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Otevřete svůj email</li>
                  <li>Klikněte na potvrzovací odkaz</li>
                  <li>Budete přesměrováni na dashboard</li>
                </ul>
              </div>
              <div className="pt-4">
                <p className="font-sans text-xs text-muted-foreground text-center mb-4">
                  Neobdrželi jste email? Zkontrolujte spamový filtr nebo se <Link href="/auth/login" className="text-primary hover:underline">přihlaste později</Link>.
                </p>
                <Link href="/" className="w-full block">
                  <Button variant="outline" className="w-full font-sans border-primary/30 hover:bg-primary/10">
                    Zpět na domovskou stránku
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
