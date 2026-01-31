import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'
import { PhoneIcon, MailIcon, ArrowRight } from 'lucide-react'
import logo from '@/images/logo.png'
import * as motion from 'motion/react-client'

export const metadata: Metadata = {
  title: 'Dokumentumok',
  description:
    'Itt találod a Diákparlamenthez kapcsolódó fontos dokumentumokat, mint például az Alkotmányt vagy a jegyzőkönyveket.',
}

type Document = {
  name: string
  description: string
  link: string
  date: string
  imageUrl: string
  badge?: string
}

const documents: Document[] = [
  {
    name: 'Alkotmány',
    description: 'A Diákparlament működése',
    // badge: 'Új',
    link: 'https://docs.google.com/document/d/1-2eHgpI7nVs8DtpH6fb4GUDFbAV_dGqo/edit?usp=drive_link',
    date: '2024/07/02',
    imageUrl: logo.src,
  },
  {
    name: 'Házszabály',
    description: 'A gyűlési szabályzat',
    // badge: 'Új',
    link: 'https://docs.google.com/document/d/1RJGvh2J1BdNGvzLp0N2IqI1F39co4lCceNZ6uUTjezU/edit?usp=drive_link',
    date: '2024/07/02',
    imageUrl: logo.src,
  },
]

export default function Dokumentumok() {
  return (
    <SimpleLayout
      title="Dokumentumok"
      intro="Itt találod a Diákparlamenthez kapcsolódó fontos dokumentumokat, mint például az Alkotmányt, jegyzőkönyveket és egyéb hasznos anyagokat."
    >
      <motion.ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {documents.map((doc) => (
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            key={doc.name}
            className="col-span-1 divide-y divide-zinc-200 rounded-lg border border-zinc-200 dark:divide-zinc-700 dark:border-zinc-700"
          >
            <div className="flex w-full items-center justify-between space-x-6 p-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="text truncate font-medium text-zinc-800 dark:text-zinc-100">
                    {doc.name}
                  </h3>
                  {doc.badge && (
                    <span className="inline-flex shrink-0 items-center rounded-full bg-red-50 px-1.5 py-0.5 text-xs font-medium text-red-500 ring-1 ring-red-600/20 ring-inset">
                      {doc.badge}
                    </span>
                  )}
                </div>
                <p className="mt-1 truncate text-sm text-zinc-600 dark:text-zinc-400">
                  {doc.description}
                </p>
              </div>
              <img alt="" src={doc.imageUrl} className="size-10 shrink-0" />
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-zinc-200 dark:divide-zinc-700">
                <div className="flex w-0 flex-1">
                  <span className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm text-zinc-700 dark:text-zinc-200">
                    {doc.date}
                  </span>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <a
                    href={doc.link}
                    target="_blank"
                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-zinc-700 dark:text-zinc-200"
                  >
                    Megnézem
                    <ArrowRight aria-hidden="true" className="size-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </SimpleLayout>
  )
}
