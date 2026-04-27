import type { ChronologieLandingData } from '@/types/chronologie'

import { CTAButton } from '../primitives/CTAButton'

type HeroSectionProps = {
  hero: NonNullable<ChronologieLandingData['hero']>
}

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section id="top" className="relative overflow-hidden bg-[var(--color-night)] text-[var(--color-paper)]">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#120f0d_0%,#1c1714_44%,#433229_100%)]" />
      <div className="absolute inset-y-0 left-0 w-full bg-[radial-gradient(circle_at_12%_30%,rgba(222,198,164,0.18),transparent_28%),radial-gradient(circle_at_82%_30%,rgba(255,255,255,0.08),transparent_14%),radial-gradient(circle_at_70%_28%,rgba(190,150,109,0.34),transparent_30%)]" />
      <div className="absolute inset-y-0 left-[-8%] hidden w-[42%] bg-[radial-gradient(circle_at_30%_50%,rgba(163,125,93,0.26),transparent_40%)] lg:block" />

      <div className="absolute right-[-10%] top-16 hidden h-[760px] w-[760px] lg:block">
        <div className="absolute right-[12%] top-[4%] h-[470px] w-[470px] rounded-full border border-white/12 bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.24),rgba(77,59,45,0.44)_34%,rgba(9,8,8,0.92)_72%)] shadow-[0_24px_120px_rgba(0,0,0,0.45)]" />
        <div className="absolute right-[18%] top-[10%] h-[360px] w-[360px] rounded-full border border-[rgba(222,193,152,0.28)]" />
        <div className="absolute right-[26%] top-[18%] h-[210px] w-[210px] rounded-full border border-[rgba(255,255,255,0.18)]" />
        <div className="absolute right-[15%] top-[58%] h-[240px] w-[128px] rotate-[19deg] rounded-[999px] border border-white/10 bg-[linear-gradient(180deg,rgba(78,61,48,0.95),rgba(21,17,15,0.98))] shadow-[0_30px_60px_rgba(0,0,0,0.32)]" />
        <div className="absolute right-[33%] top-[64%] h-[210px] w-[80px] rotate-[16deg] rounded-[999px] border border-white/10 bg-[linear-gradient(180deg,rgba(116,89,69,0.94),rgba(30,24,21,0.96))]" />
        <div className="absolute right-[31%] top-[31%] h-[2px] w-[152px] rotate-[17deg] bg-[linear-gradient(90deg,rgba(230,210,181,0.92),transparent)]" />
        <div className="absolute right-[34%] top-[32%] h-[2px] w-[98px] -rotate-[48deg] bg-[linear-gradient(90deg,rgba(255,255,255,0.95),transparent)]" />
        <div className="absolute right-[46%] top-[30%] h-4 w-4 rounded-full border border-[rgba(234,213,182,0.6)] bg-[#f1e1c4]" />
        <div className="absolute right-[4%] top-[16%] h-[520px] w-[210px] rotate-[22deg] rounded-[120px] border border-white/10 bg-[linear-gradient(180deg,rgba(77,58,46,0.3),rgba(17,14,12,0.82))] blur-[1px]" />
      </div>

      <div className="relative mx-auto flex min-h-[820px] w-full max-w-[1320px] items-end px-6 pb-20 pt-32 md:px-10 md:pb-24 lg:pt-40">
        <div className="max-w-[560px] pb-4">
          <div className="flex items-center gap-4">
            <span className="h-px w-14 bg-white/16" />
            <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-accent)]">{hero.eyebrow}</p>
            <span className="h-px w-14 bg-white/16" />
          </div>

          <h1 className="mt-8 max-w-[520px] font-display text-[56px] leading-[0.92] md:text-[78px] lg:text-[88px]">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-[430px] text-base leading-7 text-white/70 md:text-[15px]">{hero.description}</p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <CTAButton action={hero.primaryAction} variant="light" />
            <CTAButton action={hero.secondaryAction} variant="outline-light" />
          </div>
        </div>
      </div>
    </section>
  )
}
