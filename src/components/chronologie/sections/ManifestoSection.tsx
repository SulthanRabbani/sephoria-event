import type { ChronologieLandingData } from '@/types/chronologie'

import { SectionHeading } from '../primitives/SectionHeading'
import { SectionShell } from '../primitives/SectionShell'

type ManifestoSectionProps = {
  craft: ChronologieLandingData['craft']
}

export function ManifestoSection({ craft }: ManifestoSectionProps) {
  return (
    <SectionShell id="about" tone="cream" className="py-20 md:py-28">
      <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div className="relative min-h-[520px] overflow-hidden rounded-[32px] border border-black/6 bg-[linear-gradient(135deg,#7a5337_0%,#c28c57_36%,#f0d7b7_100%)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_22%,rgba(255,255,255,0.2),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(53,34,23,0.18))]" />
          <div className="absolute left-[7%] top-[16%] h-[360px] w-[300px] rounded-[40px] bg-[linear-gradient(145deg,rgba(154,111,75,0.98),rgba(78,53,34,0.96))] shadow-[0_24px_80px_rgba(71,44,28,0.3)]" />
          <div className="absolute left-[18%] top-[42%] h-[170px] w-[170px] rounded-full border border-[rgba(255,255,255,0.34)] bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.72),rgba(219,205,188,0.7)_34%,rgba(121,107,92,0.94)_72%)] shadow-[0_16px_36px_rgba(0,0,0,0.22)]" />
          <div className="absolute left-[24%] top-[48%] h-[100px] w-[100px] rounded-full border border-[rgba(255,255,255,0.45)]" />
          <div className="absolute left-[28%] top-[52%] h-[2px] w-[72px] rotate-[16deg] bg-[linear-gradient(90deg,rgba(77,56,42,0.8),transparent)]" />
          <div className="absolute left-[29%] top-[53%] h-[2px] w-[48px] -rotate-[46deg] bg-[linear-gradient(90deg,rgba(255,255,255,0.95),transparent)]" />
          <div className="absolute right-[16%] top-[20%] h-[250px] w-[170px] rotate-[14deg] rounded-[90px] bg-[linear-gradient(180deg,rgba(99,67,46,0.95),rgba(45,29,20,0.96))] shadow-[0_18px_50px_rgba(0,0,0,0.22)]" />
          <div className="absolute right-[10%] bottom-[10%] h-[170px] w-[230px] rotate-[-12deg] rounded-[120px] bg-[linear-gradient(180deg,rgba(147,110,78,0.92),rgba(83,54,34,0.96))]" />
          <div className="absolute left-[56%] top-[48%] h-[4px] w-[120px] rotate-[-24deg] rounded-full bg-[linear-gradient(90deg,rgba(32,23,18,0.85),rgba(32,23,18,0))]" />
        </div>

        <div>
          <SectionHeading
            eyebrow={craft.eyebrow}
            title={craft.title}
            description={craft.description}
            decorated={false}
          />

          <a href={craft.action.href} className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-[var(--color-ink)] transition hover:text-[var(--color-copy)]">
            {craft.action.label}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </SectionShell>
  )
}
