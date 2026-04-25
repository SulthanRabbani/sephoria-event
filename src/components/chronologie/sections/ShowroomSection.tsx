import type { ChronologieLandingData } from '@/types/chronologie'

import { CTAButton } from '../primitives/CTAButton'
import { SectionShell } from '../primitives/SectionShell'

type ShowroomSectionProps = {
  invitation: ChronologieLandingData['invitation']
}

export function ShowroomSection({ invitation }: ShowroomSectionProps) {
  return (
    <SectionShell id="boutique" tone="cream" className="pb-20 md:pb-28">
      <div className="relative overflow-hidden rounded-[34px] bg-[linear-gradient(135deg,#161210_0%,#2b231e_38%,#5a4637_100%)] px-6 py-20 text-[var(--color-paper)] md:px-12 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,214,166,0.18),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(0,0,0,0.24))]" />
        <div className="absolute left-[8%] bottom-0 h-[210px] w-[180px] border border-white/8 bg-[linear-gradient(180deg,rgba(57,42,33,0.6),rgba(12,10,9,0.92))]" />
        <div className="absolute left-[24%] bottom-0 h-[260px] w-[220px] border border-white/8 bg-[linear-gradient(180deg,rgba(76,58,45,0.58),rgba(11,9,8,0.92))]" />
        <div className="absolute right-[10%] bottom-0 h-[220px] w-[200px] border border-white/8 bg-[linear-gradient(180deg,rgba(69,53,41,0.58),rgba(10,9,8,0.92))]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(7,6,6,0.82))]" />
        <div className="absolute inset-x-[10%] top-[18%] h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.22),transparent)]" />

        <div className="relative mx-auto max-w-[720px] text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-14 bg-white/18" />
            <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-accent)]">{invitation.eyebrow}</p>
            <span className="h-px w-14 bg-white/18" />
          </div>

          <h2 className="mt-6 font-display text-4xl leading-[0.95] md:text-5xl lg:text-[58px]">{invitation.title}</h2>
          <p className="mt-5 text-base leading-7 text-white/70">{invitation.description}</p>

          <div className="mt-9 flex justify-center">
            <CTAButton action={invitation.action} variant="light" />
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
