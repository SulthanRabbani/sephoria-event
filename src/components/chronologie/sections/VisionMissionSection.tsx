import type { ChronologieLandingData } from '@/types/chronologie'

type VisionMissionSectionProps = Pick<ChronologieLandingData, 'values'>

export function VisionMissionSection({ values }: VisionMissionSectionProps) {
  return (
    <section className="bg-[var(--color-cream)] px-6 py-2 md:px-10 md:py-4">
      <div className="mx-auto max-w-[1160px]">
        <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-[var(--color-accent)]">{values.eyebrow}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[values.vision, values.mission].map((item) => (
            <article key={item.title} className="rounded-[28px] border border-[var(--color-border-soft)] bg-[var(--color-surface)] p-8 md:p-10">
              <h2 className="font-display text-[36px] leading-none text-[var(--color-ink)] md:text-[42px]">{item.title}</h2>
              <p className="mt-5 text-[16px] leading-8 text-[var(--color-copy)] md:text-[17px]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
