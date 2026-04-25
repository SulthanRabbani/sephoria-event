import type { ArticleCard, ArticleCardTone, ChronologieLandingData } from '@/types/chronologie'

import { SectionHeading } from '../primitives/SectionHeading'
import { SectionShell } from '../primitives/SectionShell'

type JournalSectionProps = {
  journal: ChronologieLandingData['journal']
}

const toneMap: Record<ArticleCardTone, string> = {
  vintage: 'bg-[linear-gradient(140deg,#3a302a_0%,#846446_36%,#15110f_100%)]',
  craft: 'bg-[linear-gradient(145deg,#7a5337_0%,#c69058_36%,#f2dbbb_100%)]',
  modern: 'bg-[linear-gradient(145deg,#24282d_0%,#7c848d_34%,#d9dadd_100%)]',
}

export function JournalSection({ journal }: JournalSectionProps) {
  return (
    <SectionShell id="journal" tone="cream" className="py-20 md:py-28">
      <SectionHeading
        eyebrow={journal.eyebrow}
        title={journal.title}
        description={journal.description}
        align="center"
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.16fr_0.84fr]">
        <article className="grid overflow-hidden rounded-[30px] border border-black/6 bg-[#fbf7f0] md:grid-cols-[1.12fr_0.88fr]">
          <ArticleVisual tone={journal.featured.tone} className="min-h-[340px] md:min-h-[440px]" />
          <div className="flex flex-col justify-center p-8 md:p-10">
            <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
              <span>{journal.featured.category}</span>
              <span className="h-1 w-1 rounded-full bg-[var(--color-muted)]" />
              <span>{journal.featured.date}</span>
            </div>
            <h3 className="mt-5 font-display text-[38px] leading-[0.96] text-[var(--color-ink)] md:text-[46px]">
              {journal.featured.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[var(--color-copy)]">{journal.featured.excerpt}</p>
            <a href={journal.featured.href} className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-[var(--color-ink)] transition hover:text-[var(--color-copy)]">
              EXPLORE ARTICLE
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>

        <div className="grid gap-6">
          {journal.secondary.map((article) => (
            <article key={article.title} className="overflow-hidden rounded-[30px] border border-black/6 bg-[#fbf7f0]">
              <ArticleVisual tone={article.tone} className="min-h-[240px]" compact />
              <div className="p-8">
                <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                  <span>{article.category}</span>
                  <span className="h-1 w-1 rounded-full bg-[var(--color-muted)]" />
                  <span>{article.date}</span>
                </div>
                <h3 className="mt-4 font-display text-[32px] leading-[0.98] text-[var(--color-ink)]">{article.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-copy)]">{article.excerpt}</p>
                <a href={article.href} className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-[var(--color-ink)] transition hover:text-[var(--color-copy)]">
                  EXPLORE ARTICLE
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}

type ArticleVisualProps = {
  tone: ArticleCard['tone']
  className?: string
  compact?: boolean
}

function ArticleVisual({ tone, className = '', compact = false }: ArticleVisualProps) {
  return (
    <div className={`relative overflow-hidden ${toneMap[tone]} ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(255,255,255,0.22),transparent_16%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.22))]" />

      {tone === 'vintage' && (
        <>
          <div className="absolute left-[12%] top-[20%] h-[220px] w-[220px] rounded-full border border-white/14 bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.2),rgba(18,18,19,0.22)_38%,rgba(5,6,7,0.92)_72%)] shadow-[0_20px_60px_rgba(0,0,0,0.28)]" />
          <div className="absolute left-[19%] top-[28%] h-[140px] w-[140px] rounded-full border border-[rgba(240,210,170,0.34)]" />
          <div className="absolute left-[17%] bottom-[-8%] h-[200px] w-[90px] rotate-[18deg] rounded-[999px] border border-white/10 bg-[linear-gradient(180deg,rgba(74,54,41,0.95),rgba(27,20,17,0.98))]" />
        </>
      )}

      {tone === 'craft' && (
        <>
          <div className="absolute left-[14%] top-[26%] h-[140px] w-[140px] rounded-full border border-[rgba(255,255,255,0.4)] bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.78),rgba(223,206,188,0.72)_34%,rgba(130,113,95,0.92)_72%)]" />
          <div className="absolute left-[22%] top-[34%] h-[76px] w-[76px] rounded-full border border-[rgba(255,255,255,0.45)]" />
          <div className="absolute right-[12%] top-[16%] h-[180px] w-[120px] rotate-[18deg] rounded-[999px] bg-[linear-gradient(180deg,rgba(120,83,54,0.96),rgba(47,31,21,0.96))]" />
          <div className="absolute right-[22%] bottom-[18%] h-[4px] w-[110px] rotate-[-24deg] rounded-full bg-[linear-gradient(90deg,rgba(37,26,19,0.9),rgba(37,26,19,0))]" />
        </>
      )}

      {tone === 'modern' && (
        <>
          <div className="absolute left-[14%] top-[20%] h-[170px] w-[170px] rounded-[32px] border border-white/18 bg-[linear-gradient(145deg,rgba(169,177,185,0.9),rgba(57,65,73,0.96))] shadow-[0_18px_50px_rgba(0,0,0,0.24)]" />
          <div className="absolute left-[22%] top-[28%] h-[110px] w-[110px] rounded-[24px] border border-[rgba(255,255,255,0.22)] bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.2),rgba(28,35,43,0.32)_34%,rgba(8,11,14,0.96)_74%)]" />
          <div className="absolute left-[30%] top-[36%] h-[2px] w-[56px] rotate-[16deg] bg-[linear-gradient(90deg,rgba(255,245,227,0.88),transparent)]" />
          <div className="absolute left-[31%] top-[37%] h-[2px] w-[36px] -rotate-[42deg] bg-[linear-gradient(90deg,rgba(255,255,255,0.92),transparent)]" />
        </>
      )}

      {!compact && <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(8,8,8,0.26))]" />}
    </div>
  )
}
