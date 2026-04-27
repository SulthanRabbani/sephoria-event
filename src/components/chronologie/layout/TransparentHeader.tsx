import type { ChronologieLandingData } from '@/types/chronologie'

type TransparentHeaderProps = Pick<ChronologieLandingData, 'brand' | 'navigation' | 'headerAction'>

export function TransparentHeader({ brand, navigation, headerAction }: TransparentHeaderProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-50 text-[var(--color-paper)]">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-[auto_1fr_auto] items-center gap-6 px-6 py-4 md:px-10 md:py-5 lg:grid-cols-3 lg:px-16">
        <a href="#top" className="justify-self-start font-display text-[24px] font-normal leading-none tracking-[-0.025em] text-white md:text-[28px]">
          {brand}
        </a>

        <nav className="hidden justify-self-center lg:block" aria-label="Primary">
          <ul className="flex items-center gap-10 xl:gap-12">
            {navigation.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-[12px] font-medium uppercase tracking-[0.15em] text-white transition hover:text-white/75">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={headerAction.href}
          className="justify-self-end text-[12px] font-semibold uppercase tracking-[0.02em] text-white underline decoration-1 underline-offset-[6px] transition hover:text-white/75"
        >
          {headerAction.label}
        </a>
      </div>
    </header>
  )
}
