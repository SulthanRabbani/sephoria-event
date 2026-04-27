import type { ChronologieLandingData } from '@/types/chronologie'

import { CTAButton } from '../primitives/CTAButton'

type TransparentHeaderProps = Pick<ChronologieLandingData, 'brand' | 'navigation' | 'headerAction'>

export function TransparentHeader({ brand, navigation, headerAction }: TransparentHeaderProps) {
  return (
    <header className="border-b border-[var(--color-border-soft)] bg-[rgba(250,250,250,0.94)] text-[var(--color-ink)] backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-6 px-6 py-5 md:px-10 lg:gap-10 lg:py-6">
        <a href="#top" className="font-display text-[32px] font-normal tracking-[0.03em] md:text-[38px]">
          {brand}
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-subtitle text-[var(--color-primary-400)] transition hover:text-[var(--color-primary-700)]"
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
