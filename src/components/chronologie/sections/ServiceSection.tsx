import type { ChronologieLandingData } from '@/types/chronologie'

import { CTAButton } from '../primitives/CTAButton'

type ServiceSectionProps = Pick<ChronologieLandingData, 'service'>

export function ServiceSection({ service }: ServiceSectionProps) {
  return (
    <section id="story" className="bg-[var(--color-cream)] px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto grid w-full max-w-[1280px] gap-8 rounded-[32px] bg-[#efe8dc] p-6 md:grid-cols-[0.88fr_1.12fr] md:p-8 lg:p-10">
        <div className="relative min-h-[340px] overflow-hidden rounded-[26px] bg-[linear-gradient(155deg,#92745c_0%,#5c4839_35%,#241c17_100%)] md:min-h-[620px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_20%,rgba(255,233,196,0.42),transparent_18%),radial-gradient(circle_at_70%_78%,rgba(0,0,0,0.46),transparent_30%)]" />
          <div className="absolute left-[16%] top-[10%] h-[46%] w-[14%] rounded-[999px] bg-[linear-gradient(180deg,#e3cfac,#8c6d4d)] shadow-[0_18px_50px_rgba(22,17,13,0.22)]" />
          <div className="absolute left-[34%] top-[18%] h-[38%] w-[12%] rounded-[999px] bg-[linear-gradient(180deg,#f3e4c7,#a07c56)] shadow-[0_18px_50px_rgba(22,17,13,0.2)]" />
          <div className="absolute left-[54%] top-[28%] h-[18%] w-[24%] rounded-[999px] bg-[rgba(232,210,176,0.72)] blur-[2px]" />
          <div className="absolute bottom-[14%] left-[11%] h-[22%] w-[58%] rotate-[-10deg] rounded-[999px] bg-[linear-gradient(180deg,#d9c09b,#6b513c)] shadow-[0_18px_50px_rgba(22,17,13,0.24)]" />
          <div className="absolute right-[12%] top-[16%] h-[52%] w-[24%] rounded-[999px] bg-[linear-gradient(180deg,rgba(255,247,233,0.58),rgba(58,42,30,0.86))] blur-[1px]" />
          <div className="absolute bottom-[10%] left-[12%] h-[18%] w-[68%] rounded-[999px] bg-[rgba(31,24,20,0.46)] blur-[16px]" />
        </div>

        <div className="flex flex-col justify-center px-1 py-2 md:px-4 lg:px-8">
          <h2 className="text-[11px] font-medium uppercase tracking-[0.34em] text-[var(--color-muted)]">{service.eyebrow}</h2>
          <p className="mt-5 max-w-[620px] font-display text-[38px] leading-[1] text-[var(--color-ink)] md:text-[50px] lg:text-[56px]">{service.title}</p>
          <p className="mt-6 max-w-[620px] text-[15px] leading-8 text-[var(--color-copy)] md:text-base">{service.description}</p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {service.items.map((item) => (
              <article key={item.title} className="rounded-[22px] border border-[rgba(42,37,33,0.08)] bg-[rgba(255,252,247,0.72)] p-5">
                <h3 className="font-display text-[28px] leading-none text-[var(--color-ink)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-copy)]">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-4 border-t border-[rgba(42,37,33,0.08)] pt-6 md:grid-cols-3">
            {service.notes.map((note) => (
              <div key={note.label}>
                <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">{note.label}</p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-copy)]">{note.value}</p>
              </div>
            ))}
          </div>

          <CTAButton action={service.action} variant="outline-dark" className="mt-8 self-start" />
        </div>
      </div>
    </section>
  )
}
