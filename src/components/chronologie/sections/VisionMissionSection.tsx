import type { ChronologieLandingData } from '@/types/chronologie'

type VisionMissionSectionProps = Pick<ChronologieLandingData, 'values'>

export function VisionMissionSection({ values }: VisionMissionSectionProps) {
  return (
    <section className="bg-[var(--color-cream)] px-6 py-2 md:px-10 md:py-4">
      <div className="mx-auto max-w-[1160px]">
        <p className="text-subtitle text-[var(--color-accent)]">{values.eyebrow}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[values.vision, values.mission].map((item) => (
            <article key={item.title} className="rounded-[28px] border border-[var(--color-border-soft)] bg-[var(--color-surface)] p-8 md:p-10">
              <h2 className="text-h4">{item.title}</h2>
              <p className="text-body mt-5 text-[var(--color-copy)]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
