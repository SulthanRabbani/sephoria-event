import type { ChronologieLandingData } from '@/types/chronologie'

type StorySectionProps = Pick<ChronologieLandingData, 'story'>

export function StorySection({ story }: StorySectionProps) {
  return (
    <section id="about" className="bg-[var(--color-cream)] px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto grid w-full max-w-[1160px] gap-10 border-b border-[rgba(42,37,33,0.08)] pb-16 md:grid-cols-[0.7fr_1.3fr] md:pb-20">
        <div>
          <h2 className="text-[11px] font-medium uppercase tracking-[0.34em] text-[var(--color-muted)]">{story.eyebrow}</h2>
          <p className="mt-5 font-display text-[38px] leading-[1] text-[var(--color-ink)] md:text-[48px]">{story.title}</p>
        </div>

        <div className="space-y-6 text-[15px] leading-8 text-[var(--color-copy)] md:text-base">
          {story.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
