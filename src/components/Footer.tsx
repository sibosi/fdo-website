'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

import { ContainerInner, ContainerOuter } from '@/components/Container'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-red-500 dark:hover:text-red-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  const [order, setOrder] = useState<[string, string]>(['', ''])

  useEffect(() => {
    setOrder(
      Math.random() < 0.5
        ? ['Simon Nimród', 'Nagy Ábel']
        : ['Nagy Ábel', 'Simon Nimród'],
    )
  }, [])

  const urls: Record<string, string> = {
    'Nagy Ábel': 'https://www.linkedin.com/in/abelanagy/',
    'Simon Nimród': 'https://www.linkedin.com/in/nimr%C3%B3d-simon-a1369b34a/',
  }

  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/rolunk">Rólunk</NavLink>
                <NavLink href="/diakparlamentek">Diákparlamentek</NavLink>
                <NavLink href="/dokumentumok">Dokumentumok</NavLink>
                <NavLink href="/archivum">Archívum</NavLink>
                <NavLink href="/csatlakozz">Csatlakozz</NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                Készítette:{' '}
                <a
                  className="hover:text-zinc-700 hover:dark:text-zinc-200"
                  href={urls[order[0]]}
                >
                  {order[0]}
                </a>{' '}
                és{' '}
                <a
                  className="hover:text-zinc-700 hover:dark:text-zinc-200"
                  href={urls[order[1]]}
                >
                  {order[1]}
                </a>
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
