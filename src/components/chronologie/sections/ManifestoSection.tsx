import Image from 'next/image'

import type { ChronologieLandingData } from '@/types/chronologie'

type ManifestoSectionProps = {
  craft: NonNullable<ChronologieLandingData['craft']>
}

export function ManifestoSection({ craft }: ManifestoSectionProps) {
  const paragraphs = craft.description.split('\n\n')

  return (
    <section id="about" className="bg-[#ded7c4] px-6 py-16 text-[#231d18] md:px-10 md:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[600px_minmax(0,680px)] lg:items-center lg:justify-between lg:gap-8">
        <div className="relative h-[420px] overflow-hidden bg-[#cabca5] sm:h-[560px] lg:h-[745px]">
          {craft.image && <Image src={craft.image} alt="Chronologie philosophy watchmaking" fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover object-center" />}
        </div>

        <div className="lg:pl-8">
          <div className="flex items-center gap-4 lg:justify-start">
            <span className="h-px w-12 bg-[#8e8477]/60" />
            <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-[#6e655b]">{craft.eyebrow}</p>
            <span className="h-px w-12 bg-[#8e8477]/60" />
          </div>

          <h2 className="mt-6 whitespace-pre-line font-display text-[42px] font-light leading-none tracking-[-0.01em] text-[#231d18] md:text-[48px]">
            {craft.title}
          </h2>

          <div className="mt-8 space-y-6 text-[16px] leading-7 text-[#4f4840]">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <a href={craft.action.href} className="mt-8 inline-flex items-center gap-2 border-b border-[#231d18] pb-1 text-[12px] font-semibold uppercase tracking-[0.02em] text-[#231d18] transition hover:text-[#5a5148] hover:border-[#5a5148]">
            {craft.action.label}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
