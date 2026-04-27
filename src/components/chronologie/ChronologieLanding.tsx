import type { ChronologieLandingData } from '@/types/chronologie'

import { DarkFooter } from './layout/DarkFooter'
import { TransparentHeader } from './layout/TransparentHeader'
import { BoutiqueImageSection } from './sections/BoutiqueImageSection'
import { IntroSection } from './sections/IntroSection'
import { ServiceSection } from './sections/ServiceSection'
import { StorySection } from './sections/StorySection'
import { VisionMissionSection } from './sections/VisionMissionSection'

type ChronologieLandingProps = {
  data: ChronologieLandingData
}

export function ChronologieLanding({ data }: ChronologieLandingProps) {
  return (
    <div className="bg-[var(--color-cream)] text-[var(--color-ink)]">
      <TransparentHeader brand={data.brand} navigation={data.navigation} headerAction={data.headerAction} />
      <main>
        <IntroSection intro={data.intro} />
        <BoutiqueImageSection boutique={data.boutique} />
        <StorySection story={data.story} />
        <VisionMissionSection values={data.values} />
        <ServiceSection service={data.service} />
      </main>
      <DarkFooter brand={data.brand} footer={data.footer} />
    </div>
  )
}
