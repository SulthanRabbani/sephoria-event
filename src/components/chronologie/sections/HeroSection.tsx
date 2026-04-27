import Image from 'next/image'

import type { ChronologieLandingData } from '@/types/chronologie'

import { CTAButton } from '../primitives/CTAButton'

type HeroSectionProps = {
  hero: NonNullable<ChronologieLandingData['hero']>
}

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section id="top" className="relative isolate min-h-[828px] overflow-hidden bg-black text-[var(--color-paper)]">
      {hero.image && (
        <Image
          src={hero.image}
          alt="Chronologie hero watch"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      )}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.45)_38%,rgba(0,0,0,0.12)_72%,rgba(0,0,0,0.04)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0.08)_24%,rgba(0,0,0,0.28)_100%)]" />

      <div className="relative mx-auto flex min-h-[828px] w-full max-w-[1440px] items-center px-6 pb-18 pt-28 md:px-10 md:pt-32 lg:px-16 lg:pt-36">
        <div className="max-w-[616px] pt-[74px]">
          <h1 className="max-w-[616px] whitespace-pre-line font-display text-[60px] font-light leading-[0.96] tracking-[-0.02em] text-[#f5f0ea] sm:text-[72px] lg:text-[96px]">
            {hero.title}
          </h1>
          <p className="mt-[36px] max-w-[616px] text-[16px] leading-7 text-white/78">{hero.description}</p>

          <div className="mt-[52px] flex flex-col gap-[18px] sm:flex-row sm:items-center sm:gap-5">
            <CTAButton action={hero.primaryAction} variant="light" icon="whatsapp" className="min-w-[240px] justify-between pl-8 pr-[14px]" />
            <CTAButton action={hero.secondaryAction} variant="dark-hero" className="min-w-[184px] px-7" />
          </div>
        </div>
      </div>
    </section>
  )
}
