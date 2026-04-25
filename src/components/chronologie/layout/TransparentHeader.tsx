import type { ChronologieLandingData } from '@/types/chronologie'

import { CTAButton } from '../primitives/CTAButton'

type TransparentHeaderProps = Pick<ChronologieLandingData, 'brand' | 'navigation' | 'headerAction'>

export function TransparentHeader({ brand, navigation, headerAction }: TransparentHeaderProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-30 text-[var(--color-paper)]">
      <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <a href="#top" className="font-display text-[30px] tracking-[0.08em] md:text-[34px]">
          {brand}
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a key={item.label} href={item.href} className="text-[11px] uppercase tracking-[0.32em] text-white/78 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <CTAButton action={headerAction} variant="outline-light" className="hidden lg:inline-flex" />
      </div>
    </header>
  )
}
