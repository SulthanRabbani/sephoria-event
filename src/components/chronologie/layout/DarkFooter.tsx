import type { ChronologieLandingData } from '@/types/chronologie'

type DarkFooterProps = Pick<ChronologieLandingData, 'brand' | 'footer'>

export function DarkFooter({ brand, footer }: DarkFooterProps) {
  return (
    <footer id="footer" className="bg-[var(--color-night)] text-[var(--color-paper)]">
      <div className="mx-auto grid w-full max-w-[1320px] gap-12 px-6 py-16 md:grid-cols-[1.35fr_repeat(3,1fr)] md:px-10 md:py-20">
        <div>
          <p className="font-display text-[38px] tracking-[0.08em]">{brand}</p>
          <p className="mt-5 max-w-[340px] text-sm leading-7 text-white/62">{footer.description}</p>

          <div className="mt-8 flex items-center gap-3">
            {footer.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-[11px] uppercase tracking-[0.24em] text-white/75 transition hover:border-white/30 hover:text-white"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {footer.columns.map((column) => (
          <div key={column.title}>
            <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-accent)]">{column.title}</p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-white/68">
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
        <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-3 px-6 py-5 text-[11px] uppercase tracking-[0.28em] text-white/42 md:flex-row md:items-center md:justify-between md:px-10">
          <span>{footer.legalLeft}</span>
          <span>{footer.legalRight}</span>
        </div>
      </div>
    </footer>
  )
}
