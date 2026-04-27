import type { ChronologieLandingData } from '@/types/chronologie'

import { DarkFooter } from './layout/DarkFooter'
import { TransparentHeader } from './layout/TransparentHeader'
import { ContactCtaSection } from './sections/ContactCtaSection'
import { FeaturedCollectionsSection } from './sections/FeaturedCollectionsSection'
import { HeroSection } from './sections/HeroSection'
import { JournalSection } from './sections/JournalSection'
import { ManifestoSection } from './sections/ManifestoSection'
import { ShowroomSection } from './sections/ShowroomSection'

type ChronologieHomePageProps = {
  data: ChronologieLandingData
}

export function ChronologieHomePage({ data }: ChronologieHomePageProps) {
  if (!data.hero || !data.collection || !data.craft || !data.invitation || !data.journal || !data.contactCta) {
    throw new Error('Chronologie homepage data is incomplete.')
  }

  return (
    <div className="bg-[#050505] text-[var(--color-paper)]">
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
