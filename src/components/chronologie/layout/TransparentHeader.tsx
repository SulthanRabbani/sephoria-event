import type { ChronologieLandingData } from '@/types/chronologie'

type TransparentHeaderProps = Pick<ChronologieLandingData, 'brand' | 'navigation' | 'headerAction'> & {
  activeHref?: string
}

export function TransparentHeader({ brand, navigation, headerAction, activeHref }: TransparentHeaderProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-50 text-[var(--color-paper)]">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-[auto_1fr_auto] items-center gap-6 px-6 py-4 md:px-10 md:py-[18px] lg:grid-cols-3 lg:px-16">
        <a href="#top" className="justify-self-start font-display text-[24px] font-normal leading-none tracking-[-0.025em] text-white md:text-[28px]">
          {brand}
        </a>

        <nav className="hidden justify-self-center lg:block" aria-label="Primary">
          <ul className="flex items-center gap-[52px] xl:gap-[60px]">
            {navigation.map((item) => {
              const isActive = item.href === activeHref

              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className="group relative inline-flex flex-col items-center justify-center pb-[14px] text-[12px] font-medium uppercase tracking-[0.18em] text-white transition hover:text-white/78"
                  >
                    <span>{item.label}</span>
                    <span
                      aria-hidden="true"
                      className={`absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-white transition-all duration-300 ${
                        isActive ? 'w-[78px] opacity-100' : 'w-0 opacity-0 group-hover:w-[78px] group-hover:opacity-60'
                      }`}
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <a
          href={headerAction.href}
          className="justify-self-end text-[12px] font-medium uppercase tracking-[0.12em] text-white transition hover:text-white/78"
        >
          {headerAction.label}
        </a>
      </div>
    </header>
  )
}
