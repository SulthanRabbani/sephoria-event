import Image from 'next/image'

import type { ArticleCard, ChronologieLandingData } from '@/types/chronologie'

type JournalSectionProps = {
  journal: NonNullable<ChronologieLandingData['journal']>
}

export function JournalSection({ journal }: JournalSectionProps) {
  return (
    <section id="journal" className="bg-[#050505] px-6 py-16 text-[var(--color-paper)] md:px-10 md:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-[900px] text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-white/16" />
            <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-[#c0a37a]">{journal.eyebrow}</p>
            <span className="h-px w-12 bg-white/16" />
          </div>
          <h2 className="mx-auto mt-4 max-w-[860px] font-display text-[44px] font-light leading-none tracking-[-0.01em] text-[#f3ede7] md:text-[48px]">
            {journal.title}
          </h2>
          <p className="mt-4 text-[16px] leading-7 text-white/72">{journal.description}</p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[560px_560px] lg:justify-center lg:gap-x-16">
          <ArticleCardBlock article={journal.featured} featured />
          <div className="grid gap-10">
            {journal.secondary.map((article) => (
              <ArticleCardBlock key={article.title} article={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

type ArticleCardBlockProps = {
  article: ArticleCard
  featured?: boolean
}

function ArticleCardBlock({ article, featured = false }: ArticleCardBlockProps) {
  return (
    <article className="text-[#f3ede7]">
      <div className={`relative overflow-hidden rounded-[8px] ${featured ? 'aspect-[560/849]' : 'aspect-[560/265]'}`}>
        {article.image && (
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes={featured ? '(min-width: 1024px) 40vw, 100vw' : '(min-width: 1024px) 38vw, 100vw'}
            className="object-cover object-center"
          />
        )}
      </div>

      <div className="mt-4 flex items-center justify-between gap-4 text-[10px] uppercase tracking-[0.2em] text-white/58">
        <span>{article.category}</span>
        <span>{article.date}</span>
      </div>

      <h3 className={`mt-5 font-display font-light leading-none tracking-[-0.01em] text-[#f3ede7] ${featured ? 'max-w-[520px] text-[38px]' : 'max-w-[500px] text-[38px]'}`}>
        {article.title}
      </h3>
      <p className="mt-4 max-w-[560px] text-[16px] leading-7 text-white/72">{article.excerpt}</p>
      <a href={article.href} className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.02em] text-white transition hover:text-white/72">
        EXPLORE ARTICLE
        <span aria-hidden="true">→</span>
      </a>
    </article>
  )
}
