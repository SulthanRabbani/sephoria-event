import type { ChronologieLandingData } from '@/types/chronologie'

import { CTAButton } from '../primitives/CTAButton'

type TransparentHeaderProps = Pick<ChronologieLandingData, 'brand' | 'navigation' | 'headerAction'>

export function TransparentHeader({ brand, navigation, headerAction }: TransparentHeaderProps) {
  return (
    <header className="border-b border-[rgba(42,37,33,0.08)] bg-[rgba(247,243,236,0.94)] text-[var(--color-ink)] backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-6 px-6 py-5 md:px-10 lg:gap-10 lg:py-6">
        <a href="#top" className="font-display text-[30px] tracking-[0.08em] md:text-[36px]">
          {brand}
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-copy)] transition hover:text-[var(--color-ink)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <CTAButton action={headerAction} variant="outline-dark" className="hidden lg:inline-flex" />
      </div>
    </header>
  )
}
