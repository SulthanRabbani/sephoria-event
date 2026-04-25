import type { ChronologieLandingData, WatchCard, WatchCardTone } from '@/types/chronologie'

import { CTAButton } from '../primitives/CTAButton'
import { SectionHeading } from '../primitives/SectionHeading'
import { SectionShell } from '../primitives/SectionShell'

type FeaturedCollectionsSectionProps = {
  collection: ChronologieLandingData['collection']
}

const gridClasses = [
  'lg:col-span-7 lg:row-span-2',
  'lg:col-span-5',
  'lg:col-span-5',
  'lg:col-span-4 lg:row-span-2',
  'lg:col-span-4',
  'lg:col-span-4',
  'lg:col-span-8',
]

const toneMap: Record<WatchCardTone, string> = {
  charcoal: 'bg-[linear-gradient(140deg,#111214_0%,#1b2026_32%,#0f0f10_100%)]',
  gold: 'bg-[linear-gradient(145deg,#6a4b35_0%,#b58861_38%,#efe2c8_100%)]',
  sand: 'bg-[linear-gradient(145deg,#8d6a52_0%,#c89f76_38%,#ead8c3_100%)]',
  ivory: 'bg-[linear-gradient(145deg,#d7c2aa_0%,#f0e4d6_36%,#c7ab8d_100%)]',
  steel: 'bg-[linear-gradient(145deg,#2f343b_0%,#8d949d_34%,#c6cbcf_100%)]',
}

export function FeaturedCollectionsSection({ collection }: FeaturedCollectionsSectionProps) {
  return (
    <SectionShell id="collection" tone="cream" className="py-20 md:py-28">
      <SectionHeading
        eyebrow={collection.eyebrow}
        title={collection.title}
        description={collection.description}
        align="center"
      />

      <div className="mt-12 border-y border-[rgba(35,29,24,0.12)] py-5">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.28em] text-[var(--color-copy)]">
          {collection.categories.map((category, index) => (
            <span key={category} className={index === 0 ? 'text-[var(--color-ink)]' : ''}>
              {category}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-12 lg:auto-rows-[170px]">
        {collection.items.map((item, index) => (
          <WatchCardArticle key={item.name} item={item} className={gridClasses[index]} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <CTAButton action={collection.action} variant="dark" />
      </div>
    </SectionShell>
  )
}

type WatchCardArticleProps = {
  item: WatchCard
  className: string
}

function WatchCardArticle({ item, className }: WatchCardArticleProps) {
  const textMax = item.size === 'hero' ? 'max-w-[340px]' : item.size === 'wide' ? 'max-w-[300px]' : 'max-w-[260px]'
  const minHeight = item.size === 'hero' ? 'min-h-[540px]' : item.size === 'tall' ? 'min-h-[255px]' : item.size === 'wide' ? 'min-h-[255px]' : 'min-h-[255px]'
  const titleSize = item.size === 'hero' ? 'text-[48px]' : 'text-[36px]'

  return (
    <article className={`group relative overflow-hidden rounded-[28px] border border-black/6 ${className} ${minHeight}`}>
      <div className={`absolute inset-0 ${toneMap[item.tone]}`} />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.34))]" />
      <WatchArtwork tone={item.tone} size={item.size} />

      <div className={`relative z-10 flex h-full flex-col justify-end p-8 text-[var(--color-paper)] ${textMax}`}>
        <p className="text-[10px] uppercase tracking-[0.32em] text-white/72">{item.brand}</p>
        <h3 className={`mt-3 font-display leading-[0.92] ${titleSize}`}>{item.name}</h3>
        <p className="mt-4 text-sm leading-7 text-white/72">{item.summary}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-white/84">
          {item.cta}
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </article>
  )
}

type WatchArtworkProps = {
  tone: WatchCardTone
  size: WatchCard['size']
}

function WatchArtwork({ tone, size }: WatchArtworkProps) {
  const dialTone = {
    charcoal: 'bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.18),rgba(17,19,24,0.32)_36%,rgba(6,7,9,0.92)_74%)]',
    gold: 'bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.26),rgba(176,131,96,0.34)_36%,rgba(70,47,31,0.92)_74%)]',
    sand: 'bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.28),rgba(211,174,133,0.34)_36%,rgba(90,60,39,0.84)_74%)]',
    ivory: 'bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.35),rgba(255,242,226,0.72)_34%,rgba(190,160,127,0.7)_72%)]',
    steel: 'bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.34),rgba(133,144,154,0.42)_34%,rgba(28,35,44,0.9)_74%)]',
  }

  const strapTone = {
    charcoal: 'bg-[linear-gradient(180deg,rgba(30,31,35,0.98),rgba(8,8,9,0.98))]',
    gold: 'bg-[linear-gradient(180deg,rgba(124,86,57,0.96),rgba(58,39,24,0.98))]',
    sand: 'bg-[linear-gradient(180deg,rgba(132,95,67,0.96),rgba(74,50,31,0.98))]',
    ivory: 'bg-[linear-gradient(180deg,rgba(232,214,191,0.98),rgba(180,148,117,0.96))]',
    steel: 'bg-[linear-gradient(180deg,rgba(163,171,179,0.96),rgba(84,93,102,0.98))]',
  }

  const isHero = size === 'hero'
  const isWide = size === 'wide'

  return (
    <div className="pointer-events-none absolute inset-0">
      <div className={`absolute ${isHero ? 'right-[8%] top-[10%] h-[320px] w-[320px]' : isWide ? 'right-[6%] top-[12%] h-[190px] w-[190px]' : 'right-[8%] top-[12%] h-[180px] w-[180px]'} rounded-full border border-white/16 ${dialTone[tone]} shadow-[0_25px_60px_rgba(0,0,0,0.28)]`} />
      <div className={`absolute ${isHero ? 'right-[14%] top-[16%] h-[220px] w-[220px]' : isWide ? 'right-[10%] top-[19%] h-[118px] w-[118px]' : 'right-[14%] top-[18%] h-[112px] w-[112px]'} rounded-full border border-white/20`} />
      <div className={`absolute ${isHero ? 'right-[33%] top-[28%] w-[110px]' : isWide ? 'right-[23%] top-[33%] w-[84px]' : 'right-[25%] top-[33%] w-[76px]'} h-[2px] rotate-[12deg] bg-[linear-gradient(90deg,rgba(255,245,227,0.9),transparent)]`} />
      <div className={`absolute ${isHero ? 'right-[34%] top-[29%] w-[76px]' : isWide ? 'right-[24%] top-[34%] w-[60px]' : 'right-[25%] top-[34%] w-[50px]'} h-[2px] -rotate-[44deg] bg-[linear-gradient(90deg,rgba(255,255,255,0.96),transparent)]`} />
      <div className={`absolute ${isHero ? 'right-[47%] top-[28%] h-3.5 w-3.5' : 'right-[35%] top-[34%] h-3 w-3'} rounded-full bg-[#f3e8d7]`} />
      <div className={`absolute ${isHero ? 'right-[1%] top-[48%] h-[220px] w-[94px]' : isWide ? 'right-[0%] top-[46%] h-[140px] w-[58px]' : 'right-[1%] top-[50%] h-[130px] w-[54px]'} rotate-[18deg] rounded-[999px] border border-white/12 ${strapTone[tone]}`} />
      <div className={`absolute ${isHero ? 'right-[20%] bottom-[-6%] h-[220px] w-[92px]' : isWide ? 'right-[20%] bottom-[-10%] h-[120px] w-[56px]' : 'right-[22%] bottom-[-8%] h-[118px] w-[54px]'} rotate-[18deg] rounded-[999px] border border-white/12 ${strapTone[tone]}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(255,255,255,0.16),transparent_12%),radial-gradient(circle_at_84%_14%,rgba(255,255,255,0.18),transparent_8%)]" />
    </div>
  )
}
