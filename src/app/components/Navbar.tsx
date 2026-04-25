'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/catalogue', label: 'Catalogue' },
  { href: '/about', label: 'About' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on navigation
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const hasBg = scrolled || menuOpen || pathname !== '/'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasBg
          ? 'bg-[#080810]/95 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-syncopate text-white text-[11px] font-bold tracking-[0.2em] hover:text-white/80 transition-colors"
        >
          CHRONOLOGIE
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-[11px] tracking-widest uppercase transition-colors duration-200 ${
                  pathname === href
                    ? 'text-white'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <Link
            href="/about#consign"
            className="hidden md:inline-flex items-center text-[11px] tracking-widest uppercase border border-white/25 text-white/80 px-5 py-2 rounded-full hover:border-[#FF4D6D] hover:text-[#FF4D6D] transition-colors duration-200"
          >
            Sell / Consign
          </Link>

          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden p-2 flex flex-col gap-[5px]"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`block w-5 h-px bg-white transition-all duration-300 origin-center ${
                menuOpen ? 'rotate-45 translate-y-[6px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-px bg-white transition-all duration-300 ${
                menuOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-px bg-white transition-all duration-300 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-[6px]' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#080810]/95 backdrop-blur-md px-6 py-4">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`block text-xs tracking-widest uppercase py-3 transition-colors ${
                    pathname === href ? 'text-white' : 'text-white/50'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-white/10 mt-2">
              <Link
                href="/about#consign"
                className="block text-xs tracking-widest uppercase py-3 text-[#FF4D6D]"
              >
                Sell / Consign
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
