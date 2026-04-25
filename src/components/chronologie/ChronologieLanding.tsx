import type { ChronologieLandingData } from '@/types/chronologie'

import { DarkFooter } from './layout/DarkFooter'
import { TransparentHeader } from './layout/TransparentHeader'
import { ContactCtaSection } from './sections/ContactCtaSection'
import { FeaturedCollectionsSection } from './sections/FeaturedCollectionsSection'
import { HeroSection } from './sections/HeroSection'
import { JournalSection } from './sections/JournalSection'
import { ManifestoSection } from './sections/ManifestoSection'
import { ShowroomSection } from './sections/ShowroomSection'

type ChronologieLandingProps = {
  data: ChronologieLandingData
}

export function ChronologieLanding({ data }: ChronologieLandingProps) {
  return (
    <div className="bg-[var(--color-cream)] text-[var(--color-ink)]">
      <TransparentHeader brand={data.brand} navigation={data.navigation} headerAction={data.headerAction} />
      <main>
        <HeroSection hero={data.hero} />
        <FeaturedCollectionsSection collection={data.collection} />
        <ManifestoSection craft={data.craft} />
        <ShowroomSection invitation={data.invitation} />
        <JournalSection journal={data.journal} />
        <ContactCtaSection contactCta={data.contactCta} />
      </main>
      <DarkFooter brand={data.brand} footer={data.footer} />
    </div>
  )
}
