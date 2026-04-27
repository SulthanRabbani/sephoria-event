import type { ChronologieLandingData } from '@/types/chronologie'

type BoutiqueImageSectionProps = Pick<ChronologieLandingData, 'boutique'>

export function BoutiqueImageSection({ boutique }: BoutiqueImageSectionProps) {
  return (
    <section id="boutique" className="bg-[var(--color-surface)] px-6 py-10 md:px-10 md:py-14">
      <div className="mx-auto grid w-full max-w-[1280px] gap-10 rounded-[32px] border border-[var(--color-border-soft)] bg-[var(--color-paper)] p-6 md:grid-cols-[1.3fr_0.7fr] md:p-8 lg:p-10">
        <div className="relative min-h-[320px] overflow-hidden rounded-[26px] bg-[linear-gradient(135deg,#ded7c4_0%,#c8bca0_26%,#8f7a5a_54%,#2d2622_100%)] shadow-[0_24px_80px_rgba(45,38,34,0.12)] md:min-h-[560px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(250,250,250,0.75),transparent_22%),radial-gradient(circle_at_74%_24%,rgba(244,243,242,0.42),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(0,0,0,0.14))]" />
          <div className="absolute left-[10%] top-[18%] h-[66%] w-[24%] rounded-[18px] bg-[linear-gradient(180deg,rgba(250,250,250,0.95),rgba(222,215,196,0.92))] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.24)]" />
          <div className="absolute left-[39%] top-[13%] h-[72%] w-[22%] rounded-[18px] bg-[linear-gradient(180deg,rgba(248,246,242,0.96),rgba(181,165,130,0.86))] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]" />
          <div className="absolute left-[68%] top-[11%] h-[76%] w-[20%] rounded-[18px] bg-[linear-gradient(180deg,rgba(244,243,242,0.9),rgba(106,99,92,0.92))] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)]" />
          <div className="absolute bottom-0 left-0 right-0 h-[22%] bg-[linear-gradient(180deg,rgba(177,173,169,0.06),rgba(45,38,34,0.68))]" />
          <div className="absolute bottom-[10%] left-[9%] h-[16%] w-[80%] rounded-[999px] bg-[rgba(58,51,46,0.5)] blur-[18px]" />
        </div>

        <div className="flex flex-col justify-center border-t border-[var(--color-border-soft)] pt-6 md:border-l md:border-t-0 md:pt-0 md:pl-8 lg:pl-10">
          <p className="text-subtitle text-[var(--color-accent)]">{boutique.overline}</p>
          <h2 className="text-h3 mt-5 lg:text-[52px]">{boutique.title}</h2>
          <p className="text-body mt-6 text-[var(--color-copy)]">{boutique.description}</p>
          <p className="text-subtitle mt-5 text-[var(--color-muted)] normal-case tracking-[0.08em]">{boutique.detail}</p>
        </div>
      </div>
    </section>
  )
}
