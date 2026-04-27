import type { ChronologieLandingData } from '@/types/chronologie'

type StorySectionProps = Pick<ChronologieLandingData, 'story'>

export function StorySection({ story }: StorySectionProps) {
  return (
    <section id="about" className="bg-[var(--color-cream)] px-6 py-16 md:px-10 md:py-22">
      <div className="mx-auto grid w-full max-w-[1160px] gap-10 border-b border-[var(--color-border-soft)] pb-16 md:grid-cols-[0.7fr_1.3fr] md:pb-20">
        <div>
          <h2 className="text-[11px] font-medium uppercase tracking-[0.34em] text-[var(--color-accent)]">{story.eyebrow}</h2>
          <p className="mt-5 font-display text-[40px] leading-[0.98] text-[var(--color-ink)] md:text-[52px]">{story.title}</p>
        </div>

        <div className="space-y-6 text-[16px] leading-8 text-[var(--color-copy)] md:text-[17px]">
          {story.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
