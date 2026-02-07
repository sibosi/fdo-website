import { SimpleLayout } from '@/components/SimpleLayout'
import { Button } from '@/components/Button'

const tallyFormUrl = 'https://tally.so/r/PdOoL0'

export default function SzavazasRedirectPage() {
  return (
    <SimpleLayout
      title="Átirányítás a szavazásra…"
      intro="Köszönjük, hogy szavazol!"
    >
      <div className="space-y-6">
        <div className="rounded-2xl border border-zinc-200 bg-white px-6 py-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40">
          <div className="flex items-center gap-4">
            <span className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-300 border-t-red-600 dark:border-zinc-700 dark:border-t-red-400" />
            <div className="space-y-1">
              <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                A szavazási űrlap rövidesen megnyílik a Tally oldalán.
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Kérjük, várj néhány másodpercet.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white px-6 py-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                Nem történt meg az átirányítás?
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Kattints az alábbi gombra a szavazás megnyitásához.
              </p>
            </div>
            <Button href={tallyFormUrl} className="bg-red-600 hover:bg-red-500">
              Megnyitom a szavazást
            </Button>
          </div>
        </div>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `setTimeout(function(){window.location.href='${tallyFormUrl}';}, 900);`,
        }}
      />
    </SimpleLayout>
  )
}
