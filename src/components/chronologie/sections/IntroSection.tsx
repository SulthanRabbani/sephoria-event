import type { ChronologieLandingData } from '@/types/chronologie'

type IntroSectionProps = Pick<ChronologieLandingData, 'intro'>

export function IntroSection({ intro }: IntroSectionProps) {
  return (
    <section id="top" className="border-b border-[var(--color-border-soft)] bg-[var(--color-cream)]">
      <div className="mx-auto flex w-full max-w-[980px] flex-col items-center px-6 py-20 text-center md:px-10 md:py-30">
        <p className="text-subtitle text-[var(--color-accent)]">{intro.eyebrow}</p>
        <h1 className="text-h1 mt-8 max-w-[860px]">{intro.title}</h1>
        <p className="text-title mt-8 max-w-[720px] text-[var(--color-copy)]">{intro.description}</p>
      </div>
    </section>
  )
}
