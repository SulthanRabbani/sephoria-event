import type { ChronologieLandingData } from '@/types/chronologie'

type IntroSectionProps = Pick<ChronologieLandingData, 'intro'>

export function IntroSection({ intro }: IntroSectionProps) {
  return (
    <section id="top" className="border-b border-[var(--color-border-soft)] bg-[var(--color-cream)]">
      <div className="mx-auto flex w-full max-w-[980px] flex-col items-center px-6 py-20 text-center md:px-10 md:py-30">
        <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-[var(--color-accent)]">{intro.eyebrow}</p>
        <h1 className="mt-8 max-w-[860px] font-display text-[50px] leading-[0.94] text-[var(--color-ink)] md:text-[70px] lg:text-[84px]">
          {intro.title}
        </h1>
        <p className="mt-8 max-w-[720px] text-[17px] leading-8 text-[var(--color-copy)] md:text-[18px]">
          {intro.description}
        </p>
      </div>
    </section>
  )
}
