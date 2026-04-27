import Image from 'next/image'

import type { ChronologieLandingData, WatchCard } from '@/types/chronologie'

import { CTAButton } from '../primitives/CTAButton'

type FeaturedCollectionsSectionProps = {
  collection: NonNullable<ChronologieLandingData['collection']>
}

const gridClasses = [
  'lg:col-span-8 lg:row-span-2',
  'lg:col-span-4',
  'lg:col-span-4',
  'lg:col-span-4',
  'lg:col-span-4',
  'lg:col-span-4',
]

export function FeaturedCollectionsSection({ collection }: FeaturedCollectionsSectionProps) {
  return (
    <section id="collection" className="bg-[#050505] px-6 py-16 text-[var(--color-paper)] md:px-10 md:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-[840px] text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-white/16" />
            <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-[#c0a37a]">{collection.eyebrow}</p>
            <span className="h-px w-12 bg-white/16" />
          </div>
          <h2 className="mx-auto mt-4 max-w-[820px] font-display text-[44px] font-light leading-none tracking-[-0.01em] text-[#f3ede7] md:text-[48px]">
            {collection.title}
          </h2>
          <p className="mt-4 whitespace-pre-line text-[16px] leading-7 text-white/72">{collection.description}</p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:auto-rows-[210px]">
          {collection.items.map((item, index) => (
            <WatchCardArticle key={item.name} item={item} className={gridClasses[index]} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CTAButton action={collection.action} variant="dark" />
        </div>
      </div>
    </section>
  )
}

type WatchCardArticleProps = {
  item: WatchCard
  className: string
}

function WatchCardArticle({ item, className }: WatchCardArticleProps) {
  const isHero = item.size === 'hero'
  const minHeight = isHero ? 'min-h-[458px]' : 'min-h-[210px]'
  const titleSize = isHero ? 'text-[48px] leading-none' : 'text-[38px] leading-none'
  const titleMax = isHero ? 'max-w-[280px]' : 'max-w-[220px]'

  return (
    <article className={`group relative overflow-hidden rounded-[10px] bg-[#13100e] ${className} ${minHeight}`}>
      {item.image && (
        <Image
          src={item.image}
          alt={item.name.replace(/\n/g, ' ')}
          fill
          sizes={isHero ? '(min-width: 1024px) 60vw, 100vw' : '(min-width: 1024px) 30vw, 100vw'}
          className="object-cover object-center"
        />
      )}
      <div className={`absolute inset-0 ${isHero ? 'bg-[linear-gradient(90deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.22)_44%,rgba(0,0,0,0.08)_100%)]' : 'bg-[linear-gradient(90deg,rgba(0,0,0,0.62)_0%,rgba(0,0,0,0.28)_54%,rgba(0,0,0,0.08)_100%)]'}`} />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06),rgba(0,0,0,0.34))]" />

      <div className={`relative z-10 flex h-full flex-col justify-end ${isHero ? 'p-8 md:p-8' : 'p-8'}`}>
        <div className={titleMax}>
          <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-white/88">{item.brand}</p>
          <h3 className={`mt-5 whitespace-pre-line font-display font-light tracking-[-0.01em] text-[#f5efe9] ${titleSize}`}>{item.name}</h3>
          {item.summary ? <p className="mt-4 text-[16px] leading-7 text-white/78">{item.summary}</p> : null}
          <span className="mt-8 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.02em] text-white">
            {item.cta}
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </article>
  )
}
