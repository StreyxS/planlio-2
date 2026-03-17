import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const error = searchParams.get('error')
  const error_description = searchParams.get('error_description')

  console.log('[v0] Auth callback - code:', code, 'error:', error)

  // Handle errors from Supabase
  if (error) {
    console.log('[v0] Auth error:', error_description)
    return NextResponse.redirect(
      new URL(
        `/auth/error?error=${encodeURIComponent(error)}&description=${encodeURIComponent(error_description || '')}`,
        request.url
      )
    )
  }

  // If there's no code, redirect to login
  if (!code) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  try {
    const supabase = await createClient()
    const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code)

    if (exchangeError) {
      console.log('[v0] Exchange error:', exchangeError)
      return NextResponse.redirect(
        new URL(
          `/auth/error?error=exchange_failed&description=${encodeURIComponent(exchangeError.message)}`,
          request.url
        )
      )
    }

    // Successfully authenticated, redirect to plan selection
    return NextResponse.redirect(new URL('/auth/select-plan', request.url))
  } catch (error) {
    console.log('[v0] Callback error:', error)
    return NextResponse.redirect(
      new URL('/auth/error?error=unknown&description=Authentication failed', request.url)
    )
  }
}
