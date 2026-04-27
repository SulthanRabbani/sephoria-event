import type { ChronologieLandingData } from '@/types/chronologie'

type VisionMissionSectionProps = Pick<ChronologieLandingData, 'values'>

export function VisionMissionSection({ values }: VisionMissionSectionProps) {
  return (
    <section className="bg-[var(--color-cream)] px-6 py-2 md:px-10 md:py-4">
      <div className="mx-auto max-w-[1160px]">
        <p className="text-[11px] uppercase tracking-[0.34em] text-[var(--color-muted)]">{values.eyebrow}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[values.vision, values.mission].map((item) => (
            <article key={item.title} className="rounded-[28px] border border-[rgba(42,37,33,0.08)] bg-[var(--color-paper)] p-8 md:p-10">
              <h2 className="font-display text-[34px] leading-none text-[var(--color-ink)] md:text-[40px]">{item.title}</h2>
              <p className="mt-5 text-[15px] leading-8 text-[var(--color-copy)] md:text-base">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
