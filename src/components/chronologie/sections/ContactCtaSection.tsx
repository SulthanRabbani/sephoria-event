import type { ChronologieLandingData } from '@/types/chronologie'

import { CTAButton } from '../primitives/CTAButton'

type ContactCtaSectionProps = {
  contactCta: NonNullable<ChronologieLandingData['contactCta']>
}

export function ContactCtaSection({ contactCta }: ContactCtaSectionProps) {
  return (
    <section id="contact-cta" className="bg-[#ded7c4] px-6 py-16 text-center text-[#2f2924] md:px-10 md:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-[760px]">
        <h2 className="font-display text-[42px] font-light leading-none tracking-[-0.01em] text-[#2f2924] md:text-[48px]">
          {contactCta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-[680px] text-[16px] leading-7 text-[#4f4840]">{contactCta.description}</p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <CTAButton action={contactCta.primaryAction} variant="dark" icon="whatsapp" />
          <CTAButton action={contactCta.secondaryAction} variant="outline-dark" />
        </div>
      </div>
    </section>
  )
}
