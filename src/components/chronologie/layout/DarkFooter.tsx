import type { ChronologieLandingData } from '@/types/chronologie'

type DarkFooterProps = Pick<ChronologieLandingData, 'brand' | 'footer'>

export function DarkFooter({ brand, footer }: DarkFooterProps) {
  return (
    <footer id="contact" className="bg-[var(--color-primary-700)] text-[var(--color-white)]">
      <div className="mx-auto grid w-full max-w-[1280px] gap-12 px-6 py-16 md:grid-cols-[1.2fr_repeat(3,1fr)] md:px-10 md:py-20">
        <div className="max-w-[320px]">
          <p className="font-display text-[38px] tracking-[0.04em] md:text-[44px]">{brand}</p>
          <p className="mt-5 text-sm leading-7 text-white/62">{footer.description}</p>
        </div>

        {footer.columns.map((column) => (
          <div key={column.title}>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--color-secondary-300)]">{column.title}</p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-white/72">
              {column.items.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-3 px-6 py-5 text-[11px] uppercase tracking-[0.26em] text-white/42 md:flex-row md:items-center md:justify-between md:px-10">
          <span>{footer.legalLeft}</span>
          <span>{footer.legalRight}</span>
        </div>
      </div>
    </footer>
  )
}
