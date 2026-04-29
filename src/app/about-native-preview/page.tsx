import { ChronologieAboutPage } from '@/components/chronologie/ChronologieAboutPage'
import { chronologieAboutPage } from '@/content/chronologie/about'
import { chronologieHome } from '@/content/chronologie/home'

export default function AboutNativePreviewPage() {
  return <ChronologieAboutPage brand={chronologieHome.brand} footer={chronologieHome.footer} data={chronologieAboutPage} />
}
