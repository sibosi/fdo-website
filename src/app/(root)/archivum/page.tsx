import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: 'Archívum',
  description: 'Fejlesztés alatt...',
}

export default function Csatlakozz() {
  return (
    <SimpleLayout
      title="Hamarosan..."
      intro="Az archívum oldalunk jelenleg fejlesztés alatt áll. Kérjük, látogass vissza később, hogy felfedezhesd a korábbi diákparlamentek anyagait és eseményeit."
    ></SimpleLayout>
  )
}
