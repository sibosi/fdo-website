import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'
import * as motion from 'motion/react-client'

export const metadata: Metadata = {
  title: 'Csatlakozz!',
  description: 'Útmutató a Diákparlamenthez való csatlakozáshoz.',
}

type StepType = {
  order: number
  title: string
  description: string | React.ReactNode
}

const steps: StepType[] = [
  {
    order: 1,
    title: 'Delegálólap kitöltése',
    description: (
      <span>
        Ahhoz hogy diákparlamentjeinkre járj, ahhoz minden egyes alkalomkor kell
        szerezned egy delegálólapot. A delegálólapot az intézményvezetőknek
        szoktuk kiküldeni, de mostantól itt is kitölthető{' '}
        <a
          href="https://forms.fillout.com/t/7SAZC9A3xLus"
          className="bg-red-50 text-red-500 hover:underline dark:bg-red-900/20 dark:text-red-400"
        >
          az alábbi oldalon ➜
        </a>
      </span>
    ),
  },
  {
    order: 2,
    title: 'Aláírások beszerzése',
    description:
      'A kinyomtatott delegálólapot a Diákönkormányzat elnöknek és az Igazgatónak alá kell írnia.',
  },
  {
    order: 3,
    title: 'Email küldése',
    description: (
      <span>
        A lapot beszkennelve, 24 órával a diákparlament kezdete előtt emailben
        küldd el a{' '}
        <a
          href="mailto:fovarosidiakonkormanyzat@gmail.com"
          className="text-red-500 hover:underline"
        >
          fovarosidiakonkormanyzat@gmail.com
        </a>{' '}
        címre.
      </span>
    ),
  },
  {
    order: 4,
    title: 'Kapcsolatfelvétel a bizottságokhoz',
    description:
      'Ha szeretnél a kormány, etikai bizottság vagy a mentálhigiénés bizottság része lenni, akkor vedd fel a kapcsolatot velünk a fent kiemelt email címen és a jelenlegi helyzet alapján minden további információt elküldünk neked ezzel kapcsolatban.',
  },
]

function StepCard({ step }: Readonly<{ step: StepType }>) {
  return (
    <motion.div
      className="md:items-baseline"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="flex gap-4 max-md:flex-col max-sm:mx-4 md:items-center">
        <div className="m-0 flex h-12 min-w-12 items-center justify-center rounded-full bg-red-500 pb-0.5 text-4xl leading-none font-semibold text-white max-md:max-w-12 md:h-8 md:min-w-8 md:text-2xl">
          {step.order}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
            {step.title}
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default async function Csatlakozz() {
  return (
    <SimpleLayout
      title="Csatlakozz!"
      intro="Szeretnél részt venni a Diákparlament gyűlésein?
      Csak négy egyszerű lépés szükséges hozzá!"
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="grid max-w-3xl grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-1 md:gap-8">
          {steps.map((step) => (
            <StepCard key={step.title} step={step} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
