import type { ChronologieLandingData } from '@/types/chronologie'

type BoutiqueImageSectionProps = Pick<ChronologieLandingData, 'boutique'>

export function BoutiqueImageSection({ boutique }: BoutiqueImageSectionProps) {
  return (
    <section id="boutique" className="bg-[var(--color-surface)] px-6 py-10 md:px-10 md:py-14">
      <div className="mx-auto grid w-full max-w-[1280px] gap-10 rounded-[32px] border border-[rgba(42,37,33,0.08)] bg-[var(--color-paper)] p-6 md:grid-cols-[1.3fr_0.7fr] md:p-8 lg:p-10">
        <div className="relative min-h-[320px] overflow-hidden rounded-[26px] bg-[linear-gradient(135deg,#d7ccb8_0%,#bca68b_24%,#6d5947_52%,#2b221d_100%)] shadow-[0_24px_80px_rgba(31,25,21,0.12)] md:min-h-[560px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,244,224,0.75),transparent_22%),radial-gradient(circle_at_74%_24%,rgba(245,228,195,0.42),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(0,0,0,0.14))]" />
          <div className="absolute left-[10%] top-[18%] h-[66%] w-[24%] rounded-[18px] bg-[linear-gradient(180deg,rgba(250,245,235,0.95),rgba(197,176,147,0.92))] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.24)]" />
          <div className="absolute left-[39%] top-[13%] h-[72%] w-[22%] rounded-[18px] bg-[linear-gradient(180deg,rgba(243,232,213,0.96),rgba(174,145,110,0.85))] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]" />
          <div className="absolute left-[68%] top-[11%] h-[76%] w-[20%] rounded-[18px] bg-[linear-gradient(180deg,rgba(238,228,208,0.88),rgba(139,110,80,0.92))] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)]" />
          <div className="absolute bottom-0 left-0 right-0 h-[22%] bg-[linear-gradient(180deg,rgba(112,90,70,0.06),rgba(36,28,23,0.68))]" />
          <div className="absolute bottom-[10%] left-[9%] h-[16%] w-[80%] rounded-[999px] bg-[rgba(70,55,43,0.55)] blur-[18px]" />
        </div>

        <div className="flex flex-col justify-center border-t border-[rgba(42,37,33,0.08)] pt-6 md:border-l md:border-t-0 md:pt-0 md:pl-8 lg:pl-10">
          <p className="text-[11px] uppercase tracking-[0.34em] text-[var(--color-muted)]">{boutique.overline}</p>
          <h2 className="mt-5 font-display text-[34px] leading-[1] md:text-[42px] lg:text-[48px]">{boutique.title}</h2>
          <p className="mt-6 text-[15px] leading-8 text-[var(--color-copy)]">{boutique.description}</p>
          <p className="mt-5 text-sm leading-7 text-[var(--color-copy)]/88">{boutique.detail}</p>
        </div>
      </div>
    </section>
  )
}
