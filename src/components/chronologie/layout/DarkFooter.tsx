import type { ChronologieLandingData } from '@/types/chronologie'

type DarkFooterProps = Pick<ChronologieLandingData, 'brand' | 'footer'>

export function DarkFooter({ brand, footer }: DarkFooterProps) {
  return (
    <footer id="contact" className="bg-[#2b2622] text-[#f1ece6]">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 lg:px-16 lg:pb-10 lg:pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_0.8fr_1.1fr_0.9fr] lg:gap-x-16">
          <div className="max-w-[320px]">
            <p className="font-display text-[38px] font-light leading-none tracking-[-0.01em] text-[#f4eee8]">{brand}</p>
            <p className="mt-5 text-[16px] leading-7 text-[#b7aba0]">{footer.description}</p>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title}>
              <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#a79a8f]">{column.title}</p>
              <ul className="mt-4 space-y-3 text-[14px] leading-5 text-[#f1ece6]">
                {column.items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="transition hover:text-white/72">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-[#4a413b] pt-6">
          <div className="flex flex-col gap-3 text-[12px] text-[#8f847a] md:flex-row md:items-center md:justify-between">
            <span>{footer.legalLeft}</span>
            <span className="uppercase tracking-[0.18em] text-[#9c9085]">{footer.legalRight}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
