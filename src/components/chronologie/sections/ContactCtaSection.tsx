import type { ChronologieLandingData } from '@/types/chronologie'

import { CTAButton } from '../primitives/CTAButton'
import { SectionShell } from '../primitives/SectionShell'

type ContactCtaSectionProps = {
  contactCta: ChronologieLandingData['contactCta']
}

export function ContactCtaSection({ contactCta }: ContactCtaSectionProps) {
  return (
    <SectionShell id="contact-cta" tone="cream" className="pb-20 md:pb-28">
      <div className="rounded-[32px] bg-[var(--color-sand)] px-6 py-16 text-center md:px-10 md:py-20">
        <div className="mx-auto max-w-[760px]">
          <h2 className="font-display text-4xl leading-[0.95] text-[var(--color-ink)] md:text-5xl lg:text-[56px]">
            {contactCta.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-[var(--color-copy)]">{contactCta.description}</p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <CTAButton action={contactCta.primaryAction} variant="dark" />
            <CTAButton action={contactCta.secondaryAction} variant="outline-dark" />
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
