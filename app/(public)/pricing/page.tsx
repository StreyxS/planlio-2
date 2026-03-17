import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { PricingClient } from '@/components/pricing-client'

export const metadata = {
  title: 'Cenová Nabídka | Planlio',
  description: 'Jednoduché, průhledné ceny. Bez skrytých poplatků. Zrušit kdykoliv.',
}

export default function PricingPage() {
  return <PricingClient />
}
