import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'
import { Instagram, Facebook, Mail } from 'lucide-react'

export default function SzavazasKosziPage() {
  return (
    <SimpleLayout
      title="Köszönjük, hogy kitöltötted!"
      intro="A szavazatod számít. Kövess minket, hogy ne maradj le a hírekről és a választás eredményéről."
    >
      <div className="space-y-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="https://www.instagram.com/fovarosidok"
            target="_blank"
            className="group flex items-center justify-between rounded-2xl border border-zinc-200 bg-white px-6 py-5 text-zinc-700 shadow-sm transition hover:border-red-200 hover:text-red-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-200 dark:hover:border-red-400/40 dark:hover:text-red-300"
          >
            <div className="space-y-1">
              <p className="text-sm font-semibold">Instagram</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Friss posztok és sztorik
              </p>
            </div>
            <Instagram className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=61563324692817"
            target="_blank"
            className="group flex items-center justify-between rounded-2xl border border-zinc-200 bg-white px-6 py-5 text-zinc-700 shadow-sm transition hover:border-red-200 hover:text-red-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-200 dark:hover:border-red-400/40 dark:hover:text-red-300"
          >
            <div className="space-y-1">
              <p className="text-sm font-semibold">Facebook</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Hírek és események
              </p>
            </div>
            <Facebook className="h-6 w-6" />
          </Link>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white px-6 py-5 text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-200">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="space-y-1">
              <p className="text-sm font-semibold">Kapcsolat</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Írj nekünk, ha kérdésed van!
              </p>
            </div>
            <Link
              href="mailto:fovarosidiakonkormanyzat@gmail.com"
              className="inline-flex items-center gap-2 rounded-md bg-zinc-800 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70"
            >
              <Mail className="h-4 w-4" />
              Email
            </Link>
          </div>
        </div>
      </div>
    </SimpleLayout>
  )
}
