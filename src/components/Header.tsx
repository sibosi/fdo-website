'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import logoImage from '@/images/logo.png'

function CloseIcon(props: Readonly<React.ComponentPropsWithoutRef<'svg'>>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MenuIcon(props: Readonly<React.ComponentPropsWithoutRef<'svg'>>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
      />
    </svg>
  )
}

function SunIcon(props: Readonly<React.ComponentPropsWithoutRef<'svg'>>) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
      <path
        d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
        fill="none"
      />
    </svg>
  )
}

function MoonIcon(props: Readonly<React.ComponentPropsWithoutRef<'svg'>>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavItem({
  href,
  children,
}: Readonly<{
  href: string
  children: React.ReactNode
}>) {
  return (
    <li>
      <PopoverButton as={Link} href={href} className="block py-2">
        {children}
      </PopoverButton>
    </li>
  )
}

function MobileNavigation(
  props: Readonly<React.ComponentPropsWithoutRef<typeof Popover>>,
) {
  return (
    <Popover {...props}>
      <PopoverButton className="flex items-center rounded-full bg-white/90 px-4 py-2 text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
        <MenuIcon className="@min-xl: h-5 w-5 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-xs duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in dark:bg-black/80"
      />
      <PopoverPanel
        focus
        transition
        className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 duration-150 data-closed:scale-95 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in dark:bg-zinc-900 dark:ring-zinc-800"
      >
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Menü
          </h2>

          <div className="flex gap-4">
            <ThemeToggle />

            <PopoverButton aria-label="Close menu" className="-m-1 p-1">
              <CloseIcon className="h-6 w-6 cursor-pointer text-zinc-500 dark:text-zinc-400" />
            </PopoverButton>
          </div>
        </div>
        <nav className="mt-6">
          <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
            <MobileNavItem href="/rolunk">Rólunk</MobileNavItem>
            <MobileNavItem href="/diakparlamentek">
              Diákparlamentek
            </MobileNavItem>
            <MobileNavItem href="/archivum">Archívum</MobileNavItem>
            <MobileNavItem href="/csatlakozz">Csatlakozz!</MobileNavItem>
          </ul>
        </nav>
      </PopoverPanel>
    </Popover>
  )
}

function NavItem({
  href,
  children,
}: Readonly<{
  href: string
  children: React.ReactNode
}>) {
  let isActive = usePathname() === href

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 transition',
          isActive
            ? 'text-red-500 dark:text-red-400'
            : 'hover:text-red-500 dark:hover:text-red-400',
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-linear-to-r from-teal-500/0 via-red-500/40 to-teal-500/0 dark:from-red-400/0 dark:via-red-400/40 dark:to-red-400/0" />
        )}
      </Link>
    </li>
  )
}

function DesktopNavigation(
  props: Readonly<React.ComponentPropsWithoutRef<'nav'>>,
) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <NavItem href="/rolunk">Rólunk</NavItem>
        <NavItem href="/diakparlamentek">Diákparlamentek</NavItem>
        <NavItem href="/archivum">Archívum</NavItem>
        <NavItem href="/csatlakozz">Csatlakozz!</NavItem>
      </ul>
    </nav>
  )
}

function ThemeToggle() {
  let { resolvedTheme, setTheme } = useTheme()
  let otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
  let [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${otherTheme} theme` : 'Toggle theme'}
      className="cursor-pointer bg-white/90 shadow-zinc-800/5 ring-red-900/5 backdrop-blur-sm transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={() => setTheme(otherTheme)}
    >
      <SunIcon className="h-6 w-6 fill-red-100 stroke-red-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-red-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600" />
      <MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-red-500 [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400" />
    </button>
  )
}

export function Header() {
  let headerRef = useRef<React.ElementRef<'div'>>(null)

  return (
    <header
      className="pointer-events-none relative z-50 flex flex-none flex-col"
      style={{
        height: 'var(--header-height)',
        marginBottom: 'var(--header-mb)',
      }}
    >
      <div
        ref={headerRef}
        className="top-0 z-10 h-16 pt-6"
        style={{
          position: 'var(--header-position)' as React.CSSProperties['position'],
        }}
      >
        <Container
          className="top-(--header-top,--spacing(6)) w-full"
          style={{
            position:
              'var(--header-inner-position)' as React.CSSProperties['position'],
          }}
        >
          <div className="relative flex gap-4">
            <Link
              href="/"
              aria-label="Home"
              className="pointer-events-auto flex min-w-0 items-center gap-2 overflow-hidden rounded-full bg-white/90 p-0.5 px-3 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10"
            >
              <Image
                src={logoImage}
                alt="Fővárosi Diákönkormányzat"
                sizes="2.25rem"
                className="mb-1 h-7 w-9 object-cover"
                priority
              />
              <h2 className="block text-sm font-medium text-nowrap text-zinc-800 max-[23rem]:hidden md:hidden lg:block dark:text-zinc-200">
                Fővárosi Diákönkormányzat
              </h2>
            </Link>

            <div className="flex flex-1 justify-end md:justify-center">
              <MobileNavigation className="pointer-events-auto md:hidden" />
              <DesktopNavigation className="pointer-events-auto hidden md:block" />
            </div>

            <div className="pointer-events-auto hidden items-center justify-end gap-2 rounded-full bg-white/90 p-0.5 px-3 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm md:flex dark:bg-zinc-800/90 dark:ring-white/10">
              <ThemeToggle />
            </div>
          </div>
        </Container>
      </div>
    </header>
  )
}
