import Image from 'next/image'

import type { ChronologieLandingData } from '@/types/chronologie'

import { CTAButton } from '../primitives/CTAButton'

type ShowroomSectionProps = {
  invitation: NonNullable<ChronologieLandingData['invitation']>
}

export function ShowroomSection({ invitation }: ShowroomSectionProps) {
  return (
    <section id="boutique" className="relative isolate min-h-[546px] overflow-hidden bg-black px-6 py-16 text-[var(--color-paper)] md:px-10 md:py-20 lg:px-16">
      {invitation.image && (
        <Image
          src={invitation.image}
          alt="Chronologie boutique interior"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      )}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-[#2b1a12]/20" />

      <div className="relative mx-auto flex min-h-[546px] max-w-[1440px] items-center justify-center">
        <div className="max-w-[820px] text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#8a735d]/50" />
            <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-[#b79b74]">{invitation.eyebrow}</p>
            <span className="h-px w-12 bg-[#8a735d]/50" />
          </div>

          <h2 className="mt-4 font-display text-[42px] font-light leading-none tracking-[-0.01em] text-[#f3ede7] md:text-[48px]">
            {invitation.title}
          </h2>
          <p className="mx-auto mt-4 max-w-[720px] text-[16px] leading-7 text-white/80">{invitation.description}</p>

          <div className="mt-8 flex justify-center">
            <CTAButton action={invitation.action} variant="outline-light" />
          </div>
        </div>
      </div>
    </section>
  )
}
