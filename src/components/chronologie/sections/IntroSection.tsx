import type { ChronologieLandingData } from '@/types/chronologie'

type IntroSectionProps = Pick<ChronologieLandingData, 'intro'>

export function IntroSection({ intro }: IntroSectionProps) {
  return (
    <section id="top" className="border-b border-[rgba(42,37,33,0.08)] bg-[var(--color-cream)]">
      <div className="mx-auto flex w-full max-w-[980px] flex-col items-center px-6 py-20 text-center md:px-10 md:py-28">
        <p className="text-[11px] uppercase tracking-[0.34em] text-[var(--color-muted)]">{intro.eyebrow}</p>
        <h1 className="mt-8 max-w-[860px] font-display text-[48px] leading-[0.96] text-[var(--color-ink)] md:text-[66px] lg:text-[78px]">
          {intro.title}
        </h1>
        <p className="mt-8 max-w-[700px] text-[15px] leading-8 text-[var(--color-copy)] md:text-base">
          {intro.description}
        </p>
      </div>
    </section>
  )
}
